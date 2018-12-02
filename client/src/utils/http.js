// @flow

import {ajax} from 'rxjs/observable/dom/ajax';


const defaultHeaders = {
    'Content-Type': 'application/json',
};

const getJSON = (url: string, additionalOptions?: Object) => {
    const ajaxObject = {
        url,
        headers: {
            ...defaultHeaders,
        },
        method: 'GET',
        responseType: 'json',
        ...additionalOptions,
    };

    return ajax(ajaxObject)
        .map(responseObject => responseObject.response);
};

export default getJSON;