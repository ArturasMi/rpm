import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ScreenTitle, Switch} from '../../../../components';
import FadeIn from '../../../../components/Animate/FadeIn';
import EStyleSheet from 'react-native-extended-stylesheet';

import {styles} from './styles';

import ChevronRight from '../../../../assets/icons/ChevronRight';
import Lock from '../../../../assets/icons/Lock';
import Talk from '../../../../assets/icons/Talk';
import Shield from '../../../../assets/icons/Shield';
import Google from '../../../../assets/icons/Google';
import Facebook from '../../../../assets/icons/Facebook';
import {Colors} from '../../../../configs';

const style = EStyleSheet.create(styles);

const Settings = ({navigation}) => {
  const [fbstate, updateFb] = useState(false);
  const [ggstate, updateGg] = useState(false);

  return (
    <ScrollView style={style.Settings}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={style.TitleContainer}>
        <ScreenTitle title="Settings" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <FadeIn delay={100}>
          <View style={style.SettingsBlock}>
            <View style={style.SettingsIcon}>
              <Lock size={15} color={Colors.Primary200} />
            </View>
            <Text style={style.SettingsName}>Change Password</Text>
            <View style={style.ChevronHolder}>
              <ChevronRight size={15} color="#fff" />
            </View>
          </View>
        </FadeIn>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
        <FadeIn delay={200}>
          <View style={{...style.SettingsBlock, opacity: 0.5}}>
            <View style={style.SettingsIcon}>
              <Talk size={15} color={Colors.Primary200} />
            </View>
            <Text style={style.Soon}>Soon!</Text>
            <Text style={style.SettingsName}>Feedback</Text>
            <View style={style.ChevronHolder}>
              <ChevronRight size={15} color="#fff" />
            </View>
          </View>
        </FadeIn>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PrivacySecurity')}>
        <FadeIn delay={300}>
          <View style={style.SettingsBlock}>
            <View style={style.SettingsIcon}>
              <Shield size={15} color={Colors.Primary200} />
            </View>
            <Text style={style.SettingsName}>Privacy and Security</Text>
            <View style={style.ChevronHolder}>
              <ChevronRight size={15} color="#fff" />
            </View>
          </View>
        </FadeIn>
      </TouchableOpacity>
      <Text style={style.CategoryTitle}>Bind Account</Text>
      <FadeIn delay={400}>
        <View style={{...style.SettingsBlock, opacity: 0.5}}>
          <View style={style.SettingsIcon}>
            <Google size={15} />
          </View>
          <Text style={style.Soon}>Soon!</Text>
          <Text style={style.SettingsName}>Google</Text>
          <View style={style.ChevronHolder}>
            <Switch onChange={updateGg} size={25} gaps={5} value={undefined} />
          </View>
        </View>
      </FadeIn>

      <FadeIn delay={500}>
        <View style={{...style.SettingsBlock, opacity: 0.5}}>
          <View style={style.SettingsIcon}>
            <Facebook size={15} />
          </View>
          <Text style={style.Soon}>Soon!</Text>
          <Text style={style.SettingsName}>Facebook</Text>
          <View style={style.ChevronHolder}>
            <Switch onChange={updateFb} size={25} gaps={5} value={undefined} />
          </View>
        </View>
      </FadeIn>
    </ScrollView>
  );
};

export default Settings;
