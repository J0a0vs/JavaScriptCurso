// ---- s/ Arrow functions ----

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

/*
--------------------------
var sumOld = function(a, b) {
    return a + b;
};
--------------------------
*/

/*
--------------------------
function Car() {
    this.foo = 'bar';
}
console.log(new Car ());
--------------------------
*/

/*
log('olá mundo!');

function log(value) {
    console.log(value);
}
*/

/*
-----------------------------------------------
var obj = {
    showContext: function showContext() {
        //console.log(this);
        //this.log('teste');
        var _that = this;

        setTimeout(
            function() {
                //console.log(this);
                _that.log('after 1000ms');
            //}.bind(this),
            },1000);
        //);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
--------------------------------------------------
*/

//function de multliplicação

/*
-------------------------------
function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 5));
-------------------------------
*/

/*
----------------------------------
function randomNumber() {
    return Math.random() * 10;
}
function multiply(a, b = a){
    return a * b;
}
console.log(randomNumber());
----------------------------------
*/




 //---- c/ Arrow functions ----
 
/*
---------------------------
var sum = (a, b) => a + b;
console.log(sum(10, 10));
---------------------------
*/

/*
---------------------------------------
var createObj = () => ({ teste: 123});

console.log(createObj());
---------------------------------------
*/

/*
-----------------------------------------------
var obj = {
    showContext: function showContext() {

        setTimeout(() => {
            this.log('after 1000ms');
        },1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
------------------------------------------------
*/


