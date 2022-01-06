import { Application, Page, AlertOptions, alert, Utils, getCurrentPage, StackLayout, Image, Screen, Label, Color, Button } from '@nativescript/core';
import { OpcionesUpdate, ResponseVersion } from '.';

let xhr = new XMLHttpRequest();
let contendioActual: any;

export let getVersionMarket = async (url: string): Promise<ResponseVersion> => {
    return new Promise((rs, rj) => {
        // Application.ios.window.addSub
        const idApp = url.match(/.+id([0-9]+)\??/);
        console.log("ID: ",idApp[1]);
        if (!idApp) {
            rj({ error: true, errorText: "Url ios es incorrecta id" });
        }
        xhr.open('GET', "https://itunes.apple.com/lookup?id="+idApp[1]);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status === 200) {
                console.log(xhr.readyState, xhr.status);
                const data = JSON.parse(xhr.responseText);
                if (!data) {
                    rj({ error: true, errorText: 'No se pudo obtener la version de la app en el market' });
                }
                rs({ versionName: data.results[0].version, error: false });
            } else if (xhr.readyState == 4 && xhr.status !== 200) {
                rj({ error: true, errorText: 'Url ios es incorrecta' });
            }
        };
        xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.send();
    });
};

export let getVersionApp = async (): Promise<ResponseVersion> => {
    return new Promise((rs, rj) => {
        try {
            let infoDictionary = NSBundle.mainBundle.infoDictionary;
            let versionCode = infoDictionary.objectForKey("CFBundleVersion")
            let versionName = infoDictionary.objectForKey('CFBundleShortVersionString');
            rs({ versionName: versionName, versionCode: versionCode, error: false });
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
        let versionNube = await getVersionMarket(opciones.urlIos).then((res) => {
            return res;
        });
        if (!versionLocal.error && !versionNube.error) {
            let vLocalArr: Array<any> = versionLocal.versionName.split('.');
            let vNubeArr: Array<any> = versionNube.versionName.split('.');
            let vLocal: number = parseInt(`${vLocalArr[0]}${vLocalArr[1]}${vLocalArr[2]}`);
            let vNube: number = parseInt(`${vNubeArr[0]}${vNubeArr[1]}${vNubeArr[2]}`);
            if (vLocal < vNube) {
                createView(opciones);
                rs({ error: false, update: true });
            } else {
                rs({ error: true, errorText: 'App esta actualizada', update: false });
            }
        }
        rs({ error: false });
    });
};

function createView(opciones: OpcionesUpdate) {
    const idApp = opciones.urlIos.match(/.+id([0-9]+)\??/);
    console.log("ID: ",idApp[1]);
    if (!idApp) {
        return ;
    }
    const view: Page = getCurrentPage();
    contendioActual = view.content;
    const stack: StackLayout = new StackLayout();
    const imagen: Image = new Image();
    imagen.width = (Screen.mainScreen.widthPixels * 12) / 100;
    imagen.height = (Screen.mainScreen.heightPixels * 6) / 100;
    imagen.verticalAlignment = 'top';
    imagen.horizontalAlignment = 'center';
    let icono = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleIconFiles');
    imagen.src = icono > 0 ? icono : 'res://icon';
    imagen.stretch = 'aspectFill';
    imagen.marginBottom = 5;

    let titulo: Label = new Label();
    titulo.text = NSBundle.mainBundle.infoDictionary.objectForKey('CFBundleName');
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
                alert({
                    cancelable: true,
                    message: 'La actualización es requerida.',
                    okButtonText: 'OK',
                }).then(() => { });
            }
        }
        console.log(versionLocal.versionName, versionNube.versionName);
    });

    //Boton actualizar
    let btnActualizar: Button = new Button();
    btnActualizar.text = 'Actualizar';
    btnActualizar.backgroundColor = new Color('#689f38');
    btnActualizar.color = new Color('#FFFFFF');
    btnActualizar.horizontalAlignment = 'left';
    btnActualizar.width = (Screen.mainScreen.widthPixels * 15) / 100;
    btnActualizar.on('tap', (args) => {
        console.log('Actualizar');
        if (UIApplication.sharedApplication.canOpenURL(NSURL.URLWithString('itms-apps://itunes.apple.com/app/'+idApp[1]))) {
            UIApplication.sharedApplication.openURL(NSURL.URLWithString('itms-apps://itunes.apple.com/app/'+idApp[1]));
        }
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
        if (UIApplication.sharedApplication.canOpenURL(NSURL.URLWithString('itms-apps://itunes.apple.com/app/'+idApp[1]))) {
            UIApplication.sharedApplication.openURL(NSURL.URLWithString('itms-apps://itunes.apple.com/app/'+idApp[1]));
        }
    });

    opciones.forceUpdate ? stack.addChild(stackH) : stack.addChild(btnActualizarb);

    stack.verticalAlignment = 'middle';
    view.actionBarHidden = true;
    view.content = stack;
}
