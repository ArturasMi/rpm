import MapboxGL from '@react-native-mapbox-gl/maps';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {ProgressiveImage} from '../../../../components';
import {timeAgo} from '../../../../helpers/dates';
import {GlobalState} from '../../../../redux/reducers';
import {styles} from './styles';
import {Colors, Defaults} from '../../../../configs';
import {MapViewModel} from '../../viewmodels';
import {AppDispatch} from '../../../../redux/store';

const style = EStyleSheet.create(styles);
const accessToken = Defaults.mapboxKEY;
const directionsClient = MapboxDirectionsFactory({accessToken});

export const NavigationRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const detailsSelector = useSelector((state: GlobalState) => state.map.route);
  const [route, setRoute] = useState(undefined);
  const {getCurrentLocation} = new MapViewModel(dispatch);
  useEffect(() => {
    if (detailsSelector) setDefaultLocation();
  }, [detailsSelector]);

  const setDefaultLocation = async () => {
    // const location = await getCurrentLocation();
    const reqOptions = {
      waypoints: [
        {coordinates: [25.279043, 54.6711717]},
        {coordinates: detailsSelector},
      ],
      profile: 'driving',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    //const route = makeLineString(res.body.routes[0].geometry.coordinates)
    const route = makeLineString(res.body.routes[0].geometry.coordinates);
    setRoute(route);
  };

  if (!detailsSelector || !route) return null;
  return (
    <>
      <MapboxGL.ShapeSource id="miau" shape={route}>
        <MapboxGL.LineLayer
          id="linelayer1"
          style={{
            lineColor: Colors.colorMain,
            lineWidth: 5,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />
      </MapboxGL.ShapeSource>
      <MapboxGL.ShapeSource id="miau2" shape={route}>
        <MapboxGL.LineLayer
          id="linelayer2"
          style={{
            lineColor: Colors.colorMain,
            lineWidth: 34,
            lineCap: 'round',
            lineJoin: 'round',
            lineBlur: 30,
          }}
        />
      </MapboxGL.ShapeSource>
    </>
  );
};
