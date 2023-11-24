import { Label, GridLayout, ItemSpec, GridUnitType, Color, Button, EventData, ContentView, Screen, Utils, Application } from '@nativescript/core';
import { MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { CLog } from '../common';
import { layout } from '@nativescript/core/utils';

let position_global: number = 1;
let lbl: Label;

export class ModalViewPresentarImagen extends GridLayout {
  constructor(private files: Array<MediaStoreDataFiles>) {
    super();
    this.configureActionBar();
    this.configureData();
  }

  configureActionBar() {
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    const actionBar: GridLayout = new GridLayout();
    actionBar.addColumn(new ItemSpec(1, GridUnitType.AUTO));
    actionBar.addColumn(new ItemSpec(1, GridUnitType.STAR));
    actionBar.row = 0;
    actionBar.backgroundColor = new Color('black');
    const btnBack: Button = new Button();
    btnBack.col = 0;
    btnBack.text = 'X';
    btnBack.backgroundColor = 'transparent';
    btnBack.androidElevation = -1;
    btnBack.boxShadow = 'transparent';
    btnBack.color = new Color('#FFFFFF');
    btnBack.on('tap', (args: EventData) => {
      this.closeModal();
    });
    actionBar.addChild(btnBack);

    lbl = new Label();
    lbl.text = `${position_global}/${this.files.length}`;
    lbl.col = 1;
    lbl.color = new Color('#FFFFFF');
    lbl.fontSize = 16;
    lbl.style.fontWeight = 'bold';
    lbl.textWrap = true;
    lbl.verticalAlignment = 'middle';
    lbl.horizontalAlignment = 'center';
    actionBar.addChild(lbl);

    this.addChild(actionBar);
  }

  configureData() {
    const uic: UICollectionViewCarrouserIos = new UICollectionViewCarrouserIos(this.files);
    uic.row = 1;
    uic.width = Screen.mainScreen.widthDIPs;
    uic.height = Screen.mainScreen.heightDIPs;
    uic.backgroundColor = new Color('black');
    uic.verticalAlignment = 'middle';
    uic.horizontalAlignment = 'center';
    this.addChild(uic);
  }
}

class UICollectionViewCarrouserIos extends ContentView {
  private layoutUICollection: UICollectionViewFlowLayout;
  private _collectionView: UICollectionView;
  constructor(private files: Array<MediaStoreDataFiles>) {
    super();
  }

  createNativeView(): Object {
    this.layoutUICollection = UICollectionViewFlowLayout.new();
    this.layoutUICollection.itemSize = CGSizeMake(Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs / 2);
    this.layoutUICollection.minimumLineSpacing = 2;
    this.layoutUICollection.minimumInteritemSpacing = 2;
    this.layoutUICollection.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    this.layoutUICollection.invalidateLayout();
    this._collectionView = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, this.layoutUICollection);
    this._collectionView.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'MyCellB');
    const dataSource: CustomCollectionViewDataSourceDelegateB = new CustomCollectionViewDataSourceDelegateB(this.files);
    const delegate = new CustomCollectionViewDelegateB(this.files.filter((item) => item.isSelected == true));
    this._collectionView.dataSource = dataSource;
    this._collectionView.delegate = delegate;
    this._collectionView.reloadData();
    return this._collectionView;
  }

  get nativeView(): UICollectionView {
    return this._collectionView;
  }
}

@NativeClass()
export class CustomCollectionViewDataSourceDelegateB extends NSObject implements UICollectionViewDataSource {
  static ObjCProtocols = [UICollectionViewDataSource];

  constructor(private items: Array<MediaStoreDataFiles>) {
    super();
  }

  numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
    CLog(this.items.length);
    return this.items.length;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('MyCellB', indexPath);

    try {
      const url: NSURL = NSURL.URLWithString(this.items[indexPath.row].file);
      const imageView: SDAnimatedImageView = SDAnimatedImageView.alloc().initWithFrame(CGRectMake(0, 0, Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs / 2));
      imageView.contentMode = UIViewContentMode.ScaleToFill;
      imageView.sd_setImageWithURL(url);
      cell.contentView.addSubview(imageView);
    } catch (error) {
      CLog('Error cell ', error);
    }

    return cell;
  }

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    return 1;
  }
}

@NativeClass()
export class CustomCollectionViewDelegateB extends NSObject implements UICollectionViewDelegateFlowLayout {
  constructor(private files: Array<MediaStoreDataFiles>) {
    super();
  }
  static ObjCProtocols = [UICollectionViewDelegate];
  collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
    const screenWidth = Utils.layout.toDevicePixels(layout.getDisplayDensity() * layout.getMeasureSpecSize(0));
    const spacing = (collectionView.collectionViewLayout as any).minimumInteritemSpacing;

    const availableWidth = screenWidth - spacing * (5 - 1);
    const itemWidth = availableWidth / 5;

    return CGSizeMake(itemWidth, itemWidth);
  }

  collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
    // Customize cell appearance if needed
  }

  scrollViewDidScroll(scrollView: UIScrollView): void {
    CLog('scroll', scrollView.dragging || scrollView.decelerating);
  }
}
