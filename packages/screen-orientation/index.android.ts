import { Application } from '@nativescript/core';

export const Orientacion = Object.freeze({
  ANY: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED,
  PORTRAIT: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT,
  PORTRAIT_REVERSE: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT,
  PORTRAIT_SENSOR: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT,
  LANDSCAPE: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE,
  LANDSCAPE_REVERSE: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE,
  LANDSCAPE_SENSOR: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE,
  UNSPECIFIED: android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED,
});

export let setOrientacion = async function (orientacion: number): Promise<any> {
  return new Promise(async (rs, rj) => {
    try {
      await Application.android.foregroundActivity.setRequestedOrientation(orientacion);
      rs(true);
    } catch (e) {
      console.log('Error setOrientacion: ', e);
      if (rj) {
        rj(e);
      }
    }
  });
};

export let getOrientacion = () => {
  return nombreOrientacion(Application.android.context.getResources().getConfiguration().orientation);
};

function nombreOrientacion(orientacion: number): string {
  if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED) {
    return 'ANY';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT) {
    return 'PORTRAIT';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT) {
    return 'PORTRAIT_REVERSE';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT) {
    return 'PORTRAIT_SENSOR';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE) {
    return 'LANDSCAPE';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE) {
    return 'LANDSCAPE_REVERSE';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE) {
    return 'LANDSCAPE_SENSOR';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_USER) {
    return 'USER_ORIENTACION';
  } else if (orientacion === android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED) {
    return 'UNSPECIFIED';
  }
}
