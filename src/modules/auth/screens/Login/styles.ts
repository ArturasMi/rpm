import {Dimensions} from 'react-native';
import {Colors, Constants} from '../../../../configs';

export const styles = {
  Login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.colorBlack,
  },
  Container: {
    paddingTop: Constants.statusbarHeight,
    paddingHorizontal: Constants.defaultPadding,
    paddingBottom: 270,
    flex: 1,
  },
  IntroText: {
    fontSize: 36,
    fontFamily: 'Poppins-Regular',
    width: '80%',
    color: '#fff',
    paddingTop: 40,
  },
  SecondaryText: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    width: '80%',
    color: '#fff',
  },
  ForgottenPassword: {
    textAlign: 'center',
    paddingHorizontal: Constants.defaultPadding,
    paddingTop: 30,
    color: '#b8b8b9',
    fontFamily: 'Poppins-Regular',
  },
  FormHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  FormTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  LoginButton: {
    backgroundColor: Colors.colorMain,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontFamily: 'Poppins-Medium',
    borderRadius: 10,
  },
  RegisterButton: {
    backgroundColor: '#181820',
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontFamily: 'Poppins-Medium',
    borderRadius: 10,
    marginTop: 20,
  },
  ScrollView: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  ErrorMessage: {
    fontFamily: 'Poppins-Regular',
    color: Colors.red,
    marginTop: 5,
  },
};
