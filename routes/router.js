const {Router} = require("express");
const router = Router();
const articles = require("../models/Article")

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

module.exports = router;