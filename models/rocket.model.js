const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlockSchema = new Schema({
    name: {type: String, required: true},
})


module.exports = mongoose.model('Rocket', BlockSchema);
