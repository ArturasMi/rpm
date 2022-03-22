import firestore from '@react-native-firebase/firestore';
import {EventsActionTypes} from './types';

const ActionCreator = {
  getEvents: (limit: number) => ({
    type: EventsActionTypes.GET_EVENTS,
    payload: firestore().collection('events').limit(limit).get(),
  }),
};

export {ActionCreator as EventsActions};
