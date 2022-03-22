import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = {
  Home: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  HomeCaption: {
    position: 'absolute',
    top: 0,
    bottom: 40,
    left: 20,
    right: 20,
    zIndex: 3,
    paddingTop: getStatusBarHeight() + 60,
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  Hashtag: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },

  IntroBig: {
    fontSize: 42,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    width: '60%',
  },

  IntroSmall: {
    width: '90%',
    fontSize: 14,
    lineHeight: 28,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },

  BlockTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
  List: {
    width: Dimensions.get('screen').width,
    marginLeft: -20,
  },
  ListImage: {
    width: 140,
    height: 100,
    borderRadius: 6,
    marginRight: 20,
  },
  ListContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
};
