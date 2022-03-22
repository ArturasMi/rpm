import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, StatusBar, ToastAndroid} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// import auth from '@react-native-firebase/auth';
import {TextInput, Button, ProfilePicture} from '../../components/Forms';
import styles from './styles';
import * as yup from 'yup';
// import firebase from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';
// import ScreenTitle from '../../components/ScreenTitle';
// import {UserContext} from '../../../App';

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

const CreateAccount = () => {
  const userData = useContext(UserContext);
  // const userID = firebase.auth().currentUser;
  const [isLoading, updateLoading] = useState(false);
  const [errors, updateErrors] = useState({});
  const [form, updateForm] = useState({
    name: '',
    lastname: '',
    car_make: '',
    car_model: '',
    image: null,
    kw: '',
    number_plate: '',
  });

  const updateInput = (value, input) => updateForm({...form, [input]: value});

  const submitForm = callback => {
    let errors = {};
    updateLoading(true);
    // schema
    //   .validate(form, {
    //     abortEarly: false,
    //     strict: false,
    //   })
    //   .then(async (e) => {
    //     if (userID)
    //       storage()
    //         .ref('profile_pictures')
    //         .child(userID.uid)
    //         .putFile(form.image)
    //         .then(async (e) => {
    //           const newForm = {
    //             ...form,
    //             image: await storage()
    //               .ref('profile_pictures/' + userID.uid)
    //               .getDownloadURL(),
    //           };

    //           firestore()
    //             .collection('users')
    //             .doc(userID.uid)
    //             .set(newForm)
    //             .then(() => {
    //               console.log('SUCCESS!!');
    //               updateErrors({});
    //               callback(userID.uid);
    //             })
    //             .catch((err) => console.log('IM CRASHED ', err))
    //             .finally(() => {
    //               updateLoading(false);
    //             });
    //         })
    //         .catch((err) => {
    //           updateLoading(false);
    //           console.log('ERROR ', err);
    //         });
    //     else
    //       ToastAndroid.show(
    //         'Ohh! Ahh! Something went really wrong! UID Not found',
    //         ToastAndroid.SHORT,
    //       );
    //   })
    //   .catch((err) => {
    //     console.log('IM CRASHED?? ', err);
    //     if (err.errors?.length) {
    //       for (let index = 0; index < Object.keys(err.errors).length; index++) {
    //         const keyName = err.errors[index].split(' ')[0];
    //         errors[keyName] = err.errors[index].substr(
    //           err.errors[index].indexOf(' ') + 1,
    //         );
    //       }
    //       updateErrors(errors);
    //     }
    //   });
  };

  const logout = () => {
    // auth().signOut();
  };

  return (
    <View style={style.CreateAccount}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* <UserContext.Consumer>
        {({profile, getProfile}) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
            contentContainerStyle={style.Container}>
            <View>
              {console.log('PROFILE ', profile)}
              <ScreenTitle title="Finish registration" onBack={logout} />
              <Text style={style.FillOut}>
                Please fill out the following form to proceed with your
                registration or something.
              </Text>
              <View style={style.Form}>
                <View style={style.FormContainer}>
                  <ProfilePicture
                    value={form.image}
                    onChange={e => updateInput(e, 'image')}
                    error={errors.image}
                  />

                  <TextInput
                    input={{
                      value: form.name,
                      onChangeText: e => updateInput(e, 'name'),
                      placeholder: 'Name',
                    }}
                    error={errors.name}
                  />
                  <TextInput
                    input={{
                      value: form.lastname,
                      onChangeText: e => updateInput(e, 'lastname'),
                      placeholder: 'Last Name',
                    }}
                    error={errors.lastname}
                  />
                  <TextInput
                    input={{
                      value: form.car_make,
                      onChangeText: e => updateInput(e, 'car_make'),
                      placeholder: 'Car Make',
                    }}
                    error={errors.car_make}
                  />
                  <TextInput
                    input={{
                      value: form.car_model,
                      onChangeText: e => updateInput(e, 'car_model'),
                      placeholder: 'Car Model',
                    }}
                    error={errors.car_model}
                  />
                  <TextInput
                input={{
                  value: form.image,
                  onChangeText: (e) => updateInput(e, 'image'),
                  placeholder: 'Image',
                }}
                error={errors.image}
              />
                  <TextInput
                    input={{
                      value: form.kw,
                      onChangeText: e => updateInput(e, 'kw'),
                      placeholder: 'Kw ( 1 = 0.746 horespower )',
                    }}
                    error={errors.kw}
                  />
                  <TextInput
                    input={{
                      value: form.number_plate,
                      onChangeText: e => updateInput(e, 'number_plate'),
                      placeholder: 'Number Plate',
                    }}
                    error={errors.number_plate}
                  />
                  <View style={{marginTop: 20}}>
                    {!isLoading ? (
                      <Button
                        value="Submit"
                        onPress={() => submitForm(getProfile)}
                      />
                    ) : (
                      <Button
                        value="Loading"
                        button={{
                          style: {
                            backgroundColor: '#666',
                            paddingVertical: 12,
                            paddingHorizontal: 40,
                            color: '#fff',
                            textAlign: 'center',
                            fontFamily: 'Poppins-Medium',
                            borderRadius: 10,
                          },
                        }}
                      />
                    )}

                    <Button
                      value="Logout"
                      button={{
                        style: {
                          backgroundColor: '#181820',
                          paddingVertical: 12,
                          paddingHorizontal: 40,
                          color: '#fff',
                          textAlign: 'center',
                          fontFamily: 'Poppins-Medium',
                          borderRadius: 10,
                          marginTop: 20,
                        },
                      }}
                      // onPress={auth().signOut}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </UserContext.Consumer> */}
    </View>
  );
};

export default CreateAccount;
