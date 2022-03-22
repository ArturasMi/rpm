import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {Button, ProgressiveImage} from '../../../../components';
import {timeAgo} from '../../../../helpers/dates';
import Car from '../../../../assets/icons/Car';
import More from '../../../../assets/icons/More';
import {styles} from './styles';
import {Colors} from '../../../../configs';
import {MapViewModel} from '../../viewmodels/MapViewModel';
import {AppDispatch} from '../../../../redux/store';
import {GlobalState} from '../../../../redux/reducers';

const style = EStyleSheet.create(styles);

export const MemberDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const details = useSelector((state: GlobalState) => state.map.userDetails);
  const mapVM = new MapViewModel(dispatch);

  if (!details) return null;
  return (
    <View style={style.MemberInfo}>
      <View>
        <ProgressiveImage
          source={{uri: details.image}}
          style={style.MemberImage}
        />
        <View style={style.MemberNameContainer}>
          <Text style={style.MemberName}>
            {details.name + ' ' + details.lastname}
          </Text>
          <Text style={style.MemberStatus}>
            Last updated {timeAgo(details.lastupdate)}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'rgba(255,255,255,0.1)',
          marginVertical: 10,
        }}
      />

      <View style={style.CarDetails}>
        <View style={style.CarIcon}>
          <Car size={40} color="#fff" />
        </View>
        <View style={style.CarDetailsContainer}>
          <Text style={style.CarMake}>{details.car_make}</Text>
          <Text style={style.CarModel}>
            {details.car_model} {details.kw}
            Kw ({details.number_plate.toUpperCase()})
          </Text>
        </View>
      </View>

      <View style={style.ButtonContainer}>
        <Button
          onPress={() =>
            mapVM.displayNavigationRoute([details.longitude, details.latitude])
          }
          value={'Navigate to'}
          container={{paddingHorizontal: 60}}
        />
        <Button
          onPress={() => {
            mapVM.displayUserDetails(undefined);
            mapVM.enablePinpinting();
          }}
          value="MoreBtn"
          container={style.MoreBtn}>
          <More size={26} color={Colors.colorBlack} />
        </Button>
      </View>
    </View>
  );
};