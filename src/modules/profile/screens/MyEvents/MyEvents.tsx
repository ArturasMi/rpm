import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

import {ScreenTitle, EmptyList} from '../../../../components';
import SingleEvent from '../../../../components/SingleEvent/SingleEvent';

const style = EStyleSheet.create(styles);

export const MyEvents = ({navigation}) => {
  const [events, updateEvents] = useState(undefined);

  useEffect(() => {
    // firestore().collection('events').onSnapshot(onResult, onError);
  }, []);

  return (
    <View style={style.Events}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={style.EventsList}
        contentContainerStyle={style.EventListContainer}
        data={events}
        renderItem={SingleEvent}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={() => <ScreenTitle title="My Events" />}
      />
    </View>
  );
};
