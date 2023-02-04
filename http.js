const http = require('http')

const server=http.createServer((request, response) => {
    if (request.url === '/profile') {
        console.log(request.url);
        response.write('<h1>Profile</h1>')

    } else if (request.url === '/') {
        console.log(request.url);
        response.write('<h1>Home</h1>')

    }
    else {
        console.log(request.url);
        response.write('<h1>Not Found</h1>')

    }
    response.end()

})

server.listen(3000)

console.log('Servidor activo en el puerto 3000');