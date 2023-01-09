const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
})

module.exports = mongoose.model('Test', TestSchema)