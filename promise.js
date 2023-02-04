const {readFile} = require('fs/promises')
const { promisify } = require('util')


const read = async () => {
    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        const result2 = await readFile('./data/second.txt', 'utf-8')
        const result3 = await readFile('./data/fourth.html', 'utf-8')
        console.log(result)
        console.log(result2)
        console.log(result3)
    } catch (error) {
        console.error(error);
    }
}
read()