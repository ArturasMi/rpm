import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import {Defaults} from '../../../configs';
import {CameraState, MapActionTypes, MapCoordinates} from './types';

const ActionCreator = {
  getMapList: () => ({
    type: MapActionTypes.USER_USERS_LIST,
    payload: firestore().collection('map').get(),
  }),

  displayUserDetails: data => ({
    type: MapActionTypes.DISPLAY_USER_DETAILS,
    payload: data,
  }),

  search: (string: string) => ({
    type: MapActionTypes.MAP_SEARCH,
    payload: axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        string,
      )}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${
        Defaults.mapboxKEY
      }`,
    ),
  }),

  displayNavigationRoute: (coords: MapCoordinates) => ({
    type: MapActionTypes.NAVIGATION_ROUTE,
    payload: coords,
  }),

  setCoords: (payload: MapCoordinates) => ({
    type: MapActionTypes.SET_COORDS,
    payload,
  }),

  setPinpointing: (payload: boolean) => ({
    type: MapActionTypes.SET_PINPOINTING,
    payload,
  }),

  setCamera: (payload: {}) => (
    console.log('payload? ', payload),
    {
      type: MapActionTypes.SET_CAMERA,
      payload,
    }
  ),

  setOptions: (payload: {}) => ({
    type: MapActionTypes.SET_OPTIONS,
    payload,
  }),
};

export {ActionCreator as MapActions};
