import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

const style = EStyleSheet.create(styles);

const GalleryWatch = ({route}) => {
  const [gallery, updateGallery] = useState(undefined);
  useEffect(() => {
    firestore()
      .collection('galleries')
      .doc(route.params.id)
      .get()
      .then((res) => {
        let galleryList = [];
        res._data.images.map((x) => galleryList.push({url: x}));

        updateGallery(galleryList);
      })
      .catch((err) => {
        console.log('ERR ', err);
      });
  }, []);

  return (
    <View style={{width: '100%', height: '100%'}}>
      {gallery ? (
        <ImageViewer
          imageUrls={gallery}
          enableImageZoom={true}
          style={{width: '100%', height: '100%'}}
        />
      ) : (
        <Text>NO IMAGES</Text>
      )}
    </View>
  );
};

export default GalleryWatch;
