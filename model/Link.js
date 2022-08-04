const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
})

module.exports = mongoose.model('LinkModel', LinkSchema)