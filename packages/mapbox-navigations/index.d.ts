import { MapboxNavigationsCommon } from './common';

export declare class MapboxNavigations extends MapboxNavigationsCommon {
  public token: string;
  public latLngDestination: string;
  public routeReplayEnabled: boolean;
  public startRoutePreview: boolean;
  public startActiveGuidance: boolean;
  public startArrival: boolean;
  public startFreeDrive: boolean;
}
