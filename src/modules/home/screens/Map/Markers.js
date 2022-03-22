import React, {useCallback, useState, useEffect, useContext} from 'react';
import {View, Text, PermissionsAndroid, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {UserContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import useIsMounted from 'react-is-mounted-hook';
const style = EStyleSheet.create(styles);

const Markers = ({updateMap}) => {
  const isMounted = useIsMounted();
  const profile = useContext(UserContext).profile;
  const [users, updateUsers] = useState([]);
  const currentUser = users.find((item) => item.id === profile.id);
  const filteredUsers = users.filter((item) => item.id !== profile.id);

  useFocusEffect(
    useCallback(() => {
      if (isMounted()) watchLocation();

      return () => Geolocation.clearWatch();
    }, []),
  );

  useEffect(() => {
    if (isMounted())
      firestore().collection('map').onSnapshot(onResult, onError);
  }, []);

  const onResult = (querySnapshot) => updateUsers(querySnapshot.docs);

  const onError = (error) => console.log('ERROR ');

  const watchLocation = () => {
    Geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        currentLocation = position.coords;
        firestore()
          .collection('map')
          .doc(profile.id)
          .set({
            latitude,
            longitude,
            ...profile._data,
            lastupdate: Date.now(),
          });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        distanceFilter: 1,
        interval: 10000,
        fastestInterval: 10000,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  const updateDetails = (marker) => {
    updateMap({
      displayMemberDetails: marker._data,
    });
  };

  return users?.length
    ? [
        <Marker
          key="MyMarker"
          coordinate={{
            latitude: currentUser._data.latitude,
            longitude: currentUser._data.longitude,
          }}>
          <View style={style.MyMarkerContainer} key="MyMarker">
            <View style={style.MyMarker1}>
              <View style={style.MyMarker2} />
            </View>
          </View>
        </Marker>,
        filteredUsers.map((marker) => (
          <Marker
            onPress={() => updateDetails(marker)}
            key={marker.id}
            ref={(ref) => console.log('MARKER REF ', ref)}
            coordinate={{
              latitude: marker._data.latitude,
              longitude: marker._data.longitude,
            }}>
            <View style={style.UserMarkerContainer}>
              <View style={style.UserMarker} />
            </View>
          </Marker>
        )),
      ]
    : null;
};

export default Markers;
