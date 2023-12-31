import { ShowModalOptions, Utils, getCurrentPage } from '@nativescript/core';
import { AlertaUpdateStoreUpdate, StoreUpdateCommon } from './common';
import { ResultCheckUpdate } from '.';

export class StoreUpdate extends StoreUpdateCommon {
  private packageManager = NSBundle.mainBundle.bundleIdentifier;
  getVersionCode() {
    try {
      let infoDictionary = NSBundle.mainBundle.infoDictionary;
      let versionCode = infoDictionary.objectForKey('CFBundleVersion');
      return versionCode;
    } catch (error) {
      console.error(error);
    }
  }

  getVersionName() {
    try {
      let infoDictionary = NSBundle.mainBundle.infoDictionary;
      let versionName = infoDictionary.objectForKey('CFBundleShortVersionString');
      return versionName;
    } catch (error) {
      console.error(error);
    }
  }

  async getVersionNube(): Promise<any> {
    return new Promise<any>(async (rs, rj) => {
      return await this.getNubeVersion(`https://itunes.apple.com/lookup?id=${this.packageManager}&country=${NSLocale.currentLocale.countryCode}&${new Date().getTime()}`, false)
        .then((res) => {
          console.log('res ver: ', res);
          rs(res);
        })
        .catch((err) => {
          console.error(err);
          rj(err);
        });
    });
  }

  checkUpdate(force?: boolean): Promise<ResultCheckUpdate> {
    return new Promise<ResultCheckUpdate>(async (rs, rj) => {
      try {
        const that = this;
        const options: ShowModalOptions = {
          async closeCallback(...args) {
            if (force) {
              const versionNube = await that.getVersionNube();
              const result_compare_version = that.compararVersiones(versionNube, that.getVersionName());
              console.log(result_compare_version);
              if (result_compare_version == 2) {
                that.checkUpdate(force);
              } else if (result_compare_version == 0) {
                rs({
                  isUpdate: true,
                });
              }
            }
            rs({
              isUpdate: false,
            });
          },
          cancelable: !force,
          context: {},
          animated: true,
          fullscreen: false,
          stretched: false,
        };
        getCurrentPage().showModal(new AlertaUpdateStoreUpdate(true, force, this.packageManager), options);
      } catch (error) {
        console.error('err: ', error);
      }
    });
  }
  checkUpdateNative(): Promise<ResultCheckUpdate> {
    throw new Error('Method not implemented.');
  }
}
