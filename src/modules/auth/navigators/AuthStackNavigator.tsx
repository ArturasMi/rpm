import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../screens/CreateAccount';
import ForgottenPassword from '../screens/ForgottenPassword';

import {Login, Register} from '../screens';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};
