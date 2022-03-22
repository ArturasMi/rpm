import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch} from 'react-redux';
import {TextInput} from '../../../../components';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {AppDispatch} from '../../../../redux/store';
import {styles} from './styles';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {Colors} from '../../../../configs';
import Search from '../../../../assets/icons/Search';
import {MapViewModel} from '../../viewmodels';

const style = EStyleSheet.create(styles);

export const MapInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mapVM = new MapViewModel(dispatch);
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e);

    dispatch(MapActions.search(e));
  };
  return (
    <View style={style.MapSearch}>
      <View style={style.MapSearchIcon}>
        <Search size={17} color={Colors.colorBlack} />
      </View>
      <TextInput
        value={value}
        onChange={onChange}
        options={{
          onTouchStart: () => {
            mapVM.displayUserDetails(undefined);
          },
          placeholderTextColor: Colors.colorBlack,
          style: {
            backgroundColor: 'white',
            borderRadius: 10,
            color: Colors.colorBlack,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 40,
            marginTop: 0,
            fontFamily: 'Poppins-Regular',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          },
        }}
        placeholder={'Discover a city'}
      />
    </View>
  );
};
