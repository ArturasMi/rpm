import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FadeIn from '../../components/Animate/FadeIn';
import {shortMonth} from '../../helpers/dates';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

import {ProgressiveImage} from '../../components';

const style = EStyleSheet.create(styles);

const SingleEvent = data => {
  const date = data.item._data.date.split('/');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      // onPress={e =>
      //   navigation.navigate('EventDetails', {
      //     ...data.item._data,
      //     id: data.item.id,
      //   })
      // }
      // underlayColor={'rgba(0,0,0,0)'}
    >
      <FadeIn delay={data.index * 50}>
        <View style={style.SingleEvent}>
          <ProgressiveImage
            source={{uri: data.item._data.image}}
            style={style.EventImage}
          />

          <View style={style.EventDate}>
            <Text style={style.DateNumber}>{date[1]}</Text>
            <Text style={style.DateMonth}>{shortMonth(parseInt(date[0]))}</Text>
          </View>

          <Text style={style.EventName} numberOfLines={1} ellipsizeMode="tail">
            {data.item._data.name}
          </Text>
        </View>
      </FadeIn>
    </TouchableOpacity>
  );
};

export default SingleEvent;
