import {PermissionsAndroid} from 'react-native';
import Geolocation, {GeoCoordinates} from 'react-native-geolocation-service';
import {AuthActions} from '../../../redux/reducers/auth/actions';
import {UserProfileType} from '../../../redux/reducers/auth/types';
import {MapActions} from '../../../redux/reducers/map/actions';
import {MapCoordinates} from '../../../redux/reducers/map/types';
import {AppDispatch} from '../../../redux/store';

export class AuthViewModel {
  constructor(private dispatch: AppDispatch) {}

  createProfile = (profile: UserProfileType, id: string) => {
    this.dispatch(AuthActions.createProfile(profile, id));
  };
}
