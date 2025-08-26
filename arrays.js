// Q1. Create a filter method of arrays.

arr=[3,4,5,6,78];
let newarr=arr.filter(function(val){
    if(val>4) return true;
});
console.log(newarr);


// Q2.Create an array of  three fruits anfd print second one.

let arr=["mango","apple","banana"];
let narr=arr.slice(1,2);
console.log(narr);


// Q3.Add "mango" at the end of the array and "pineapple" beggining of an array.

let arr=["mango","apple","banana"];
arr.unshift("mangosq");
arr.push("pineapple");


console.log(arr,arr);


// Q4.Create an array and replace "banana" with "apple".

let arr=["mango","apple","banana"];
arr.pop();
arr.push("apple");

console.log(arr);


