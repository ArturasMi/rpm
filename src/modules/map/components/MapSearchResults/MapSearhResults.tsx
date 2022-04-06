import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../../../redux/reducers';
import {AppDispatch} from '../../../../redux/store';
import {MapViewModel} from '../../viewmodels';
import {styles} from './styles';

const style = EStyleSheet.create(styles);

export const MapSearchResults = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: GlobalState) => state.map.search);
  const [data, setData] = useState([]);
  const {displayNavigationRoute} = new MapViewModel(dispatch);

  useEffect(() => {
    setData(selector?.features ?? []);
  }, [selector]);

  if (!selector) return null;
  return (
    <View style={style.MapSearchResults}>
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={style.MapButton}
            onPress={() => {
              displayNavigationRoute([
                item.geometry.coordinates[1],
                item.geometry.coordinates[0],
              ]);
            }}>
            <Text style={style.MapButtonText}>{item.place_name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
