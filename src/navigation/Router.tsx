import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigator} from '../modules/auth/navigators/AuthStackNavigator';
import {useSelector} from 'react-redux';
import {GlobalState} from '../redux/reducers';
import {MainStackNavigator} from './MainStackNavigator';

export const MainRouter = () => {
  const userSelector = useSelector((state: GlobalState) => state.auth);
  const [isLoggedIn, setLoggedInStatus] = useState<boolean>(false);

  useEffect(() => {
    console.log('userSelector - ', userSelector);
    setLoggedInStatus(!!userSelector);
  }, [userSelector]);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
