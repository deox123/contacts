// @flow

import {
    getPersons,
} from './actions.js';

export type person = {
    _id?: number,
    name?: string,
    surname?: string,
    createdDate?: string,
    city?: string,
    address?: string,
    phone?: number,    
};

export type persons = Array<person>;

export type Actions =
    | {type: 'GET_PERSONS'}
    | {type: 'GET_PERSONS_FULFILLED', data: persons}
    | {type: 'GET_PERSONS_REJECTED'}

export type Store = {
    listOfContacts: persons,
    loading: boolean,
}

export type Props = {
    listOfContacts: persons,
    loading: boolean,
    actions: {
        getPersons: typeof getPersons,
    }
}

export type State = {

}