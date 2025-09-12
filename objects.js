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


// Q3. Array of Objects inside Object
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