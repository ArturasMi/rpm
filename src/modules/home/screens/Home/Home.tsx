import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {ProgressiveImage} from '../../../../components';
import {Colors} from '../../../../configs';
import {GlobalState} from '../../../../redux/reducers';
import {EventsActions} from '../../../../redux/reducers/events/actions';
import {GalleryActions} from '../../../../redux/reducers/gallery/actions';
import {AppDispatch} from '../../../../redux/store';
import {styles} from './styles';
import {Screens} from '../../../../navigation/Screens';

const style = EStyleSheet.create(styles);

export const Home = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: GlobalState) => state.auth);

  useEffect(() => {
    dispatch(GalleryActions.getGallery());
    dispatch(EventsActions.getEvents(10));
  }, []);

  React.useEffect(() => {
    if (user.profile?.completed == false) {
      navigation.navigate(Screens.COMPLETE_REGISTRATION);
    }
  }, [user.profile]);

  return (
    <View style={style.Home}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={{flex: 1}}>
        <ProgressiveImage
          source={{
            uri: 'https://images.unsplash.com/photo-1615049977061-3297aa104b1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
          }}
        />

        <LinearGradient
          colors={['#00000024', Colors.colorBlack]}
          style={style.linearGradient}></LinearGradient>

        <View style={style.Tint} />
        <View style={style.HomeCaption}>
          <View style={style.Col}>
            <Text style={style.Hashtag}>@alexo55</Text>
          </View>

          <View style={style.Col}>
            <Text style={style.IntroBig}>Pro App tips with you always</Text>
            <Text style={style.IntroSmall}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>

          <View style={style.Col}>
            <Block {...navigation} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Block = ({navigate}) => {
  const dispatch = useDispatch<AppDispatch>();
  const eventsSelector = useSelector((state: GlobalState) => state.events);
  const [events, updateEvents] = useState(eventsSelector);
  useEffect(() => {
    dispatch(EventsActions.getEvents(10));
  }, []);

  useEffect(() => {
    updateEvents(eventsSelector);
  }, [eventsSelector]);

  return (
    <View style={style.Block}>
      <Text style={style.BlockTitle}>Later this month!</Text>
      <ScrollView
        style={style.List}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={style.ListContainer}>
          {events.list.map((data, index) => (
            <View style={{flexDirection: 'column', width: 160}} key={index}>
              <ProgressiveImage
                key={data.id}
                source={{
                  uri: data._data.image,
                }}
                style={style.ListImage}
              />

              <Text
                style={{
                  color: 'white',
                  marginTop: 5,
                  paddingRight: 20,
                }}>
                {data._data.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
