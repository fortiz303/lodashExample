const _ = require('lodash');

let myCompact = _.compact([0,3,false,'',5]);
console.log(myCompact);

let myChunk = _.chunk([2,3,4,8,5],2);
console.log(myChunk);

let myDifference = _.difference([2,8], [2,8]);
console.log(myDifference);

let differenceBy = _.differenceBy([3,4],[2,3],Math.floor);
console.log(differenceBy);

let drop = _.drop([1,2,3],2);
console.log(drop);

