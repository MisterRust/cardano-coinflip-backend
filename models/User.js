const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  addr: String,
  created_at: Number,
  updated_at: Number,
  flips: {
    nebula: {
      win: Number,
      fail: Number,
      balance: Number,
      volume: Number,
    },
    ada: {
      win: Number,
      fail: Number,
      balance: Number,
      volume: Number,
    },
    snek: {
      win: Number,
      fail: Number,
      balance: Number,
      volume: Number,
    },
    hyena: {
      win: Number,
      fail: Number,
      balance: Number,
      volume: Number,
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;