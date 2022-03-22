import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StatusBar,
  Animated,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import ProgressiveImage from '../../components/ProgressiveImage';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import {Button} from '../../components/Forms';
import {UserContext} from '../../../App';
import axios from 'axios';

const style = EStyleSheet.create(styles);

const EventDetails = ({route, navigation}) => {
  const [opacity] = useState(new Animated.Value(0));
  const data = route.params;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={style.EventDetails}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Animated.View style={{opacity}}>
        <ScrollView contentContainerStyle={style.EventDetailsContainer}>
          <>
            <View style={style.EventHeader}>
              <View style={style.HeaderContainer}>
                <View>
                  <ProgressiveImage
                    style={style.EventBanner}
                    source={{uri: data.image}}
                  />
                </View>
              </View>

              <View style={style.BannerTint}>
                <TouchableHighlight
                  style={style.GoBack}
                  underlayColor="rgba(0,0,0,0)"
                  onPress={() => navigation.goBack(null)}>
                  <ArrowLeft color="#fff" size={25} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={style.DetailsPart1}>
              <View>
                <Text style={style.EventTitle}>{data.name}</Text>
              </View>
              <Text style={style.EventSubtitle}>Thu oct 19 2020 at 03:00</Text>

              <JoinEvent data={data} navigation={navigation} />
            </View>
            <View style={style.Separator} />
            <View style={style.DetailsPart2}>
              <Text style={style.DetailsTitle}>Event details</Text>
              <View>
                <Text style={style.DetailsDescription}>{data.description}</Text>
              </View>
            </View>
            <View style={style.Separator} />
            <View style={style.DetailsPart2}>
              <Text style={style.DetailsTitle}>Location</Text>
              <Text style={style.DetailsDescription}>{data.location}</Text>
              <View
                style={{height: 250, width: '100%', backgroundColor: '#181820'}}
              />
            </View>
          </>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const JoinEvent = ({data, navigation}) => {
  const userData = useContext(UserContext);
  const [attendingEvent, updateAttendance] = useState(null);

  useEffect(() => {
    checkIfUserIsAttending();
  }, []);

  const checkIfUserIsAttending = async () => {
    const attendingUsers = await firestore()
      .collection('events_attending')
      .doc(data.id)
      .get();

    const userIsAttendingEvent = attendingUsers._data.users.find(
      (x) => x === userData.profile.id,
    );

    updateAttendance({
      attendingUsers: attendingUsers._data.users.length,
      userIsAttendingEvent: userIsAttendingEvent ? true : false,
    });
  };

  const joinEvent = () => {
    navigation.navigate('ModalWarning', {
      title: 'Warning!',
      warning:
        'Please make sure you read and understand the rules before participating in any events. Disobedience of rules might get your account permanently suspended!',
      buttonValue: 'I understand',
      buttonValue2: 'Cancel',
    });
    firestore()
      .collection('events_attending')
      .doc(data.id)
      .update({
        users: firestore.FieldValue.arrayUnion(userData.profile.id),
      })
      .then((e) => {
        updateAttendance({
          attendingUsers: attendingEvent.attendingUsers + 1,
          userIsAttendingEvent: true,
        });
      })
      .catch(function (error) {
        console.log('UNSUCCESSFUL ', error);
      });
  };

  const withdrawEvent = () => {
    firestore()
      .collection('events_attending')
      .doc(data.id)
      .update({
        users: firestore.FieldValue.arrayRemove(userData.profile.id),
      })
      .then((e) => {
        updateAttendance({
          attendingUsers: attendingEvent.attendingUsers - 1,
          userIsAttendingEvent: false,
        });
      })
      .catch(function (error) {
        console.log('UNSUCCESSFUL ', error);
      });
  };

  return (
    <View style={style.JoinEvent}>
      {attendingEvent && (
        <Text style={style.OpenSeats}>
          Liko {parseInt(data.limit - attendingEvent.attendingUsers)} vietų
        </Text>
      )}

      {attendingEvent && (
        <View>
          {attendingEvent.userIsAttendingEvent ? (
            <Button value="Withdraw" onPress={withdrawEvent} />
          ) : (
            attendingEvent.attendingUsers !== data.limit && (
              <Button value="Join event" onPress={joinEvent} />
            )
          )}
        </View>
      )}
    </View>
  );
};

export default EventDetails;
