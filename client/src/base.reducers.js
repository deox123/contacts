// @flow

import {combineReducers} from 'redux';
import type {CombinedReducer} from 'redux';

import HomeRoute from './routes/HomeRoute/reducers';

const reducers: CombinedReducer = combineReducers({
    HomeRoute,
});

export default reducers;