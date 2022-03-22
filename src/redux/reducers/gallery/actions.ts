import firestore from '@react-native-firebase/firestore';
import {GalleryActionTypes} from './types';

const ActionCreator = {
  getGallery: () => ({
    type: GalleryActionTypes.GET_GALLERY,
    payload: firestore().collection('gallery_collections').get(),
  }),
};

export {ActionCreator as GalleryActions};
