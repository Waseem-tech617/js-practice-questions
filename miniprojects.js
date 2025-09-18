// ✅ Project 1:Number Guesing Game.
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


// ✅ Project 2:Multiplication Table Generator.
    
let num=prompt("enter a num ");
for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i} `);
}


// ✅ Project 3:Countdown Timer.

let num=prompt("enter a num");
for(let i=num;i>=1;i--){
    console.log(i);
}
console.log("times up");


// ✅ Project 4:Simple calculator
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


//  ✅ Project 5:Repeted projects Entry.

while(true){
    let user=prompt("enter a produts name");
    console.log(user);
    if(user==="done"){
    break;
    }
   
}
   

// ✅ Project 6:Create a Contact manager .
let contacts=[
    {id:1,Name:"waseem",phone:"03236610274"},
    {id:2,Name:"ali",phone:"0202028829"}
];
console.log(contacts);
let serchcontact=contacts.filter(n=>n.Name==="ali");
console.log("search",serchcontact);
let updatecontact=contacts.map(c=>
    c.Name==="ali"?{...c,Name:"saleem"}:c);
console.log("updatecontact",updatecontact);
let delelecontact=contacts.filter(d=>d.Name!=="waseem");
console.log("delelecontact",delelecontact);

 
//  ✅ Project 7:Create a Shopping Cart .
// Add item (array of objects)
// Update qty (map ya find)
// Calculate total (reduce)
// Remove item (filter)
// Sort by price (sort)
// Save cart in localStorage

let Shoppingcart=[
    {Name:"shoes",price:2000,quentity:2},
    {Name:"school bag",price:2500,quentity:1},
    {Name:"shirt",price:2000,quentity:3}
];
let update=Shoppingcart.map((q)=>{
  if(q.Name==="shoes"){
return {...q,quentity:1};
  }
  return q;
});
console.log(update);
let total=Shoppingcart.reduce((val1,val2)=>{
    return val1+(val2.quentity*val2.price);
},0);
console.log(total);
let deleteitem=Shoppingcart.filter((item)=>{
if(item.Name!=="school bag"){
    return item;
}
});
console.log(deleteitem);
let sortitem=Shoppingcart.sort((a,b)=>{
    return a.price-b.price;
});
console.log(sortitem);

