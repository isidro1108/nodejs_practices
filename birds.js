const express = require('express'),
    router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time:', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('The birds are flying')
})

router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router