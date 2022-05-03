const {Schema, model} = require("mongoose");

const schemaReview = new Schema({
    name: {type: String},
    text: {type: String},
    assessment: {type: Number}
})


const schemaArticle = new Schema({
    name: {type: String},
    author: {type: String},
    datePublication: {type: Date},
    tags: {type: Array},
    content: {type: String},
    userReviews: [schemaReview]
});

module.exports = model("articles", schemaArticle);