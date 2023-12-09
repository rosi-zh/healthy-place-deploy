import { get, post, put, del } from "./api";

const endpoints = {
    all: '/data/articles?sortBy=_createdOn%20desc&',
    create: '/data/articles',
    byId: '/data/articles/',
    byOwner: '/data/articles?',
    last: '/data/articles?sortBy=_createdOn%20desc&'
}

export async function getAll() {
    return get(endpoints.all);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function getLast() {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3}
    );
    
    return get(endpoints.last + query);
}

export async function getByOwnerId(ownerId) {
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`
    });

    return get(endpoints.byOwner + query);
}

export async function create(articleData) {
    return post(endpoints.create, articleData);
}

export async function edit(id, articleData) {
    return put(endpoints.byId + id, articleData);
}

export async function remove(id) {
    return del(endpoints.byId + id);
}
