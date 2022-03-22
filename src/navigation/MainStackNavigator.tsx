import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../modules/home';
import HomeIcon from '../assets/icons/Home';
import EventsIcon from '../assets/icons/Events';
import MapIcon from '../assets/icons/Map';
import GalleryIcon from '../assets/icons/Gallery';
import ProfileIcon from '../assets/icons/Profile';
import {Colors} from '../configs';
import {EventsStackNavigator} from '../modules/events/navigators/EventsStackNavigator';
import {Map} from '../modules/map';
import {GalleryStackNavigator} from '../modules/gallery/navigators/GalleryStackNavigator';

const Tab = createBottomTabNavigator();

export const MainStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 20,
          backgroundColor: Colors.colorBlack,
          borderTopWidth: 0,
          elevation: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({focused}) => (
            <HomeIcon
              size={20}
              color={focused ? Colors.colorMain : '#41414e'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsStackNavigator}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({focused}) => (
            <EventsIcon
              size={20}
              color={focused ? Colors.colorMain : '#41414e'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({focused}) => (
            <MapIcon size={20} color={focused ? Colors.colorMain : '#41414e'} />
          ),
        }}
      />
      <Tab.Screen
        name="GalleryNavigator"
        component={GalleryStackNavigator}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({focused}) => (
            <GalleryIcon
              size={20}
              color={focused ? Colors.colorMain : '#41414e'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: () => <></>,
          tabBarIcon: ({focused}) => (
            <ProfileIcon
              size={20}
              color={focused ? Colors.colorMain : '#41414e'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
