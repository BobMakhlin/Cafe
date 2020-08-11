const express = require('express');
const Drink = require('../models/drink');
const router = express.Router();

router.get('/drinks', async (req, res) => {
    let drinks = await Drink.find({});
    res.json(drinks);
});
router.get('/drinks/:id', async (req, res) => {
    let drinkId = req.params.id;
    let target = await Drink.findOne({ _id: drinkId });
    res.json(target);
})

module.exports = router;
