import { CLog } from '../common';
import { TypeFileShow } from '../enums/typefiles.enums';
import { MediaStoreData, MediaStoreDataFiles } from '../interfaces/mediastore.interface';

@NativeClass()
export class MediaStoreHelper {
  // private files: Array<MediaStoreData>=new Array();
  constructor(private context: android.content.Context) {}

  public getImagenes(): Array<MediaStoreData> {
    try {
      let collection: android.net.Uri;
      let selection: string;
      let projection: Array<string>;
      if (android.os.Build.VERSION.SDK_INT >= 29) {
        collection = android.provider.MediaStore.Images.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL);
        selection = `${android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME} = ?`;
        projection = Array.of(android.provider.MediaStore.Images.ImageColumns._ID, android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Images.ImageColumns.DATA);
      } else {
        collection = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        selection = null;
        projection = Array.of(android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME, android.provider.MediaStore.Images.ImageColumns.DATA, android.provider.MediaStore.Images.ImageColumns._ID);
      }

      const cursor: android.database.Cursor = this.context.getContentResolver().query(
        collection,
        projection,
        null,
        null,
        // sortOrder
        null
      );

      const idColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns._ID);
      const dataColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.DATA);
      let medias: Array<any> = new Array();
      let files: Array<any> = new Array();
      while (cursor.moveToNext()) {
        const id: number = cursor.getLong(idColumn);
        const data: string = cursor.getString(dataColumn);
        const contentUri: android.net.Uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);
        const albunName: string = data.split('/')[5];
        files.push({
          id: id,
          data: data,
          file: contentUri,
          albunName: albunName,
          isSelected: false,
        });
        const index: number = medias.findIndex((item) => item == albunName);
        if (index == -1) {
          medias.push(albunName);
        }
      }
      let files_final: Array<MediaStoreData> = new Array();
      for (let i: number = 0; i < medias.length; i++) {
        const dataFiles: Array<any> = files.filter((item) => item.albunName == medias[i]);
        files_final.push({
          id: `${i + 1}`,
          albunName: medias[i],
          files: dataFiles,
          icon: dataFiles[0].data,
          isSelected: i === 0 ? true : false,
        });
      }
      cursor.close();
      return files_final;
    } catch (error) {
      CLog('Error: ', error);
    }
  }
}
