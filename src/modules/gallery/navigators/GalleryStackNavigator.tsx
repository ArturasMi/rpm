import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Gallery, GalleryWatch} from '../screens';

const Stack = createNativeStackNavigator();

export const GalleryStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Gallery" component={Gallery} />
    <Stack.Screen name="GalleryWatch" component={GalleryWatch} />
  </Stack.Navigator>
);
