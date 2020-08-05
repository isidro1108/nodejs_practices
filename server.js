const http = require('http'),
        fs = require('fs')

const handleServer = (req, res) => {
    fs.readFile('./index.html', (err, html) => {
        res.write(html)
        res.end()
    })
}

const server = http.createServer(handleServer)

server.listen(3000, () => {
    console.log('Server on port 3000')
})