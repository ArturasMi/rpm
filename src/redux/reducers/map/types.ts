import {UserProfileType} from '../auth/types';

export interface MapInterface {
  list: Array<any>;
  userDetails?: UserProfileType;
  search?: any;
  route?: any;
  coords?: [number, number];
  camera: {
    zoom: number;
    state: CameraState;
    speed: number;
    mode: CameraMode;
    pitch: number;
  };
  pinpointLocation: boolean;
  error: string | null;
}

export enum MapActionTypes {
  USER_USERS_LIST = 'USER_USERS_LIST',
  USER_USERS_LIST_FULFILLED = 'USER_USERS_LIST_FULFILLED',
  USER_USERS_LIST_REJECTED = 'USER_USERS_LIST_REJECTED',
  DISPLAY_USER_DETAILS = 'DISPLAY_USER_DETAILS',
  DISPLAY_USER_DETAILS_FULFILLED = 'DISPLAY_USER_DETAILS_FULFILLED',
  DISPLAY_USER_DETAILS_REJECTED = 'DISPLAY_USER_DETAILS_REJECTED',
  MAP_SEARCH = 'MAP_SEARCH',
  MAP_SEARCH_FULFILLED = 'MAP_SEARCH_FULFILLED',
  MAP_SEARCH_REJECTED = 'MAP_SEARCH_REJECTED',
  NAVIGATION_ROUTE = 'NAVIGATION_ROUTE',
  SET_OPTIONS = 'SET_OPTIONS',

  // Should not be used anymore
  SET_ZOOM = 'SET_ZOOM',
  SET_COORDS = 'SET_COORDS',
  SET_PINPOINTING = 'SET_PINPOINTING',
  SET_CAMERA = 'SET_CAMERA',
}

export type MapCoordinates = [number, number];

export enum CameraState {
  IDLE = 'IDLE',
  BEGIN = 'BEGIN',
  MOVING = 'MOVING',
}

export enum CameraMode {
  COURSE = 'course',
  NORMAL = 'compass',
}
