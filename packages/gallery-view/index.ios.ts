import { GalleryViewCommon, GetSetProperty } from './common';
import { ELenguajesSoportados } from './enums/language.enum';
import { OrientationView } from './enums/orientation.enum';
import { MediaStoreData } from './interfaces/mediastore.interface';

export class GalleryView extends GalleryViewCommon {
  private cv: UICollectionView;
  private sv: UIStackView;
  private spinner: UIPickerView;
  private dataFiles: Array<MediaStoreData>;
  private header: UIToolbar;
  private footer: UIToolbar;
  private txtField: UILabel;

  @GetSetProperty()
  public language: ELenguajesSoportados;
  @GetSetProperty()
  public showHeader: boolean;
  @GetSetProperty()
  public headerBgColor: string;
  @GetSetProperty()
  public arrowIconColor: string;
  @GetSetProperty()
  public selectMax: number;
  @GetSetProperty()
  public showFooter: boolean;
  @GetSetProperty()
  public footerBgColor: string;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  public textColor: string;
  @GetSetProperty()
  public orientation: OrientationView;
  constructor() {
    super();
  }

  createNativeView(): Object {
    this.sv = UIStackView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
    this.sv.backgroundColor = UIColor.redColor;

    return this.sv;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  onLoaded(): void {
    super.onLoaded();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }

  private checkPermisos(): any {}

  private solicitarPermiso(): Promise<any> {
    q;
  }
}
