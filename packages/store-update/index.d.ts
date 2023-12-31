import { StoreUpdateCommon } from './common';
export interface ResultCheckUpdate {
  isUpdate: boolean;
  error?: Error;
}
export declare class StoreUpdate extends StoreUpdateCommon implements StoreUpdateCommon {}
