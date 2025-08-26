// Q1. Create a filter method of arrays.

arr=[3,4,5,6,78];
let newarr=arr.filter(function(val){
    if(val>4) return true;
});
console.log(newarr);