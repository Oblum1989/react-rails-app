import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from './redux/reducers/initialState'
import storeReducer from './redux/reducers/storeReducer'

export default function configureStore() {
  const store = createStore(
    storeReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}