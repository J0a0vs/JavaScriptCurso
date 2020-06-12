// S/ destructuring Assignment

//------------------------
var arr = ['Apple', 'Banana', 'Orange',['tomato']];

var apple = arr[0]
var Banana = arr[1]
var Orange = arr[2]
var tomato = arr[3][0]
//------------------------

//-----------------
var obj = {
    name: 'João Victor',
    props: {
        age:26,
        favoriteColors: ['black', 'blue']
    }
};

var age = obj.props.age;
//console.log(obj);
//-----------------

// C/ destructuring Assignment

var {name} = obj /*= {
    name: 'João Victor'
};*/
//console.log(name);
//------------------

var {
    props: { age: age2, favoriteColors: [color1, color2]}
} = obj;

//[apple, banana, orange, [tomato]] = ['Apple', 'banana', 'orange', ['tomato']];

console.log(color1)