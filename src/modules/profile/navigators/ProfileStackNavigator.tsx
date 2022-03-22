import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../../navigation/Screens';
import {Profile, PrivacySecurity, FAQ, MyEvents, EditProfile} from '../screens';
import Settings from '../screens/Settings/Settings';

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Screens.PROFILE} component={Profile} />
    <Stack.Screen name={Screens.SETTINGS} component={Settings} />
    <Stack.Screen name={Screens.PRIVACY} component={PrivacySecurity} />
    <Stack.Screen name={Screens.GET_HELP} component={FAQ} />
    <Stack.Screen name={Screens.MY_EVENTS} component={MyEvents} />
    <Stack.Screen name={Screens.EDIT_PROFILE} component={EditProfile} />
  </Stack.Navigator>
);
