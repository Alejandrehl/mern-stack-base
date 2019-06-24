const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Article = require('../models/Article')

// @route   GET api/articles
// @desc    Get all users articles
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const articles = await Article.find({ user: req.user.id }).sort({ date: -1 })
        res.json(articles)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   GET api/articles/list
// @desc    Get all articles
// @access  Private
router.get('/list', async (req, res) => {
    try {
        const articles = await Article.find().sort({ date: -1 })
        res.json(articles)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/articles
// @desc    Add new article
// @access  Private
router.post('/', [ auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { title, content } = req.body

    try {
        const newArticle = new Article({ 
            title, 
            content,
            user: req.user.id
        })

        const article = await newArticle.save()
        res.json(article)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/articles/:id
// @desc    Update article
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, content, active, likes } = req.body

    const articleFields = {}
    if (title) articleFields.title = title
    if (content) articleFields.content = content
    if (active) articleFields.active = active
    if (likes) articleFields.likes = likes

    try {
        let article = await Article.findById(req.params.id)

        if (!article) return res.status(404).json({ msg: 'Article not found.' })

        if (article.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized.' })    
        }

        article = await Article.findByIdAndUpdate(req.params.id, 
            { $set: articleFields },
            { new: true })

        res.json(article)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   DELETE api/articles/:id
// @desc    Delete article
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let article = await Article.findById(req.params.id)

        if (!article) return res.status(404).json({ msg: 'Article not found.' })

        if (article.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized.' })    
        }

        await Article.findByIdAndRemove(req.params.id)
        res.json({ msg: 'Article removed.' })
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router