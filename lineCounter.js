const fs = require('fs');

let data = fs.readFileSync('iso_8859-1.txt','utf8');

let exploded = data.split('\n');

console.log('the file length is a total of ' +  exploded.length + 'lines');

console.log('hello');
