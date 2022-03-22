import React, {useContext} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {ProgressiveImage} from '../../../../components';
import Crown from '../../../../assets/icons/Crown';
import {useSelector} from 'react-redux';
import {GlobalState} from '../../../../redux/reducers';
import EditProfileIcon from '../../../../assets/icons/Edit';
import RewardsIcon from '../../../../assets/icons/Home';
import SettingsIcon from '../../../../assets/icons/Home';
import HelpIcon from '../../../../assets/icons/Home';
import LogoutIcon from '../../../../assets/icons/Home';
import Promotion from '../../../../assets/vectors/Premium';

const style = EStyleSheet.create(styles);

export const Profile = ({navigation}) => {
  // const profile = useContext(UserContext);
  const profile = useSelector((state: GlobalState) => state.auth.profile);
  console.log('PROFKL e ,', profile);
  const logout = () => {
    auth().signOut();
  };
  const ProfileMenuItems = [
    {
      name: 'Edit Profile',
      icon: EditProfileIcon,
      onPress: () => navigation.navigate('EditProfile'),
      background: '#613aff',
    },
    {
      name: 'Rewards',
      icon: RewardsIcon,
      onPress: () => {},
      background: '#00bcd4',
    },
    {
      name: 'My Events',
      icon: RewardsIcon,
      onPress: () => navigation.navigate('MyEvents'),
      background: '#00bcd4',
    },
    {
      name: 'Settings',
      icon: SettingsIcon,
      onPress: () => navigation.navigate('Settings'),
      background: '#ffb63a',
    },
    {
      name: 'Help',
      icon: HelpIcon,
      onPress: () => navigation.navigate('FAQ'),
      background: '#9c27b0',
    },
    {
      name: 'Logout',
      icon: LogoutIcon,
      onPress: logout,
      background: '#ff3a3a',
    },
  ];

  return (
    <ScrollView style={style.Profile}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={style.ProfileHeadContainer}>
        <View style={style.ProfileImageContainer}>
          <ProgressiveImage
            style={style.Image}
            source={{
              uri: profile.image,
            }}
          />
        </View>

        <View style={style.ProfileHeadDetails}>
          <View style={style.ProfileHasPremium}>
            <View style={style.ProfileCrownContainer}>
              <Crown size={14} color={'#ffb63a'} />
            </View>
            <Text style={style.Premium}>Premium</Text>
          </View>
          <Text style={style.Name}>
            {profile.name} {profile.lastname}
          </Text>
          <Text style={style.NumberPlate}>{profile.number_plate}</Text>
        </View>
      </View>

      <Text style={style.ScreenTitle}>Options</Text>
      <View style={style.Promotion}>
        <View style={style.PromotionTitle}>
          <View style={style.CrownContainer}>
            <Crown size={20} color={'#ffb63a'} />
          </View>
          <Text style={style.PromotionTitleText}>Invite a friend!</Text>
        </View>

        <Text style={style.ReadPromotion}>See All</Text>
        <View style={style.PromotionBgContainer}>
          <Promotion />
        </View>
      </View>

      <View style={style.ProfileMenu}>
        {ProfileMenuItems.map((item, index) => (
          <View style={style.MenuItem} key={index}>
            <View
              style={{
                ...style.IconContainer,
                backgroundColor: item.background,
              }}>
              <item.icon size={18} color="#fff" />
            </View>
            <Text style={style.MenuText} onPress={item.onPress}>
              {item.name}
            </Text>
            <View style={style.Chevron}>
              <ChevronRight size={20} color="#fff" />
            </View>
          </View>
        ))}

        <Text style={{textAlign: 'center', marginTop: 30, paddingBottom: 90}}>
          alpha.1.0.1
        </Text>
      </View>
    </ScrollView>
  );
};
