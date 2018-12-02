// @flow

import {combineEpics} from 'redux-observable';

import homeEpic from './routes/HomeRoute/epics';

const epics = combineEpics(
    homeEpic,
);

export default epics;