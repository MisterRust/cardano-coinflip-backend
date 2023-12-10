import express from 'express';
import Flip from '../models/Flip.js'
const flipRouter = express.Router();

const whitelists = [
    "addr1q86ugrrckp0tce568mtmvk55vtq27gyvv7a7rtph0wtyt4ydc0grurekg3jswgzqpntvp0xs2veflmhk90uqy6dxemuqcnulth",
    "addr1q80pprmty6k5un575a48gh3s5u8rfuhyp6tjrqlk7c6tqy970tat94dc3e6nqeu9x2mmy8fkmj47ugs9su8mvr0437ksdcyj9e"
]

flipRouter.get('/', async (req, res) => {
    console.log("calling")
    try {
        const transactions = await Flip.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transactions' });
    }
});

// Get transactions with a specific addr
flipRouter.get('/:addr', async (req, res) => {
    console.log("req.query.addr", req.params.addr)
    try {
        const transactions = await Flip.find({ addr: req.params.addr });
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching transactions' });
    }
});

flipRouter.post('/', async (req, res) => {

    try {
        console.log("req.body", req.body)
        const newTransaction = await Flip.create(req.body);
        console.log("newTransaction", newTransaction)
        res.json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error creating transaction' });
    }
});

flipRouter.put('/:id', async (req, res) => {
    try {
        const updatedTransaction = await Flip.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error updating transaction' });
    }
});

flipRouter.delete('/:id', async (req, res) => {
    try {
        const deletedTransaction = await Flip.findByIdAndDelete(req.params.id);
        res.json(deletedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting transaction' });
    }
});

export default flipRouter;
