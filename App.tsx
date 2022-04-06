import React, {useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Notifications} from 'react-native-notifications';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import {MainRouter} from './src/navigation/Router';
import {GlobalState} from './src/redux/reducers';
import {AuthActions} from './src/redux/reducers/auth/actions';
import {EventsActions} from './src/redux/reducers/events/actions';
import {GalleryActions} from './src/redux/reducers/gallery/actions';
import {MapActions} from './src/redux/reducers/map/actions';
import {AppDispatch} from './src/redux/store';
import {SiteActions} from './src/redux/reducers/site/actions';
import {NavigationType} from './src/viewmodels/MainViewModel';
import auth from '@react-native-firebase/auth';
import {AuthViewModel} from './src/modules/auth';

EStyleSheet.build();

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: GlobalState) => state.auth);
  const {updateToken} = new AuthViewModel(dispatch);

  // Preload data
  useEffect(() => {
    if (user.uid) {
      console.log('--- Get profile', user.uid);
      Promise.all([
        dispatch(AuthActions.getProfile(user.uid)),
        dispatch(GalleryActions.getGallery()),
        dispatch(EventsActions.getEvents(10)),
      ])
        .then(() => {
          console.log('--- All data loaded fine');
          dispatch(SiteActions.updateNavigator(NavigationType.MAIN_STACK));

          // Not sure if this is the right place
          // Might be moved in future
          updateToken(user.uid);
        })
        .catch(err => {
          console.log('--- There was issues loading data', err);
        });
    }
  }, [user.uid]);

  // Notifications
  useEffect(() => {
    Notifications.registerRemoteNotifications();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        'A new FCM message arrived!',
        JSON.parse(remoteMessage.data.string),
      );
      Notifications.postLocalNotification({
        body: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        sound: '',
        badge: 1,
        silent: false,
        category: 'SOME_CATEGORY',
        userInfo: {},
        fireDate: new Date(),
      });
    });

    return unsubscribe;
  }, []);

  // Handle user state changes
  const onAuthStateChanged = state => {
    if (state?._user?.uid && user.uid !== state._user.uid) {
      console.log('--- Session has been restored');
      dispatch(
        AuthActions.restore({
          uid: state._user.uid,
          email: state._user.email,
          emailVerified: state._user.emailVerified,
        }),
      );
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <MainRouter />;
};

export default App;
