import { action, ActionBar, ActionItem, ActionItems, Application, Builder, Button, Color, CoreTypes, Frame, getCurrentPage, getRootLayout, GridLayout, GridUnitType, ItemSpec, Label, Page, RootLayout, Screen, SearchBar, ShowModalOptions, StackLayout, View, Image, ListView, ItemEventData, EventData, TextField, Utils, TextView } from '@nativescript/core';
import { Codigos, CodigosI, Lista } from './common';
import { check as checkPermission, request as requestPermission, checkMultiple, ObjectPermissions, ObjectPermissionsRest } from '@nativescript-community/perms';

let codigos: Array<any> = new Array();

export function getCurrentPais(addPlus: boolean): Promise<any> {
  return new Promise((rs, rj) => {
    let cod: Array<CodigosI> = Codigos;
    return requestPermission({
      'android.permission.READ_PHONE_STATE': {},
      'android.permission.READ_SMS': {},
      'android.permission.READ_PHONE_NUMBERS': {},
    }).then((response) => {
      console.log(response);
      const authorizedPermissions: string[] = [];
      for (const key in response) {
        if (response[key] === 'authorized') {
          authorizedPermissions.push(key);
        }
      }
      if (authorizedPermissions.filter((item) => item !== 'authorized').length > 0) {
        try {
          let context: android.content.Context = Application.android.context;
          let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
          let locale: string = manager.getNetworkCountryIso();
          let countryCode: Array<CodigosI> = cod.filter((item) => item.iso2.toUpperCase() === locale.toUpperCase());
          if (countryCode.length > 0) {
            rs({ pais: countryCode[0].nombre, codigo: addPlus ? `+${countryCode[0].codigo}` : countryCode[0].codigo, numCell: addPlus ? manager.getLine1Number() : manager.getLine1Number().substring(1) });
          } else {
            rj({ error: 'Pais no encontrado' });
          }
        } catch (error) {
          console.log(error);
          rj({ error: error });
        }
      }
    });
  });
}

export let listaCodigos: Array<CodigosI> = Codigos;

export function showListPaises(): Promise<any> {
  return new Promise((rs, rj) => {
    const options: ShowModalOptions = {
      closeCallback(...args) {
        if (args.length > 0) {
          rs(args);
        } else {
          rj(null);
        }
      },
      context: {},
      animated: true,
      fullscreen: true,
      stretched: true,
    };
    getCurrentPage().showModal(new Lista(), options);
  });
}
