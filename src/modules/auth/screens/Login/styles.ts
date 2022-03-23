import {Dimensions} from 'react-native';
import {Colors, Constants} from '../../../../configs';

export const styles = {
  Login: {
    flex: 1,
    backgroundColor: Colors.Neutral100,
    justifyContent: 'flex-end',
  },
  BackgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  Gradient: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('screen').height,
  },
  LoginMethod: {
    zIndex: 2,
    padding: 20,
  },
  LoginBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    flexDirection: 'row',
  },
  LoginBtnBg: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  IconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  LoginBtnTextWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginBtnText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Light100,
  },
  Register: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegisterText: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Light100,
    marginTop: 40,
    marginBottom: 40,
  },
  LoginForm: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: Constants.statusbarHeight + 20,
    zIndex: 3,
  },
  LoginFormHead: {
    alignItems: 'center',
  },
  LoginFormTitle: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Light100,
    fontSize: 16,
    opacity: 0.7,
  },
  InputContainer: {
    flex: 1,
  },
  GoBack: {
    position: 'absolute',
    left: 20,
    marginTop: 10,
  },
};
