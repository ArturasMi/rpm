import auth, {firebase} from '@react-native-firebase/auth';
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
  restore: (payload: {uid: string; email: string; emailVerified: boolean}) => ({
    type: AuthActionTypes.LOGIN_RESTORE,
    payload,
  }),
  updateToken: (userId: string, token: string) => ({
    type: AuthActionTypes.UPDATE_TOKKEN,
    payload: firestore()
      .collection('users')
      .doc(userId)
      .update({
        deviceId: firestore.FieldValue.arrayUnion(token),
      }),
  }),
  logout: () => ({
    type: AuthActionTypes.LOGOUT,
    payload: auth().signOut(),
  }),
};

export {ActionCreator as AuthActions};
