const express = require('express')
const app = express()
const port = 3000
let cors = require("cors")
app.use(cors());

app.get('/', (req, res) => {
    res.send('Testing Lap1 Group exercise')
})

// ################################ Google ################################
app.get('/google', (req, res) => {
    res.send(google)
})

app.get('/google/:id', (req, res) => {
    const id = parseInt(req.params.id) - 1;
    res.send(turtle[id])
})

app.listen(port, () => {
    console.log(`Script.js listening on port ${port}`)
})

module.exports = app
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



