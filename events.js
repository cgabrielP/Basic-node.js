const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, data2) => {
    console.log(data, data2)
})

customEmitter.emit('response', 'Hola mundo', {name:'pepe'})
customEmitter.emit('response', 100, [1,2,2])