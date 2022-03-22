import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Animated,
} from 'react-native';
import * as yup from 'yup';
import EStyleSheet from 'react-native-extended-stylesheet';
// import auth from '@react-native-firebase/auth';
import styles from './styles';

// import {TextInput} from '../../components/Forms';
// import Instagram from '../../assets/icons/Instagram';
// import ChevronRight from '../../assets/icons/ChevronRight';

const style = EStyleSheet.create(styles);

const schema = yup.object().shape({
  email: yup.string().min(3).max(100),
  pass: yup.string().min(3).max(100),
});

const ForgottenPassword = ({}) => {
  return (
    <View style={style.ForgottenPassword}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Text>Forgot password? Sucks to be you</Text>
    </View>
  );
};

export default ForgottenPassword;
