import React, {useState} from 'react';
import moment from "moment";
import handleChange from "../../utils/handleChange";
import s from "./searchByDate.module.css";
import useBd from "../../hooks/useBd";


const SearchByDate = ({setArticles}) => {
    const [date, setDate] = useState({
        startDate: "",
        endDate: "",
    });

    const {getArticleByDate} = useBd();

    const searchArticleByDate = async () => {
        if (date.startDate === "" || date.endDate === "" || moment(date.startDate).isAfter(date.endDate)) {
            alert("Не выбраны даты или неверно задан диапазон");
            return;
        }

        const articlesMatchByDate = await getArticleByDate(date.startDate, date.endDate);
        setArticles(articlesMatchByDate);
    }

    return (
        <div className={s["date-panel"]}>
            <div className={s["date-panel__item"]}>
                <label className={s["date-panel__item__title"]} htmlFor="startDate">Начальная дата</label>
                <input onChange={(e) => handleChange(e, setDate)} type="date" name="startDate"/>
            </div>

            <div className={s["date-panel__item"]}>
                <label className={s["date-panel__item__title"]} htmlFor="endDate">Конечная дата</label>
                <input onChange={(e) => handleChange(e, setDate)} type="date" name="endDate"/>
            </div>

            <button onClick={searchArticleByDate}>Поиск по дате</button>
        </div>
    );
};

export default SearchByDate;