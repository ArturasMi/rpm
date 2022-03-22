import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Animated,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button, ProgressiveImage} from '../../../../components';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {GlobalState} from '../../../../redux/reducers';

const style = EStyleSheet.create(styles);

export const EventDetails = ({route, navigation}) => {
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
                <TouchableOpacity
                  style={style.GoBack}
                  onPress={navigation.goBack}>
                  <ArrowLeft color="#fff" size={25} />
                </TouchableOpacity>
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
                style={{
                  height: 250,
                  width: '100%',
                  marginBottom: 90,
                  backgroundColor: '#181820',
                }}
              />
            </View>
          </>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const JoinEvent = ({data, navigation}) => {
  const user = useSelector((state: GlobalState) => state.auth);
  const [attendingEvent, updateAttendance] = useState(null);

  useEffect(() => {
    checkIfUserIsAttending();
  }, []);

  const checkIfUserIsAttending = async () => {
    // const attendingUsers = await firestore()
    //   .collection('events_attending')
    //   .doc(data.id)
    //   .get();
    // const userIsAttendingEvent = attendingUsers._data.users.find(
    //   x => x === userData.profile.id,
    // );
    // updateAttendance({
    //   attendingUsers: attendingUsers._data.users.length,
    //   userIsAttendingEvent: userIsAttendingEvent ? true : false,
    // });
  };

  const joinEvent = () => {
    navigation.navigate('ModalWarning', {
      title: 'Warning!',
      warning:
        'Please make sure you read and understand the rules before participating in any events. Disobedience of rules might get your account permanently suspended!',
      buttonValue: 'I understand',
      buttonValue2: 'Cancel',
    });
    // firestore()
    //   .collection('events_attending')
    //   .doc(data.id)
    //   .update({
    //     users: firestore.FieldValue.arrayUnion(userData.profile.id),
    //   })
    //   .then(e => {
    //     updateAttendance({
    //       attendingUsers: attendingEvent.attendingUsers + 1,
    //       userIsAttendingEvent: true,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log('UNSUCCESSFUL ', error);
    //   });
  };

  const withdrawEvent = () => {
    // firestore()
    //   .collection('events_attending')
    //   .doc(data.id)
    //   .update({
    //     users: firestore.FieldValue.arrayRemove(userData.profile.id),
    //   })
    //   .then(e => {
    //     updateAttendance({
    //       attendingUsers: attendingEvent.attendingUsers - 1,
    //       userIsAttendingEvent: false,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log('UNSUCCESSFUL ', error);
    //   });
  };

  return (
    <View style={style.JoinEvent}>
      {attendingEvent && (
        <Text style={style.OpenSeats}>
          Liko 5 vietos
          {/* Liko {parseInt(data.limit - attendingEvent.attendingUsers)} vietų */}
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
