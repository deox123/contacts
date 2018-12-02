// @flow

import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';

import type {Store} from 'redux';

import reducers from '../base.reducers';
import epics from '../base.epics';

const epicMiddleware = createEpicMiddleware(epics);

const initialState = {};

const store: Store<> = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(
            createLogger(),
            epicMiddleware,
        ),
    ),
);

export default store;