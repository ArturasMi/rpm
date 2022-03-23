import {createReducer} from '../../createReducer';
import {AuthActionTypes, UserInterface} from './types';

const initialState: UserInterface = {
  uid: null,
  error: null,
};

const Reduction = {
  user: (
    state: UserInterface,
    action: {
      type: AuthActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case AuthActionTypes.LOGIN_USER_FULFILLED: {
        return {
          uid: action.payload.user.uid,
          email: action.payload.user.email,
          emailVerified: action.payload.user.emailVerified,
        };
      }
      case AuthActionTypes.LOGIN_USER_REJECTED: {
        return {
          ...state,
          error: action.payload.userInfo.message,
        };
      }
      case AuthActionTypes.LOGOUT_FULFILLED: {
        return initialState;
      }
      case AuthActionTypes.LOGIN_RESTORE: {
        return action.payload;
      }
      default:
        return state;
    }
  },

  profile: (
    state: UserInterface,
    action: {
      type: AuthActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case AuthActionTypes.USER_PROFILE_FULFILLED: {
        if (action.payload._data)
          return {
            ...state,
            profile: {...action.payload._data, completed: true},
          };
        else
          return {
            ...state,
            profile: {
              completed: false,
            },
          };
      }
      case AuthActionTypes.USER_PROFILE_REJECTED: {
        return {
          ...state,
          error: action.payload.userInfo.message,
        };
      }
      case AuthActionTypes.UPDATE_TOKKEN_FULFILLED: {
        console.log('TOKEN UPDATE ', action.payload);
        return state;
      }
      case AuthActionTypes.UPDATE_TOKKEN_REJECTED: {
        console.log('TOKEN UPDATE REJECTED', action.payload);
        return state;
      }
      default:
        return {};
    }
  },
};

export const reducer = createReducer(initialState, {
  [AuthActionTypes.LOGIN_USER_FULFILLED]: Reduction.user,
  [AuthActionTypes.LOGIN_USER]: Reduction.user,
  [AuthActionTypes.LOGIN_USER_REJECTED]: Reduction.user,
  [AuthActionTypes.LOGIN_RESTORE]: Reduction.user,
  [AuthActionTypes.USER_PROFILE_FULFILLED]: Reduction.profile,
  [AuthActionTypes.UPDATE_TOKKEN_FULFILLED]: Reduction.profile,
});
