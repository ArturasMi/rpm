import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

import ScreenTitle from '../../components/ScreenTitle';
import SingleEvent from '../../components/SingleEvent';
import ListEmpty from '../../components/ListEmpty';

const style = EStyleSheet.create(styles);
const itemsPerPage = 10;
let currentPage = 1;

const Events = ({navigation}) => {
  const [events, updateEvents] = useState(undefined);
  useEffect(() => {
    firestore()
      .collection('events')
      .limit(itemsPerPage)
      .onSnapshot(onResult, onError);
  }, []);
  const onResult = async (querySnapshot) => {
    updateEvents(querySnapshot._docs);
  };

  const onError = (error) => console.log('ERROR ');

  const loadMore = () => {};

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
        renderItem={(data) => <SingleEvent {...data} />}
        keyExtractor={(item) => item.id}
        // ListEmptyComponent={ListEmpty}
        ListHeaderComponent={() => (
          <ScreenTitle title="Events" disableBack={true} />
        )}
        onEndReached={loadMore}
        onEndThreshold={0}
      />
    </View>
  );
};

export default Events;
