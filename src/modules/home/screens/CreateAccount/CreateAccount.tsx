import React, {useState} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ScreenTitle,
  ProfilePicture,
  TextInput,
  Button,
} from '../../../../components';
import {styles} from './styles';
import * as yup from 'yup';
import {AuthViewModel} from '../../../auth';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {GlobalState} from '../../../../redux/reducers';
import {UserProfileType} from '../../../../redux/reducers/auth/types';
import {Screens} from '../../../../navigation/Screens';

const style = EStyleSheet.create(styles);

const schema = yup.object().shape({
  name: yup.string().min(3).max(100),
  lastname: yup.string().required().min(3).max(100),
  car_make: yup.string().min(3).max(100),
  car_model: yup.string().min(1).max(100),
  image: yup.string().required('image Image is required').nullable(),
  kw: yup.string().min(1).max(9999),
  number_plate: yup.string().min(3).max(12),
});

export const CreateAccount = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {createProfile} = new AuthViewModel(dispatch);
  const uid = useSelector((state: GlobalState) => state.auth.uid);
  const [errors, updateErrors] = useState<any>({});
  const [form, updateForm] = useState<UserProfileType>({
    name: '',
    lastname: '',
    car_make: '',
    car_model: '',
    image: '',
    kw: '',
    number_plate: '',
  });

  const updateInput = (value, input) => updateForm({...form, [input]: value});

  const validateForm = () => {
    schema
      .validate(form, {
        abortEarly: false,
        strict: false,
      })
      .then(async e => {
        createProfile(form, uid);
        navigation.navigate(Screens.HOME);
      })
      .catch(err => {
        let errors = {};
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
    <View style={style.CreateAccount}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={style.Container}>
        <ScreenTitle disableBack title="Finish registration" />
        <Text style={style.FillOut}>
          Please fill out the following form to proceed with your registration
          or something.
        </Text>
        <View style={style.Form}>
          <View style={style.FormContainer}>
            <ProfilePicture
              value={form.image}
              onChange={e => updateInput(e, 'image')}
              error={errors.image}
            />
            <TextInput
              value={form.name}
              onChange={e => updateInput(e, 'name')}
              placeholder={'Name'}
              error={errors.name}
            />
            <TextInput
              value={form.lastname}
              onChange={e => updateInput(e, 'lastname')}
              placeholder={'Last Name'}
              error={errors.lastname}
            />
            <TextInput
              value={form.car_make}
              onChange={e => updateInput(e, 'car_make')}
              placeholder={'Car Make'}
              error={errors.car_make}
            />
            <TextInput
              value={form.car_model}
              onChange={e => updateInput(e, 'car_model')}
              placeholder={'Car Model'}
              error={errors.car_model}
            />
            <TextInput
              value={form.kw}
              onChange={e => updateInput(e, 'kw')}
              placeholder={'Kw ( 1 = 0.746 horespower )'}
              error={errors.kw}
            />
            <TextInput
              value={form.number_plate}
              onChange={e => updateInput(e, 'number_plate')}
              placeholder={'Number Plate'}
              error={errors.number_plate}
            />
            <View style={{marginTop: 20, paddingBottom: 90}}>
              <Button value="Submit" onPress={validateForm} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
