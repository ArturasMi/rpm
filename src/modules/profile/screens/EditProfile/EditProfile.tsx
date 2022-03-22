import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ScreenTitle,
  TextInput,
  Button,
  ProfilePicture,
} from '../../../../components';
import {styles} from './styles';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';
import {GlobalState} from '../../../../redux/reducers';
import {Screens} from '../../../../navigation/Screens';

const style = EStyleSheet.create(styles);

const schema = yup.object().shape({
  name: yup.string().min(3).max(100),
  lastname: yup.string().min(3).max(100),
  car_make: yup.string().min(3).max(100),
  car_model: yup.string().min(1).max(100),
  image: yup.string(),
  kw: yup.number().min(1).max(9999),
  number_plate: yup.string().min(3).max(12),
});

let allow = true;
let prevForm = null;

export const EditProfile = ({navigation}) => {
  const user = useSelector((state: GlobalState) => state.auth);
  const profile = user.profile;
  const [errors, updateErrors] = useState<any>({});
  const [form, updateForm] = useState(profile);

  useEffect(() => {
    prevForm = form;
  }, []);

  const updateInput = (value, input) => updateForm({...form, [input]: value});

  const submitForm = callback => {
    allow = false;

    const updateForm = newForm => {
      if (newForm !== prevForm) {
        firestore()
          .collection('users')
          .doc(user.uid)
          .update(newForm)
          .then(() => {
            allow = true;
            prevForm = newForm;
            updateErrors({});
            callback(user.uid);
            navigation.navigate(Screens.PROFILE);
          })
          .catch(err => console.log('ERROR FIRESTORE ', err));
      } else {
        navigation.navigate('MyProfile');
      }
    };

    let errors = {};
    schema
      .validate(form, {
        abortEarly: false,
        strict: false,
      })
      .then(e => {
        if (user.uid && profile.image !== form.image)
          storage()
            .ref('profile_pictures')
            .child(user.uid)
            .putFile(form.image)
            .then(async e => {
              const newImage = await storage()
                .ref('profile_pictures/' + user.uid)
                .getDownloadURL();

              const newForm = {
                ...form,
                image: newImage,
              };
              updateForm(newForm);
            })
            .catch(err => console.log('ERROR STORAGE ', err));
        else updateForm(form);
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
    <View style={style.EditProfile}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View style={style.Container}>
          <ScreenTitle title="Edit profile" />
          <Text style={style.FillOut}>
            Profile must contain valid data otherwise it might be suspended
            without any warning.
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
              <View style={{height: 30}} />

              <Button
                value="Submit"
                onPress={() => {}}
                // onPress={() => submitForm(getProfile)}
              />

              <Button
                value="Delete Account"
                container={{
                  backgroundColor: '#181820',
                  paddingVertical: 12,
                  paddingHorizontal: 40,
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  borderRadius: 10,
                  marginTop: 20,
                }}
                onPress={() => {}}
              />

              <View style={{height: 90}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
