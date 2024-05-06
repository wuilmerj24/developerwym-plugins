import { Utils, View, Screen } from '@nativescript/core';
import { collections } from '@nativescript/core/utils/ios';
import { Dia } from '../interfaces/dias.interface';

export class ListaiOS extends View {
  private _cv: UICollectionView;

  constructor(private txtColorMonth: string, private txtColorMonthSize: number, private txtColorDayName: string, private txtColorDayNameSize: number, private txtColorDayNum: string, private txtColorDayNumSize: number, private currentDateBorderColor: string, private bgColorActive: string, private bgColorDeactive: string, private files: Array<Dia>) {
    super();
  }

  createNativeView(): Object {
    const layout = UICollectionViewFlowLayout.new();
    layout.invalidateLayout();
    layout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
    let sizecv = CGRectMake(0, 0, Screen.mainScreen.widthDIPs, (Screen.mainScreen.heightDIPs * 20) / 100);
    this._cv = UICollectionView.alloc().initWithFrameCollectionViewLayout(sizecv, layout);
    this._cv.registerClassForCellWithReuseIdentifier(CollectionViewCell.class(), Math.random().toString());
    this._cv.autoresizesSubviews = false;
    this._cv.autoresizingMask = UIViewAutoresizing.None;
    const adaptador = new CustomCollectionViewDataSourceDelegate(this.files.filter((item) => item.isSelected == true));
    const delegate = new CustomCollectionViewDelegate(
      this.files.filter((item) => item.isSelected == true),
      this
    );
    this._cv.dataSource = adaptador;
    this._cv.delegate = delegate;
    this._cv.reloadData();
    return this._cv;
  }
}

@NativeClass()
class CollectionViewCell extends UICollectionViewCell {
  owner: WeakRef<ListaiOS>;
  currentIndex: number;

  get view(): ListaiOS {
    return this.owner ? this.owner.get() : null;
  }
}

@NativeClass()
export class CustomCollectionViewDataSourceDelegate extends NSObject implements UICollectionViewDataSource {
  static ObjCProtocols = [UICollectionViewDataSource];
  constructor(private items: Array<Dia>) {
    super();
  }

  collectionViewCanMoveItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean {
    return false;
  }

  collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): CollectionViewCell {
    const cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath('MyCell', indexPath) as CollectionViewCell;

    return cell;
  }

  collectionViewIndexPathForIndexTitleAtIndex?(collectionView: UICollectionView, title: string, index: number): NSIndexPath {
    return NSIndexPath.indexPathForItemInSection(index, 0);
  }

  collectionViewMoveItemAtIndexPathToIndexPath?(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void {}

  collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
    return section;
  }

  numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
    return 1;
  }
}

@NativeClass()
export class CustomCollectionViewDelegate extends NSObject implements UICollectionViewDelegateFlowLayout {
  static ObjCProtocols = [UICollectionViewDelegate];
  constructor(private files: Array<Dia>, private owner: ListaiOS) {
    super();
  }

  collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
    // Customize cell appearance if needed
    // let targetIndexPath = IndexPath(item: tuPosicionDeseada, section: 0)
    // collectionView.scrollToItem(at: targetIndexPath, at: .centeredHorizontally, animated: true)
  }

  collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {}

  scrollViewDidScroll(scrollView: UIScrollView): void {}

  collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets {
    const insets: UIEdgeInsets = new UIEdgeInsets();
    insets.left = 1;
    insets.right = 1;
    insets.bottom = 1;
    insets.top = 1;
    return insets;
  }
}
