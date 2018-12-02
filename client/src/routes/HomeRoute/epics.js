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
    GET_PERSONS,
    getPersonsFulfilled,
    getPersonsRejected,
} from './actions';

export const fetchPearsonsEpic = (action$: Observable<any>): Observable<any> =>
    action$.ofType(GET_PERSONS)
        .mergeMap((action) => {
            return getJSON(`${params.API_ROOT}persons`)
                .mergeMap((res: persons) => Observable.of(getPersonsFulfilled(res)))
                .catch((err) => Observable.onErrorResumeNext(
                    Observable.of(getPersonsRejected()),
                ));
        });

export default combineEpics(
    fetchPearsonsEpic,
);
