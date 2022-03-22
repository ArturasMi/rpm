import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  Keyboard,
} from 'react-native';
import * as yup from 'yup';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TextInput, Floating} from '../../../../components';
import {
  AuthFormType,
  UserInterface,
} from '../../../../redux/reducers/auth/types';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {AuthActions} from '../../../../redux/reducers/auth/actions';
import {GlobalState} from '../../../../redux/reducers';

const style = EStyleSheet.create(styles);

const schema = yup.object().shape({
  email: yup.string().email().min(3).max(100),
  pass: yup.string().min(6).max(100),
});

export const Login = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const userSelector = useSelector((state: GlobalState) => state.auth);
  const [form, updateForm] = useState<AuthFormType>({
    email: '',
    password: '',
  });
  const [user, setUser] = useState<UserInterface>();
  const [errors, updateErrors] = useState<any>({});

  const updateInput = (value, input) => updateForm({...form, [input]: value});

  useEffect(() => {
    setUser(userSelector);
  }, [userSelector]);

  const login = () => {
    updateErrors({});

    let errors = {};
    schema
      .validate(form, {
        abortEarly: false,
        strict: false,
      })
      .then(() => {
        Keyboard.dismiss();
        dispatch(AuthActions.login(form));
      })
      .catch(err => {
        if (err.errors?.length) {
          for (let index = 0; index < Object.keys(err.errors).length; index++) {
            const keyName = err.errors[index].split(' ')[0];
            errors[keyName] = err.errors[index].substr(
              err.errors[index].indexOf(' ') + 1,
            );
          }
          updateErrors(errors);
        }
      });
  };

  return (
    <View style={style.Login}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={style.ScrollView}>
        <View style={style.Container}>
          <Text style={style.IntroText}>Welcome back,</Text>
          <Text style={style.SecondaryText}>Sign in to continue</Text>

          <TextInput
            value={form.email}
            onChange={e => updateInput(e, 'email')}
            placeholder={'John.doe@example.com'}
            error={errors.email}
          />

          <TextInput
            value={form.password}
            onChange={e => updateInput(e, 'password')}
            placeholder={'Password'}
            error={errors.password}
          />
          {user?.error && <Text style={style.ErrorMessage}>{user.error}</Text>}

          <Text
            style={style.ForgottenPassword}
            onPress={() => navigation.navigate('ForgottenPassword')}>
            Forgot Password?
          </Text>
        </View>
      </ScrollView>
      <Floating>
        <TouchableHighlight underlayColor="rgba(0,0,0,0)" onPress={login}>
          <Text style={style.LoginButton}>Log in</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="rgba(0,0,0,0)"
          onPress={() => navigation.navigate('Register')}>
          <Text style={style.RegisterButton}>Become a club member</Text>
        </TouchableHighlight>
      </Floating>
    </View>
  );
};
