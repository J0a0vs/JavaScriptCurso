
function sum(a, b) {
    //console.log(arguments);
    //return a + b;
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(5, 5, 3, 2, 2));


// Rest operator ...
function sum(...args) {
    console.log(args);
}
console.log(sum(5, 5, 3, 2, 2));


const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};
console.log(sum(5, 5, 3, 2, 2));



//spread operator...
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (... rest) => {
    return multiply(...rest);
};


console.log(sum(5, 5, 3, 2, 2));


//spread operator pode ser usado em: strings, arrays, literal objects e objetos iteraveis

//---------------------------------
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);
//---------------------------------

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c, d) {
    console.log(a, b, c, d);
}
//para juntar duas arrays usamos ->
const arr2 = arr.concat([5, 6, 7]);

console.log(...arr2);