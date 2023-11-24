import mongoose from 'mongoose' 

const flipSchema = new mongoose.Schema({
  addr: String,
  token: String,
  amount: Number,
  result: Boolean,
  created_at: Number,
});

const Flip = mongoose.model('Flip', flipSchema);

export default Flip;