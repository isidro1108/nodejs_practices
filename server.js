const express = require('express')
        app = express()
        colors = require('colors')
        birds = require('./birds')

app.use('/birds', birds)
app.route('/')
    .get((req, res) => {
        res.send('<h1>Hello world again!</h1>')
    })

let port = 3000
app.listen(port, () => {
    console.log(`Server on port ${port}`.green)
})