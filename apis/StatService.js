// apis/FlipService.js
const express = require('express');
const Stat = require('../models/Stat');
const router = express.Router();

// Get all flips
router.get('/', async (req, res) => {
  try {
    const flips = await Stat.find();
    res.json(flips);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching flips' });
  }
});

// Create a new flip
router.post('/', async (req, res) => {
  try {
    const newFlip = await Stat.create(req.body);
    res.json(newFlip);
  } catch (error) {
    res.status(500).json({ error: 'Error creating flip' });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const existingFlip = await Stat.findById(req.params.id);
      if (!existingFlip) {
        return res.status(404).json({ error: 'Flip not found' });
      }
  
      // Update existing values with the ones from the request
      Object.entries(req.body.flips).forEach(([key, value]) => {
        existingFlip.flips[key] = {
          win: (existingFlip.flips[key].win || 0) + value.win,
          fail: (existingFlip.flips[key].fail || 0) + value.fail,
          balance: (existingFlip.flips[key].balance || 0) + value.balance,
          volume: (existingFlip.flips[key].volume || 0) + value.volume,
        };
      });
  
      // Save the updated document
      const updatedFlip = await existingFlip.save();
      res.json(updatedFlip);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating flips' });
    }
  });
  

// Delete a flip by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedFlip = await Stat.findByIdAndDelete(req.params.id);
    res.json(deletedFlip);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting flip' });
  }
});

module.exports = router;
