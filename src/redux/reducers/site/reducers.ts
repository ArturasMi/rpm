import {NavigationType} from '../../../viewmodels/MainViewModel';
import {createReducer} from '../../createReducer';
import {SiteActionTypes, SiteInterface} from './types';

const initialState: SiteInterface = {
  navigator: NavigationType.AUTH_STACK,
};

const Reduction = {
  site: (
    state: SiteInterface,
    action: {
      type: SiteActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case SiteActionTypes.UPDATE_SITE_OPTIONS: {
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
  [SiteActionTypes.UPDATE_SITE_OPTIONS]: Reduction.site,
});
