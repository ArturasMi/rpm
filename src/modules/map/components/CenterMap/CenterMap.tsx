import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../../configs';
import {GlobalState} from '../../../../redux/reducers';
import {CameraState} from '../../../../redux/reducers/map/types';
import {AppDispatch} from '../../../../redux/store';
import {MapViewModel} from '../../viewmodels';

export const CenterMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cameraState = useSelector(
    (state: GlobalState) => state.map.camera.state,
  );

  const [camera, setCamera] = useState<CameraState>();

  useEffect(() => {
    setCamera(cameraState);
  }, [cameraState]);

  const onPress = () => {
    if (camera == CameraState.IDLE) {
      new MapViewModel(dispatch).centerCamera();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: Colors.Neutral600,
          position: 'absolute',
          right: 20,
          bottom: 100,
          zIndex: 30,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
