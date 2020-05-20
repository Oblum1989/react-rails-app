import * as types from './actionTypes'; 

export const getThingsSuccess = json => ({
  type: types.GET_THINGS_SUCCESS,
  json
})
