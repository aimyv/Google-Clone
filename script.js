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
    res.send(search)
})

app.get('/google/:id', (req, res) => {
    const id = parseInt(req.params.id) - 1;
    res.send(turtle[id])
})

app.listen(port, () => {
    console.log(`Script.js listening on port ${port}`)
})

module.exports = app




