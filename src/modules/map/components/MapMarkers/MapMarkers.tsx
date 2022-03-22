import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MapViewModel} from '../../viewmodels';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../../../../redux/reducers';
import {ProgressiveImage} from '../../../../components';
import Navigation from '../../../../assets/icons/Navigation';
import {Colors} from '../../../../configs';
import {MapCoordinates} from '../../../../redux/reducers/map/types';

export const MapMarkers = () => {
  const dispatch = useDispatch();
  const {displayUserDetails} = new MapViewModel(dispatch);
  const map = useSelector((state: GlobalState) => state.map);
  const [usersList, setUsersList] = useState<Array<any>>(map.list);
  const [coords, setCoords] = useState<MapCoordinates | null>(map.coords);

  useEffect(() => {
    setUsersList(map.list);
  }, [map.list]);

  useEffect(() => {
    setCoords(map.coords);
  }, [map.coords]);

  return (
    <>
      <MapboxGL.MarkerView id="My_marker" coordinate={coords}>
        <View
          style={{
            width: 30,
            height: 30,
          }}>
          <Navigation size={30} colors={[Colors.colorMain, Colors.darkGreen]} />
        </View>
      </MapboxGL.MarkerView>

      {usersList?.map((marker, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            displayUserDetails(marker._data);
          }}>
          <MapboxGL.MarkerView
            id="My_marker"
            coordinate={[marker._data.longitude, marker._data.latitude]}>
            <View
              style={{
                width: 30,
                height: 30,
              }}>
              <ProgressiveImage
                source={{uri: marker._data.image}}
                style={{width: 30, height: 30, borderRadius: 30}}
              />
            </View>
          </MapboxGL.MarkerView>
        </TouchableOpacity>
      ))}
    </>
  );
};
