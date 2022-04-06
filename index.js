import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {store} from './src/redux/store';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

messaging().setBackgroundMessageHandler(remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  // return handleNotification(remoteMessage, store.dispatch);
});

/**
 * On iOS however, when a message is received
 * the device silently starts your application in a background state.
 * At this point, your background handler (via setBackgroundMessageHandler) is triggered,
 * but your root React component also gets mounted.
 * This can be problematic for some users since any side-effects
 * will be called inside of your app (e.g. useEffects, analytics events/triggers etc).
 * To get around this problem, the messaging module injects a isHeadless prop
 * to your root component which you can conditionally use to render/do "nothing"
 * if your app is launched in the background
 * @param {*} isHeadless
 * @see https://rnfirebase.io/messaging/usage#background-application-state
 */
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Config.ENV === 'storybook'
AppRegistry.registerComponent(appName, () => HeadlessCheck);
