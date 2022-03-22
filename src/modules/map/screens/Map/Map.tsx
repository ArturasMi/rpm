import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, PermissionsAndroid, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {MapViewModel} from '../../viewmodels';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {GlobalState} from '../../../../redux/reducers';
// import * as testing from '@wveiz/react-native-mapbox-navigation';
import {
  MapInput,
  MapMarkers,
  MemberDetails,
  MapSearchResults,
  NavigationRoute,
} from '../../components';
import {Colors, Defaults} from '../../../../configs';
import {MapCoordinates} from '../../../../redux/reducers/map/types';
import Location from '../../../../assets/icons/Location';
import {Button} from '../../../../components';

const accessToken = Defaults.mapboxKEY;
MapboxGL.setAccessToken(accessToken);

const style = EStyleSheet.create(styles);

export const Map = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cameraRef = useRef();
  const mapSelector = useSelector((state: GlobalState) => state.map);
  const [zoom, setZoom] = useState<number>(mapSelector.zoomLevel);
  const [coords, setCoords] = useState<MapCoordinates>(mapSelector.coords);
  const [pinpoint, setPinpoint] = useState<boolean>(
    mapSelector.pinpointLocation,
  );
  const {getCurrentPointLocation, displayNavigationRoute, disablePinpinting} =
    new MapViewModel(dispatch);

  useEffect(() => {
    if (mapSelector.zoomLevel) setZoom(mapSelector.zoomLevel);
  }, [mapSelector.zoomLevel]);

  useEffect(() => {
    if (mapSelector.coords) {
      setCoords(mapSelector.coords);
    }
  }, [mapSelector.coords]);

  useEffect(() => {
    setPinpoint(mapSelector.pinpointLocation);
  }, [mapSelector.pinpointLocation]);

  useEffect(() => {
    async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate('Home');
      }
    };
    dispatch(MapActions.getMapList());
  }, []);

  return (
    <View style={style.Map}>
      <MapboxGL.MapView
        style={styles.MapView}
        surfaceView
        styleURL="mapbox://styles/wveiz/cl0xy6yue001814qjl7vv59c5">
        <MapboxGL.Camera
          zoomLevel={zoom}
          centerCoordinate={coords}
          pitch={60}
          animationDuration={3000}
          followUserMode={'course'}
          followZoomLevel={14}
          ref={cameraRef}
        />
        <MapMarkers />
        <NavigationRoute />
      </MapboxGL.MapView>
      {pinpoint && (
        <View
          style={{
            position: 'absolute',
            top: Dimensions.get('screen').height / 2 - 20,
            left: Dimensions.get('screen').width / 2 - 20,
            width: 40,
            height: 40,
            zIndex: 12,
          }}>
          <Location size={40} color={Colors.colorMain} />
        </View>
      )}

      {pinpoint && (
        <View
          style={{
            position: 'absolute',
            bottom: 90,
            left: 20,
            right: 20,
            zIndex: 12,
          }}>
          <Button
            value="Submit meet point"
            onPress={() => {
              displayNavigationRoute(getCurrentPointLocation());
              disablePinpinting();
            }}
          />
        </View>
      )}
      <MemberDetails />
      <MapInput />
      <MapSearchResults />
    </View>
  );
};
