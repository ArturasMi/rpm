import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch} from 'react-redux';
import {MainRouter} from './src/navigation/Router';
import {AuthActions} from './src/redux/reducers/auth/actions';
import {AppDispatch} from './src/redux/store';

EStyleSheet.build();

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(
      AuthActions.login({
        email: 'test@test.com',
        password: '123123',
      }),
    );
  }, []);

  return <MainRouter />;
};

export default App;

// import React, { useEffect, useState } from "react";
// import { View, ToastAndroid } from "react-native";

// import auth from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";
// import messaging from "@react-native-firebase/messaging";

// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import PushNotification from "react-native-push-notification";
// import config from "./src/config";

// import EStyleSheet from "react-native-extended-stylesheet";

// // Screens
// import Login from "./src/screens/Login";
// import Register from "./src/screens/Register";
// import ForgottenPassword from "./src/screens/ForgottenPassword";
// import Home from "./src/screens/Home";
// import Events from "./src/screens/Events";
// import EventDetails from "./src/screens/EventDetails";
// import Gallery from "./src/screens/Gallery";
// import Profile from "./src/screens/Profile";
// import EditProfile from "./src/screens/EditProfile";
// import CreateAccount from "./src/screens/CreateAccount";
// import ClubMap from "./src/screens/Map";
// import GalleryWatch from "./src/screens/GalleryWatch";
// import MyEvents from "./src/screens/MyEvents";
// import FAQ from "./src/screens/FAQ";
// import Settings from "./src/screens/Settings";
// import ChangePassword from "./src/screens/ChangePassword";
// import PrivacySecurity from "./src/screens/PrivacySecurity";

// // Modals
// import ModalWarning from "./src/modals/ModalWarning";

// // Icons
// import HomeIcon from "./src/assets/icons/Home";
// import EventsIcon from "./src/assets/icons/Events";
// import MapIcon from "./src/assets/icons/Map";
// import GalleryIcon from "./src/assets/icons/Gallery";
// import ProfileIcon from "./src/assets/icons/Profile";

// import { enableScreens } from "react-native-screens";
// import { AuthStackNavigator } from "./src/modules/auth/navigators/AuthStackNavigator";
// enableScreens();

// EStyleSheet.build();

// const Stack = createStackNavigator();
// const Root = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Main routes
// const initialMainRoute = "Map";
// const initialProfileRoute = "MyProfile";
// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: config.colorBlack,
//   },
// };

// PushNotification.configure({
//   onNotification: (notification) => {
//     //Code to print array into console
//     console.log(notification);

//     //Code to be executed according to the action selected by the user
//     if (notification.action == "Accept") {
//       console.log("ACCEPT");
//     }
//   },
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },
//   onAction: (e) => {
//     console.log("ON ACTION ", e);
//   },
//   popInitialNotification: true,
//   requestPermissions: true,
// });

// export const UserContext = React.createContext(null);

// let allow = true;
// const App = () => {
//   const [loggedInStatus, updateLoggedInStatus] = useState(false);

//   const getUserProfile = (uid) => {
//     console.log("GET USER PROFILE");
//     firestore()
//       .collection("users")
//       .doc(uid)
//       .get()
//       .then(async (querySnapshot) => {
//         let deviceID;

//         try {
//           deviceID = await messaging().getToken();
//         } catch {
//           deviceID = "";
//         }

//         // UPDATE USER WITH NEW DEVICE ID
//         // IMPORTANT STEP TO MAKE NOTIFICATION
//         // SENDING EASIER AND ACCURATE
//         if (querySnapshot.exists)
//           firestore()
//             .collection("users")
//             .doc(uid)
//             .update({
//               deviceId: deviceID,
//             })
//             .then((e) => {
//               updateLoggedInStatus(querySnapshot);
//               allow = true;
//             })
//             .catch((err) => {
//               updateLoggedInStatus({ notCreated: true });
//               allow = true;
//             });
//         else {
//           updateLoggedInStatus({ notCreated: true });
//           allow = true;
//         }
//       })
//       .catch((error) => {
//         allow = true;
//         ToastAndroid.show(error.message, ToastAndroid.SHORT);
//         auth().signOut();
//       });
//   };

//   const onAuthStateChanged = async (user) => {
//     if (allow) {
//       // USER IS NOT EMPTY
//       if (user?.email) {
//         allow = false;
//         // IF USER ID IS DIFFERENT FROM CONTEXT
//         if (loggedInStatus && loggedInStatus.id !== user.id) {
//           await getUserProfile(user.uid);
//         }
//         // IF USER IS NOT LOGGED IN
//         else if (!loggedInStatus) {
//           allow = false;
//           await getUserProfile(user.uid);
//         }
//       }

//       // USER IS NULL
//       else if (user === null) {
//         updateLoggedInStatus(false);
//       }
//     }
//   };

//   const requestNotificationsPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log("Authorization status:", authStatus);
//     }
//   };

