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

