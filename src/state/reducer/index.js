import { combineReducers } from 'redux';
import pathReducer from './path';
import handReducer from './hand';

const rootReducer = combineReducers({
  path: pathReducer,
  hand: handReducer,
});

export default rootReducer;
