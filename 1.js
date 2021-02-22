function multiply(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
}
var product=multiply([[1,2],[3,4],[5,6,7]]);
console.log(product);





//second
function random(){
    return Math.random();

}
console.log(random());


//thrid
function random(){
    return Math.floor(Math.random()*10);

}
console.log(random());

//ternary operator
function check(a,b){
    return a==b?true:false;
}
console.log(check(1,2));


//positive negative zero
function check(n){
    return n>0?"positive":n<0?"neg":"zero"
}
console.log(check(0));

///object

function freezeobj(){
    "use strict";
    const MATH_CONSTANTS={
        PI:3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try{
        MATH_CONSTANTS.PI=99
        }catch(ex){
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;

}
console.log(freezeobj());
 


//concat

var myconcat=(a,b)=>a.concat(b);
console.log(myconcat([1,2],[3,4,5]));


///filter and mapping
const real=[4,5.5,-6,66];
const squarelist=(arr)=>{
    const squareitem=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
    return squareitem; 
};
const item=squarelist(real);
console.log(item);


//rest

const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3,4));


//spread operator

const arr1=['jan','feb','pop','aug'];
let arr2;
(function(){
    arr2=arr1;
    arr1[0]='potato';
})();
console.log(arr2);

const arr3=['jan','feb','pop','aug'];
let arr4;
(function(){
    arr4=[...arr3];
    arr3[0]='potato';
})();
console.log(arr4);


//create strings using Template literals
const person={
    name:"zodac",
    age:56
};
const greeting='hello,my name is ${person.name}! I am ${person.age}! years';
console.log(greeting);

//class
function make(){
    class vegetables{
        constructor(name){
            this.name=name;
        }
    }
    return vegetables;
}
const vegetables=make()
const carrot=new vegetables("carrot");
console.log(carrot.name);

////
class Book{
    constructor(author){
        this._author=author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(update){
        this._author=update;
    }
}
var b=new Book("marlie");
let name=b.writer;
console.log(name);
b.writer="pop";
name=b.writer;
console.log(name);

































































































































































