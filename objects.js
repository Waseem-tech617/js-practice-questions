// Q1.Create a Object of student .

let students={
    Name:"waseem",
    Age:23,
    isEnroled:true,
}

//Q2. Ek object car banao jisme properties ho Brand aur Year console me print karo (dot aur bracket dono method se).

const obj={
    brand: "Toyota",
    model  : "Corolla",
    year: 2020
}
console.log(obj["brand"],obj.brand);


// Q3.car object me:
// Ek new property color add karo (value = "Black").
// year ko update karke 2022 bana do.
// Console me poora object print karo.

const car={
     brand: "Toyota",
     model  : "Corolla",
     year: 2020
}
car.color="black";
car.year=2021;
console.log(car);


// Q4. Delete car object se model property delete karo.
const car={
    brand: "Toyota",
    model  : "Corolla",
    year: 2020
}
delete car.model;
console.log(car);


//Q5. Ek user object banao jisme:
// Address ke andar zip property add karo (value = 54000)
const user={
      name: "Ali",
      age : 25,
      address: {
      city: "Lahore",
      country: "Pakistan"
}
}
user.address.zip=54000;
console.log(user);


// Q6. Object with Array
// Ek student object banao jisme:
// name: "Sara"
// subjects: ["Math", "English", "Science"]
// Sara ka first subject print karo
// Subjects me "History" add karo

let student={
    name: "Sara",
    subjects: ["Math", "English", "Science"]
}
console.log(student.subjects[0]);
student.subjects.push("History");


// Q7. Array of Objects inside Object
// Ek company object banao jisme:
// name: "TechCorp"
// employees: [
//    { id: 1, name: "Asad", role: "Developer" },
//    { id: 2, name: "Zara", role: "Designer" }
// ]
// Pehle employee ka naam print karo
// Dusre employee ka role update karke "UI/UX Designer" kar do
// Ek naya employee {id:3, name:"Bilal", role:"Manager"} add karo


let company={
name: "TechCorp",
employees: [
   { id: 1, name: "Asad", role: "Developer" },
   { id: 2, name: "Zara", role: "Designer" }
]
}
company.employees.push({id:3, name:"bilal", role:"manager"});
company.employees[0].role="UI/UX Designer";
console.log(company.employees[0].name);
console.log(company.employees[0].role);
console.log(company.employees);



// Q8.Ek product object banao jisme:
// id: 101
// title: "Laptop"
// price: 80000
// variants: [
//    { color: "Black", stock: 12 },
//    { color: "Silver", stock: 5 }
// ]
// Silver variant ka stock print karo
// Black variant ka stock update karke 10 kar do
// Ek naya variant {color: "Blue", stock: 7} add karo
let product={
       id: 101,
       title: "Laptop",
       price: 80000,
       variants: [
                { color: "Black", stock: 12 },
                { color: "Silver", stock: 5 }
]
}
product.variants[0].stock=10;
product.variants.push({color:"Black", stock:7});
console.log(product.variants[0].stock);
console.log(product.variants);


// Q9. Greeting Method
// Ek user object banao:
let user={
  name: "Ali",
  greet() {
    return "Hello " + this.name;
  }
}
console.log(user.greet())


// Q10. Calculator Object
// Ek calculator object banao jisme methods ho:
// add(a, b) → do numbers ka sum return kare
// sub(a, b) → subtraction return kare

let calculator={
    add(a,b){
        return a+b;
    },
    Sub(a,b){
        return a-b;
    }
}
console.log(calculator.add(2,4));
console.log(calculator.Sub(7,4));


// Q11.Ek product object banao:
// Agar discountPercent = 10 ho to price → 1800 return ho.
let product={
  name: "Shoes",
  price: 2000,
  getDiscountedPrice(discountPercent) {
    return this.price-(this.price/100*discountPercent);
  }
}
console.log(product.getDiscountedPrice(20));
   

//  Q12. Ek student object banao or on masa marks ka sum nikalo:

let student={
Name:"sara",
Marks:{
Math:50,
scince:23,
physcis:56
},
getmarks(){
let sum=0;
for(let val in this.Marks){
     sum+=this.Marks[val];
}
return sum;
}
}
console.log(student.getmarks());



// Q13. User object ki sari keys aur values print karo.
let user = {
  id: 101,
  name: "Ali",
  age: 25,
  city: "Lahore"
};
for(let i in user){
    console.log(i,user[i]);
}

// Q14. Product object ki property count nikalo

let product = {
  name: "Shoes",
  price: 2000,
  brand: "Nike",
  inStock: true
};
let count=Object.keys(product).length;
console.log("property count: ",count);


//Q15. Ek book object banao {title, author, year} → destructure karke title aur author print karo.

 let user={title:"job", author:"waseem",year:2017};
let {title,author}=user;
console.log(title,author);


//Q16. Ek laptop object banao {brand, model} → destructure karke ek price default value ke saath print karo.

let latop={
  brand:"Hp",
  model:"core 5"
}
let{brand,model,price=20000}=latop;
console.log(brand,model,price);


//Q17. Ek car1 = { brand: "Toyota", year: 2020 } aur car2 = { model: "Corolla", price: 3000 } banao → dono ko merge karke car object print karo.
let car1 = { brand: "Toyota", year: 2020 } ;
let car2 = { model: "Corolla", price: 3000 };
let car={...car1,...car2};
console.log(car);


// Ek student = { name: "Sara", age: 20, grade: "A" } banao → destructuring + rest operator use karke name alag nikalo aur baaki ek naya object me rakho.

let student = { name: "Sara", age: 20, grade: "A" };
let{name,...rest}=student;
console.log(name);
console.log(rest);