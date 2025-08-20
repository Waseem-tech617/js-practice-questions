// Q1.Bmi Calculator.

function bmi(weight,height){
    return weight/(height*height);
}
console.log(bmi(35,1.5).toFixed(1));


// Q2.Discount Calculator.

function Discountcalculator(discount){
    return function(value){
        return value-value*(discount/100);
    }

}
let ten=Discountcalculator(10);
console.log(ten(1200));
console.log(ten(200));


// Q3.Create a function of Adding tow numbers.

 function add(a,b){
    return a+b;
 }
console.log(add(12,24));


// // Q4.Create a function of square of  number.

 function add(a){
    return a*a;
 }
console.log(add(5));


// Q5.Create a function of checking the number odd or event.

let checking=(num)=>{
 if(num%2===0){ 
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}

}
checking(10);


// Q6.Create a function convert string into uppercase.
function upercase(str){
let upper=str.toUpperCase();
console.log(upper);
}
upercase("waseem");