const fs = require('fs');

let fileName = process.argv[2];

if (fs.existsSync(fileName) == false) {
 console.log('this ' + fileName + ' does not work');
 process.exit();
}

let data = fs.readFileSync(fileName,'utf8');


let exploded = data.split('\n');
console.log('the file length is a total of ' +  exploded.length + ' lines');


