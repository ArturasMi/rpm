import React, {useState} from 'react';
import {Text, View, StatusBar, ScrollView, ToastAndroid} from 'react-native';
import * as yup from 'yup';
// import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {Button, Checkbox, ScreenTitle, TextInput} from '../../../../components';

// import {Button, TextInput, Checkbox} from '../../components/Forms';
// import ScreenTitle from '../../components/ScreenTitle';

const style = EStyleSheet.create(styles);

const schema = yup.object().shape({
  name: yup.string().min(3).max(100),
  lastname: yup.string().min(3).max(100),
  email: yup.string().email().min(3).max(100),
  city: yup.string().min(3).max(100),
  wdyhau: yup.string(),
  why: yup.string().min(3).max(500),
  rules: yup.boolean().oneOf([true], 'rules You must agree with rules'),
  privacy: yup.boolean().oneOf([true], 'privacy You must agree with privacy'),
});

export const Register = ({navigation}) => {
  const [form, updateForm] = useState({
    name: '',
    lastname: '',
    email: '',
    city: '',
    wdyhau: '',
    why: '',
  });
  const [rules, updateRules] = useState(false);
  const [privacy, updatePrivacy] = useState(false);
  const [errors, updateErrors] = useState<any>({});
  const [globalError, updateGlobalError] = useState(null);

  const updateInput = (value, input) => updateForm({...form, [input]: value});

  const submitForm = () => {
    // let errors = {};
    // schema
    //   .validate(
    //     {
    //       ...form,
    //       privacy,
    //       rules,
    //     },
    //     {
    //       abortEarly: false,
    //       strict: false,
    //     },
    //   )
    //   .then(() =>
    //     firestore()
    //       .collection('registration')
    //       .add(form)
    //       .then(() => {
    //         ToastAndroid.show(
    //           'Registration form successfuly submitted!',
    //           ToastAndroid.SHORT,
    //         );
    //         navigation.navigate('Login');
    //         updateForm({
    //           name: '',
    //           lastname: '',
    //           email: '',
    //           city: '',
    //           wdyhau: '',
    //           why: '',
    //         });
    //         updateErrors({});
    //         updateUserProfile(true);
    //       })
    //       .catch(() => {
    //         updateGlobalError('Uh oh something went really wrong...');
    //       }),
    //   )
    //   .catch(err => {
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

  console.log('ERRORS ', errors);

  return (
    <View style={style.Register}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ScreenTitle title="Register" />
        <Text style={style.RegisterInfo}>
          Complete the form below to sign up for our membership service.
        </Text>

        <View style={style.Form}>
          <TextInput
            value={form.name}
            onChange={e => updateInput(e, 'name')}
            placeholder={'Name'}
            error={errors.name}
          />
          <TextInput
            value={form.lastname}
            onChange={e => updateInput(e, 'lastname')}
            placeholder={'Lastname'}
            error={errors.lastname}
          />
          <TextInput
            value={form.email}
            onChange={e => updateInput(e, 'email')}
            placeholder={'Email address'}
            error={errors.email}
          />
          <TextInput
            value={form.city}
            onChange={e => updateInput(e, 'city')}
            placeholder={'City'}
            error={errors.city}
          />

          <TextInput
            value={form.wdyhau}
            onChange={e => updateInput(e, 'wdyhau')}
            placeholder={'Optional: Where did you hear about us?'}
            error={errors.wdyhau}
          />

          <TextInput
            value={form.why}
            onChange={e => updateInput(e, 'why')}
            placeholder={'Why do you want to join us?'}
            options={{
              multiline: true,
              numberOfLines: 5,
              textAlignVertical: 'top',
            }}
            error={errors.wdyhau}
          />
        </View>

        <Text style={style.Title}>Membership Rules</Text>

        <Text style={style.Rule}>
          1. Membership is available to anyone 18 years of age or older.
        </Text>
        <Text style={style.Rule}>
          2. You promise NOT to use to conduct any fraudulent or business
          activity or have more than one Member Account at any time.
        </Text>

        <View style={{marginVertical: 20}}>
          <Checkbox
            value={rules}
            onChange={updateRules}
            onRight={
              <Text style={style.Terms}>
                I have read, understood, and accepted the rules for membership.
              </Text>
            }
            error={errors.rules}
            container={undefined}
          />
        </View>

        <View style={style.Separator} />

        <Text style={style.Title}>Privacy Policy</Text>

        <Text style={style.Rule}>
          Please reach out and read our Privacy Policy in order to understand
          how your information is used and shared, and check below if you accept
          the policy.
        </Text>

        <View style={{marginVertical: 20}}>
          <Checkbox
            value={privacy}
            onChange={updatePrivacy}
            onRight={
              <Text style={style.Terms}>
                I have read, understood, and accepted the PRIVACY POLICY for
                membership.
              </Text>
            }
            error={errors.privacy}
            container={undefined}
          />
        </View>

        <Text style={style.CenteredBottom}>
          Once you submit your application, we will contact you shortly to
          complete your membership application.
        </Text>

        <Text style={style.CenteredBottom}>Thank you!</Text>

        <View style={style.SubmitContainer}>
          {globalError && (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#982833',
              }}>
              {globalError}
            </Text>
          )}
          <Button
            value="Submit form"
            onPress={submitForm}
            container={undefined}
            button={undefined}
          />
        </View>
      </ScrollView>
    </View>
  );
};
