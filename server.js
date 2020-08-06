const express = require('express'),
        app = express(),
        colors = require('colors')

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

let port = 3000
app.listen(port, () => {
    console.log(`Server on port ${port}`.green)
})