import { Application, Page, alert, AlertOptions, confirm, Utils, Label, getCurrentPage, View, Image, Screen, StackLayout, Color, Button } from '@nativescript/core';
import { OpcionesUpdate, ResponseVersion } from '.';

let xhr = new XMLHttpRequest();
let page: Page;
let contendioActual: any;

export let getVersionMarket = async (url: string): Promise<ResponseVersion> => {
    return new Promise((rs, rj) => {
        if (!url.match(/^https?:\/\/play\.google\.com\/store\/apps\/details\?id=[0-9a-zA-Z.]+/)) {
            rj({ error: true, errorText: 'Url android es incorrecta' });
        }
        xhr.open('GET', url);

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status === 200) {
                const data = xhr.responseText.match(/<span class="htlgb"><div class="IQ1z0d"><span class="htlgb">([0-9]+\.?[0-9]*\.?[0-9]*)<\/span><\/div><\/span>/);
                if (!data) {
                    rj({ error: true, errorText: 'No se pudo obtener la version de la app en el market' });
                }
                rs({ versionName: data[1], error: false });
            } else if (xhr.readyState == 4 && xhr.status !== 200) {
                rj({ error: true, errorText: 'Url android es incorrecta' });
            }
        };
        xhr.send();
    });
};

export let getVersionApp = async (): Promise<ResponseVersion> => {
    return new Promise((rs, rj) => {
        try {
            let pInfo = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), 0);
            let versionName = pInfo.versionName;
            let versionCode = pInfo.versionCode;
            rs({ versionName:versionName,versionCode:versionCode, error: false });
        } catch (error) {
            rj({ error: true, errorText: error });
        }
    });
};

export let checkUpdate = async (opciones: OpcionesUpdate): Promise<any> => {
    return new Promise(async (rs, rj) => {
        let versionLocal = await getVersionApp().then((res) => {
            return res;
        });

        let versionNube = await getVersionMarket(opciones.urlAndroid).then((res) => {
            return res;
        });

        if (!versionLocal.error && !versionNube.error) {
            let vLocalArr: Array<any> = versionLocal.versionName.split('.');
            let vNubeArr: Array<any> = versionNube.versionName.split('.');
            let vLocal: number = parseInt(`${vLocalArr[0]}${vLocalArr[1]}${vLocalArr[2]}`);
            let vNube: number = parseInt(`${vNubeArr[0]}${vNubeArr[1]}${vNubeArr[2]}`);

            if (vLocal < vNube) {
                // Actualiza
                // new com.developerwym.nsupdatescreenmodule.OpenIntent(Utils.android.getApplicationContext(), opciones.urlAndroid, opciones.mensaje, java.lang.Boolean.valueOf(opciones.forceUpdate));
                createView(opciones);
                rs({ error: false, update: true });
            } else {
                rs({ error: true, errorText: 'App esta actualizada', update: false });
            }
        }
    });
};

function createView(opciones: OpcionesUpdate) {
    const view: Page = getCurrentPage();
    contendioActual = view.content;
    const stack: StackLayout = new StackLayout();
    const imagen: Image = new Image();
    imagen.width = (Screen.mainScreen.widthPixels * 12) / 100;
    imagen.height = (Screen.mainScreen.heightPixels * 6) / 100;
    imagen.verticalAlignment = 'top';
    imagen.horizontalAlignment = 'center';
    let icono = Utils.android.getApplicationContext().getResources().getIdentifier('@mipmap/ic_launcher', null, Utils.android.getApplicationContext().getPackageName());
    imagen.src = icono > 0 ? icono : 'res://icon';
    // imagen.backgroundColor=new Color("black");
    imagen.stretch = 'aspectFill';
    imagen.marginBottom = 5;
    // appname
    let titulo: Label = new Label();
    titulo.text = Utils.android.getApplicationContext().getApplicationInfo().loadLabel(Utils.android.getApplicationContext().getPackageManager()).toString();
    titulo.fontSize = 24;
    titulo.color = new Color('black');
    titulo.style.fontWeight = 'bold';
    titulo.horizontalAlignment = 'center';
    titulo.marginBottom = 10;
    // Mensaje
    let msj: Label = new Label();
    msj.text = opciones.mensaje;
    msj.fontSize = 20;
    msj.horizontalAlignment = 'center';
    msj.textWrap = true;
    msj.style.fontWeight = '700';
    msj.marginBottom = 10;

    // Boton cancelar
    let btnCancelar: Button = new Button();
    btnCancelar.text = 'Cancelar';
    btnCancelar.backgroundColor = new Color('red');
    btnCancelar.color = new Color('#FFFFFF');
    btnCancelar.horizontalAlignment = 'right';
    btnCancelar.width = (Screen.mainScreen.widthPixels * 15) / 100;
    btnCancelar.on('tap', async (args) => {
        console.log('Cancelar');
        let versionLocal = await getVersionApp().then((res) => {
            return res;
        });

        let versionNube = await getVersionMarket(opciones.urlAndroid).then((res) => {
            return res;
        });
        if (!versionLocal.error && !versionNube.error) {
            let vLocalArr: Array<any> = versionLocal.versionName.split('.');
            let vNubeArr: Array<any> = versionNube.versionName.split('.');
            let vLocal: number = parseInt(`${vLocalArr[0]}${vLocalArr[1]}${vLocalArr[2]}`);
            let vNube: number = parseInt(`${vNubeArr[0]}${vNubeArr[1]}${vNubeArr[2]}`);
            if (vLocal >= vNube) {
                view.actionBarHidden = false;
                view.content = contendioActual;
            } else {
                let toast: android.widget.Toast = android.widget.Toast.makeText(Utils.android.getApplicationContext(), 'La actualización es requerida.', android.widget.Toast.LENGTH_LONG);
                toast.show();
            }
        }
        console.log(versionLocal.versionName, versionNube.versionName);
    });
    // Boton actualizar
    let btnActualizar: Button = new Button();
    btnActualizar.text = 'Actualizar';
    btnActualizar.backgroundColor = new Color('#689f38');
    btnActualizar.color = new Color('#FFFFFF');
    btnActualizar.horizontalAlignment = 'left';
    btnActualizar.width = (Screen.mainScreen.widthPixels * 15) / 100;
    btnActualizar.on('tap', (args) => {
        console.log('Actualizar');
        let intent: android.content.Intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(opciones.urlAndroid));
        intent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        Utils.android.getApplicationContext().startActivity(intent);
    });
    // Grid
    const stackH: StackLayout = new StackLayout();
    stackH.orientation = 'horizontal';
    stackH.width = Screen.mainScreen.widthPixels;
    stackH.horizontalAlignment = 'center';
    stackH.addChild(btnCancelar);
    stackH.addChild(btnActualizar);

    stack.addChild(imagen);
    stack.addChild(titulo);
    stack.addChild(msj);
    let btnActualizarb: Button = new Button();
    btnActualizarb.text = 'Actualizar';
    btnActualizarb.backgroundColor = new Color('#689f38');
    btnActualizarb.color = new Color('#FFFFFF');
    btnActualizarb.horizontalAlignment = 'left';
    btnActualizarb.width = Screen.mainScreen.widthPixels;
    btnActualizarb.on('tap', (args) => {
        console.log('Actualizar');
        let intent: android.content.Intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(opciones.urlAndroid));
        intent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        Utils.android.getApplicationContext().startActivity(intent);
    });
    opciones.forceUpdate ? stack.addChild(stackH) : stack.addChild(btnActualizarb);

    stack.verticalAlignment = 'middle';
    view.actionBarHidden = true;
    view.content = stack;
}
