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
