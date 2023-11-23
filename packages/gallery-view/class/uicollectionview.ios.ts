import { Color, Frame, Image, ImageAsset, ImageSource, Label, Utils, View, getCurrentPage } from '@nativescript/core';
import { MediaStoreData, MediaStoreDataFiles } from '../interfaces/mediastore.interface';
import { CLog } from '../common';
import { layout } from '@nativescript/core/utils';

export class CollectionViewGaleria extends View {
  private _collectionView: UICollectionView;

  constructor(private files: Array<MediaStoreData>) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  createNativeView(): Object {
    try {
      const layout: UICollectionViewFlowLayout = UICollectionViewFlowLayout.new();

      // layout.scrollDirection=UICollectionViewScrollDirection.Horizontal;
      layout.scrollDirection = UICollectionViewScrollDirection.Vertical;
      layout.itemSize = CGSizeMake(70, 70);
      layout.minimumLineSpacing = 1;
      layout.minimumInteritemSpacing = 1;
      layout.invalidateLayout();

      this._collectionView = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, layout);
      this._collectionView.registerClassForCellWithReuseIdentifier(UICollectionViewCell.class(), 'MyCell');

      const dataSource = new CustomCollectionViewDataSourceDelegate(this.files.filter((item) => item.isSelected == true)[0].files);

      const delegate = new CustomCollectionViewDelegate(this.files.filter((item) => item.isSelected == true)[0].files);
      this._collectionView.dataSource = dataSource;
      this._collectionView.delegate = delegate;
      this._collectionView.reloadData();
      this.nativeView = this._collectionView;
      return this._collectionView;
    } catch (error) {
      CLog('err ', error);
    }
  }
}

@NativeClass()
class CustomCollectionViewDataSourceDelegate extends NSObject implements UICollectionViewDataSource {
  static ObjCProtocols = [UICollectionViewDataSource];

  constructor(private items: Array<MediaStoreDataFiles>) {
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

      const radioView = UIImageView.alloc().initWithFrame(CGRectMake(5, 5, 20, 20));
      radioView.image = UIImage.systemImageNamed('checkmark');
      radioView.tintColor = UIColor.clearColor;
      cell.contentView.addSubview(radioView);
    } catch (error) {
      CLog('Error cell ', error);
    }

    return cell;
  }

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    return 6;
  }
}

@NativeClass()
class CustomCollectionViewDelegate extends NSObject implements UICollectionViewDelegateFlowLayout {
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

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
    // Handle item selection
    try {
      const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('MyCell', indexPath);
      this.files[indexPath.row].isSelected = !this.files[indexPath.row].isSelected;
      const selectedItem = collectionView.cellForItemAtIndexPath(indexPath);
      const imageView = selectedItem.contentView.subviews[1] as UIImageView;
      if (this.files[indexPath.row].isSelected == true) {
        imageView.tintColor = UIColor.greenColor;
      } else {
        imageView.tintColor = UIColor.clearColor;
      }

      CLog('click ', indexPath);
    } catch (error) {
      CLog('Error ', error);
    }
  }

  scrollViewDidScroll(scrollView: UIScrollView): void {
    CLog('scroll', scrollView.dragging || scrollView.decelerating);
  }
}
