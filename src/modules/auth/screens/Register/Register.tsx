import React, {useState} from 'react';
import {Text, View, StatusBar, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import {Button, Checkbox, ScreenTitle, TextInput} from '../../../../components';
import {AuthViewModel} from '../../viewmodels';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';
import {setInput} from '../../../../helpers/functions';

const style = EStyleSheet.create(styles);

export const Register = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    city: '',
    wdyhau: '',
    why: '',
  });
  const [rules, updateRules] = useState(false);
  const [privacy, updatePrivacy] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const {submitRegisterForm} = new AuthViewModel(dispatch);

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
            onChange={setInput('name', form, setForm, errors, setErrors)}
            placeholder={'Name'}
            error={errors.name}
          />
          <TextInput
            value={form.lastname}
            onChange={setInput('lastname', form, setForm, errors, setErrors)}
            placeholder={'Lastname'}
            error={errors.lastname}
          />
          <TextInput
            value={form.email}
            onChange={setInput('email', form, setForm, errors, setErrors)}
            placeholder={'Email address'}
            error={errors.email}
          />
          <TextInput
            value={form.city}
            onChange={setInput('city', form, setForm, errors, setErrors)}
            placeholder={'City'}
            error={errors.city}
          />

          <TextInput
            value={form.wdyhau}
            onChange={setInput('wdyhau', form, setForm, errors, setErrors)}
            placeholder={'Optional: Where did you hear about us?'}
            error={errors.wdyhau}
          />

          <TextInput
            value={form.why}
            onChange={setInput('why', form, setForm, errors, setErrors)}
            placeholder={'Why do you want to join us?'}
            options={{
              multiline: true,
              numberOfLines: 5,
              textAlignVertical: 'top',
            }}
            error={errors.why}
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
          <Button
            value="Submit form"
            onPress={() => submitRegisterForm(form, setErrors)}
            container={undefined}
            button={undefined}
          />
        </View>
      </ScrollView>
    </View>
  );
};
