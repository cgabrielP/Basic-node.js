const fs = require('fs')

/* let first=fs.readFileSync('./data/first.txt', 'utf-8')
let second=fs.readFileSync('./data/second.txt', 'utf-8')

console.log(first);
console.log(second.toString().toLocaleUpperCase());
//flag 'a' means append if there is no 'a' the file will be overwritten
fs.writeFileSync('./data/fourth.html', '<h1>New info</h1>',{
    flag: 'a'
}) */

// funcion asincrona
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    };
    console.log(data);
    fs.writeFile('./data/test.txt', 'testing writefile async', (error, data) => {
        if (error) {
            console.log(error)
        };
        console.log(data);

    });
});