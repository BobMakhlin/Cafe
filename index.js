const express = require('express');
const router = require('./routes/router');
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router);


start();
async function start() {
    try {
        let url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.r5oer.mongodb.net/${dbConfig.dbName}`;
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => console.log('The server was started'));
    }
    catch (err) {
        console.log(err);
    }
}

