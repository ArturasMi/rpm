import {AuthActions} from '../../../redux/reducers/auth/actions';
import {SiteActions} from '../../../redux/reducers/site/actions';
import {UserProfileType} from '../../../redux/reducers/auth/types';
import {AppDispatch} from '../../../redux/store';
import {handleYupErrors} from '../../../helpers/functions';
import {NavigationType} from '../../../viewmodels/MainViewModel';
import messaging from '@react-native-firebase/messaging';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().min(3).max(100),
  password: yup.string().min(6).max(100),
});

const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(100),
  lastname: yup.string().min(3).max(100),
  email: yup.string().email().min(3).max(100),
  city: yup.string().min(3).max(100),
  wdyhau: yup.string(),
  why: yup.string().min(3).max(500),
  rules: yup.boolean().oneOf([true], 'rules You must agree with rules'),
  privacy: yup.boolean().oneOf([true], 'privacy You must agree with privacy'),
});
export class AuthViewModel {
  constructor(private dispatch: AppDispatch) {}

  createProfile = (profile: UserProfileType, id: string) => {
    this.dispatch(AuthActions.createProfile(profile, id));
  };

  updateToken = (uid: string) => {
    messaging()
      .getToken()
      .then(token => {
        this.dispatch(AuthActions.updateToken(uid, token));
      });
  };

  logout = () => {
    this.dispatch(AuthActions.logout());
    this.dispatch(SiteActions.updateNavigator(NavigationType.AUTH_STACK));
  };

  submitLoginForm = (form, setErrors) => {
    loginSchema
      .validate(form, {
        abortEarly: false,
        strict: false,
      })
      .then(() => {
        this.dispatch(AuthActions.login(form));
      })
      .catch(err => {
        handleYupErrors(err, setErrors);
      });
  };

  submitRegisterForm = (form, setErrors) => {
    registerSchema
      .validate(form, {
        abortEarly: false,
        strict: false,
      })
      .then(() => {
        // Technically people should be allowed to register only with invitation
        // And current register form is just a request to get invitation to club.
        // @TODO
        // this.dispatch(AuthActions.register(form));
      })
      .catch(err => {
        handleYupErrors(err, setErrors);
      });
  };
}
