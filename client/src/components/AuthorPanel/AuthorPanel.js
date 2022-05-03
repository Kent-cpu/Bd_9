import React, {useEffect, useState} from 'react';
import useBd from "../../hooks/useBd";

const AuthorPanel = ({setArticles}) => {
    const [nameAuthors, setNameAuthors] = useState([]);
    const [currentNameAuthor, setCurrentNameAuthor] = useState("");
    const {getNameAuthors, getArticles} = useBd();


    useEffect(() => {
        async function getAuthors() {
            const allNameAuthors = await getNameAuthors();
            setNameAuthors(allNameAuthors);
        }

        getAuthors();
    }, []);


    const handleChangeNameAuthor = (event) => {
        setCurrentNameAuthor(event.target.value);
    }

    const searchArticlesByNameAuthor = async () => {
        if (currentNameAuthor.length > 0) {
            const foundArticles = await getArticles(`/getArticlesByAuthor/${currentNameAuthor}`);
            setArticles(foundArticles);
        }
    }

    return (
        <div style={{marginLeft: "30px"}}>
            <select style={{marginRight: "15px"}} onChange={handleChangeNameAuthor}>
                <option value="null">Автор не выбран</option>
                {
                    nameAuthors.length > 0 && nameAuthors.map(({author, _id}) => {
                        return <option key={_id} value={author}>{author}</option>
                    })
                }
            </select>
            <button
                onClick={searchArticlesByNameAuthor}
                style={{
                    border: "1px solid #75aeca",
                    padding: "6px 10px",
                    color: "#548eaa",
                    cursor: "pointer",
                }}
            >Поиск по автору
            </button>
        </div>
    );
};

export default AuthorPanel;