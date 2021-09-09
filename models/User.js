const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 50,
        required: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 50,
        required: true
    },
    password: String,
    phoneNumber: String,
    storeAddress: String,
    role: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'users'
});

const User = model('User', userSchema);
module.exports = User;