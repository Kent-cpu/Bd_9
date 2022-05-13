import React from 'react';
import moment from "moment";
import s from "./articlePageStyles.module.css"
import {useLocation} from "react-router-dom";
import Comments from "./Comments";

const ArticlePage = () => {
    const {state} = useLocation();


    return (
        <div className={s["article"]}>
            <div className={s["article__content"]}>
                <h1 className={s["article__title"]}>{state.name}</h1>
                <p className={s["article__author"]}>{state.author}, {moment(state.datePublication).format("DD.MM.YYYY")}</p>
                <p>{state.content}</p>
            </div>

            <div className={s["comments"]}>
                <h2 className={s["comments__title"]}>Комментарии</h2>
                {state.userReviews.map(review => {
                    return <Comments
                        name={review.name}
                        text={review.text}
                        assessment={review.assessment}
                    />

                })}
            </div>
        </div>
    );
};

export default ArticlePage;