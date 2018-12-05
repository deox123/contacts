// @flow

import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

import getJSON from '../../utils/http';
import params from '../../utils/params';

import type {
    person,
    persons,
} from './types';

import {
    GET_PERSON,
    getPersonFulfilled,
    getPersonRejected,
} from './actions';

export const fetchPearsonEpic = (action$: Observable<any>): Observable<any> =>
    action$.ofType(GET_PERSON)
        .mergeMap((action) => {
            return getJSON(`${params.API_ROOT}persons`)
                .mergeMap((res: persons) => Observable.of(getPersonFulfilled(res)))
                .catch((err) => Observable.onErrorResumeNext(
                    Observable.of(getPersonRejected()),
                ));
        });

export default combineEpics(
    fetchPearsonEpic,
);
