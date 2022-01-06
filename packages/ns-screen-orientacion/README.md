## NativeScript Plugin para cambiar la orientación de la pantalla.
# @developerwym/ns-screen-orientacion

```javascript
ns plugin add @developerwym/ns-screen-orientacion
```
## Uso
## API

## Metodos

| Método  | Descripción  |
| ------------- | ------------- |
| getOrientacion()  | Obtiene la orientación actual de la pantalla  |
| setOrientacion(Orientacion) | Cambia la orientación de la pantalla. Devuelve una Promise  |

## Tipos de orientación soportados

## Orientación
| Orientación | Descripción |
| ------------ | ---------- |
| ANY | la orientación está desbloqueada: se admiten todas las orientaciones. |
| PORTRAIT | Cambia la rotación de la pantalla a modo PORTRAIT |
| PORTRAIT_REVERSE | Cambia la rotación de la pantalla a modo PORTRAIT_REVERSE |
| LANDSCAPE | Cambia la rotación de la pantalla a modo LANDSCAPE |
| LANDSCAPE_REVERSE | Cambia la rotación de la pantalla a modo LANDSCAPE_REVERSE |
| UNSPECIFIED | No hace cambio de orientacion |

## Tipos de orientación solo para Android
| Orientacion | Descripción |
| ----------- | ----------- |
| PORTRAIT_SENSOR | Cambia la rotación de la pantalla a modo PORTRAIT_SENSOR, al rotar el movil en modo PORTRAIT o PORTRAIT rotando la pantalla a 180°  |
| LANDSCAPE_SENSOR | Cambia la rotación de la pantalla a modo LANDSCAPE_SENSOR, al rotar el movil en modo LANDSCAPE o LANDSCAPE rotando la pantalla 270° |

## Obtener la orientación de la pantalla 
```
 //Obtiene la orientacion actual en formato string
 let orientacion = getOrientacion();
```

## Cambiar la orientación de la pantalla
```
//cambia la orientacion;
setOrientacion(Orientacion.ANY).then((res:boolean)=>{
  console.log(res)
})
 ```

## License

Apache License Version 2.0