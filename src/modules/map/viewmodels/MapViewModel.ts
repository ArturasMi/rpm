import Geolocation from '@react-native-community/geolocation';
import {MapActions} from '../../../redux/reducers/map/actions';
import {
  CameraMode,
  CameraState,
  MapCoordinates,
} from '../../../redux/reducers/map/types';
import {AppDispatch, store} from '../../../redux/store';
import firestore from '@react-native-firebase/firestore';

export class MapViewModel {
  constructor(private dispatch: AppDispatch) {}

  init = () => {
    const user = store.getState().auth;

    this.centerCamera(async (coords: MapCoordinates) => {
      firestore()
        .collection('map')
        .doc(user.uid)
        .set({
          ...user.profile,
          lastupdate: Date.now(),
          longitude: coords[0],
          latitude: coords[1],
        });
    });
  };

  displayUserDetails = data => {
    this.dispatch(MapActions.displayUserDetails(data));
  };

  displayNavigationRoute = (coords: MapCoordinates) => {
    this.displayUserDetails(undefined);
    this.dispatch(MapActions.displayNavigationRoute(coords));
    this.centerCamera();

    setTimeout(() => {
      this.dispatch(
        MapActions.setCamera({
          mode: CameraMode.COURSE,
        }),
      );
    });
  };

  centerCamera = (callback?: any) => {
    this.dispatch(
      MapActions.setCamera({
        state: CameraState.BEGIN,
        zoom: 18,
      }),
    );
    Geolocation.getCurrentPosition(info => {
      this.dispatch(
        MapActions.setCoords([info.coords.longitude, info.coords.latitude]),
      );

      callback?.([info.coords.longitude, info.coords.latitude]);
    });
  };

  enablePinpinting = () => {
    this.dispatch(MapActions.setPinpointing(true));
  };

  disablePinpinting = () => {
    this.dispatch(MapActions.setPinpointing(false));
  };
}
