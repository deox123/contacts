// @flow

import type {
    person,
    persons,
} from './types';

export const GET_PERSONS = 'GET_PERSONS';
export const GET_PERSONS_FULFILLED = 'GET_PERSONS_FULFILLED';
export const GET_PERSONS_REJECTED = 'GET_PERSONS_REJECTED';

export const getPersons = () => {
    return {
        type: GET_PERSONS,
    }
}

export const getPersonsFulfilled = (data: persons) => {
    return {
        type: GET_PERSONS_FULFILLED,
        data,
    }
}

export const getPersonsRejected = () => {
    return {
        type: GET_PERSONS_REJECTED,
    }
}