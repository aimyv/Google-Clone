const express = require('express');
const SearchItem = require('../models/search')
const router = express.Router();

router.get('/', (req, res) => {
    const search = SearchItem.all
    res.send(search)
})

router.get('/:id', (req, res) => {
    try {
        const searchItem = parseInt(req.params.id);
        const selectedSearch = SearchItem.findById(searchItem);
        if (!selectedSearch) {
            throw new Error('This search does not exist!')
        }
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send({message: err.message})
    }
})

module.exports = router;
