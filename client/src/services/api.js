import { clearUserData, getUserData } from "../utils/util";

const host = 'https://healthyplace-backend.onrender.com';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData != null) {
        const token = userData.accessToken;
        options.headers['X-Authorization'] = token;
    }
    
    try {
        const response = await fetch(host + url, options);

        let result;
        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }

            const error = result;
            throw error;
        }
        return result;
    } catch (err) {
        throw err;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');