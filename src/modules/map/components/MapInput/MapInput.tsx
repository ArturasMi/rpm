import React, {useState} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch} from 'react-redux';
import {TextInput} from '../../../../components';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {AppDispatch} from '../../../../redux/store';
import {styles} from './styles';
import {Colors} from '../../../../configs';
import Search from '../../../../assets/icons/Search';
import {MapViewModel} from '../../viewmodels';

const style = EStyleSheet.create(styles);

export const MapInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mapVM = new MapViewModel(dispatch);
  const [value, setValue] = useState<string>('');
  const onChange = e => {
    setValue(e);

    dispatch(MapActions.search(e));
  };
  const options = {
    onTouchStart: () => {
      mapVM.displayUserDetails(undefined);
    },
    placeholderTextColor: Colors.Light100,
    style: style.MapInput,
  };

  return (
    <View style={style.MapSearch}>
      <View style={style.MapSearchIcon}>
        <Search size={17} color={Colors.Light100} />
      </View>
      <TextInput
        value={value}
        onChange={onChange}
        options={options}
        placeholder={'Discover a place'}
      />
    </View>
  );
};
