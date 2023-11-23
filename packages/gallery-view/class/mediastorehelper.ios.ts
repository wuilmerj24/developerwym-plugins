import { CLog } from '../common';
import { MediaStoreData } from '../interfaces/mediastore.interface';

@NativeClass()
export class MediaStoreHelperIos {
  constructor() // eslint-disable-next-line @typescript-eslint/no-empty-function
  {}

  public getImagenes(): Array<MediaStoreData> {
    try {
      const fetchOptions: PHFetchOptions = PHFetchOptions.new();

      return;
    } catch (error) {
      CLog('Error: ', error);
    }
  }
}
