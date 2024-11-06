'use strict'

const express = require('express')

// ENV VARAIBLE
const PORT = 8000
const HOST = "0.0.0.0"

const app = express()

app.get('/', async (req, res) => {
    res.send('Hello Muay Thai - 1.0.0')
})

app.use(cors({
    origin: ['https://4606-172-191-205-199.ngrok-free.app']
  }))

app.listen(PORT, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})



