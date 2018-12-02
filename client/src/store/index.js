import type {Store} from 'redux';

import config from './configureStore';

import type {CombinedState, Action} from '../reducers/index.types';

function getConfig(): Store<CombinedState, Action> {
    return config;
}

export default getConfig();