import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Gallery, GalleryWatch} from '../screens';

const Stack = createStackNavigator();

export const GalleryStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Gallery"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Gallery" component={Gallery} />
    <Stack.Screen name="GalleryWatch" component={GalleryWatch} />
  </Stack.Navigator>
);
