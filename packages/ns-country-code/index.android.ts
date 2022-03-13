import { action, ActionBar, ActionItem, ActionItems, Application, Builder, Button, Color, CoreTypes, Frame, getCurrentPage, getRootLayout, GridLayout, GridUnitType, ItemSpec, Label, Page, RootLayout, Screen, SearchBar, ShowModalOptions, StackLayout, View,Image, ListView, ItemEventData, EventData, TextField, Utils} from "@nativescript/core";
import { Codigos, CodigosI } from "./common";
const permissions = require("@master.technology/permissions");


export function getCurrentPais(addPlus: boolean): Promise<any> {
    return new Promise(async (rs, rj) => {
        try {
            permissions.requestPermission([android.Manifest.permission.READ_PHONE_STATE,android.Manifest.permission.READ_SMS]).then(() => {
                let context:android.content.Context=Application.android.context;
                let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
                let locale:string = manager.getNetworkCountryIso();
                let countryCode: any = Codigos.filter(item => item.nombre === locale.toUpperCase());
                console.log("Telf:", manager.getLine1Number().substring(1))
                rs({ pais: countryCode[0].fullNameS, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1)});
            }).catch(() => {
                rj({ error: "Permisos son requeridos." });
            });
        } catch (error) {
            rj({ error: error });
        }
    });
}

export function showList(idioma: boolean): Promise<any> {
    return new Promise((rs, rj) => {
        try {
            let seleccionado:any;
            let listaCodigos: Array<CodigosI>=Codigos;
            const rl: RootLayout = new RootLayout();
            const contenedor: GridLayout = new GridLayout();
            contenedor.addColumn(new ItemSpec(0, GridUnitType.AUTO));
            contenedor.addColumn(new ItemSpec(1, GridUnitType.STAR));
            contenedor.addRow(new ItemSpec(0, GridUnitType.AUTO));
            contenedor.addRow(new ItemSpec(1, GridUnitType.STAR));
            contenedor.width = Screen.mainScreen.widthPixels;
            contenedor.height = Screen.mainScreen.heightPixels;
            contenedor.backgroundColor = new Color("#FFFFFF");    
            let img: Image = new Image()
            img.src = "~/assets/png/back.png";
            img.className = "action-image";
            img.tintColor = new Color("#000000");
            img.width = 50;
            img.height = 50;
            img.col=0;
            img.row=0;
            const btn:Button=new Button();
            btn.backgroundImage ="~/assets/png/back.png";
            btn.style.backgroundRepeat="no-repeat";
            btn.style.backgroundPosition="center"
            btn.style.backgroundSize="75 75";
            btn.fontSize=20;
            btn.width=50;
            btn.height=50;
            btn.col=0;
            btn.row=0;
            btn.androidElevation=0;
            btn.on("tap",(args:EventData)=>{
                getCurrentPage().actionBarHidden = false;
                rl.closeAll().then((res) => {
                    rs({ data: seleccionado })
                    
                }).catch((err) => {
                    rj(err)
                })
            })

            // contenedor.addChild(img);
            contenedor.addChild(btn);
            const searchBar: SearchBar = new SearchBar();
            searchBar.hint = "Buscar...";
            searchBar.col=1;
            searchBar.row=0;
            searchBar.on("clear",(args:EventData)=>{
                lista.items=Codigos;
            })
            
            searchBar.on("textChange",(args:EventData)=>{
                const txtfield:SearchBar=args.object as SearchBar;
                let regex = new RegExp(txtfield.text.toUpperCase(), 'i');
                let index:number = Codigos.findIndex(item => regex.test(item.nombre));
                // pais: countryCode[0].fullNameS, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo
                listaCodigos = [];
                listaCodigos.push(Codigos[index]);
                console.log("texto: ", Codigos[index]);
                lista.items=listaCodigos;
            })

            contenedor.addChild(searchBar);
            const lista: ListView = new ListView();
            lista.width = Screen.mainScreen.widthPixels;
            lista.colSpan = 2;
            lista.row = 1;
            lista.separatorColor=new Color("#000000");
            lista.itemTemplate = `
                <ContentView>
                    <GridLayout width="90%" columns="auto,*,auto" height="60">
                        <Image decodeWidth="200" decodeHeight="200" loadMode="async" src="{{$value.bandera}}" col="0" stretch="aspectFill" width="40" height="26"></Image>
                        <Label text="{{${idioma} ? $value.name:$value.nombre}}" col="1" fontSize="16" marginLeft="15" fontWeight="bold" verticalAlignment="middle" horizontalAlignment="left"></Label>
                        <Label text="{{'+'+$value.codigo}}" col="2" fontSize="16" marginLeft="15" fontWeight="bold" verticalAlignment="middle" horizontalAlignment="center"></Label>
                    </GridLayout>
                </ContentView>
            `;
            lista.items = listaCodigos;
            lista.on("itemTap", (args: ItemEventData) => {
                console.log("TAP: ", Codigos[args.index]);
                seleccionado = Codigos[args.index];
                getCurrentPage().actionBarHidden = false;
                rl.closeAll().then((res) => {
                    rs({data:seleccionado})
                }).catch((err) => {
                    rj(err)
                })
            });
            contenedor.addChild(lista);  
            getCurrentPage()._addView(rl, 1);
            getCurrentPage().actionBarHidden = true;
            rl.open(contenedor, {
                shadeCover: {
                    color: '#FFF',
                    tapToClose: false,
                },
                animation: {
                    enterFrom: {
                        translateY: 500,
                        duration: 300,
                        curve: CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11),
                    },
                    exitTo: {
                        translateY: 500,
                        duration: 300,
                        curve: CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11),
                    },
                },
            }).then((res) => {
            })      
        } catch (error) {
            rj({error:error})
        }
    });
}

export let listaCodigos:Array<CodigosI>=Codigos;