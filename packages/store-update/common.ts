import { Application, ApplicationEventData, Button, Color, GridLayout, GridUnitType, Http, HttpResponse, ItemSpec, Label, Screen, Utils } from '@nativescript/core';
import { ResultCheckUpdate } from '.';

export abstract class StoreUpdateCommon {
  constructor(private packageNameNube?: string) {}

  abstract getVersionCode(): any;
  abstract getVersionName(): any;
  abstract getVersionNube(): any;
  abstract checkUpdate(force?: boolean): Promise<ResultCheckUpdate>;
  // Only for android
  abstract checkUpdateNative(): Promise<ResultCheckUpdate>;

  protected getNubeVersion(url: string, esAndroid: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      return Http.request({
        url: url,
        method: 'GET',
      })
        .then((response: HttpResponse) => {
          const statusCode = response.statusCode;
          if (statusCode === 200) {
            let version = '';
            if (esAndroid) {
              const data = response.content.toString();
              const data_ios = response.content.toJSON();
              console.log(data_ios.results[0].version);
              version = data.match(/\[\[\[['"]((\d+\.)+\d+)['"]\]\],/)[1];
            } else {
              console.log('esIos');
              const data = response.content.toJSON();
              console.log(data);
              version = data.results[0].version;
              console.log(version);
            }
            resolve(version);
          } else {
            reject(true);
          }
        })
        .catch((error) => {
          reject(true);
        });
    });
  }

  protected compararVersiones(versionA: string, versionB: string): number {
    const partesA = versionA.split('.').map(Number);
    const partesB = versionB.split('.').map(Number);

    const longitud = Math.max(partesA.length, partesB.length);

    for (let i = 0; i < longitud; i++) {
      const valorA = partesA[i] || 0;
      const valorB = partesB[i] || 0;

      if (valorA < valorB) {
        return 1; // Versión A es menor
      } else if (valorA > valorB) {
        return 2; // Versión A es mayor
      }
    }

    return 0; // Ambas versiones son iguales
  }
}

export class AlertaUpdateStoreUpdate extends GridLayout {
  constructor(private esAndroid: boolean, private force: boolean, private packageName: string) {
    super();
    this.width = (Screen.mainScreen.widthDIPs * 80) / 100;
    this.height = (Screen.mainScreen.heightDIPs * 25) / 100;
    this.addRow(new ItemSpec(1, GridUnitType.STAR));
    this.addRow(new ItemSpec(1, GridUnitType.AUTO));
    this.padding = 10;
    this.borderRadius = 20;

    const label: Label = new Label();
    (label.text = `There is a new version of the app available, and it is required to update it`), (label.fontSize = 18);
    label.style.fontWeight = 'bold';
    label.verticalAlignment = 'middle';
    label.horizontalAlignment = 'center';
    label.textWrap = true;
    label.margin = 10;
    label.row = 0;

    const btnUpdate: Button = new Button();
    btnUpdate.text = 'Update';
    btnUpdate.backgroundColor = new Color('Transparent');
    btnUpdate.androidElevation = -1;
    btnUpdate.horizontalAlignment = 'right';
    btnUpdate.verticalAlignment = 'middle';
    btnUpdate.row = 1;
    btnUpdate.on('tap', (args) => {
      let urlMarket: string = '';
      if (this.esAndroid) {
        urlMarket = `market://details?id=${this.packageName}`;
      } else {
        urlMarket = `https://apps.apple.com/us/app/apple-store/id${this.packageName}`;
      }
      Utils.openUrl(urlMarket);
      Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
        this.closeModal();
      });
    });

    this.addChild(label);
    this.addChild(btnUpdate);
    if (this.esAndroid) {
      if (this.force) {
        console.log('es android');
        Application.android.on(Application.AndroidApplication.activityBackPressedEvent, (args) => {
          console.log('check backpres');
          args.cancel = true;
        });
      }
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    if (this.esAndroid) {
      if (this.force) {
        Application.android.off(Application.AndroidApplication.activityBackPressedEvent);
      }
    }
  }
}
