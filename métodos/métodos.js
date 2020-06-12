//método de soma 
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));

//OU pode ser feito dessa forma

var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));