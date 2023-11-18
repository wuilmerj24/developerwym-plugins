import { AbsoluteLayout, Button, Color, EventData, GridLayout, GridUnitType, ItemEventData, ItemSpec, ListView, Screen, TextView, Utils } from '@nativescript/core';
import { MediaStoreData } from '../interfaces/mediastore.interface';

export class ModalAlbunNames extends GridLayout {
  private list: ListView;
  private item_selecc: any;
  constructor(private files: Array<MediaStoreData>) {
    super();
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.backgroundColor = new Color('green');
    this.width = Screen.mainScreen.widthDIPs;
    this.height = Screen.mainScreen.heightDIPs;
  }

  onLoaded(): void {
    super.onLoaded();
    this.createActionbar();
    this.createLista();
  }

  private createActionbar() {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    grid.borderBottomWidth = 0.3;
    grid.borderBottomColor = new Color('black');
    grid.height = 50;
    const btn: Button = new Button();
    btn.text = 'X';
    btn.fontSize = 20;
    btn.style.background = 'transparent';
    btn.androidElevation = 0;
    btn.col = 0;
    btn.style.fontWeight = 'bold';
    btn.width = 'auto';
    btn.height = 'auto';
    btn.horizontalAlignment = 'right';
    btn.verticalAlignment = 'middle';
    btn.on('tap', (args: EventData) => {
      this.closeModal(this.item_selecc);
    });
    grid.addChild(btn);

    const txt: TextView = new TextView();
    txt.col = 1;
    txt.width = Screen.mainScreen.widthDIPs;
    txt.verticalAlignment = 'middle';
    txt.horizontalAlignment = 'left';
    txt.hint = 'Search';
    if (this.ios) {
      txt.color = new Color('black');
    }
    txt.borderRadius = 10;
    txt.borderBottomColor = new Color('transparent');
    txt.backgroundColor = new Color('#ffffff');
    txt.addEventListener('textChange', (args: EventData) => {
      const textView: TextView = args.object as TextView;
      const nombreABuscar: string = textView.text;
      this.list.items = this.buscarAlbuns(nombreABuscar);
    });

    grid.addChild(txt);
    grid.row = 0;

    this.addChild(grid);
  }

  private createLista() {
    const grid: GridLayout = new GridLayout();
    grid.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    grid.addColumn(new ItemSpec(1, GridUnitType.STAR));
    this.list = new ListView();
    // list.items=Codigos;
    this.list.items = this.files;
    this.list.row = 1;
    this.list.rowHeight = 50;
    this.list.itemTemplate = `
            <GridLayout rows="*" columns="auto,auto,auto">
                <Image src="{{icon}}"  stretch="fill" width="50" height="50" decodeHeight="70" marginLeft="5" decodeWidth="70" row="0" col="0" borderRadius="5" horizontalAlignment="left"/>
                <Label text="{{albunName}}" row="0" col="1" horizontalAlignment="left" marginLeft="10" fontWeight="bold"/>
            </GridLayout>
        `;

    this.list.on(ListView.itemTapEvent, (args: ItemEventData) => {
      this.item_selecc = this.files[args.index];
      this.closeModal({ index: args.index, item: this.item_selecc });
    });
    this.addChild(this.list);
  }

  private buscarAlbuns(texto) {
    return this.files.filter((item) => item.albunName.toLowerCase().includes(texto.toLowerCase()));
  }
}
