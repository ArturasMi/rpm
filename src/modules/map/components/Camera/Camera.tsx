import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {GlobalState} from '../../../../redux/reducers';
import {MapCoordinates} from '../../../../redux/reducers/map/types';

export const MapCamera = () => {
  const mapSelector = useSelector((state: GlobalState) => state.map);
  const [zoom, setZoom] = useState<number>(mapSelector.zoomLevel);
  const [coords, setCoords] = useState<MapCoordinates>(mapSelector.coords);

  useEffect(() => {
    if (mapSelector.zoomLevel) setZoom(mapSelector.zoomLevel);
  }, [mapSelector.zoomLevel]);

  useEffect(() => {
    if (mapSelector.coords) {
      setCoords(mapSelector.coords);
    }
  }, [mapSelector.coords]);

  return (
    <MapboxGL.Camera
      zoomLevel={zoom}
      centerCoordinate={coords}
      pitch={60}
      animationMode={'flyTo'}
      animationDuration={1000}
      followUserMode={'course'}
      followZoomLevel={14}
    />
  );
};
