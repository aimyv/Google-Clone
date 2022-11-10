const express = require('express')
const server = express()

let cors = require("cors")
server.use(cors());

// ################################ Google ################################
server.get('/', (req, res) => {
    res.send('Testing Lap1 Group exercise')
})

const searchRoutes = require('./controllers/searches');
server.use('/google', searchRoutes);

module.exports = server;
