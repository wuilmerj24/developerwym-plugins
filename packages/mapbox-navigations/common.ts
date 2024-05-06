import { ContentView, Property } from '@nativescript/core';

export class MapboxNavigationsCommon extends ContentView {
  @GetSetProperty()
  public token: string;
  @GetSetProperty()
  public latLngDestination: string;
  @GetSetProperty()
  public routeReplayEnabled: boolean;
  @GetSetProperty()
  public startRoutePreview: boolean;
  @GetSetProperty()
  public startActiveGuidance: boolean;
  @GetSetProperty()
  public startArrival: boolean;
  @GetSetProperty()
  public startFreeDrive: boolean;

  public sendEvent(eventName: string, data?: Array<any>, msg?: string) {
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }
}

export function GetSetProperty() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        if (this['_' + propertyKey] === value) {
          return;
        }
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        this['_' + propertyKey] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
