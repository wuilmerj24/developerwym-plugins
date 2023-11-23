import { Color, Frame, Image, ImageAsset, ImageSource, Label, Screen, Trace, Utils, View, getCurrentPage } from '@nativescript/core';
import { MediaStoreData, MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { CLog } from '../common';
import { layout } from '@nativescript/core/utils';
import { WeakRef } from '@nativescript/core/debugger/dom-node';
import { GalleryView } from '../index.ios';
import { OrientationView } from '../enums/orientation.enum';

export class CollectionViewGaleria extends View {
  private _collectionView: UICollectionView;
  public layoutUICollection: UICollectionViewFlowLayout;
  public dataSource: CustomCollectionViewDataSourceDelegate;
  constructor(private files: Array<MediaStoreData>, private orientacion: OrientationView) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  createNativeView(): Object {
    try {
      this.layoutUICollection = UICollectionViewFlowLayout.new();
      this.layoutUICollection.itemSize = CGSizeMake(70, 70);
      this.layoutUICollection.minimumLineSpacing = 2;
      this.layoutUICollection.minimumInteritemSpacing = 2;
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

      // this.dataSource = new CustomCollectionViewDataSourceDelegate(this.files.filter((item) => item.isSelected == true)[0].files,this.orientacion);
      // const delegate = new CustomCollectionViewDelegate(this.files.filter((item) => item.isSelected == true)[0].files);
      // this._collectionView.dataSource = this.dataSource;
      // this._collectionView.delegate = delegate;
      // this._collectionView.reloadData();
      this.nativeView = this._collectionView;
      this._collectionView.autoresizesSubviews = true;
      this._collectionView.autoresizingMask = UIViewAutoresizing.FlexibleHeight;
      return this._collectionView;
    } catch (error) {
      CLog('err ', error);
    }
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

  constructor(private items: Array<MediaStoreDataFiles>, private orientacion: OrientationView) {
    super();
  }

  numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
    return this.items.length;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('MyCell', indexPath);

    try {
      const url: NSURL = NSURL.URLWithString(this.items[indexPath.row].file);
      const imageView: SDAnimatedImageView = SDAnimatedImageView.alloc().initWithFrame(CGRectMake(0, 0, 70, 70));
      imageView.contentMode = UIViewContentMode.ScaleToFill;
      imageView.sd_setImageWithURL(url);
      cell.contentView.addSubview(imageView);

      const radioView = UIImageView.alloc().initWithFrame(CGRectMake(3, 3, 20, 20));
      radioView.image = UIImage.systemImageNamed('checkmark');
      radioView.tintColor = UIColor.clearColor;
      cell.layer.borderWidth = 1.0;
      cell.layer.borderColor = new Color('black').ios.CGColor;
      cell.layer.cornerRadius = 5.0;
      cell.contentView.addSubview(radioView);
    } catch (error) {
      CLog('Error cell ', error);
    }

    return cell;
  }

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    if (this.orientacion == OrientationView.H) {
      return 1;
    } else if (this.orientacion == OrientationView.V) {
      return 6;
    }
  }
}

@NativeClass()
export class CustomCollectionViewDelegate extends NSObject implements UICollectionViewDelegateFlowLayout {
  constructor(private files: Array<MediaStoreDataFiles>, private owner: GalleryView) {
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

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    // Handle item selection
    try {
      for (let i = 0; i < this.files.length; i++) {
        this.files[i].isSelected = false;
      }
      this.files[indexPath.row].isSelected = true;
      const selectedItem = collectionView.cellForItemAtIndexPath(indexPath);
      const imageView = selectedItem.contentView.subviews[1] as UIImageView;
      if (this.files[indexPath.row].isSelected == true) {
        imageView.tintColor = UIColor.greenColor;
      } else {
        imageView.tintColor = UIColor.clearColor;
      }
      this.owner.sendEvent(
        GalleryView.clickEvent,
        this.files.filter((item) => item.isSelected == true)
      );
      // CLog('click ', indexPath);
    } catch (error) {
      CLog('Error ', error);
    }
  }

  scrollViewDidScroll(scrollView: UIScrollView): void {
    // CLog('scroll', scrollView.dragging || scrollView.decelerating);
    try {
      this.owner.sendEvent(
        GalleryView.scrollEvent,
        this.files.filter((item) => item.isSelected == true)
      );
    } catch (error) {
      CLog('error ', error);
    }
  }
}
