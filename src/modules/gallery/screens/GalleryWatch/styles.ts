export const styles = {
  GalleryWatch: {
    flex: 1,
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  Image2: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  LeftArrow: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '50%',
    left: 0,
    zIndex: 2,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  RightArrow: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: '50%',
    right: 0,
    zIndex: 2,
  },
  GoBack: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 2,
  },
  ChangeMode: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 40,
    right: 0,
    zIndex: 2,
  },
};
