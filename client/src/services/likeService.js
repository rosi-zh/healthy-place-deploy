import { get, post, put, del } from "./api";

const endpoints = {
    like: '/data/likes',
    byId: '/data/likes/',
    allLikes: (articleId) => `/data/likes?where=articleId%3D%22${articleId}%22`,
    userLikesCount: (articleId, userId) => `/data/likes?where=articleId%3D%22${articleId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    userLike: (articleId, userId) => `/data/likes?where=articleId%3D%22${articleId}%22%20and%20_ownerId%3D%22${userId}%22&select=_id`
}

export const getAll = async (articleId) => {
    return await get(endpoints.allLikes(articleId));
}

export const getUserLikes = async (articleId, userId) => {
    return await get(endpoints.userLikesCount(articleId, userId));
}

export const like = async (articleId) => {
    return await post(endpoints.like, {articleId});
}

export const unlike = async (articleId, userId) => {
    const res = await get(endpoints.userLike(articleId, userId));
    const likeId = res[0]._id;

    return await del(endpoints.byId + likeId);
}