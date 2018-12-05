// @flow

import type {
    Store,
    Actions,
} from '../HomeRoute/types';

import {
    GET_PERSON,
    GET_PERSON_FULFILLED,
    GET_PERSON_REJECTED,
} from './actions.js';

const InitialState = {
    listOfContacts: [],
    loading: false,
};

export default (state: Store = InitialState, action: Actions): Store => {
    switch (action.type) {

        case GET_PERSON: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_PERSON_FULFILLED: {
            return {
                ...state,
                loading: false,
                listOfContacts: [
                    ...action.data,
                ],
            }
        }

        case GET_PERSON_REJECTED: {
            return {
                ...state,
                loading: false,
            }
        }

        default:
            return state;
    }
}