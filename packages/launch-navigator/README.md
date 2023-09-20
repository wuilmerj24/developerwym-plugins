# launch-navigator

<a href="https://www.npmjs.com/package/@arepa/time-range">
    <img src="https://img.shields.io/npm/dt/@arepa/time-range.svg?label=npm%20downloads" alt="npm">
</a>

# @arepa/launch-navigator

```javascript
npm install @arepa/launch-navigator
```
## Usage
## API
## Methods

| Method | Description |
| ------ | ----------- |
| checkInstalledApp(packageName: string or SupportedApps) | Checks if the app is installed on Android (com.id.pack) or iOS (urlscheme://). You can also use SupportedApps, which returns a boolean. |
| openGoogleMaps(OpcionesGoogleMaps) | Opens the Google Maps app. Returns a Promise. |
| openWaze(OpcionesWaze) | Opens the Waze app. Returns a Promise. |
| openBaidumap(OpcionesBaidumap) | Opens the BaiduMap app. Returns a Promise. |
| openAppleMaps(OpcionesAppleMaps) | Opens the Apple Maps app. Returns a Promise. |

| SupportedApps | |
| -------------- | - |
| Google Map | Android e iOS |
| Waze | Android e iOS |
| Apple Maps | iOS |


## Response
| Property | Description |
| --------- | ----------- |
| error | Boolean. Indicates whether an error occurred or not. |
| errorText | String error message. |

## TransporteGoogleMaps
| Property | Description |
| --------- | ----------- |
| DRIVING | |
| WALKING | |
| BICYCLING | |
| TRANSIT | |

## Options
### OpcionesGoogleMaps
| Property | Type | Description |
| --------- | ---- | ----------- |
| daddr | string or Array<string> | Destination address |
| saddr? | string or Array<string> | Starting address |
| modoTransporte | TransporteGoogleMaps | Transportation type |
| tipoMapa | TURN_BY_TURN or MAPS | If it's TURN_BY_TURN on Android, it will start navigation automatically | 
| avoid? | string | Sets characteristics the route should try to avoid. Values "t", "h", or "f" |

### OpcionesWaze
| Property | Type | Description |
| --------- | ---- | ----------- |
| destino | string or Array<string> | Destination address |
| navigate | string | Values yes or `no, starts or doesn't start navigation in the Waze app |

### OpcionesAppleMaps
| Property | Type | DescrDescriptionipción |
| --------- | ---- | ----------- |
| tipo | string | Values s, k, h, or r. Map type transit, standard, etc. |
| daddr | string or Array<string> | Destination address |
| saddr | string or Array<string> | Starting address |
| dirflg | string | Values d, w, or r. Transportation mode |

## Ejemplos
### Verificar si la app esta instalada
```javascript
checkAppInstalada(AppsSoportadas.WAZE o AppsSoportadas.APPLE_MAPS o AppsSoportadas.BAIDUMAP o AppsSoportadas.GOOGLE_MAPS): boolean
```

### Google Maps
```javascript
openGoogleMaps({
  daddr:"Maracay aragua venezuela",
  modoTransporte:TransporteGoogleMaps.DRIVING,
  tipoMapa:"TURN_BY_TURN",
  saddr:"Villa de cura aragua venezuela",
  avoid:"fth"
 }).then((res)=>{
  //Ok
 }).catch((err)=>{
  //Error
 })  
```

### Waze
```javascript
openWaze({
  destino:"tia el recreo quito pichincha ecuador",
  navigate:"yes"
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
```

### Apple Maps solo para iOS
```javascript
openAppleMaps({
  daddr:"Tia el recreo quito ecuador",
  dirflg:"d",
  tipo:"s",
  saddr:"Maracay aragua veneuzela",
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
```