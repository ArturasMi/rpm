import {createReducer} from '../../createReducer';
import {GalleryActionTypes, GalleryInterface} from './types';

const initialState: GalleryInterface = {
  list: [],
  error: null,
};

const Reduction = {
  user: (
    state: GalleryInterface,
    action: {
      type: GalleryActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case GalleryActionTypes.GET_GALLERY_FULFILLED: {
        return {
          list: action.payload._docs,
        };
      }
      case GalleryActionTypes.GET_GALLERY: {
        return {
          list: action.payload.data._docs,
        };
      }
      case GalleryActionTypes.GET_GALLERY_REJECTED: {
        return {
          ...state,
          error: action.payload.userInfo.message,
        };
      }
      default:
        return state;
    }
  },
};

export const reducer = createReducer(initialState, {
  [GalleryActionTypes.GET_GALLERY_FULFILLED]: Reduction.user,
  [GalleryActionTypes.GET_GALLERY]: Reduction.user,
  [GalleryActionTypes.GET_GALLERY_REJECTED]: Reduction.user,
});
