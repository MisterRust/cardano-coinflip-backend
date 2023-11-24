const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/', async (req, res) => {
  console.log("calling")
  try {
    const transactions = await User.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

// Get transactions with a specific addr
router.get('/:addr', async (req, res) => {
  try {
    const transactions = await User.find({ addr: req.params.addr });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

router.post('/', async (req, res) => {
  const { addr, flips } = req.body;
  const updated_at = new Date().getTime();

  try {
    // Check if a user with the given addr already exists
    const existingUser = await User.findOne({ addr });

    if (existingUser) {
      console.log("existingUser", existingUser)
      // If the user exists, update the user's flips data with the values from the request
      const updatedUser = await User.findOneAndUpdate(
        { addr },
        {
          $set: {
            flips: {
              nebula: {
                win: existingUser.flips.nebula.win + flips.nebula.win,
                fail: existingUser.flips.nebula.fail + flips.nebula.fail,
                balance: existingUser.flips.nebula.balance + flips.nebula.balance,
                volume: existingUser.flips.nebula.volume + flips.nebula.volume,
              },
              ada: {
                win: existingUser.flips.ada.win + flips.ada.win,
                fail: existingUser.flips.ada.fail + flips.ada.fail,
                balance: existingUser.flips.ada.balance + flips.ada.balance,
                volume: existingUser.flips.ada.volume + flips.ada.volume,
              },
              snek: {
                win: existingUser.flips.snek.win + flips.snek.win,
                fail: existingUser.flips.snek.fail + flips.snek.fail,
                balance: existingUser.flips.snek.balance + flips.snek.balance,
                volume: existingUser.flips.snek.volume + flips.snek.volume,
              },
              hyena: {
                win: existingUser.flips.hyena.win + flips.hyena.win,
                fail: existingUser.flips.hyena.fail + flips.hyena.fail,
                balance: existingUser.flips.hyena.balance + flips.hyena.balance,
                volume: existingUser.flips.hyena.volume + flips.hyena.volume,
              },
            },
            updated_at,
          },
        },
        { new: true }
      );
      res.json(updatedUser);
    } else {
      // If the user doesn't exist, create a new user
      console.log("flips", flips)
      const newUser = await User.create({
        addr: addr,
        created_at: updated_at,
        updated_at: updated_at,
        flips: flips,
      });
      res.json(newUser);
    }
  } catch (error) {
    console.error('Error creating/updating transaction:', error.message);
    res.status(500).json({ error: 'Error creating/updating transaction' });
  }
});



router.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Error updating transaction' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTransaction = await User.findByIdAndDelete(req.params.id);
    res.json(deletedTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting transaction' });
  }
});

module.exports = router;
