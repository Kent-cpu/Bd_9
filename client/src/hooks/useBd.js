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


    return {getArticles, getNameAuthors};
};

export default useBd;