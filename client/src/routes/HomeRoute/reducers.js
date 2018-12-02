// @flow

import type {
    Store,
    Actions,
} from './types.js';

import {
    GET_PERSONS,
    GET_PERSONS_FULFILLED,
    GET_PERSONS_REJECTED,
} from './actions.js';

const InitialState = {
    listOfContacts: [],
    loading: false,
};

export default (state: Store = InitialState, action: Actions): Store => {
    switch (action.type) {

        case GET_PERSONS: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_PERSONS_FULFILLED: {
            return {
                ...state,
                loading: false,
                listOfContacts: [
                    ...action.data,
                ],
            }
        }

        case GET_PERSONS_REJECTED: {
            return {
                ...state,
                loading: false,
            }
        }

        default:
            return state;
    }
}