// @flow

import type {
    person,
    persons,
} from '../HomeRoute/types';


export const GET_PERSON = 'GET_PERSON';
export const GET_PERSON_FULFILLED = 'GET_PERSON_FULFILLED';
export const GET_PERSON_REJECTED = 'GET_PERSON_REJECTED';

export const getPerson = () => {
    return {
        type: GET_PERSON,
    }
}

export const getPersonFulfilled = (data: person) => {
    return {
        type: GET_PERSON_FULFILLED,
        data,
    }
}

export const getPersonRejected = () => {
    return {
        type: GET_PERSON_REJECTED,
    }
}