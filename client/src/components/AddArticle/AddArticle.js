import React, {useState} from 'react';
import Popup from "reactjs-popup";
import s from "./addArticleStyles.module.css";
import useBd from "../../hooks/useBd";
import handleChange from "../../utils/handleChange";

const AddArticle = () => {
    const [dataArticle, setDataArticle] = useState(
        {
            name: "",
            content: "",
            author: "",
        }
    );

    const {saveArticle} = useBd();


    const addArticle = async () => {
        const newArticleData = {
            ...dataArticle,
            datePublication: new Date(),
            userReviews: [],
            tags: [],
        }

        await saveArticle(newArticleData);
    }

    return (
        <Popup
            trigger={<button className={s["button-open"]}>Добавить статью</button>}
            position="center center"
            modal
        >
            {close => (
                <div className={s["modal-wrapper"]}>
                    <div className={s["modal"]}>
                        <button className={s["close"]} onClick={close}>
                            &times;
                        </button>
                        <div className={s["header"]}>Добавление статьи</div>
                        <div className={s["content"]}>
                            <form onSubmit={e => e.preventDefault()} className={s["form"]} action="">
                                <div className={s["form__item"]}>
                                    <label
                                        htmlFor="name"
                                    >Название статьи</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={s["form__item__input"]}
                                        onChange={(e) => handleChange(e, setDataArticle)}
                                    />
                                </div>

                                <div className={s["form__item"]}>
                                    <label htmlFor="author">Автор</label>
                                    <input
                                        name="author"
                                        className={s["form__item__input"]}
                                        type="text"
                                        onChange={(e) => handleChange(e, setDataArticle)}
                                    />
                                </div>

                                <div className={s["form__item"]}>
                                    <label htmlFor="content">Содержимое статьи</label>
                                    <textarea
                                        name="content"
                                        className={s["form__item__textarea"]}
                                        type="text"
                                        onChange={(e) => handleChange(e, setDataArticle)}
                                    />
                                </div>

                                <button onClick={addArticle}>Создать статью</button>
                            </form>
                        </div>

                    </div>
                </div>
            )}
        </Popup>
    );
};

export default AddArticle;