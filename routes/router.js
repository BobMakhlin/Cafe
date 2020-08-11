const express = require('express');
const Drink = require('../models/drink');
const router = express.Router();

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

    if (req.method === 'OPTIONS') {
        return res.send(200);
    }
    else {
        return next();
    }
});

router.get('/drinks', async (req, res) => {
    let drinks = await Drink.find({});
    res.json(drinks);
});
router.post('/drinks', async (req, res) => {
    let drinkData = req.body.json();
    let drink = new Drink(drinkData);

    try {
        await drink.save();
    }
    catch (err) {
        console.log(err);
        console.log();
        console.log();
        console.log();
    }
});
router.get('/drinks/:id', async (req, res) => {
    let drinkId = req.params.id;
    let target = await Drink.findOne({ _id: drinkId });
    res.json(target);
})

module.exports = router;
