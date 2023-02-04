const path = require('path')
const filePath= path.join('src','components','nav.js')
console.log(path.basename(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));