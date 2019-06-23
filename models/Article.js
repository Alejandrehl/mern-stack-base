const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    },
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('article', ArticleSchema)