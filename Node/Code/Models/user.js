const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    cell: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema );
