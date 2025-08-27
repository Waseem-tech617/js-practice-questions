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


// Q5.Create an array and radd "banana" and"apple" in given array.

let arr=["mango","apple","banana"];
arr.splice(1,1,"waseem","eads");
console.log(arr);


// Q6.Get an middel elements in an given array.

let arr=["gcfgc","mango","apple","banana","fvhyv"];
let narr=arr.slice(1,3);
console.log(narr);



// Q7.Use map method to square the given Array.

let num=[1,2,3,4,5];
let nnum=num.map(function(val){
    return val*val;
});
console.log(nnum);


//  Q8.Use filter method to keep numbers greater then 10.

let num=[12,12,435,564];
let narr=num.filter((val)=>{
    return val>30;
});
console.log(narr);


// Q9.use find method t find first greater number  then 12;

let num=[12,12,435,564];
let numa=num.find((val)=>{
    return val>12;
});
console.log(numa);


// // Q10.use some method t find first less number  then 85;

let num=[12,42,52];
let numa=num.some((val)=>{
   return val<85;
});
console.log(numa);


// Q11.destructure the arry.

let arr=["waseem","afagf","ahsh","ahsb"];
let [a,,,b]=arr;
console.log(arr);


// Q12.Create an array and multyply by 2.

let num=[45, 50, 60, 70];
for(let nums of num){
    console.log(nums*2);
}


// Q13."banana" ko is array se remove karo.

let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1,1).shift();
console.log(fruits);


// Q14.Check karo "Ahmed" array me maujood hai ya nahi (true/false print karo).

let names = ["Ali", "Sara", "Ahmed", "Hina"];
let name=names.some((val)=>{
    return val==="Ahmed";
});
console.log(name);


// Q15.isme se sirf even numbers print karo.

let numbers = [5, 10, 15, 20, 25];
for(let num of numbers){
    if(num%2==0){
        console.log(`${num} is even`);
    }
}


// Q16.inko ek sentence me join karke print karo.

let words = ["I", "love", "JavaScript"];
let nword=words.join(" ");
console.log(nword);


// Q17.is array ke sabhi elements ka sum nikaalo.

let numbers = [2, 4, 6, 8, 10];
let num=0;
for(num of numbers){
   num+=num;
}
console.log(num);


// Q18.is array me "apple" kitni dafa aata hai, count karo.

let fruits = ["apple", "mango", "orange", "apple", "banana"];
let count=0;
for(fru of fruits){
    if(fru==="apple"){
        count++;
    }
}
console.log(count);


// Q19.is array me sirf numbers print karo.

let mix = [10, "Ali", true, 45, "Sara", false];
for(num of mix){
    if(typeof num==="number"){
        console.log(num);
    }
}


//Q20. is array ka sabse bara number find karo.

let marks = [90, 45, 76, 88, 100];
let max=marks[1];
for(let num of marks){
    if(num>=max){
        max=num;
    }
}
console.log(max);


// Q21.is array ko reverse karke ek sentence print karo.

let words = ["JavaScript", "is", "awesome"];
let a=words.reverse().join(" ");
console.log(a);