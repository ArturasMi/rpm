import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {GlobalState} from '../../../../redux/reducers';
import {
  CameraMode,
  CameraState,
  MapCoordinates,
} from '../../../../redux/reducers/map/types';
import {MapActions} from '../../../../redux/reducers/map/actions';
import {AppDispatch} from '../../../../redux/store';

export const MapCamera = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cameraRef = useRef<MapboxGL.Camera>();
  const map = useSelector((state: GlobalState) => state.map);
  const speed = useSelector((state: GlobalState) => state.map.camera.speed);
  const [zoom, setZoom] = useState<number>(map.camera.zoom);
  const [coords, setCoords] = useState<MapCoordinates>(map.coords);

  useEffect(() => {
    if (map.coords) {
      setCoords(map.coords);
    }
  }, [map.coords]);

  useEffect(() => {
    if (map.camera.zoom) {
      setZoom(map.camera.zoom);
    }
  }, [map.camera.zoom]);

  useEffect(() => {
    if (map.camera.state == CameraState.BEGIN && cameraRef.current) {
      cameraRef.current.setCamera({
        centerCoordinate: coords,
        zoomLevel: map.camera.zoom,
        animationDuration: map.camera.speed,
      });
      dispatch(MapActions.setCamera({state: CameraState.MOVING}));

      setTimeout(() => {
        dispatch(MapActions.setCamera({state: CameraState.IDLE}));
        cameraRef.current.setCamera({
          pitch: 60,
        });
      }, speed);
    }
  }, [map.camera]);

  return (
    <MapboxGL.Camera
      ref={cameraRef}
      zoomLevel={zoom}
      centerCoordinate={coords}
      pitch={map.camera.pitch}
      animationMode={'flyTo'}
      animationDuration={map.camera.speed}
      followZoomLevel={zoom}
      followUserMode={map.camera.mode}
      followUserLocation={map.camera.mode == CameraMode.COURSE}
    />
  );
};
