const express = require('express')

const port = process.env.PORT || 5000

const app = express()

const sample = {
    "data" : "Hello"
}

app.get('/', (req,res) => {
    res.send(sample)
})

app.listen(port)