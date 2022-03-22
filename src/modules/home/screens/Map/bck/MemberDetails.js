import React, {useCallback, useState, useEffect, useContext} from 'react';
import {View, Text, PermissionsAndroid, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import Close from '../../assets/icons/Close';
import Car from '../../assets/icons/Car';
import {Button} from '../../components/Forms';
import ProgressiveImage from '../../components/ProgressiveImage';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {UserContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import useIsMounted from 'react-is-mounted-hook';
import {timeAgo} from '../../helpers/dates';
const style = EStyleSheet.create(styles);

const MemberDetails = ({
  displayDetails,
  updateDetails,
  updateLocationPicker,
  displayLocationPicker,
  position,
  navigation,
}) => {
  let meetingLocation = position;
  const profile = useContext(UserContext).profile;
  console.log('PROFILE ', profile);
  currentLocation = position.coords;
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
        .then((e) => {
          updateLocationPicker(false);
          updateDetails({});
        })
        .catch((err) => {
          navigation.navigate('ModalWarning', {
            title: 'Warning!',
            warning: 'Something went shitways',
            buttonValue: 'I understand',
          });
        })
        .finally(() => {
          updateLocationPicker(false);
          updateDetails({});
        });

      updateLocationPicker(false);
      updateDetails({});
    }
  };

  return displayDetails?._data ? (
    <View style={style.MemberInfo}>
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {
          updateLocationPicker(false);
          updateDetails({});
        }}
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

export default MemberDetails;
