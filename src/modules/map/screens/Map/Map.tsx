import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Text, View} from 'react-native';
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
  CenterMap,
} from '../../components';
import {Defaults} from '../../../../configs';
import {Screens} from '../../../../navigation/Screens';
import {LocationPinpoint} from '../../components/LocationPinpoint/LocationPinpoint';
import {MapViewModel} from '../../viewmodels';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {GlobalState} from '../../../../redux/reducers';
import {MapCoordinates} from '../../../../redux/reducers/map/types';

const accessToken = Defaults.mapboxKEY;
MapboxGL.setAccessToken(accessToken);

const style = EStyleSheet.create(styles);

export const Map = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {init} = new MapViewModel(dispatch);
  const mapSelector = useSelector((state: GlobalState) => state.map);
  const [coords, setCoords] = useState<MapCoordinates>(mapSelector.coords);

  useEffect(() => {
    if (mapSelector.coords) {
      setCoords(mapSelector.coords);
    }
  }, [mapSelector.coords]);

  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED)
        navigation.navigate(Screens.HOME);
      else init();
    })();
  }, []);
  return (
    <View style={style.Map}>
      {coords && (
        <MapboxGL.MapView
          style={styles.MapView}
          compassEnabled={false}
          // surfaceView
          styleURL="mapbox://styles/wveiz/cl0xy6yue001814qjl7vv59c5">
          <MapCamera />
          <MapMarkers />
          <NavigationRoute />
        </MapboxGL.MapView>
      )}
      <CenterMap />
      <LocationPinpoint />
      <MemberDetails />
      <MapInput />
      <MapSearchResults />
      <Text
        style={{
          position: 'absolute',
          bottom: 70,
          left: 20,
          color: 'white',
        }}>
        You are navigating to @Vadim
      </Text>
    </View>
  );
};
