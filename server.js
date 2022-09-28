const express = require('express')
const server = express()

let cors = require("cors")
server.use(cors());

// ################################ Google ################################
server.get('/', (req, res) => {
    res.send('Testing Lap1 Group exercise')
})

// server.get('/google', (req, res) => {
//     res.send(google)
// })

// server.get('/google/:id', (req, res) => {
//     const id = parseInt(req.params.id) - 1;
//     res.send(turtle[id])
// })

const searchRoutes = require('./controllers/searches');
server.use('/google', searchRoutes);

module.exports = server
// // ######################################## Turtle ########################################
// app.get('/turtle', (req, res) => {
//     res.send(turtle)
// })

// app.get('/turtle/:id', (req, res) => {
//     const id = parseInt(req.params.id) - 1;
//     res.send(turtle[id])
// })

// // ######################################## Tiger ########################################
// app.get('/tiger', (req, res) => {
//     res.send(tiger)
// })

// app.get('/tiger/:id', (req, res) => {
//     const id = parseInt(req.params.id) - 1;
//     res.send(tiger[id])
// })

// // ######################################## Koala ########################################
// app.get('/koala', (req, res) => {
//     res.send(koala)
// })

// app.get('/koala/:id', (req, res) => {
//     const id = parseInt(req.params.id) - 1;
//     res.send(koala[id])
// })



