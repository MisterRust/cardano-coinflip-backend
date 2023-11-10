import mongoose from 'mongoose'

const flipSchema = new mongoose.Schema({
    win: {
        type: Number
    },
    fail: {
        type: Number
    },
    balance: {
        type: Number
    },
    volume: {
        type: Number
    },
});

const UserSchema = new mongoose.Schema({
    address: {
        type: String
    },
    flips: {
        nebula: {
            win: {
                type: Number
            },
            fail: {
                type: Number
            },
            balance: {
                type: Number
            },
            volume: {
                type: Number
            },
        },
        ada: {
            win: {
                type: Number
            },
            fail: {
                type: Number
            },
            balance: {
                type: Number
            },
            volume: {
                type: Number
            },
        },
        snek: {
            win: {
                type: Number
            },
            fail: {
                type: Number
            },
            balance: {
                type: Number
            },
            volume: {
                type: Number
            },
        },
        hyena: {
            win: {
                type: Number
            },
            fail: {
                type: Number
            },
            balance: {
                type: Number
            },
            volume: {
                type: Number
            },
        },
    },
});

const User = mongoose.model('users', UserSchema);

export default User;