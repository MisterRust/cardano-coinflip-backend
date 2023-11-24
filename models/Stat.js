const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
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

const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;