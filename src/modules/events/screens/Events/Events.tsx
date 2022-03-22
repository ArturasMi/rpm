import React, {useState, useEffect} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {EmptyList, ScreenTitle} from '../../../../components';
import {GlobalState} from '../../../../redux/reducers';
import SingleEvent from '../../../../components/SingleEvent/SingleEvent';
import {useSelector} from 'react-redux';

const style = EStyleSheet.create(styles);
const itemsPerPage = 10;
let currentPage = 1;

export const Events = ({navigation}) => {
  const eventsSelector = useSelector((state: GlobalState) => state.events.list);
  const [events, updateEvents] = useState(eventsSelector);

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
        renderItem={data => <SingleEvent {...data} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={() => (
          <ScreenTitle title="Events" disableBack={true} onBack={undefined} />
        )}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default Events;
