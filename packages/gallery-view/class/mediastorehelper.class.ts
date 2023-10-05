import { ImageAsset } from '@nativescript/core';
import { CLog } from '../common';
import { SpinnerData } from './spinner.data.class';

@NativeClass()
export class MediaStoreHelper {
  private files: Array<SpinnerData> = new Array();
  constructor(private context: android.content.Context) {}

  public getImages(): Array<SpinnerData> {
    let collection: android.net.Uri;
    if (android.os.Build.VERSION.SDK_INT >= 29) {
      collection = android.provider.MediaStore.Images.Media.getContentUri(android.provider.MediaStore.VOLUME_EXTERNAL);
    } else {
      collection = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
    }

    const projection: Array<string> = Array.of(
      android.provider.MediaStore.Images.ImageColumns._ID,
      android.provider.MediaStore.Images.ImageColumns.DISPLAY_NAME,
      android.provider.MediaStore.Images.ImageColumns.SIZE,
      // android.provider.MediaStore.Images.ImageColumns.ALBUM,
      android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME,
      // android.provider.MediaStore.Images.ImageColumns.BUCKET_ID,
      android.provider.MediaStore.Images.ImageColumns.DATA,
      // android.provider.MediaStore.Images.ImageColumns.DATE_TAKEN,
      android.provider.MediaStore.Images.ImageColumns.WIDTH,
      android.provider.MediaStore.Images.ImageColumns.HEIGHT
      // android.provider.MediaStore.Images.ImageColumns._COUNT,
    );

    const selection: string = `${android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME} = ?`;

    try {
      const cursor: android.database.Cursor = this.context.getContentResolver().query(
        collection,
        projection,
        null,
        null,
        // sortOrder
        null
      );
      const idColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns._ID);
      const nameColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.DISPLAY_NAME);
      const dataColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.DATA);
      const bucketColumn: number = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.ImageColumns.BUCKET_DISPLAY_NAME);
      let medias: Array<any> = new Array();
      let files: Array<any> = new Array();
      while (cursor.moveToNext()) {
        const id: number = cursor.getLong(idColumn);
        const name: string = cursor.getString(nameColumn);
        const data: string = cursor.getString(dataColumn);
        const albunName: string = cursor.getString(bucketColumn);
        const contentUri: android.net.Uri = android.content.ContentUris.withAppendedId(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);
        // CLog(`contentUri: ${contentUri.getPath()}`);
        // CLog(`contentUri: ${data}`);
        // CLog(`name: ${name}`);
        // CLog(`id: ${id}`);
        // CLog(`data: ${data}`);
        // CLog(`albunName: ${albunName}`);
        files.push({
          id: id,
          data: data,
          file: data,
          name: name,
          contentUri: contentUri,
          albunName: albunName,
          img: new ImageAsset(contentUri),
          isSelected: false,
        });
        const index: number = medias.findIndex((item) => item == albunName);
        if (index == -1) {
          medias.push(albunName);
        }
      }
      for (let i: number = 0; i < medias.length; i++) {
        const dataFiles: Array<any> = files.filter((item) => item.albunName == medias[i]);
        this.files.push({
          id: i + 1,
          albunName: medias[i],
          files: dataFiles,
          icon: dataFiles[0].data,
          isSelected: i === 0 ? true : false,
        });
      }
      cursor.close();
      return this.files;
    } catch (error) {
      CLog(`Error on mediastore ${error}`);
    }
  }
}
