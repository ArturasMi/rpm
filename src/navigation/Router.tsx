import React, {useEffect, useState} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from '../modules/auth/navigators/AuthStackNavigator';
import {useSelector} from 'react-redux';
import {GlobalState} from '../redux/reducers';
import {MainStackNavigator} from './MainStackNavigator';

export const MainRouter = () => {
  const userSelector = useSelector((state: GlobalState) => state.auth);
  const [isLoggedIn, setLoggedInStatus] = useState<boolean>(false);

  useEffect(() => {
    setLoggedInStatus(!!userSelector);
  }, [userSelector]);
  return (
    <NavigationContainer theme={DarkTheme}>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
