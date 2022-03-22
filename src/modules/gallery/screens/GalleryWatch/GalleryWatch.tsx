import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {GlobalState} from '../../../../redux/reducers';
import {useSelector} from 'react-redux';

const style = EStyleSheet.create(styles);

export const GalleryWatch = ({route}) => {
  const collectionsSelector = useSelector(
    (state: GlobalState) => state.gallery.list,
  );
  const [collections, updateCollections] = useState(collectionsSelector);
  let result = [];
  for (let i = 0; i < collections.length; i++) {
    result.push({
      url: collections[i]._data.image,
    });
  }
  return (
    <View style={{width: '100%', height: '100%'}}>
      {result ? (
        <ImageViewer
          imageUrls={result}
          enableImageZoom={true}
          style={{width: '100%', height: '100%'}}
        />
      ) : (
        <Text>NO IMAGES</Text>
      )}
    </View>
  );
};
