const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    token: { type: String, required: true },
    amount: { type: Number, required: true },
    result: { type: Boolean, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;