## NativeScript Plugin Chequear la version de la app instalada y la que esta publicada en Google play y Appstore.

# @developerwym/ns-store-update

```javascript
ns plugin add @developerwym/ns-store-update
```

## Uso
## API

## Metodos
| Método  | Descripción  |
| ------------- | ------------- |
| getVersionMarket(urlStore) | Obtiene la version de la app publicada en Google play y appstore. Devuelve una Promise `version,error,errorText` |
| getVersionApp() | Obtiene versionName y versionCode de la app instalada en el dispositivo. Devuelve una Promise `versionName,versionCode,error,errorText` |
| checkUpdate(OpcionesUpdate) | Compara la version de la app instalada con la app en Google play y Appstore y verifica si existe una actualizacion. Devuelve una Promise `error,update` |
| getAppId() | Obtiene el id de la aplicación |

##OpcionesUpdate
| Opcion | Defecto | Descripción |
| ------------ | ------------ | ---------- |
| mensaje | | Mensaje para mostran en la pantalla para forzar la actualizacion de la aplicación |
| forceUpdate | false | Si se debe forzar o no la aplicación. |
| urlAndroid | | Url de Google play. |
| urlIos | | Url de Appstore. |
| pais | VE | Pais disponible de la aplicación. |
| showScreen | false | Mostrar la pantalla de la actualizacion de la aplicación. |

## License

Apache License Version 2.0
