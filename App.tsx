import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {MainRouter} from './src/navigation/Router';
import {GlobalState} from './src/redux/reducers';
import {AuthActions} from './src/redux/reducers/auth/actions';
import {AppDispatch} from './src/redux/store';

EStyleSheet.build();
let prevId = null;

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: GlobalState) => state.auth);
  React.useEffect(() => {
    dispatch(
      AuthActions.login({
        email: 'test@test.com',
        password: '123123',
      }),
    );
  }, []);

  React.useEffect(() => {
    if (user.uid !== prevId) {
      dispatch(AuthActions.getProfile(user.uid));
      prevId = user.uid;
    }
  }, [user]);

  return <MainRouter />;
};

export default App;
