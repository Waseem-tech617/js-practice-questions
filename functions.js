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