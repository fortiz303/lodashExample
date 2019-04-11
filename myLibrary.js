function adder(num1, num2){
  return num1 + num2
}

function subtractor(num1, num2){
  return num1 - num2;
}

function multiplier(num1,num2){
  return num1 * num2;
}

function divider(num1,num2){
return num1/num2;
}

function stringCounter(data){

 if (typeof data == 'string'){
 console.log(data.length)
 }
 else if(typeof data == 'boolean'){
 console.log('-1')
 }
 else if (Array.isArray(data)){
 console.log(data.length) 
 }
 else if(typeof data == 'undefined'){
 console.log('-1')
 }
 else if(typeof data == 'object'){
 console.log(Object.keys(data).length)
 }
}

module.exports = {
  adder,
  multiplier,
  subtractor,
  stringCounter
};
