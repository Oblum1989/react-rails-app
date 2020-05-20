import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export default function storeReducer(state = initialState.things, action) {
  switch(action.type) {
    case types.GET_THINGS_SUCCESS:
      return { things: action.json.things };
    default:
      return state;
  }
}