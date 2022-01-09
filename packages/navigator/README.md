## NativeScript Plugin Para abrir la navegacion de multiples mapas.
# @developerwym/navigator

```javascript
ns plugin add @developerwym/navigator
```

## Uso
## API

## Metodos

| Método  | Descripción  |
| ------------- | ------------- |
| checkAppInstalada(packageName:string o AppsSoportadas)  | Verifica si la app esta instalada en android `com.id.pack`, en ios `urlscheme://`. Tambien puedes utilizar `AppsSoportadas`, returna un boleano  |
| openGoogleMaps(OpcionesGoogleMaps) | Abre la app de Google Maps. Retorna un Promise<Response> |
| openWaze(OpcionesWaze) | Abre la app de Waze. Retorna un Promise<Response> |
| openBaidumap(OpcionesBaidumap) | Abre la app de BaiduMap. Retorna un Promise<Response> |
| openAppleMaps(OpcionesAppleMaps) | Abre la app de AppleMaps. Retorna un Promise<Response> |
  
 ##   
| AppsSoportadas | |
| ------------- | ------------- |
| Google Maps | Android e iOS |
| Waze | Android e iOS |
| Baidu Maps | Android e iOS | 
| Apple Maps | iOS |  
  
## Response
| Propiedad  | Descripción  |
| ------------- | ------------- |
| error | Boleano. Indica si genero o no error |
| errorText | string mensaje del error |

## TransporteGoogleMaps
| Propiedad  | Descripción  |
| ------------- | ------------- |
| DRIVING |  |
| WALKING | |
| BICYCLING | |
| TRANSIT | |
  
## Opciones 
  
### OpcionesGoogleMaps
| Propiedad | Tipo | Descripción |
| ------------- | ------------- | ------------- |
| daddr | `string o Array<string>` | Dirección de destino |
| saddr? | `string o Array<string>` | Dirección de inicio |
| modoTransporte | `TransporteGoogleMaps` | Tipo de transporte |
| tipoMapa | `TURN_BY_TURN o MAPS` | Si es `TURN_BY_TURN` en android iniciara la navegacion automaticamente |
| avoid? |  `string` | Establece características que la ruta debe tratar de evitar Valores "t", "h" o "f" |

### OpcionesWaze
| Propiedad | Tipo | Descripción |
| ------------- | ------------- | ------------- |
| destino | `string o Array<string>` | Dirección de destino |
| navigate | `string` | Valores `yes` o `no, inicia o no la navegacion en la app de Waze |
  
### OpcionesBaidumap
| Propiedad | Tipo | Descripción |
| ------------- | ------------- | ------------- |
| destino | `string` | Dirección de destino |
| origen? | `string` | Dirección de inicio |
| modo | `string` | Valores `driving`, `walking`, `bicycling` o `transit`. |

### OpcionesAppleMaps 
| Propiedad | Tipo | Descripción |
| ------------- | ------------- | ------------- |
| tipo | `string` | Valores `s`, `k`, `h` o `r`. Tipo de mapa transito, standar etc. |
| daddr | `string o Array<string>` | Dirección de destino |
| saddr | `string o Array<string>` | Dirección de inicio |
| dirflg | `string` | Valores `d`, `w` o `r`, Modo de transporte |

  
## Ejemplos
  
### Verificar si la app esta instalada
```
  checkAppInstalada(AppsSoportadas.WAZE o AppsSoportadas.APPLE_MAPS o AppsSoportadas.BAIDUMAP o AppsSoportadas.GOOGLE_MAPS): boolean
```

### Google Maps
```
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
```
openWaze({
  destino:"tia el recreo quito pichincha ecuador",
  navigate:"yes"
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
```
  
### Baidu Maps
```
openBaidumap({
 destino:"maracay aragua venezuela",
 modo:"driving",
 origen:"villa de cura aragua venezuela",
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
```
  
### Apple Maps solo para iOS
```
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
