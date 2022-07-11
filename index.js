"use strict";
exports.__esModule = true;
//string, boolean, number, null, undefined
// let name = 'Satish'
// let statement = `Hi, 
// My name is ${name}. 
// Now I am learning Angular. 
// I am single`
// console.log(statement)
// let x : null = null
// let y : undefined = undefined
// let isFresher: boolean = null
// let total: number = undefined
// total = 100
// let list1: number[] = [10,20,30,40]
// let list2: Array<boolean>  = [true, true, false, false, true]
// let p1: [string, number, boolean] = ['Satish', 43, true]
// let p2: [number, boolean, string]  = [20, true, 'SK']
function add(x, y) {
    if (y === void 0) { y = 100; }
    if (y) {
        return (x + y);
    }
    else {
        return x;
    }
}
var mysum = add(10); // actual parameter
console.log(mysum);
// function sub(a, b){
//   return  a-b
// }
// let substation = sub(100, 50) // let substation = 50
// let num = 100 + substation
var x = 10;
var list = [10, 20];
var person = {
    firstName: 'Satish',
    lastName: 'Konduru',
    age: 43
};
function fullName(myInterface) {
    console.log(myInterface.firstName);
}
fullName(person);
