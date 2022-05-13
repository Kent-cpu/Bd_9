import './App.css';
import useBd from "./hooks/useBd";
import {useEffect, useState} from "react";
import PreviewArticle from "./components/PreviewArticle/PreviewArticle";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AuthorPanel from "./components/AuthorPanel/AuthorPanel";
import AddArticle from "./components/AddArticle/AddArticle";
import SearchByDate from "./components/SearchByDate/SearchByDate";
import ArticleTop from "./components/ArticleTop/ArticleTop";


function App() {
    const [articles, setArticles] = useState([]);

    const {getArticles} = useBd();

    const getAllArticles = async () => {
        const allArticles = await getArticles("/getAllArticles");
        setArticles(allArticles);
    }



    return (
        <div className="App">
            <div>
                <SearchPanel setArticles={setArticles}/>
                <div className="App-panel">
                    <button className="get-articles-btn" onClick={getAllArticles}>Список статей</button>
                    <AuthorPanel articles={articles} setArticles={setArticles}/>
                    <AddArticle/>
                </div>

                <SearchByDate setArticles={setArticles}/>
                <ArticleTop setArticles={setArticles}/>

                {
                    articles?.length > 0 && articles.map((article, index) => {
                        return <PreviewArticle
                            key={article._id}

                            dataArticle={article}
                            serialNumber={index + 1}
                            setArticles={setArticles}
                        />
                    })
                }
            </div>

        </div>
    );
}

export default App;