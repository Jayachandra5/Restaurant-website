const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true
    },
    items: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'MenuItem'
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
