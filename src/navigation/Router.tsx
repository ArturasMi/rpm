import React, {useEffect, useState} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {GlobalState} from '../redux/reducers';
import {NavigationType} from '../viewmodels/MainViewModel';
import {AuthStackNavigator} from '../modules/auth';
import {MainStackNavigator} from './MainStackNavigator';

export const MainRouter = () => {
  const stateSelector = useSelector((state: GlobalState) => state.site);
  const [state, setState] = useState<NavigationType>(NavigationType.AUTH_STACK);

  useEffect(() => {
    setState(stateSelector.navigator);
  }, [stateSelector.navigator]);

  const getCurrentNavigation = (state: NavigationType): any => {
    switch (state) {
      case NavigationType.AUTH_STACK:
        return <AuthStackNavigator />;
      case NavigationType.MAIN_STACK:
        return <MainStackNavigator />;
      default:
        return null; // Should be replaced with ErrorStack
    }
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      {getCurrentNavigation(state)}
    </NavigationContainer>
  );
};
