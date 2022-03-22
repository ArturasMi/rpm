import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import Close from '../../assets/icons/Close';
import Car from '../../assets/icons/Car';
import {Button} from '../../components/Forms';
import ProgressiveImage from '../../components/ProgressiveImage';
import ChevronRight from '../../assets/icons/ChevronRight';
import {UserContext} from '../../../App';
import firestore from '@react-native-firebase/firestore';
import {timeAgo} from '../../helpers/dates';
const style = EStyleSheet.create(styles);

const MemberDetails = ({displayMemberDetails, navigation, updateMap}) => {
  const profile = useContext(UserContext).profile;
  console.log('PROFILE ', profile);
  const [message, updateMessage] = useState('Meet?');
  const sendMeetupRequest = () => {
    if (meetingLocation) {
      firestore()
        .collection('notifications')
        .doc()
        .set({
          uid: displayMemberDetails.id,
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
          console.log('METUP REQUEST SENT');
        })
        .catch((err) => {
          navigation.navigate('ModalWarning', {
            title: 'Warning!',
            warning: 'Something went shitways',
            buttonValue: 'I understand',
          });
        })
        .finally(() => {});
    }
  };

  const changeMessage = () => {};

  return (
    <View style={style.MemberInfo}>
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {}}
        style={style.CloseButton}>
        <Close size={30} color="#fff" />
      </TouchableHighlight>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProgressiveImage
          source={{uri: displayMemberDetails.image}}
          style={style.MemberImage}
        />
        <View style={style.MemberNameContainer}>
          <Text style={style.MemberName}>
            {displayMemberDetails.name + ' ' + displayMemberDetails.lastname}
          </Text>
          <Text>Last updated {timeAgo(displayMemberDetails.lastupdate)}</Text>
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
          <Text style={style.CarMake}>{displayMemberDetails.car_make}</Text>
          <Text style={style.CarModel}>
            {displayMemberDetails.car_model} {displayMemberDetails.kw}
            Kw ({displayMemberDetails.number_plate})
          </Text>
        </View>
      </View>

      <View style={style.ButtonContainer}>
        <Button
          value={message}
          onPress={() => {
            meetingLocation = currentLocation;
          }}
        />
        <TouchableOpacity onPress={changeMessage}>
          <ChevronRight size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* {false ? (
        <View style={style.ButtonContainer}>
          <Button
            value="Meet?"
            onPress={() => {
              meetingLocation = currentLocation;
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
      )} */}
    </View>
  );
};

export default MemberDetails;
