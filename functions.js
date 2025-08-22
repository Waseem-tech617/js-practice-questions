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


// // Q12.Create a function to claculate a perfact  Number.

function factor(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        
        }}
            if(sum===num){
                console.log("perpect num");

            }else{
                console.log("not perfect num");
            }
        
        }
factor(11);
factor(25);
factor(6);


Q13.Create a function to reverse a Number.

function reverse(num=133){
    let nnum=num.toString();
    let str=nnum.split("").reverse().join("");
    console.log( parseInt(str));

}
reverse(12345);
reverse();


// Q14.create a arrow function and count a word in sentence.

let word=(sentence) => {
   let count=0;
   let news=sentence.split(" ");
   let ns="";
   for(let i=0;i<=news.length-1;i++){
    ns+=news[i];
    count++;
   }
return count;
}
console.log(word("waseem ads ahst ajsya ashyds"));
console.log(word("waseem ads ahst ajs"));



// Q15.find the average of numbers .

function average(...val){
let sum=0;
for(let i=0;i<=val.length-1;i++){
  sum=sum+val[i];
}
  let averag=sum/val.length;
console.log(averag);
}
average(1,2,3,4,5,6,7);
average(25,32,43,65,765);


// Q16.create a IFFI function.

(function abcd(){
    console.log("hi!");
})();



// // Q17.create a IFFI function and multiply tow numbers.


(function abcd(a,b){
    console.log(a*b);
})(1,3);


// Q18.create a function of dobel the number.

let dobel=function(num){
    return num+num;

}
console.log(dobel(88));


// Q19.Create a function convert string into uppercase.

function uppercase(str){
 return str.toUpperCase();
}
function printstring(fn,value){
    console.log(fn(value));
}
printstring(uppercase,"sdsfs");



// Q20.Create a first class function.

function execute(fn){
    fn();
}
function massage(){
    console.log("waseem");
}

function greet(){
    console.log("hello user ");
}
execute(massage);
execute(greet);


// Q21.Create a first class function .

function seyhello(name){
    return "Hello " +name;
}
function greet(fn){
    return fn("Ali");
}
console.log(greet(seyhello));


// Q22.Create a first class function who return a function.

function multyplyby(num1){
    return function(num2){
        return num1*num2;
    }
}
console.log(multyplyby(2)(5));


// // Q23.Create a first class function to find double  number and square.

function dobel(num){
    return num*2;
}
function square(num){
    return num*num;
}
function main(fn,value){
    return fn(value);
}
console.log(main(dobel,6));
console.log(main(square,8));




// // Q24.Create a HOF class function .

function multiplyer(num1){
    return function(num2){
        return num1*num2;
    }
}
let doble=multiplyer(2);
let triple=multiplyer(3);
let square=multiplyer(4);
let cube=multiplyer(8);
console.log(doble(10),triple(10),square(4),cube(3));


