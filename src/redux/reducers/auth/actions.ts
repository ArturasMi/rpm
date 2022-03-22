import auth from '@react-native-firebase/auth';
import {AuthActionTypes, AuthFormType} from './types';

const ActionCreator = {
  login: (payload: AuthFormType) => ({
    type: AuthActionTypes.LOGIN_USER,
    payload: auth().signInWithEmailAndPassword(payload.email, payload.password),
  }),
};

export {ActionCreator as AuthActions};
