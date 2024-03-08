import { View, Screen, Color } from '@nativescript/core';
import { OrientationView } from '../enums/orientation.enum';
import { CLog } from '../common';
import { GaleriaViewAlbumns, GaleriaViewAlbumnsData } from '../class/data.imagenes.class';
import { GalleryView } from '../index.ios';

export class ListaViewForiOS extends View {
  private _collectionView: UICollectionView;
  public layoutUICollection: UICollectionViewFlowLayout;
  public dataSource: CustomCollectionViewDataSourceDelegate;
  constructor(
    private files: Array<GaleriaViewAlbumns>,
    private orientacion: OrientationView,
  ) {
    super();
  }

  createNativeView(): Object {
    try {
      this.layoutUICollection = UICollectionViewFlowLayout.new();
      this.layoutUICollection.itemSize = CGSizeMake(Screen.mainScreen.widthDIPs / 5 - 3, Screen.mainScreen.widthDIPs / 5 - 3);
      this.layoutUICollection.minimumLineSpacing = 1;
      this.layoutUICollection.minimumInteritemSpacing = 1;
      this.layoutUICollection.invalidateLayout();
      let size = CGRectMake(0, 0, 0, 0);
      if (this.orientacion == OrientationView.H) {
        CGRectMake(0, 0, Screen.mainScreen.widthDIPs, 200);
        this.layoutUICollection.scrollDirection = UICollectionViewScrollDirection.Horizontal;
      } else if (this.orientacion == OrientationView.V) {
        size = CGRectZero;
        this.layoutUICollection.scrollDirection = UICollectionViewScrollDirection.Vertical;
      }

      this._collectionView = UICollectionView.alloc().initWithFrameCollectionViewLayout(size, this.layoutUICollection);
      this._collectionView.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'MyCell');
      this._collectionView.userInteractionEnabled = true;
      this._collectionView.autoresizesSubviews = false;
      this._collectionView.autoresizingMask = UIViewAutoresizing.None;
      this.nativeView = this._collectionView;

      return this._collectionView;
    } catch (error) {
      CLog('err ', error);
    }
  }

  get nativeView(): UICollectionView {
    return this._collectionView;
  }
  set nativeView(value: UICollectionView) {
    this.setNativeView(value);
  }

  disposeNativeView(): void {
    this._collectionView = null;
    this.nativeView = null;
    this.files = null;
    super.disposeNativeView();
  }
}

@NativeClass()
export class CustomCollectionViewDataSourceDelegate extends NSObject implements UICollectionViewDataSource {
  static ObjCProtocols = [UICollectionViewDataSource];
  constructor(
    private items: Array<GaleriaViewAlbumnsData>,
    private orientacion: OrientationView,
  ) {
    super();
  }
  numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
    return 1;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('MyCell', indexPath);

    try {
      // const url: NSURL = NSURL.URLWithString(this.items[indexPath.row].file);
      const url: NSURL = NSURL.fileURLWithPath(this.items[indexPath.row].file);
      const imageView: SDAnimatedImageView = SDAnimatedImageView.alloc().initWithFrame(CGRectMake(0, 0, 75, 75));
      imageView.contentMode = UIViewContentMode.ScaleToFill;
      imageView.sd_setImageWithURL(url);
      cell.contentView.addSubview(imageView);

      const radioView = UIImageView.alloc().initWithFrame(CGRectMake(3, 3, 20, 20));
      radioView.image = UIImage.systemImageNamed('checkmark.circle.fill');
      radioView.tintColor = UIColor.clearColor;
      cell.contentView.addSubview(radioView);
      const lbl: UILabel = UILabel.new();
      (lbl.text = `${indexPath.row + 1}`), lbl.sizeToFit();
      lbl.textAlignment = NSTextAlignment.Center;
      lbl.textColor = new Color('black').ios;
      // cell.contentView.addSubview(lbl);
    } catch (error) {
      CLog('Error cell ', error);
    }

    return cell;
  }

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    if (this.orientacion == OrientationView.H) {
      return 1;
    } else if (this.orientacion == OrientationView.V) {
      return this.items.length || 0;
    }
  }
}

@NativeClass()
export class CustomCollectionViewDelegate extends NSObject implements UICollectionViewDelegateFlowLayout {
  static ObjCProtocols = [UICollectionViewDelegate];
  constructor(
    private files: Array<GaleriaViewAlbumnsData>,
    private owner: GalleryView,
  ) {
    super();
  }

  collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
    // Customize cell appearance if needed
  }

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    try {
      const index: number = indexPath.row;
      this.files[index].isSelected = !this.files[index].isSelected;
      const current_select: number = this.files.filter((item) => item.isSelected == true).length;
      const selectedItem = collectionView.cellForItemAtIndexPath(indexPath);
      const imageView = selectedItem.contentView.subviews[1] as UIImageView;
      if (current_select <= this.owner.selectMax) {
        if (this.files[index].isSelected == true) {
          imageView.tintColor = UIColor.greenColor;
        } else {
          imageView.tintColor = UIColor.clearColor;
        }
      } else {
        imageView.tintColor = UIColor.clearColor;
        this.files[index].isSelected = false;
      }
      this.owner.lblCountSelect.text = `${this.files.filter((item) => item.isSelected).length}/${this.owner.selectMax}`;
      this.owner.sendEvent(
        GalleryView.clickEvent,
        this.files.filter((item) => item.isSelected == true),
      );
    } catch (error) {
      CLog('Error click', error);
    }
  }

  scrollViewDidScroll(scrollView: UIScrollView): void {
    try {
      this.owner.sendEvent(
        GalleryView.scrollEvent,
        this.files.filter((item) => item.isSelected == true),
      );
    } catch (error) {
      CLog('error ', error);
    }
  }

  collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets {
    const insets: UIEdgeInsets = new UIEdgeInsets();
    insets.left = 1;
    insets.right = 1;
    insets.bottom = 1;
    insets.top = 1;
    return insets;
  }
}
