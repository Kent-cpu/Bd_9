import React from 'react';
import s from "./previewArticle.module.css"

const PreviewArticle = ({name, author, datePublication, serialNumber}) => {

    return (
        <div className={s["article"]}>
            <div>
                <span>{serialNumber}</span>
            </div>

            <div className={s["article__body"]}>
                <h3 className={s["article__header__title"]}>{name}</h3>
                <p>Автор: {author}</p>
                <p>Дата публикации: {datePublication}</p>
            </div>

        </div>
    );
};

export default PreviewArticle;