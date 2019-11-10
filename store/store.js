/**
 * @format
 * @flow
 */
 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import twitterApp from "./reducers/twitterReducers";

const store = createStore(twitterApp);

export default store;