const { writeFile } = require('fs/promises')

const createBigFile = async () =>
    await writeFile('./data/bigfile.txt', ' hello world'.repeat(10000))

createBigFile()

/* const {createReadStream}= require('fs')

const stream = createReadStream('./data/bigfieele.txt', 'utf8')

stream.on('data', (chunk)=>{
    console.log(chunk);
})

stream.on('end', ()=>{
    console.log('termine');
})
stream.on('error',error=>{
    console.log(error);
}) */