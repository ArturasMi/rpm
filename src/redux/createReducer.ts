import { Action } from "../store";

export const createReducer =
  <S = object>(initialState: S, handlers: any | Action<any>) =>
  (state = initialState, action: any) => {
    const { type } = action;
    if (!handlers.hasOwnProperty(type)) return state;

    return handlers[type](state, action);
  };
