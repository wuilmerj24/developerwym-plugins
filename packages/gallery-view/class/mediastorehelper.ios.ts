import { Utils } from '@nativescript/core';
import { CLog } from '../common';
import { TipoFile } from '../enums/tipofile.enum';
import { GaleriaViewAlbumns, GaleriaViewAlbumnsData } from './data.imagenes.class';

@NativeClass()
export class MediaStoreHelperiOS {
  fetchOptions = PHFetchOptions.alloc().init();
  constructor() {}

  // public async getImagenes():Promise<Array<GaleriaViewAlbumns>>{
  //     return new Promise(async(rs,rj)=>{
  //         try {
  //             const sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending("creationDate", true));
  //             this.fetchOptions.sortDescriptors=sortDescriptors;
  //             const assetCollections=PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(PHAssetCollectionType.Album,PHAssetCollectionSubtype.AlbumRegular,null);
  //             const file:Array<GaleriaViewAlbumns>=new Array();

  //             for(let i:number=0;i<assetCollections.count;i++){
  //                 const collection:PHAssetCollection=assetCollections.objectAtIndex(i);
  //                 const assets=PHAsset.fetchAssetsInAssetCollectionOptions(collection,this.fetchOptions);
  //                 const files:Array<GaleriaViewAlbumnsData>=new Array();
  //                 for(let j:number=0;j<assets.count;j++){
  //                     const asset=assets.objectAtIndex(j);
  //                     const options=PHImageRequestOptions.new();
  //                     options.synchronous=true;
  //                     options.deliveryMode=PHImageRequestOptionsDeliveryMode.FastFormat;
  //                     const requestOptions=new PHContentEditingInputRequestOptions();
  //                     await asset.requestContentEditingInputWithOptionsCompletionHandler(
  //                         requestOptions,
  //                         async(p1)=>{
  //                             if(p1.fullSizeImageURL!==null){
  //                                 await files.push(new GaleriaViewAlbumnsData(j,p1.fullSizeImageURL.toString().replace('file://', ''),false,TipoFile.IMAGES));
  //                             }
  //                         }
  //                     );
  //                 }
  //                 file.push(new GaleriaViewAlbumns(i,collection.localizedTitle,files,files[0].file?files[0].file:"",i==0?true:false));
  //             }
  //             rs(file);
  //         } catch (error) {
  //             rj(new Array<GaleriaViewAlbumns>());
  //         }
  //     })

  // }

  public async getImagenes(): Promise<Array<GaleriaViewAlbumns>> {
    return new Promise(async (rs, rj) => {
      try {
        const sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', true));
        this.fetchOptions.sortDescriptors = sortDescriptors;
        const assetCollections = PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(PHAssetCollectionType.Album, PHAssetCollectionSubtype.AlbumRegular, null);
        const file: Array<GaleriaViewAlbumns> = new Array();

        for (let i: number = 0; i < assetCollections.count; i++) {
          const collection: PHAssetCollection = assetCollections.objectAtIndex(i);
          const assets = PHAsset.fetchAssetsInAssetCollectionOptions(collection, this.fetchOptions);
          const filesPromises: Promise<GaleriaViewAlbumnsData>[] = [];

          for (let j: number = 0; j < assets.count; j++) {
            const asset = assets.objectAtIndex(j);
            filesPromises.push(this.getAssetData(asset, j));
          }

          const files = await Promise.all(filesPromises);

          file.push(new GaleriaViewAlbumns(i, collection.localizedTitle, files, files[0].file ? files[0].file : '', i == 0 ? true : false));
        }

        rs(file);
      } catch (error) {
        rj(new Array<GaleriaViewAlbumns>());
      }
    });
  }

  private async getAssetData(asset: PHAsset, index: number): Promise<GaleriaViewAlbumnsData> {
    return new Promise(async (resolve) => {
      const options = PHImageRequestOptions.new();
      options.synchronous = true;
      options.deliveryMode = PHImageRequestOptionsDeliveryMode.FastFormat;
      const requestOptions = new PHContentEditingInputRequestOptions();

      await asset.requestContentEditingInputWithOptionsCompletionHandler(requestOptions, async (p1) => {
        if (p1.fullSizeImageURL !== null) {
          resolve(new GaleriaViewAlbumnsData(index, p1.fullSizeImageURL.toString().replace('file://', ''), false, TipoFile.IMAGES));
        } else {
          resolve(new GaleriaViewAlbumnsData(index, '', false, TipoFile.IMAGES)); // O proporciona un valor por defecto en caso de que no haya URL
        }
      });
    });
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => Utils.setTimeout(resolve, ms));
  }
}
