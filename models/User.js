const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    loginFailCount: {
        type: Number,
        required: true,
        default: 0
    },
    isAccountLocked: {
        type: Boolean,
        required: true,
        default: false
    },
    dormancyConversionDate: Date
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = { User };

