// ✅ Question 1:
// Check a number and print:

// “Positive” if > 0

// “Negative” if < 0

// “Zero” if 

let num=Number(prompt("enter a num"));
if(num>0){
    console.log(`${num} is positive`); 
}else if(num<0){
    console.log(`${num} is negitive`);
}else if(num===0){
    console.log(`${num} is zero`);
}else{
    console.log(`${num} it is not a number `);
}
// ✅ Question 2 : With ternary operater.
// Check a number and print:

// “Positive” if > 0

// “Negative” if < 0

// “Zero” if 

let num=Number(prompt("enter a num"));
let result=num>0?`${num} is positive`:num<0?`${num} is negitive`:num===0?`${num} is zero`:NaN;
console.log(result):