import { TypeFileShow } from '../enums/typefiles.enums';

export interface MediaStoreData {
  id: string;
  albunName: string;
  isSelected: boolean;
  icon: string;
  files: Array<MediaStoreDataFiles>;
}

export interface MediaStoreDataFiles {
  id: string;
  file: string;
  isSelected: boolean;
  type: TypeFileShow;
}
