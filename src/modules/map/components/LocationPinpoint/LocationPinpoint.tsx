import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GlobalState} from '../../../../redux/reducers';
import {MapViewModel} from '../../viewmodels';
import {AppDispatch} from '../../../../redux/store';
import {View} from 'react-native';
import {Colors} from '../../../../configs';
import {Button} from '../../../../components';
import {styles} from './styles';
import Location from '../../../../assets/icons/Location';

const style = EStyleSheet.create(styles);

export const LocationPinpoint = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mapSelector = useSelector((state: GlobalState) => state.map);
  const [pinpoint, setPinpoint] = useState<boolean>(
    mapSelector.pinpointLocation,
  );
  const {getCurrentPointLocation, displayNavigationRoute, disablePinpinting} =
    new MapViewModel(dispatch);

  useEffect(() => {
    setPinpoint(mapSelector.pinpointLocation);
  }, [mapSelector.pinpointLocation]);

  return (
    <>
      {pinpoint && (
        <View style={style.PointerContainer}>
          <Location size={40} color={Colors.Primary100} />
        </View>
      )}

      {pinpoint && (
        <View
          style={{
            position: 'absolute',
            bottom: 90,
            left: 20,
            right: 20,
            zIndex: 12,
          }}>
          <Button
            value="Submit meet point"
            onPress={() => {
              displayNavigationRoute(getCurrentPointLocation());
              disablePinpinting();
            }}
          />
        </View>
      )}
    </>
  );
};
