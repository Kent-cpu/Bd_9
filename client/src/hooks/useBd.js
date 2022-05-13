import React from 'react';
import {useHttp} from "./useHttp";

const useBd = () => {
    const {request} = useHttp();


    const getArticles = async (url) => {
        return await request(url);
    }


    const getNameAuthors = async () => {
        return await request("/getAuthors");
    }

    const getArticleByDate = async (startDate, endDate) => {
        return await request(`/getArticlesByDate/${startDate}/${endDate}`);
    }

    const getTopArticles = async () => {
        return await request("/getTopArticles");
    }

    const deleteArticle = async (id) => {
        await request(`/deleteArticle/${id}`, "POST");
    }

    const saveArticle = async (dataArticle) => {
        await request("/addArticle", "POST", dataArticle);
    }


    return {getArticles, getNameAuthors, getArticleByDate, getTopArticles, deleteArticle, saveArticle};
};

export default useBd;