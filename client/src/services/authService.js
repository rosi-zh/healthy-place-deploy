import { clearUserData, setUserData } from "../utils/util";
import { get, post } from "./api";

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
};

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);

    return result;
}

export async function register(firstName, lastName, email, password) {
    const result = await post(endpoints.register, {firstName, lastName, email, password});
    setUserData(result);

    return result;
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}