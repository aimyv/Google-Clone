const express = require('express');
const Search = require('../models/search')
const router = express.Router();

router.get('/', (req, res) => {
    const search = Search.all
    res.send(search)
})

router.get('/:item', (req, res) => {
    try {
        const searchItem = req.params.item;
        const selectedSearch = Search.findById(searchItem);
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
