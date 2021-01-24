//função normal
function sum(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum(5, 5));

// como usar uma função sem saber a quantidade de argumentos
function sum1(a, b) {
  var value = 0;

  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  console.log(arguments);
  return value;
}
console.log(sum1(5, 5, 5, 3, 2));

// metodo com ES6

function sum2(...args) {
  //...informa para o javascript que pode ser mais de um argumento
  console.log(args);
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum2(5, 5, 6, 10, 4));

// rest operator ...

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum3 = (...rest) => {
  console.log(rest);
  return multiply.apply(undefined, rest);
};
console.log(sum3(10, 20, 5, 5));

// spread operator ...

//string , arrays e objetos e objetos iteraveis

const multiply1 = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum4 = (...rest) => {
  console.log(rest);
  return multiply1(...rest);
};
console.log(sum4(10, 20, 5, 5, 10));

// spread em string
const str = "Digital Innovation One";
const arr = [1,2,3,4,5];

function logArgs(...args) {
  console.log(args);
}
logArgs(...arr);
