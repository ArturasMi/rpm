import {NavigationType} from '../../../viewmodels/MainViewModel';

export interface SiteInterface {
  navigator: NavigationType;
}

export enum SiteActionTypes {
  UPDATE_SITE_OPTIONS = 'UPDATE_SITE_OPTIONS',
}
