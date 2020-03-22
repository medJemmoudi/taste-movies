import _ from 'lodash';

export const makeRequest = async (url: string, method: string = 'get', data: Record<string, any> = {}) => {
    let config: Record<string, any> = { method };

    if (method.toLowerCase() === 'post') {
        config.body = JSON.stringify(data);
    }

    // setting headers
    config.headers = { Accept: 'application/json' };

    const res = await fetch(url, config);
    return await res.json();
}
