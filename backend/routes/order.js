const router = require('express').Router();
const Order = require('../models/order');
const authenticateJWT = require('../middleware/auth');

// Get all orders (staff only)
router.get('/', authenticateJWT, async (req, res) => {
    if (req.user.role !== 'staff') return res.status(403).send('Access denied');

    try {
        const orders = await Order.find().populate('items.menuItem');
        res.json(orders);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Place a new order (customer only)
router.post('/', authenticateJWT, async (req, res) => {
    if (req.user.role !== 'customer') return res.status(403).send('Access denied');

    const { tableNumber, items, totalAmount } = req.body;

    const order = new Order({
        tableNumber,
        items,
        totalAmount
    });

    try {
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Mark an order as completed (staff only)
router.put('/:id/complete', authenticateJWT, async (req, res) => {
    if (req.user.role !== 'staff') return res.status(403).send('Access denied');

    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: 'completed' }, { new: true });
        res.json(order);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
