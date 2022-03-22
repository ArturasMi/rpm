import {PermissionsAndroid} from 'react-native';
import Geolocation, {GeoCoordinates} from 'react-native-geolocation-service';
import {MapActions} from '../../../redux/reducers/map/actions';
import {MapCoordinates} from '../../../redux/reducers/map/types';
import {AppDispatch} from '../../../redux/store';

export class MapViewModel {
  constructor(private dispatch: AppDispatch) {}

  getCurrentLocation = async (): Promise<MapCoordinates | null> => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const coords = Geolocation.getCurrentPosition(state => [
        state.coords.latitude,
        state.coords.longitude,
      ]);
      return coords as any;
    }

    return null;
  };

  displayUserDetails = data => {
    this.dispatch(MapActions.displayUserDetails(data));
  };

  displayNavigationRoute = (coords: MapCoordinates) => {
    this.displayUserDetails(undefined);
    this.dispatch(MapActions.displayNavigationRoute(coords));
  };

  setZoom = (number: number) => {
    this.dispatch(MapActions.setZoom(number));
  };

  centerCamera = async () => {
    const currentLocation = await this.getCurrentLocation();
    if (currentLocation)
      this.dispatch(MapActions.setCoords([25.279043, 54.6711717]));
  };

  enablePinpinting = () => {
    this.dispatch(MapActions.setPinpointing(true));
  };

  disablePinpinting = () => {
    this.dispatch(MapActions.setPinpointing(false));
  };

  getCurrentPointLocation = (): MapCoordinates => {
    return [25.2659016, 54.6888759];
  };
}
