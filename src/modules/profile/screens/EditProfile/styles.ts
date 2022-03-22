import {getStatusBarHeight} from 'react-native-status-bar-height';

export const styles = {
  EditProfile: {},
  FillOut: {
    fontSize: 14,
    opacity: 0.5,
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  Terms: {
    marginLeft: 20,
  },
  Container: {
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  PageTitle: {
    paddingTop: 30 + getStatusBarHeight(),
    fontSize: 28,
    lineHeight: 35,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
};
