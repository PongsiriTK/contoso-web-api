'use strict'

const express = require('express')

// ENV VARAIBLE
const PORT = 8000
const HOST = "0.0.0.0"

const app = express()

app.get('/', async (req, res) => {
    res.send('Hello Muay Thai - 1.0.0')
})

app.listen(PORT, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})



