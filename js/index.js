// ways to print
console.log("I love you");
alert("I love you");
document.write("hello world");

// console api
console.error("This is an error");
console.warn("This is warning");
console.assert(4==6);

// variables and data types - primitive and reference
var number1 = 2;
var number2 = 2;
console.log(number1+number2);

var str1 = "aryan";
var str2 = 'sanjana';

console.log(str1);
console.log(str2);


var marks = {

    aryan: 56,
    sanjan:56,

}

console.log(marks);

var a = true;
var b = false;
console.log(a,b);

var sun;
console.log(sun);

var ary = null;
console.log(ary);


var arr = [0,1,2,3,4,5,'sanj','aryan'];
console.log(arr);
console.log(arr[5]);


// operators

//arithemtic
var s =10;
var e= 10;
console.log(s+e);

//assignemnt

var c =b;
c+=2;
console.log(c);

// comparison

console.log(4==6);

//logical

console.log(true || false);


//functions

function avg(a,b){

    return (a+b)/2;
}

c1 = avg(10,100);
c2 = avg(78,90);

console.log(c1,c2);