const myLibrary = require('./myLibrary.js');
const fs = require('fs');

let jsonContents = fs.readFileSync('package.json','utf8');

console.log(typeof jsonContents);

let convertedJson = JSON.parse(jsonContents);

console.log(typeof convertedJson);

console.log(convertedJson.author);

console.log(myLibrary.theCoolestAdderEver(10,100));
console.log(myLibrary.multiplier(2,3));

