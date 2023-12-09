import { post } from "./api";

const endpoints = {
    create: '/jsonstore/messages',
}

export async function create(messageData) {
    return post(endpoints.create, messageData);
}