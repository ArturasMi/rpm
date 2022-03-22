import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from '../../../../components';
import {GlobalState} from '../../../../redux/reducers';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {AppDispatch} from '../../../../redux/store';
import {MapViewModel} from '../../viewmodels';
import {styles} from './styles';

const style = EStyleSheet.create(styles);

export const MapSearchResults = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: GlobalState) => state.map.search);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const {displayNavigationRoute, setZoom, centerCamera} = new MapViewModel(
    dispatch,
  );

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
              setZoom(15);
              centerCamera();
              displayNavigationRoute(item.geometry.coordinates);
            }}>
            <Text style={style.MapButtonText}>{item.place_name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
