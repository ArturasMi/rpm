import {createReducer} from '../../createReducer';
import {CameraMode, CameraState, MapActionTypes, MapInterface} from './types';

const initialState: MapInterface = {
  list: [],
  pinpointLocation: false,
  camera: {
    state: CameraState.IDLE,
    speed: 2000,
    mode: CameraMode.NORMAL,
    pitch: 0,
    zoom: 18,
  },
  error: null,
};

const Reduction = {
  map: (
    state: MapInterface,
    action: {
      type: MapActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case MapActionTypes.USER_USERS_LIST_FULFILLED: {
        return {
          ...state,
          list: action.payload._docs,
          error: null,
        };
      }
      case MapActionTypes.USER_USERS_LIST_REJECTED: {
        return {
          ...state,
          error: action.payload.userInfo.message,
        };
      }
      case MapActionTypes.DISPLAY_USER_DETAILS: {
        return {
          ...state,
          userDetails: action.payload,
        };
      }
      case MapActionTypes.MAP_SEARCH_FULFILLED: {
        return {
          ...state,
          search: action.payload.data,
          error: null,
        };
      }
      case MapActionTypes.MAP_SEARCH_REJECTED: {
        return {
          ...state,
          search: [],
          error: action.payload.userInfo.message,
        };
      }
      case MapActionTypes.NAVIGATION_ROUTE: {
        return {
          ...state,
          search: undefined,
          route: action.payload,
        };
      }
      case MapActionTypes.SET_CAMERA: {
        console.log('NEW CAMERA STATE ', {
          ...state,
          camera: {
            ...action.payload,
          },
        });
        return {
          ...state,
          camera: {
            ...action.payload,
          },
        };
      }
      case MapActionTypes.SET_COORDS: {
        return {
          ...state,
          coords: [...action.payload],
        };
      }
      case MapActionTypes.SET_PINPOINTING: {
        return {
          ...state,
          pinpointLocation: action.payload,
        };
      }

      case MapActionTypes.SET_OPTIONS: {
        return {
          ...state,
          ...action.payload,
        };
      }
      default:
        return state;
    }
  },
};

export const reducer = createReducer(initialState, {
  [MapActionTypes.USER_USERS_LIST_FULFILLED]: Reduction.map,
  [MapActionTypes.USER_USERS_LIST_REJECTED]: Reduction.map,
  [MapActionTypes.DISPLAY_USER_DETAILS]: Reduction.map,
  [MapActionTypes.MAP_SEARCH_REJECTED]: Reduction.map,
  [MapActionTypes.MAP_SEARCH_FULFILLED]: Reduction.map,
  [MapActionTypes.NAVIGATION_ROUTE]: Reduction.map,
  [MapActionTypes.SET_PINPOINTING]: Reduction.map,
  [MapActionTypes.SET_OPTIONS]: Reduction.map,
  // Should be removed
  [MapActionTypes.SET_COORDS]: Reduction.map,
  [MapActionTypes.SET_CAMERA]: Reduction.map,
});
