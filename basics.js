// import{userName} from "./data"; for js

const userName = require('./data');

const { log } = require("node:console");

var a=10;
let b=20;
const c = 30;
console.log(a+b);

// c=20;
if(a==20){
    console.log("value of a is 20");
}
else{
    console.log("value of a is "+a);
    
}

function fruit(item){
    console.log("this is "+item);
    
}

console.log("banana");
fruit("apple");

for(var a=0;a<=10;a++){
console.log("first Loop");
}

var d=0;
while(d<=10){
    console.log("print");
    d++;
}

let user = ["anil","ram","shyam","vivek"];
for(var a=0;a<user.length;a++){
    console.log(user[a]);
    
}
console.log(userName);