//   useEffect(() => {
//     // PushNotification.localNotification({
//     //   actions: ['Yes', 'No'],
//     //   title: 'TEST',
//     //   message: 'TEST',
//     // });
//     const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//       console.log(
//         "A new FCM message arrived!",
//         JSON.parse(remoteMessage.data.string),
//       );
//       PushNotification.localNotification({
//         actions: ["Accept", "Reject"], // (Android only) See the doc for notification actions to know more
//         title: remoteMessage.notification.title, // (optional)
//         message: remoteMessage.notification.body, // (required)
//       });
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     requestNotificationsPermission();
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   console.log("APP RE-RENDER", loggedInStatus);

//   // Separate?? TODO
//   const MainNavigation = () => {
//     // Logged out
//     if (loggedInStatus === false) {
//       return <AuthStackNavigator />;
//     }
//     // Account exists but registration was not finished
//     else if (loggedInStatus.notCreated === true) {
//       return (
//         <Stack.Navigator
//           initialRouteName='CreateAccount'
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name='CreateAccount' component={CreateAccount} />
//         </Stack.Navigator>
//       );
//     }
//     // Account is logged in
//     else {
//       return (
//         <Tab.Navigator
//           initialRouteName={initialMainRoute}
//           tabBarOptions={{
//             style: {
//               backgroundColor: config.colorBlack,
//               borderTopWidth: 0,
//               elevation: 8,
//             },
//           }}
//         >
//           <Tab.Screen
//             name='Home'
//             component={Home}
//             options={{
//               tabBarLabel: () => <></>,
//               tabBarIcon: ({ focused }) => (
//                 <HomeIcon
//                   size={20}
//                   color={focused ? config.colorMain : "#41414e"}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name='Events'
//             component={EventsNavigator}
//             options={{
//               tabBarLabel: () => <></>,
//               tabBarIcon: ({ focused }) => (
//                 <EventsIcon
//                   size={20}
//                   color={focused ? config.colorMain : "#41414e"}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name='Map'
//             component={ClubMap}
//             options={{
//               tabBarLabel: () => <></>,
//               tabBarIcon: ({ focused }) => (
//                 <MapIcon
//                   size={20}
//                   color={focused ? config.colorMain : "#41414e"}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name='Gallery'
//             component={GalleryNavigator}
//             options={{
//               tabBarLabel: () => <></>,
//               tabBarIcon: ({ focused }) => (
//                 <GalleryIcon
//                   size={20}
//                   color={focused ? config.colorMain : "#41414e"}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name='Profile'
//             component={ProfileNavigator}
//             options={{
//               tabBarLabel: () => <></>,
//               tabBarIcon: ({ focused }) => (
//                 <ProfileIcon
//                   size={20}
//                   color={focused ? config.colorMain : "#41414e"}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       );
//     }
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         profile: loggedInStatus,
//         getProfile: getUserProfile,
//       }}
//     >
//       <>
//         <View style={{ backgroundColor: "#000", flex: 1 }}>
//           <NavigationContainer theme={MyTheme}>
//             <Root.Navigator mode='modal'>
//               <Root.Screen
//                 name='Main'
//                 component={MainNavigation}
//                 options={{ headerShown: false }}
//               />
//               <Root.Screen
//                 name='ModalWarning'
//                 component={ModalWarning}
//                 options={{ headerShown: false }}
//               />
//             </Root.Navigator>
//           </NavigationContainer>
//         </View>
//       </>
//     </UserContext.Provider>
//   );
// };

// const EventsNavigator = () => (
//   <Stack.Navigator
//     initialRouteName='EventsList'
//     screenOptions={{
//       headerShown: false,
//     }}
//   >
//     <Stack.Screen name='EventsList' component={Events} />
//     <Stack.Screen name='EventDetails' component={EventDetails} />
//   </Stack.Navigator>
// );

// const GalleryNavigator = () => (
//   <Stack.Navigator
//     initialRouteName='Gallery'
//     screenOptions={{
//       headerShown: false,
//     }}
//   >
//     <Stack.Screen name='Gallery' component={Gallery} />
//     <Stack.Screen name='GalleryWatch' component={GalleryWatch} />
//   </Stack.Navigator>
// );

// const ProfileNavigator = (add) => {
//   return (
//     <Stack.Navigator
//       initialRouteName={initialProfileRoute}
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name='MyProfile'>
//         {(props) => <Profile {...props} {...add} />}
//       </Stack.Screen>
//       <Stack.Screen name='EditProfile'>
//         {(props) => <EditProfile {...props} {...add} />}
//       </Stack.Screen>
//       <Stack.Screen name='MyEvents'>
//         {(props) => <MyEvents {...props} />}
//       </Stack.Screen>
//       <Stack.Screen name='FAQ'>{(props) => <FAQ {...props} />}</Stack.Screen>
//       <Stack.Screen name='PrivacySecurity'>
//         {(props) => <PrivacySecurity {...props} />}
//       </Stack.Screen>
//       <Stack.Screen name='Settings' component={Settings} />
//       <Stack.Screen name='ChangePassword' component={ChangePassword} />
//       {/*
//     <Stack.Screen name="Rewards" component={Rewards} />
//     <Stack.Screen name="Help" component={Help} />
//     <Stack.Screen name="Feedback" component={Feedback} />
//     Force people to read rules
//     <Stack.Screen name="Rules" component={Rules} /> */}
//     </Stack.Navigator>
//   );
// };

// export default App;
