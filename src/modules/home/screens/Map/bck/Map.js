import React, {useCallback, useState, useEffect, useContext} from 'react';
import {View, Text, TouchableHighlight, PermissionsAndroid} from 'react-native';
import useIsMounted from 'react-is-mounted-hook';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {UserContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import mapTheme from './MapTheme';
import CenterMap from '../../assets/icons/CenterMap';

import Markers from './Markers';
import MemberDetails from './MemberDetails';

const style = EStyleSheet.create(styles);
let mapRef = null;

const Map = ({navigation}) => {
  const isMounted = useIsMounted();
  const [defaultCoords, updateDefaultCoords] = useState({});
  const [displayLocationPicker, updateLocationPicker] = useState(false);
  const [displayDetails, updateDetails] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (isMounted()) {
        handleMapPermissions();
      }

      return () => Geolocation.clearWatch();
    }, []),
  );
  const handleMapPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition((position) => {
          updateDefaultCoords(position.coords);
        });
      } else {
        error('Uhh... Ohh.. Map couldn`t load...');
      }
    } catch (err) {
      console.err('MAP ERROR ', err);
    }
  };

  const centerMap = () => {
    if (mapRef)
      mapRef.animateToRegion({
        latitude: defaultCoords.latitude,
        longitude: defaultCoords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
  };

  return (
    <View style={style.Map}>
      {defaultCoords?.latitude && defaultCoords?.longitude ? (
        <View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={style.MapView}
            ref={(ref) => {
              if (ref) mapRef = ref;
            }}
            initialRegion={{
              latitude: defaultCoords.latitude,
              longitude: defaultCoords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            zoomControlEnabled={false}
            customMapStyle={mapTheme}
            showsPointsOfInterest={false}
            showsMyLocationButton={false}
            toolbarEnabled={false}
            showsCompass={false}>
            {/* Markers */}
            <Markers updateDetails={updateDetails} />
          </MapView>
          {/* Center button */}
          <TouchableHighlight onPress={centerMap} style={style.CenterMap}>
            <CenterMap size={20} color="#fff" />
          </TouchableHighlight>
          {/* Member Details */}
          {displayDetails && (
            <MemberDetails
              displayLocationPicker={displayLocationPicker}
              updateLocationPicker={updateLocationPicker}
              displayDetails={displayDetails}
              updateDetails={updateDetails}
              position={defaultCoords}
              navigation={navigation}
            />
          )}
        </View>
      ) : (
        <View style={style.MapErrorContainer}>
          <Text style={style.MapError}>
            {defaultCoords.error ?? 'Loading map...'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Map;
