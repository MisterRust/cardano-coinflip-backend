import mongoose, { Model, model } from 'mongoose'
import { IFlip } from '../types/types';


const flipSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    isWin: {
        type: Boolean,
        required: true
    },
    
})

const Flip: Model<IFlip> = model<IFlip>('Flip', flipSchema);

export { Flip }