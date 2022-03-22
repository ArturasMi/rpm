import {Dimensions} from 'react-native';

export const styles = {
  PointerContainer: {
    position: 'absolute',
    top: Dimensions.get('screen').height / 2 - 20,
    left: Dimensions.get('screen').width / 2 - 20,
    width: 40,
    height: 40,
    zIndex: 12,
  },
};
