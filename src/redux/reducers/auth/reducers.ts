import {createReducer} from '../../createReducer';
import {AuthActionTypes, UserInterface} from './types';

const initialState: UserInterface = {
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
      default:
        return state;
    }
  },
};

export const reducer = createReducer(initialState, {
  [AuthActionTypes.LOGIN_USER_FULFILLED]: Reduction.user,
  [AuthActionTypes.LOGIN_USER]: Reduction.user,
  [AuthActionTypes.LOGIN_USER_REJECTED]: Reduction.user,
});
