import express from 'express';
import Flip from '../models/Flip.js'
const flipRouter = express.Router();


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
    try {
      const transactions = await Transaction.find({ addr: req.params.addr });
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
