import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import {Defaults} from '../../../configs';
import {MapActionTypes, MapCoordinates} from './types';

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

  setZoom: (payload: number) => ({
    type: MapActionTypes.SET_ZOOM,
    payload,
  }),

  setCoords: (payload: MapCoordinates) => ({
    type: MapActionTypes.SET_ZOOM,
    payload,
  }),

  setPinpointing: (payload: boolean) => ({
    type: MapActionTypes.SET_PINPOINTING,
    payload,
  }),
};

export {ActionCreator as MapActions};
