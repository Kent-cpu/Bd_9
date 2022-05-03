import React, {useState} from 'react';
import s from "./searchPanel.module.css";
import useBd from "../../hooks/useBd";

const SearchPanel = ({setArticles}) => {
    const [textSearch, setTextSearch] = useState("");
    const {getArticles} = useBd();

    const handleChange = (event) => {
        setTextSearch(event.target.value);
    }

    const searchArticles = async () => {
        if (textSearch.length > 0) {
            const foundArticles = await getArticles(`/getArticlesByName/${textSearch}`);
            setArticles(foundArticles);
        }
    }

    return (
        <div className={s["search-panel"]}>
            <input
                type="text"
                value={textSearch}
                className={s["search-panel__input"]}
                onChange={handleChange}/>
            <button className={s["search-panel__btn"]} onClick={searchArticles}>Поиск по названию</button>
        </div>
    );
};

export default SearchPanel;