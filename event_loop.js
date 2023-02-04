const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome ')
        console.log('home');
        return res.end()

    }
    if (req.url === '/about') {

        return res.end('about')
    }
    res.end('Not Found')
})
server.listen(3001)

console.log('Servidor activo en el puerto 3001');
