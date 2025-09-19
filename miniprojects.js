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
  

//  ✅ Project 8:Student Records Dashboard.
// Add student record (name, marks, grade)
// Filter pass/fail
// Sort by marks
// Calculate average marks (reduce)
// Show top student
let students=[
    {Namae:"ali",marks:90,grade:"A"},
     {Namae:"waseem",marks:40,grade:"f"},
      {Namae:"saleem",marks:70,grade:"B+"},
];
let result=students.filter(s=>s.marks>50);
console.log(result);
let sortstudens=students.sort((a,b)=>{
    return a.marks-b.marks;
});
console.log(sortstudens);
let toltalsum=students.reduce((rec,cur)=>{
    return rec+cur.marks;
},0);
let averagemarks=toltalsum/students.length;
console.log(averagemarks);

let topstudent=sortstudens.reduce((max,cur)=>{
  return (cur.marks>max.marks?cur:marks);
});
console.log(topstudent);


//  ✅ Project 9:Ek function banana hai buyProduct(id, qty).
// id → konsa product kharidna hai
// qty → kitni quantity kharidni hai
// Is function me karna yeh hoga:
// Us product ko array me se dhundhna (find se).
// Check karna ke stock me utni quantity available hai ya nahi.
// Agar available hai → stock me se qty minus kar do.
// Agar stock 0 ya negative ho jaye → "Out of stock" print karo.

let products = [
  { id: 1, name: "Shoes", price: 2000, stock: 5 },
  { id: 2, name: "Shirt", price: 1000, stock: 2 },
  { id: 3, name: "Watch", price: 3000, stock: 1 }
];
function buyProduct(id,qut){
    let searchproduct=products.find((p)=> p.id==id);
    if(!searchproduct){
        console.log("product not found");
       return;
    }
    if(searchproduct.stock>=qut){
        searchproduct.stock-=qut;
         console.log(`You bought ${qut} ${searchproduct.name}`);
        console.log(`Remaining stock: ${searchproduct.stock}`);
    } else {
        console.log("Out of stock");
    }
    }
buyProduct(2,1);


// ✅ Project 10: Library System.
// Ek library object banao jisme books array ho {title, author, available}.
// 👉 Functions likho:
// addBook(title, author)
// borrowBook(title) → available = false
// returnBook(title) → available = true

let library=[
    {title:"physcis",author:"waseem",aviable:true},
    {title:"chemistey",author:"saleem",aviable:true},
];
function addbook(tittle,author){
    library.push({tittle,author});
    console.log(library);
}
function borrowbook(book){
    let searchbook=library.find((b)=>b.title==book);
    if(searchbook.aviable==false){
        console.log("book is already borowed");
    }
    if(searchbook){
    return searchbook.aviable=false;
    } 
}
function returnbook(book){
     let searchbook=library.find((b)=>b.title==book);
    if(searchbook.aviable==true){
        console.log("book is not borowed");
    }
    if(searchbook.aviable==false){
        return searchbook.aviable=true;
    }
    
}
borrowbook("physcis");
returnbook("chemistey");
console.log(library);