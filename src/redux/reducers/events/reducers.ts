import {createReducer} from '../../createReducer';
import {EventsActionTypes, EventsInterface} from './types';

const initialState: EventsInterface = {
  list: [],
  error: null,
};

const Reduction = {
  events: (
    state: EventsInterface,
    action: {
      type: EventsActionTypes;
      payload: any;
    },
  ) => {
    switch (action.type) {
      case EventsActionTypes.GET_EVENTS_FULFILLED: {
        return {
          list: action.payload._docs,
          error: null,
        };
      }
      case EventsActionTypes.GET_EVENTS_REJECTED: {
        return {
          ...state,
          error: action.payload.userInfo.message,
        };
      }
      default:
        return state;
    }
  },
};

export const reducer = createReducer(initialState, {
  [EventsActionTypes.GET_EVENTS_FULFILLED]: Reduction.events,
  [EventsActionTypes.GET_EVENTS]: Reduction.events,
  [EventsActionTypes.GET_EVENTS_REJECTED]: Reduction.events,
});
