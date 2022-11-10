const express = require('express');
const SearchItem = require('../models/search')
const router = express.Router();

router.get('/', (req, res) => {
    const search = SearchItem.all
    res.send(search)
})

router.get('/random', (req, res) => {
    try {
        const num = Math.floor(Math.random() * 30);
        const selectedSearch = SearchItem.findById(num);
        res.send(selectedSearch);
    } catch(err) {
        console.log(err);
        res.status(404).send({message: err.message});
    }
})

router.get('/random/turtle', (req, res) => {
    try {
        const num = Math.floor(Math.random() * 10) + 1;
        const selectedSearch = SearchItem.findById(num);
        res.send(selectedSearch);
    } catch(err) {
        console.log(err);
        res.status(404).send({message: err.message});
    }
})

router.get('/random/tiger', (req, res) => {
    try {
        const num = Math.floor(Math.random() * (20 - 11 + 1) ) + 11;
        const selectedSearch = SearchItem.findById(num);
        res.send(selectedSearch);
    } catch(err) {
        console.log(err);
        res.status(404).send({message: err.message});
    }
})

router.get('/random/koala', (req, res) => {
    try {
        const num = Math.floor(Math.random() * (30 - 21 + 1) ) + 21;
        const selectedSearch = SearchItem.findById(num);
        res.send(selectedSearch);
    } catch(err) {
        console.log(err);
        res.status(404).send({message: err.message});
    }
})

router.get('/:id', (req, res) => {
    try {
        const searchItem = parseInt(req.params.id);
        const selectedSearch = SearchItem.findById(searchItem);
        if (searchItem < 1 || searchItem > 30) {
            throw new Error('Choose a number between 1 and 30.')
        }
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({message: err.message})
    }
})

module.exports = router;
