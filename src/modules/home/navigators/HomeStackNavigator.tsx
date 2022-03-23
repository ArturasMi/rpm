import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, CreateAccount} from '../screens';
import {Screens} from '../../../navigation/Screens';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Screens.HOME} component={Home} />
    <Stack.Screen
      name={Screens.COMPLETE_REGISTRATION}
      component={CreateAccount}
    />
  </Stack.Navigator>
);
