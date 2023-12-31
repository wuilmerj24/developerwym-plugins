import { AndroidActivityResultEventData, Application, ApplicationEventData, ShowModalOptions, ShownModallyData, Utils, alert, getCurrentPage } from '@nativescript/core';
import { AlertaUpdateStoreUpdate, StoreUpdateCommon } from './common';
import { ResultCheckUpdate } from '.';

export class StoreUpdate extends StoreUpdateCommon {
  private packageManager = Utils.android.getApplicationContext().getPackageManager().getPackageInfo(Utils.android.getPackageName(), 0);
  private REQUEST_CODE_START_UPDATE: number = 1276;

  getVersionCode() {
    try {
      return this.packageManager.versionCode;
    } catch (error) {
      console.error(error);
    }
  }

  getVersionName() {
    try {
      return this.packageManager.versionName;
    } catch (error) {
      console.error(error);
    }
  }

  async getVersionNube(): Promise<any> {
    return new Promise<any>(async (rs, rj) => {
      let context: android.content.Context = Application.android.context;
      let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
      let locale: string = manager.getNetworkCountryIso();
      return await this.getNubeVersion(`https://play.google.com/store/apps/details?id=${this.packageManager.packageName}&gl=${locale}`, true)
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
        getCurrentPage().showModal(new AlertaUpdateStoreUpdate(true, force, this.packageManager.packageName), options);
      } catch (error) {
        console.error('err: ', error);
      }
    });
  }

  checkUpdateNative(): Promise<any> {
    return new Promise<any>((rs, rj) => {
      const that = this;
      const appUpdateManager: com.google.android.play.core.appupdate.AppUpdateManager = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(Utils.android.getApplicationContext());
      const appUpdateInfoTask: com.google.android.gms.tasks.Task<any> = appUpdateManager.getAppUpdateInfo();
      const activity = Application.android.startActivity || Application.android.foregroundActivity;
      Application.on(Application.android.activityPausedEvent, (args: ApplicationEventData) => {
        Application.off(Application.android.activityPausedEvent);
        console.log('La aplicación se ha pausado.');
      });
      Application.on(Application.android.activityResumedEvent, (args: ApplicationEventData) => {
        Application.off(Application.android.activityResumedEvent);
        console.log('La aplicación se ha reanudado.');
        appUpdateInfoTask.addOnSuccessListener(
          new com.google.android.gms.tasks.OnSuccessListener<any>({
            onSuccess(appUpdateInfo) {
              if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
                console.log('requiere update');
                appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
                rs(true);
              }
              {
                console.log('no need update');
                rj(false);
              }
            },
          })
        );
      });
      appUpdateInfoTask.addOnSuccessListener(
        new com.google.android.gms.tasks.OnSuccessListener<any>({
          onSuccess(appUpdateInfo) {
            if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
              console.log('requiere update');
              appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
              rs(true);
            }
            {
              console.log('no need update');
              rj(false);
            }
          },
        })
      );
      appUpdateInfoTask.addOnCanceledListener(
        activity,
        new com.google.android.gms.tasks.OnCanceledListener({
          onCanceled() {
            console.log('cancel evcentg');
            rj(false);
          },
        })
      );
      appUpdateInfoTask.addOnFailureListener(
        new com.google.android.gms.tasks.OnFailureListener({
          onFailure(param0) {
            console.log(param0.getMessage());
            rj(false);
          },
        })
      );
    });
  }
}
