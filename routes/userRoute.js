import express from 'express';
import User from '../models/User'; // Import the User model using ES module syntax
let userRoute = express.Router(); // Use express.Router() to create a new router

// Create a new user
userRoute.post('/', async (req, res) => {
  console.log('Received POST request');
  try {
    const userData = req.body;
    console.log('Received user data:', userData);

    const user = new User(userData);
    console.log('Created new user instance:', user);

    await user.save();
    console.log('User saved successfully:', user);

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating a new user:', error);
    res.status(500).json({ error: 'Could not create a new user.' });
  }
});

// Get user data by address
userRoute.get('/:address', async (req, res) => {
  try {
    const address = req.params.address;
    const user = await User.findOne({ address });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not get user data.' });
  }
});

// Update user data by address
userRoute.put('/:address', async (req, res) => {
  try {
    const address = req.params.address;
    const updatedUserData = req.body;

    const user = await User.findOneAndUpdate({ address }, updatedUserData, {
      new: true, // Return the updated document
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not update user data.' });
  }
});

export default userRoute
