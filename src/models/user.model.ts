import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    success: {
        type: Number,
        required: true
    },
    fail: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

export { User }