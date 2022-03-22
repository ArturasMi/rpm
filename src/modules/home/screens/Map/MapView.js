import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Markers from './Markers';
import mapTheme from './MapTheme';
import MapViewDirections from 'react-native-maps-directions';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
const style = EStyleSheet.create(styles);

const MapViewBox = ({
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
  destination,
  updateRef,
  mapRef,
  camera,
  updateMap,
}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      ref={(ref) => {
        if (!mapRef && ref) updateRef(ref);
      }}
      style={style.MapView}
      // onLayout={() => {
      //   console.log('MAP REF ', mapRef);
      //   mapRef.animateToBearing(125);
      //   mapRef.animateToViewingAngle(65);
      //   mapRef.zoom(4);
      // }}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
      zoomControlEnabled={false}
      customMapStyle={mapTheme}
      showsPointsOfInterest={false}
      showsMyLocationButton={false}
      toolbarEnabled={false}
      showsCompass={false}
      camera={camera}>
      {/* Markers */}

      {/* <Markers updateMap={updateMap} />
      {destination && (
        <MapViewDirections
          origin={{longitude, latitude, latitudeDelta, longitudeDelta}}
          destination={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          strokeWidth={3}
          strokeColor={config.colorMain}
          apikey={'AIzaSyDYqMNlDvZv8_X5cwJmWmtqCDLqmoXjRlo'}
        />
      )} */}
    </MapView>
  );
};

export default MapViewBox;
