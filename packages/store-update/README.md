# store-update

# NativeScript Plugin check and update app.

<a href="https://www.npmjs.com/package/@arepa/store-update">
    <img src="https://img.shields.io/npm/dt/@arepa/store-update.svg?label=npm%20downloads" alt="npm">
</a>

# @arepa/store-update

```javascript
npm install @arepa/store-update
```

## Methods
| Method | Description | Android | iOS |
| ------ | ----------- | ------- | --- |
| getVersionCode() | Return versionCode of the app. | ✓ | ✓ |
| getVersionName() | Return versionName of the app. | ✓ | ✓ |
| getVersionNube() | Return versionCode of the app in playstore and appstore. | ✓ | ✓ |
| checkUpdate(force?:boolean) | Check if there is a new version on the App Store and Play Store. | ✓ | ✓ |
| checkUpdateNative() | Update the Android app without exiting the app. | ✓ | ❌ |

Apache License Version 2.0
