const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// GET all items
app.get('/notes', (req, res) => {

})

// POST one item
app.post('/notes', (req, res) => {

})

// PUT one item
app.put('/notes/:text', (req, res) => {

})

// DELETE one item
app.delete('/notes/:text', (req, res) => {

})


app.listen(3000)
