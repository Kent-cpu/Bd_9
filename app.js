const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use("/", require("./routes/router.js"));

async function start() {
    try {
        await mongoose.connect("mongodb://localhost:27017/ArticlesDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(5000, () => console.log("Server start"))
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

start();