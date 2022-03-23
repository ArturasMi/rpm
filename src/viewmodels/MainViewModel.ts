import messaging from '@react-native-firebase/messaging';

export enum NavigationType {
  MAIN_STACK = 'MAIN_STACK',
  AUTH_STACK = 'AUTH_STACK',
}

export class MainViewModel {
  constructor() {}

  requestNotificationsPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
}
