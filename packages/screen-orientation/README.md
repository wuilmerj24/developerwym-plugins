# screen-orientation

# NativeScript Plugin change the screen orientation.

<a href="https://www.npmjs.com/package/@arepa/screen-orientation">
    <img src="https://img.shields.io/npm/dt/@arepa/screen-orientation.svg?label=npm%20downloads" alt="npm">
</a>

# @arepa/screen-orientation

```javascript
npm install @arepa/screen-orientation
```

## Use

## API

### Methods
| Method | Description |
| ------ | ----------- |
| getOrientacion() | Gets the current screen orientation. |
| setOrientacion(Orientacion) | Change the screen orientation. Returns a Promise. |

### Supported orientation types.
### Orientation
| Orientation | Descriptions |
| ----------- | ----------- |
| ANY | Orientation is unlocked: all orientations are supported. |
| PORTRAIT | Change the screen rotation to PORTRAIT mode. |
| PORTRAIT_REVERSE | Change the screen rotation to PORTRAIT_REVERSE mode. |
| LANDSCAPE | Change the screen rotation to LANDSCAPE mode |
| LANDSCAPE_REVERSE | Change the screen rotation to LANDSCAPE_REVERSE mode |
| UNSPECIFIED | Does not change orientation. |

###Orientation types for Android only.
| Orientation | Description |
| ----------- | ----------- |
| PORTRAIT_SENSOR | Change the screen rotation to PORTRAIT_SENSOR mode when the mobile is rotated in PORTRAIT or PORTRAIT by rotating the screen 180°. |
| LANDSCAPE_SENSOR | Change the screen rotation to LANDSCAPE_SENSOR mode when the mobile is rotated in LANDSCAPE or LANDSCAPE by rotating the screen 270°. |

### Get the screen orientation.
```javascript
//Gets the current orientation in string format.
let orientacion = getOrientacion();
```

### Change the screen orientation.
```javascript
//change the orientation;
setOrientacion(Orientacion.ANY).then((res:boolean)=>{
  console.log(res)
})
```