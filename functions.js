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


// Q7.Create a function of string and reverse it.


function reverse(str){
  let nstr=str.split("").reverse().join("");
console.log(nstr);



}
reverse("waseem");


// Q8.Create a function it checks string plaindrome.

let plaindrome=function(str){
let nstr=str.split("").reverse().join("");
if(nstr===str){
  console.log(`${str} is pliandrome`);
}else{
  console.log(`${str} is not plaindrome`)
}
}
plaindrome("civic");



// Q9.Create a function to  check num prime or Not.

function prime(num){
  for(let i=2;i<num;i++)
  if(num%i==0){
    return "num is  not prime";
  }else{
    return "num is prime";
  }
   
  }
console.log(prime(10));



// Q10.Create a function to check a greater num.

function largernumber(num1,num2){
    if(num1>num2) return "num1 is greater ";
    else          return "num2 is greater ";
    
}
console.log(largernumber(144,23));


// Q11.Create a function and print a table.
function table(num){
  for(let i=1;i<=10;i++){
   console.log(`${num} X ${i} = ${num*i}`);
  }
}
table(5);