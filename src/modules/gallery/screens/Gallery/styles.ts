import {Colors} from '../../../../configs';

export const styles = {
  Gallery: {
    flex: 1,
    backgroundColor: Colors.colorBlack,
  },
  GalleryList: {
    paddingHorizontal: 20,
  },
  GalleryListContainer: {},

  CategoryTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: '#fff',
    opacity: 0.7,
  },
  Image: {
    width: '100%',
    height: 200,
  },
  FirstImage: {
    width: '100%',
    height: 300,
  },
  ImageContainer: {
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  GalleryItem: {
    width: '100%',
    marginBottom: 20,
  },
  ImageCaption: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  Date: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 12,
  },
  Title: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  FirstDate: {
    color: '#fff',
    marginBottom: 10,
  },
  FirstTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
};
