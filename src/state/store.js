import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import middleware from './middleware';

const middlewareEnhancer = applyMiddleware(middleware, thunk);

const store = createStore(reducer, middlewareEnhancer);

export default store;
