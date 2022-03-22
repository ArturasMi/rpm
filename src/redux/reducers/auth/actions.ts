import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AuthActionTypes, AuthFormType, UserProfileType} from './types';

const ActionCreator = {
  login: (payload: AuthFormType) => ({
    type: AuthActionTypes.LOGIN_USER,
    payload: auth().signInWithEmailAndPassword(payload.email, payload.password),
  }),
  getProfile: (payload: string) => ({
    type: AuthActionTypes.USER_PROFILE,
    payload: firestore().collection('users').doc(payload).get(),
  }),
  createProfile: (payload: UserProfileType, id: string) => ({
    type: AuthActionTypes.USER_CREATE_PROFILE,
    payload: firestore().collection('users').doc(id).set(payload),
  }),
};

export {ActionCreator as AuthActions};
