const router = require('express').Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new menu item
router.post('/', async (req, res) => {
    const { name, description, price, category, image } = req.body;

    const menuItem = new MenuItem({
        name,
        description,
        price,
        category,
        image
    });

    try {
        const savedItem = await menuItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
