import {NavigationType} from '../../../viewmodels/MainViewModel';
import {SiteActionTypes} from './types';

const ActionCreator = {
  updateNavigator: (payload: NavigationType) => ({
    type: SiteActionTypes.UPDATE_SITE_OPTIONS,
    payload: {
      navigator: payload,
    },
  }),
};

export {ActionCreator as SiteActions};
