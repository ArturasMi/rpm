import React, {useCallback, useState, useEffect, useContext} from 'react';
import {View, Text, PermissionsAndroid, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import {UserContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import mapTheme from './MapTheme';
import {hasGms} from 'react-native-device-info';
import ProgressiveImage from '../../components/ProgressiveImage';
import Car from '../../assets/icons/Car';
import {Button} from '../../components/Forms';
import Close from '../../assets/icons/Close';
import {timeAgo} from '../../helpers/dates';

const style = EStyleSheet.create(styles);

let mapRef = null;
let currentLocation = null;
let meetingLocation = null;

const Map = () => {
  const [defaultCoords, updateDefaultCoords] = useState({});
  const [displayDetails, updateDetails] = useState(null);
  const [displayLocationPicker, updateLocationPicker] = useState(false);
  useFocusEffect(
    useCallback(() => {
      handleMapPermissions(getLocation, (e) =>
        updateDefaultCoords({...defaultCoords, error: e}),
      );

      return () => Geolocation.clearWatch();
    }, []),
  );

  const handleMapPermissions = async (callback, error) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        callback();
      } else {
        error('Uhh... Ohh.. Map couldn`t load...');
      }
    } catch (err) {
      console.err('MAP ERROR ', err);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
      currentLocation = position.coords;

      updateDefaultCoords({latitude, longitude});
    });
  };

  const centerMe = () => {
    if (mapRef)
      mapRef.animateToRegion({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
  };

  console.log('RENDER MAP');

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
            <Markers updateDetails={updateDetails} />

            {displayLocationPicker && (
              <Marker
                coordinate={{
                  latitude: defaultCoords.latitude,
                  longitude: defaultCoords.longitude,
                }}
                // onSelect={(e) => console.log('onSelect', e)}
                // onDrag={(e) => console.log('onDrag', e)}
                // onDragStart={(e) => console.log('onDragStart', e)}
                onDragEnd={(e) => (meetingLocation = e.nativeEvent.coordinate)}
                // onPress={(e) => console.log('onPress', e)}
                draggable
              />
            )}
          </MapView>
          {/* {destinations && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
            />
          )} */}
          {displayDetails && (
            <MemberDetails
              displayLocationPicker={displayLocationPicker}
              updateLocationPicker={updateLocationPicker}
              displayDetails={displayDetails}
              updateDetails={updateDetails}
            />
          )}
          <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={centerMe}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              bottom: 20,
              right: 20,
            }}>
            <View style={{height: 40, width: 40, backgroundColor: 'brown'}} />
          </TouchableHighlight>
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

const Markers = ({updateDetails}) => {
  const profile = useContext(UserContext);
  const [users, updateUsers] = useState([]);
  const currentUser = users.find((item) => item.id === profile.id);
  const filteredUsers = users.filter((item) => item.id !== profile.id);

  useFocusEffect(
    useCallback(() => {
      watchLocation();

      return () => Geolocation.clearWatch();
    }, []),
  );

  useEffect(() => {
    firestore().collection('map').onSnapshot(onResult, onError);
  }, []);

  const onResult = (querySnapshot) => updateUsers(querySnapshot.docs);

  const onError = (error) => console.log('ERROR ');

  const watchLocation = () => {
    Geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        currentLocation = position.coords;
        console.log('UPDATE FIRESTORE WITH A NEW VALUE ', position.coords);
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

  console.log('PROFILE--- ', profile);

  return users?.length
    ? [
        <Marker
          key="MyMarker"
          coordinate={{
            latitude: profile.profile._data.latitude,
            longitude: profile.profile._data.longitude,
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

const MemberDetails = ({
  displayDetails,
  updateDetails,
  updateLocationPicker,
  displayLocationPicker,
}) => {
  const profile = useContext(UserContext);
  const sendMeetupRequest = () => {
    if (meetingLocation) {
      firestore()
        .collection('notifications')
        .doc()
        .set({
          uid: displayDetails.id,
          title:
            profile._data.name +
            ' ' +
            profile._data.lastname +
            ' wants to meet you!',
          body: 'Choose to accept or decline invitation',
          sender: profile.id,
          location: meetingLocation,
          type: 'meet',
          sent: Date.now(),
        })
        .then((e) => console.log('SUCCESS ', e))
        .catch((err) => console.log('NOTIFICATION FAILED ', err));
    }
  };

  return displayDetails?._data ? (
    <View style={style.MemberInfo}>
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0)"
        onPress={() => updateDetails({})}
        style={style.CloseButton}>
        <Close size={30} color="#fff" />
      </TouchableHighlight>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProgressiveImage
          source={{uri: displayDetails._data.image}}
          style={style.MemberImage}
        />
        <View style={style.MemberNameContainer}>
          <Text style={style.MemberName}>
            {displayDetails._data.name + ' ' + displayDetails._data.lastname}
          </Text>
          <Text>Last updated {timeAgo(displayDetails._data.lastupdate)}</Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'rgba(255,255,255,0.1)',
          marginVertical: 10,
        }}
      />

      <View style={style.CarDetails}>
        <View style={style.CarIcon}>
          <Car size={40} color="#fff" />
        </View>
        <View style={style.CarDetailsContainer}>
          <Text style={style.CarMake}>{displayDetails._data.car_make}</Text>
          <Text style={style.CarModel}>
            {displayDetails._data.car_model} {displayDetails._data.kw}
            Kw ({displayDetails._data.number_plate})
          </Text>
        </View>
      </View>

      {!displayLocationPicker ? (
        <View style={style.ButtonContainer}>
          <Button
            value="Meet?"
            onPress={() => {
              meetingLocation = currentLocation;
              updateLocationPicker(true);
            }}
          />
          <Button value="Stojam?" onPress={() => console.log('CLICK')} />
        </View>
      ) : (
        <View style={style.SubmitMeetingLocation}>
          <Text style={{marginVertical: 20}}>
            Edit meeting location by long pressing on a marker and drag and
            dropping it to your desirable location.
          </Text>
          <Button value="Submit meeting location" onPress={sendMeetupRequest} />
        </View>
      )}
    </View>
  ) : null;
};

export default Map;
