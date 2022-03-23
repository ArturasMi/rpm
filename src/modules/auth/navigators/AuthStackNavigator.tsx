import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '../screens/CreateAccount';
import ForgottenPassword from '../screens/ForgottenPassword';

import {Login, Register} from '../screens';
import {Screens} from '../../../navigation/Screens';

const Stack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.LOGIN} component={Login} />
      <Stack.Screen name={Screens.REGISTER} component={Register} />
      <Stack.Screen
        name={Screens.FORGOTTEN_PASS}
        component={ForgottenPassword}
      />
      <Stack.Screen name={Screens.CREATE_ACCOUNT} component={CreateAccount} />
    </Stack.Navigator>
  );
};
