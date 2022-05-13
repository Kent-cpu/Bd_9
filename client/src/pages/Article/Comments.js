import React from 'react';
import s from "./articlePageStyles.module.css";


const Comments = ({name, text, assessment}) => {
    return (
        <div className={s["comment"]}>
            <span>{name}</span>
            <p className={s["comment__text"]}>{text}</p>
            <span>Оценка: {assessment}</span>
        </div>
    );
};

export default Comments;