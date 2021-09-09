const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        maxLength: 50,
        required: true
    },
    password: String,
    firstName: String,
    lastName: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'users'
});

const User = model('User', userSchema);
module.exports = User;