import Geolocation from '@react-native-community/geolocation';
import {MapActions} from '../../../redux/reducers/map/actions';
import {MapCoordinates} from '../../../redux/reducers/map/types';
import {AppDispatch} from '../../../redux/store';

export class MapViewModel {
  constructor(private dispatch: AppDispatch) {}

  setCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log('SET COORDS TO REDUX ', [
        info.coords.latitude,
        info.coords.longitude,
      ]);
      this.dispatch(
        MapActions.setCoords([info.coords.longitude, info.coords.latitude]),
      );
    });
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
    // const currentLocation = await this.getCurrentLocation();
    // if (currentLocation)
    //   this.dispatch(MapActions.setCoords([25.279043, 54.6711717]));
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
