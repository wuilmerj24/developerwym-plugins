import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCountryCode } from '@demo/shared';
import { getCurrentPais, showListPaises, listaCodigos } from '@arepa/country-code';

let codigos: Array<any> = new Array();
export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  codigos = listaCodigos;
}

export function getPais(args: EventData) {
  getCurrentPais(true)
    .then((res) => {
      console.log('res', res);
    })
    .catch((er) => {
      console.log('er', er);
    });
}

export function showLis(args: EventData) {
  showListPaises()
    .then((res) => {
      console.log('res', res);
    })
    .catch((er) => {
      console.log('er', er);
    });
}

export class DemoModel extends DemoSharedCountryCode {}
