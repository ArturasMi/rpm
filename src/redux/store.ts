import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import loggerMiddleware from './logger';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunkMiddleware, promise),
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type Action<T = object> = {
  type: string;
  payload: T;
};
