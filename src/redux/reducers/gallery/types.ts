export interface GalleryInterface {
  list: Array<any>;
  error?: string;
}

export enum GalleryActionTypes {
  GET_GALLERY = 'GET_GALLERY',
  GET_GALLERY_FULFILLED = 'GET_GALLERY_FULFILLED',
  GET_GALLERY_REJECTED = 'GET_GALLERY_REJECTED',
}
