import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventDetails, Events} from '../screens';
import {Screens} from '../../../navigation/Screens';

const Stack = createNativeStackNavigator();

export const EventsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Screens.EVENTS_LIST} component={Events} />
    <Stack.Screen name={Screens.EVENT_DETAILS} component={EventDetails} />
  </Stack.Navigator>
);
