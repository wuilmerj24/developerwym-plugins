export const Orientacion = Object.freeze({
  ANY: UIInterfaceOrientation.Unknown,
  PORTRAIT: UIInterfaceOrientation.Portrait,
  PORTRAIT_REVERSE: UIInterfaceOrientation.PortraitUpsideDown,
  LANDSCAPE: UIInterfaceOrientation.LandscapeRight,
  LANDSCAPE_REVERSE: UIInterfaceOrientation.LandscapeLeft,
  UNSPECIFIED: UIInterfaceOrientation.Unknown,
});

export let setOrientacion = async function (orientacion: number): Promise<any> {
  return new Promise(async (rs, rj) => {
    try {
      await UIDevice.currentDevice.setValueForKey(orientacion, 'orientation');
      rs(true);
    } catch (e) {
      console.log(e);
      if (rj) {
        rj(e);
      }
    }
  });
};

export let getOrientacion = () => {
  return nombreOrientacion(UIDevice.currentDevice.orientation);
};

function nombreOrientacion(orientacion: number): string {
  if (orientacion === UIInterfaceOrientation.Unknown) {
    return 'ANY';
  } else if (orientacion === UIInterfaceOrientation.Portrait) {
    return 'PORTRAIT';
  } else if (orientacion === UIInterfaceOrientation.PortraitUpsideDown) {
    return 'PORTRAIT_REVERSE';
  } else if (orientacion === UIInterfaceOrientation.LandscapeRight) {
    return 'LANDSCAPE';
  } else if (orientacion === UIInterfaceOrientation.LandscapeLeft) {
    return 'LANDSCAPE_REVERSE';
  } else {
    return 'SIN ESPECIFICAR';
  }
}
