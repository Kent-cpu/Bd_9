import React from 'react';
import useBd from "../../hooks/useBd";

const ArticleTop = ({setArticles}) => {
    const {getTopArticles} = useBd();

    const getTop = async () => {
        const top = await getTopArticles();

        setArticles(top);
    }

    return (
        <div style={{
            marginBottom: "10px",
        }}>
            <button onClick={getTop}>Топ статей</button>
        </div>
    );
};

export default ArticleTop;