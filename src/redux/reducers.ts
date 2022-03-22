import {combineReducers} from 'redux';
import {reducer as auth} from './reducers/auth/reducers';
import {reducer as events} from './reducers/events/reducers';
import {reducer as map} from './reducers/map/reducers';
import {reducer as gallery} from './reducers/gallery/reducers';
import {UserInterface} from './reducers/auth/types';
import {EventsInterface} from './reducers/events/types';
import {MapInterface} from './reducers/map/types';
import {GalleryInterface} from './reducers/gallery/types';

export interface GlobalState {
  auth: UserInterface;
  events: EventsInterface;
  map: MapInterface;
  gallery: GalleryInterface;
}

export const rootReducer = combineReducers<GlobalState>({
  //@ts-ignore
  auth,
  events,
  map,
  gallery,
});

export type StoreState = ReturnType<typeof rootReducer>;
