const {Router} = require("express");
const router = Router();
const articles = require("../models/Article")
const moment = require('moment')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

router.get("/getAllArticles", async (req, res) => {
    try {
        const allArticles = await articles.find({});
        return res.json(allArticles);
    } catch (e) {
        console.error(e.message);
    }
})

router.get("/getArticlesByName/:name", async (req, res) => {
    try {
        const allArticles = await articles.find({name: `${req.params.name}`});
        return res.json(allArticles);
    } catch (e) {
        console.error(e.message);
    }
})

router.get("/getAuthors", async (req, res) => {
    try {
        const allAuthor = await articles.find({}, {author: 1});
        return res.json(allAuthor);
    } catch (e) {
        console.error(e.message);
    }
})

router.get("/getArticlesByAuthor/:nameAuthor", async (req, res) => {
    try {
        const articlesSelectedAuthor = await articles.find({author: `${req.params.nameAuthor}`});
        return res.json(articlesSelectedAuthor);
    } catch (e) {
        console.error(e.message);
    }
})

router.get("/getArticlesByDate/:startDate/:endDate", async (req, res) => {
    try {
        const result = await articles.find({
            datePublication: {
                $gte: moment(req.params.startDate),
                $lte: moment(req.params.endDate),
            }
        })

        res.json(result);
    } catch (e) {
        console.error(e.message);
    }
})

router.get("/getTopArticles", async (req, res) => {
    try {
        const allArticles = await articles.find({});

        for (let i = 0; i < allArticles.length; ++i) {
            allArticles[i].rating = 0;
            for (let j = 0; j < allArticles[i].userReviews.length; ++j) {
                allArticles[i].rating += allArticles[i].userReviews[j].assessment;
            }

            allArticles[i].rating = Math.round(allArticles[i].rating / allArticles[i].userReviews.length * 10) / 10;
        }


        for (let i = 0; i < allArticles.length - 1; ++i) {
            for (let j = i + 1; j < allArticles.length; ++j) {
                if(allArticles[i].rating > allArticles[j].rating){
                    const buf = allArticles[i];
                    allArticles[i] = allArticles[j];
                    allArticles[j] = buf;
                }else if(allArticles[i].rating === allArticles[j].rating){
                    if(allArticles[i].userReviews.length > allArticles[j].userReviews.length){
                        const buf = allArticles[i];
                        allArticles[i] = allArticles[j];
                        allArticles[j] = buf;
                    }
                }
            }
        }

        allArticles.reverse();
        res.json(allArticles);
    } catch (e) {
        console.error(e.message);
    }
})

router.post("/addArticle", jsonParser, async (req, res) => {
    try {
        const article = new articles(req.body);
        article.save();
    } catch (e) {
        console.error(e.message);
    }
})

router.post("/deleteArticle/:idPost", async (req, res) => {
    try {
        await articles.findByIdAndDelete({_id: `${req.params.idPost}`});
    } catch (e) {
        console.error(e.message);
    }
})


module.exports = router;