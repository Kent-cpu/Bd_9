import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import s from "./previewArticle.module.css"
import useBd from "../../hooks/useBd";
import moment from "moment";
import {useNavigate} from "react-router-dom";


const PreviewArticle = ({dataArticle, serialNumber, setArticles}) => {
    const {deleteArticle} = useBd();
    const navigate = useNavigate();


    const deleteCurrentArticle = async () => {
        setArticles(articles => {
            return articles.filter((article) => article._id !== dataArticle._id);
        });

        await deleteArticle(dataArticle._id);
    }

    const openArticle = () => {
        navigate("/article", {state: dataArticle});
    }

    return (
        <div className={s["article"]}>
            <div className={s["article__header"]}>
                <span>{serialNumber}</span>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={s["article__header__delete-btn"]}
                    onClick={deleteCurrentArticle}
                />
            </div>

            <div className={s["article__body"]}>
                <h3 className={s["article__header__title"]}>{dataArticle.name}</h3>
                <p>Автор: {dataArticle.author}</p>
                <p>Дата публикации: {moment(dataArticle.datePublication).format("DD.MM.YYYY")}</p>
                {
                   dataArticle?.rating != undefined ?
                       <p>Рейтинг: {dataArticle?.rating}
                        <br/> Количество комментариев: {dataArticle?.userReviews.length}</p>
                       :
                       <p>Рейтинг: 0
                           <br/> Количество комментариев: {dataArticle?.userReviews.length}</p>
                }

            </div>

            <div>
                <button onClick={openArticle} className={s["article-open"]}>Открыть</button>
            </div>

        </div>
    );
};

export default PreviewArticle;