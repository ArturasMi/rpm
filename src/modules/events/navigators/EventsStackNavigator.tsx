import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EventDetails, Events} from '../screens';

const Stack = createStackNavigator();

export const EventsStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="EventsList"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="EventsList" component={Events} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
  </Stack.Navigator>
);
