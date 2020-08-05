const http = require('http')

const handleServer = (req, res) => {
    res.write('<h1>My first server with nodejs</h1>')
    res.end()
}

const server = http.createServer(handleServer)

server.listen(3000, () => {
    console.log('Server on port 3000')
})