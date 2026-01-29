// ✅ Question 1:
// Check a number and print:

// “Positive” if > 0

// “Negative” if < 0

// “Zero” if 

let num=Number(prompt("enter a num"));
if(num>0){
    console.log(`${num} is positive`); 
}else if(num<0){
    console.log(`${num} is negitive`);
}else if(num===0){
    console.log(`${num} is zero`);
}else{
    console.log(`${num} it is not a number `);
}
// ✅ Question 2 : With ternary operater.
// Check a number and print:

// “Positive” if > 0

// “Negative” if < 0

// “Zero” if 

let num=Number(prompt("enter a num"));
let result=num>0?`${num} is positive`:num<0?`${num} is negitive`:num===0?`${num} is zero`:NaN;
console.log(result);

// 🔹 Question 3: Day Name

// Ek number (1–7) lo aur switch se print karo:

// 1 → Monday

// 2 → Tuesday

// 3 → Wednesday

// 4 → Thursday

// 5 → Friday

// 6 → Saturday

// 7 → Sunday

// Default → “Invalid day”

// let day="saturday";
// switch(day){
//     case "Monday":
//         console.log("Monday"); 
//         break;
//         case "saturday":
//             console.log("saturday");
//             break;
//             default:
//                 console.log("not a day");
// }



// 🔹 Question 4: Traffic Light

// Ek color input lo:

// "red" → Stop

// "yellow" → Ready

// "green" → Go

// Default → Invalid color

let color=prompt("enter a color");
switch(color){
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("ready");
            break;
            case "green":
                console.log("go");
                break;
                default:
                    console.log("invalid color");
}