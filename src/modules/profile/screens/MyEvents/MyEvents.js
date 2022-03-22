import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

import ScreenTitle from '../../components/ScreenTitle';
import SingleEvent from '../../components/SingleEvent';
import ListEmpty from '../../components/ListEmpty';

const style = EStyleSheet.create(styles);

const Home = ({navigation}) => {
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
        keyExtractor={(item) => item.id}
        ListEmptyComponent={ListEmpty}
        ListHeaderComponent={() => <ScreenTitle title="My Events" />}
      />
    </View>
  );
};

export default Home;
