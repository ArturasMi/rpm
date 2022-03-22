import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../../navigation/Screens';
import {Profile} from '../screens';

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Screens.PROFILE} component={Profile} />
  </Stack.Navigator>
);
