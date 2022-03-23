import React, {useState} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TextInput, Button} from '../../../../components';
import {styles} from './styles';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../../configs';
import PaperPlane from '../../../../assets/icons/PaperPlane';
import {SlideIn} from '../../../../components/Animate/SlideIn';
import FadeIn from '../../../../components/Animate/FadeIn';
import Profile from '../../../../assets/icons/Shield';
import Lock from '../../../../assets/icons/Lock';
import {Screens} from '../../../../navigation/Screens';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import {AuthFormType} from '../../../../redux/reducers/auth/types';
import {setInput} from '../../../../helpers/functions';
import {AuthViewModel} from '../../viewmodels/AuthViewModel';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../../redux/store';

const style = EStyleSheet.create(styles);

export const Login = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formVisibility, updateVisibility] = useState<boolean>(false);
  const [form, setForm] = useState<AuthFormType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<any>({});
  const {submitLoginForm} = new AuthViewModel(dispatch);

  const loginWithEmail = () => {
    updateVisibility(true);
  };
  const goToLanding = () => {
    updateVisibility(false);
  };

  return (
    <View style={style.Login}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Video
        source={require('../../../../assets/video/video.mp4')}
        style={styles.BackgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        speed={0.4}
        ignoreSilentSwitch={'obey'}
      />
      <LinearGradient
        colors={['transparent', Colors.Neutral100]}
        style={style.Gradient}></LinearGradient>

      {formVisibility && (
        <View style={style.LoginForm}>
          <FadeIn delay={300} duration={300}>
            <TouchableOpacity style={style.GoBack} onPress={goToLanding}>
              <ArrowLeft size={20} color={Colors.Light100} />
            </TouchableOpacity>
            <View style={style.LoginFormHead}>
              <Text style={style.LoginFormTitle}>Sign in using email</Text>
            </View>
          </FadeIn>
          <SlideIn duration={400} delay={0}>
            <View style={[style.InputContainer]}>
              <TextInput
                value={form.email}
                placeholder="Email"
                onChange={setInput('email', form, setForm, errors, setErrors)}
                error={errors.email}
                prefix={<Profile size={15} color={Colors.Light100} />}
                options={{
                  autoFocus: true,
                }}
              />
            </View>
          </SlideIn>
          <SlideIn duration={400} delay={70}>
            <View style={[style.InputContainer]}>
              <TextInput
                value={form.password}
                placeholder="Password"
                onChange={setInput(
                  'password',
                  form,
                  setForm,
                  errors,
                  setErrors,
                )}
                error={errors.password}
                prefix={<Lock size={15} color={Colors.Light100} />}
                options={{
                  secureTextEntry: true,
                }}
              />
            </View>
          </SlideIn>

          <FadeIn delay={300} duration={300}>
            <View style={style.Register}>
              <TouchableOpacity
                onPress={() => navigation.navigate(Screens.FORGOTTEN_PASS)}>
                <Text style={style.RegisterText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </FadeIn>
        </View>
      )}

      <View style={style.LoginMethod}>
        {formVisibility ? (
          <Button
            value=""
            onPress={() => submitLoginForm(form, setErrors)}
            container={[style.LoginBtn, style.LoginBtnBg]}>
            <View style={[style.LoginBtnTextWrap, {height: 50}]}>
              <Text style={style.LoginBtnText}>Sign in</Text>
            </View>
          </Button>
        ) : (
          <Button value="" onPress={loginWithEmail} container={style.LoginBtn}>
            <View style={style.IconContainer}>
              <PaperPlane size={16} color={'white'} />
            </View>
            <View style={style.LoginBtnTextWrap}>
              <Text style={style.LoginBtnText}>Sign in with Email</Text>
            </View>
          </Button>
        )}
        {!formVisibility && (
          <View style={style.Register}>
            <TouchableOpacity
              onPress={() => navigation.navigate(Screens.REGISTER)}>
              <Text style={style.RegisterText}>Not a member yet? Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
