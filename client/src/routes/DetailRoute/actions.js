// @flow

import type {
    person,
    persons,
} from '../HomeRoute/types';

export const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';

export const getPersons = () => {
    return {
        type: SET_CURRENT_PERSON,
    }
}
