const express = require('express');
const Drink = require('../models/drink');
const router = express.Router();

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
