// // ways to print
// console.log("I love you");
// alert("I love you");
// document.write("hello world");

// // console api
// console.error("This is an error");
// console.warn("This is warning");
// console.assert(4==6);

// // variables and data types - primitive and reference
// var number1 = 2;
// var number2 = 2;
// console.log(number1+number2);

// var str1 = "aryan";
// var str2 = 'sanjana';

// console.log(str1);
// console.log(str2);


// var marks = {

//     aryan: 56,
//     sanjan:56,

// }

// console.log(marks);

// var a = true;
// var b = false;
// console.log(a,b);

// var sun;
// console.log(sun);

// var ary = null;
// console.log(ary);


// var arr = [0,1,2,3,4,5,'sanj','aryan'];
// console.log(arr);
// console.log(arr[5]);


// // operators

// //arithemtic
// var s =10;
// var e= 10;
// console.log(s+e);

// //assignemnt

// var c =b;
// c+=2;
// console.log(c);

// // comparison

// console.log(4==6);

// //logical

// console.log(true || false);


// //functions

// function avg(a,b){

//     return (a+b)/2;
// }

// c1 = avg(10,100);
// c2 = avg(78,90);

// console.log(c1,c2);


// // conditional statements


// age = 14;

// if(age >= 18){

//     console.log("drive");
// }

// else if(12<=age<=17){
//     console.log("learn");
// }

// else{
//     console.log("no");
// }

// loops

// for loops

// var sed = [1,2,3,4,5,6,7];

// for(i=0;i<sed.length;i++){

//     console.log(sed[i]);
// }


// for each

// sed.forEach(function(element){

//     console.log(element);
// })


// while

// let j =0;
// while(j<sed.length){
//     console.log(sed[j]);
//     j++;
// }


// do{
//     console.log(sed[j]);
//     j++;
// }while(j<sed.length);


// break and continue

// var red= [1,2,3,4,5,6];
// for(i = 0; i<red.length;i++){

//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(red[i]);
// }


// array methods

// let gre = [2,3,'jfdsa',null,true];
// // gre.push("rfa");
// // gre.shift();
// // gre.pop();

// console.log(gre.unshift('hii'));

// string

// let st = ' welcome to my to to class';
// console.log(st.length);
// console.log(st.indexOf('to'));
// console.log(st.lastIndexOf('to'));
// console.log(st.replace("welcome","welcomes"));



// Date

// let mydate = new Date()
// console.log(mydate.getDate());
// console.log(mydate.getFullYear());
// console.log(mydate.getTime());



// DOM manipulation


// let ele = document.getElementById('Click');
// console.log(ele);

// let elec = document.getElementsByClassName('container');
// elec[0].style.background = 'yellow';
// elec[0].classList.add("bg-primary");
// console.log(elec);

// console.log(elec[0].innerHTML);
// console.log(elec[0].innerText);

// tn = document.getElementsByTagName('div');
// createdElement = document.createElement('p');
// createdElement.innerText = 'tHIS IS AFE';
// tn[0].appendChild(createdElement);
// console.log(tn);


//queryselector - only one and queryselectorAll - all 

// events
// function clicked(){

//     console.log('This was clicked');
// }

// window.onload = function(){

//     console.log("hgaiflr");
// }

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[0].innerText = 'Love you';
//     console.log('hiii');
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log('sanjana');
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log('aryan');
// })

// firstcontainer.addEventListener('mouseup', function(){
//     console.log('hello');
// })
// firstcontainer.addEventListener('mousedown', function(){
//     console.log('helloooooooooo');
// })


// setinterval and settimeout

// function logKaro(){
//     document.querySelectorAll('.container')[0].innerText = 'Love you';
//     console.log('hiii');
// }
// // setTimeout(logKaro,2000);
// // setInterval(logKaro,2000);

// clr = setInterval(logKaro,2000);


// localStorage

// localStorage.setItem('name','sanjana')

// localStorage.clear()

//localStorage.removeItem('name')

// localStorage.setItem('name','sanjana')

// localStorage

// localStorage.getItem('name')


// JSON

// obj = {name : 'sanjana', length: 1, a: {this:'tha"t'}};
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);


// parsed = JSON.parse(`{"name":"sanjana","length":1,"a":{"this":"tha\\"t"}}
// `)

// console.log(parsed);

