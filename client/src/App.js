import './App.css';
import useBd from "./hooks/useBd";
import {useState} from "react";
import PreviewArticle from "./components/PreviewArticle/PreviewArticle";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AuthorPanel from "./components/AuthorPanel/AuthorPanel";


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
                    <AuthorPanel setArticles = {setArticles}/>
                </div>

                {
                    articles?.length > 0 && articles.map((article, index) => {
                        return <PreviewArticle
                            key={article._id}
                            name={article.name}
                            author={article.author}
                            datePublication={article.datePublication}
                            serialNumber={index + 1}

                        />
                    })
                }
            </div>

        </div>
    );
}

export default App;