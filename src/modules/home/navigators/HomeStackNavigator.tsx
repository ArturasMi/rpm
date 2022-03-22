import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CreateAccount} from '../screens';
import {Screens} from '../../../navigation/Screens';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="EventsList"
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
