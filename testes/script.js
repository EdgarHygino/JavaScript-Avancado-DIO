//função normal
function sum(a, b){
console.log(arguments)
  return a + b;
}
console.log(sum(5,5));

// como usar uma função sem saber a quantidade de argumentos
function sum1(a, b){
  var value =0;

  for (var i = 0; i < arguments.length; i++){
    value += arguments[i];
  }

  console.log(arguments)
    return value;
  }
  console.log(sum1(5,5,5, 3, 2));

  // metodo com ES6

function sum2(...args){ //...informa para o javascript que pode ser mais de um argumento
return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum2(5, 5, 6, 10, 4));