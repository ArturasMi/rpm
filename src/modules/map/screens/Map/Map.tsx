import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import MapboxGL from '@react-native-mapbox-gl/maps';

import {
  MapInput,
  MapMarkers,
  MemberDetails,
  MapSearchResults,
  NavigationRoute,
  MapCamera,
} from '../../components';
import {Defaults} from '../../../../configs';
import {Screens} from '../../../../navigation/Screens';
import {LocationPinpoint} from '../../components/LocationPinpoint/LocationPinpoint';
import {MapViewModel} from '../../viewmodels';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {GlobalState} from '../../../../redux/reducers';
import {MapCoordinates} from '../../../../redux/reducers/map/types';

const accessToken = Defaults.mapboxKEY;
MapboxGL.setAccessToken(accessToken);

const style = EStyleSheet.create(styles);

export const Map = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {setCurrentLocation} = new MapViewModel(dispatch);
  const mapSelector = useSelector((state: GlobalState) => state.map);
  const [coords, setCoords] = useState<MapCoordinates>(mapSelector.coords);
  useEffect(() => {
    console.log('MAP SELECTOR UPDATE ', mapSelector);
    if (mapSelector.coords) {
      setCoords(mapSelector.coords);
    }
  }, [mapSelector.coords]);

  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate(Screens.HOME);
      } else {
        setCurrentLocation();
      }
    })();
  }, []);

  return (
    <View style={style.Map}>
      {coords && (
        <MapboxGL.MapView
          style={styles.MapView}
          compassEnabled={false}
          surfaceView
          styleURL="mapbox://styles/wveiz/cl0xy6yue001814qjl7vv59c5">
          <MapCamera />
          <MapMarkers />
          <NavigationRoute />
        </MapboxGL.MapView>
      )}
      <LocationPinpoint />
      <MemberDetails />
      <MapInput />
      <MapSearchResults />
    </View>
  );
};
