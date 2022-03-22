export interface EventsInterface {
  list: Array<any>;
  error: string | null;
}

export enum EventsActionTypes {
  GET_EVENTS = 'GET_EVENTS',
  GET_EVENTS_FULFILLED = 'GET_EVENTS_FULFILLED',
  GET_EVENTS_REJECTED = 'GET_EVENTS_REJECTED',
}
