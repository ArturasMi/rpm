import MapboxGL from '@react-native-mapbox-gl/maps';
import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useSelector} from 'react-redux';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';
import {GlobalState} from '../../../../redux/reducers';
import {styles} from './styles';
import {Colors, Defaults} from '../../../../configs';
import Geolocation from '@react-native-community/geolocation';

const style = EStyleSheet.create(styles);
const accessToken = Defaults.mapboxKEY;
const directionsClient = MapboxDirectionsFactory({accessToken});

export const NavigationRoute = () => {
  const detailsSelector = useSelector((state: GlobalState) => state.map.route);
  const [route, setRoute] = useState(undefined);

  // Listen for the route
  useEffect(() => {
    handleRoute(detailsSelector);
  }, [detailsSelector]);

  // Create / remove route line
  const handleRoute = async (coords: any) => {
    if (detailsSelector)
      Geolocation.getCurrentPosition(async info => {
        const reqOptions = {
          waypoints: [
            {coordinates: [info.coords.longitude, info.coords.latitude]},
            {coordinates: [coords[1], coords[0]]},
          ],
          profile: 'driving',
          geometries: 'geojson',
          overview: 'full',
        };

        const res = await directionsClient.getDirections(reqOptions).send();
        const route = makeLineString(res.body.routes[0].geometry.coordinates);
        setRoute(route);
      });
    else setRoute(undefined);
  };

  if (!route) return null;

  return (
    <>
      <MapboxGL.ShapeSource id="miau" shape={route}>
        <MapboxGL.LineLayer
          id="linelayer1"
          style={{
            lineColor: Colors.Primary200,
            lineWidth: 5,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />
      </MapboxGL.ShapeSource>

      {/* Shadow is being funny when zoomed out */}
      {/* <MapboxGL.ShapeSource id="miau2" shape={route}>
        <MapboxGL.LineLayer
          id="linelayer2"
          style={{
            lineColor: Colors.Primary200,
            lineWidth: 34,
            lineCap: 'round',
            lineJoin: 'round',
            lineBlur: 30,
          }}
        />
      </MapboxGL.ShapeSource> */}
    </>
  );
};
