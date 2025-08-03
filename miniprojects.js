// ✅ Q.Number Guesing Game.
let secret=7;
for(let i=1;i<=6;i++){
    let guess=prompt("enter a num ")
    guess=Number(guess);
   if(guess===secret){
    console.log("corect number");
   break;
}
   else if(guess<secret){
    console.log("zayada guess karo");
   }else{
    console.log("kam guess karo");
   }
   if(i===3){
    console.log("you faild correct ans is 7 ")
   }
}


✅ Q.Multiplication Table Generator.
    
let num=prompt("enter a num ");
for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i} `);
}


✅ Q.Countdown Timer.

let num=prompt("enter a num");
for(let i=num;i>=1;i--){
    console.log(i);
}
console.log("times up");


✅ Q.Simple calculator
let firstvlaue=prompt("enter a  first value");
let operator=prompt("enter a operator +,-,*,/");
let secondvalue=prompt("enter a second value ");
let result;
if(operator==="+"){
result=firstvlaue+secondvalue;
}
else if(operator==="-"){
result=firstvlaue-secondvalue;
}
else if(operator==="*"){
result=firstvlaue*secondvalue;
}
else if(operator==="/"){
result=firstvlaue/secondvalue;
}
else{
    result="invalid oprator";
}
console.log(result);


 ✅ Q.Repeted projects Entry.

while(true){
    let user=prompt("enter a produts name");
    console.log(user);
    if(user==="done"){
    break;
    }
   
}
