import React, {useCallback, useState} from 'react';
import {View, Text, TouchableHighlight, PermissionsAndroid} from 'react-native';
import useIsMounted from 'react-is-mounted-hook';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
// import Geolocation from 'react-native-geolocation-service';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CenterMap from '../../assets/icons/CenterMap';
// import SearchInput from './SearchInput';
import MapView from './MapView';
import MemberDetails from './MemberDetails';

const style = EStyleSheet.create(styles);

const Map = ({navigation}) => {
  const isMounted = useIsMounted();
  const [mapConfig, updateMap] = useState(null);
  const [mapRef, updateRef] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (isMounted()) {
        handleMapPermissions();
      }

      return () => Geolocation.clearWatch();
    }, []),
  );
  const handleMapPermissions = async () => {
    console.log('HANDLE');
    try {
      console.log('TRY');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      console.log('AWAIT ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('CONDITION PASSED', Geolocation);
        // Geolocation.getCurrentPosition(
        //   (position) => {
        //     console.log('UPDATE GEO');
        //     updateMap({
        //       ...mapConfig,
        //       latitudeDelta: 0.01,
        //       longitudeDelta: 0.01,
        //       latitude: position.coords.latitude,
        //       longitude: position.coords.longitude,
        //     });
        //   },
        //   (err) => console.log('ERR ', err),
        //   {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
        // );
        // Geolocation.getCurrentPosition(
        //   (position) => {
        //     console.log(position);
        //   },
        //   (err) => {
        //     updateMapKeys({error: err.message + ' Code ' + err.code});
        //   },
        //   {enableHighAccuracy: false, timeout: 2000, maximumAge: 3600000},
        // );
        console.log('AFTER GEO GET');
      } else {
        console.log('Uhh... Ohh.. Map couldn`t load...');
      }
    } catch (err) {
      console.err('MAP ERROR ', err);
    }
  };

  const centerMap = () => {
    if (mapRef)
      mapRef.animateToRegion({
        latitude: mapConfig.latitude,
        longitude: mapConfig.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
  };

  const updateMapKeys = (keys) => {
    console.log('KEYS ', keys);
    updateMap({
      ...mapConfig,
      ...keys,
    });
  };

  console.log('MAP RE-RENDER___', mapConfig);

  return (
    <View style={style.Map}>
      {mapConfig?.longitude ? (
        <View>
          {/* {mapRef && (
            <SearchInput
              {...mapConfig}
              mapRef={mapRef}
              updateMap={updateMapKeys}
            />
          )} */}
          <MapView
            {...mapConfig}
            // updateMap={updateMapKeys}
            // mapRef={mapRef}
            // updateRef={updateRef}
          />
          {/* Center button */}
          {/* <TouchableHighlight onPress={centerMap} style={style.CenterMap}>
            <CenterMap size={20} color="#fff" />
          </TouchableHighlight> */}
          {/* Member Details */}
          {/* {mapConfig.displayMemberDetails && (
            <MemberDetails
              {...mapConfig}
              updateMap={updateMapKeys}
              navigation={navigation}
            />
          )} */}
        </View>
      ) : (
        <View style={style.MapErrorContainer}>
          <Text style={style.MapError}>
            {mapConfig?.error ?? 'Loading map...'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Map;
