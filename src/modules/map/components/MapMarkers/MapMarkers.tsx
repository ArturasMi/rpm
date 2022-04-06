import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
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
  // const map = useSelector((state: GlobalState) => state.map);
  const user = useSelector((state: GlobalState) => state.auth);
  const [usersList, setUsersList] = useState<Array<any>>([]);

  useEffect(() => {
    firestore()
      .collection('map')
      .onSnapshot(
        snapshot => setUsersList(snapshot.docs),
        () => {
          console.log('ERR');
        },
      );
  }, []);

  return (
    <>
      {usersList?.map((marker, index) => {
        if (marker.id == user.uid)
          return <CurrentUserMarker key={index + 'm_m'} />;
        return (
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
                  backgroundColor: Colors.Primary100,
                  borderRadius: 30,
                }}>
                <ProgressiveImage
                  source={{uri: marker._data.image}}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                  }}
                />
              </View>
            </MapboxGL.MarkerView>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export const CurrentUserMarker = () => {
  const map = useSelector((state: GlobalState) => state.map);
  const [coords, setCoords] = useState<MapCoordinates>(map.coords);

  useEffect(() => setCoords(map.coords), [map]);

  return (
    <MapboxGL.MarkerView id="My_marker" coordinate={[coords[0], coords[1]]}>
      <View
        style={{
          width: 30,
          height: 30,
        }}>
        <Navigation size={30} colors={[Colors.Primary200, Colors.Primary300]} />
      </View>
    </MapboxGL.MarkerView>
  );
};
