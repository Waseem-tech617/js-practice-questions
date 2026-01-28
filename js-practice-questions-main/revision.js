// // 1️⃣ Reverse Vowels in a string "javascript".

// let str="javascript";
// let rev="";
// for(let i=0;i<=str.length-1;i++){
//     if(str[i]==="a" || str[i]==="i"){
// rev=str[i]+rev;
//     }
// }
// let nstr="";

// for(let i=0, index=0;i<=str.length-1;i++){
//     if("ai".includes(str[i])){
//         nstr+=rev[index];
//         index++;
//     }
//     else{
//         nstr+=str[i];
//     }
// }
// console.log(nstr);


// // 2️⃣ Count Words That Start and End with Same Letter.

// let sentence="Anna and Bob are amazing";
// let words=sentence.split(" ");
// let count=0;
// for(let i=0;i<=words.length-1;i++){
//     let word=words[i];
//     let first=word[0].toLowerCase();
//     let second=word[word.length-1].toLowerCase();
//     if(first===second){
//         count++;
//     }
// }
// console.log(count);


// // 4️⃣ Password Strength Checker.

// let uper=false;
// let lower=false;
// let digit=false;ssss
// let special=false;

//  let password=prompt("Enter a pasword: folow these at least 1 uppercase, 1 lowercase, 1 digit, aur 1 special character ");
//  for(let i=0;i<=password.length-1;i++){
//     if(password[i]===password[i].toLowerCase() && isNaN(password[i] )){
//         lower=true;}
//         else if(password[i]===password[i].toUpperCase() && isNaN(password[i])){
//             uper=true;
//         }else if(!isNaN(password[i])){
//             digit=true;
//         }
//         else if("!@#$%^&*".includes(password[i])){
//             special=true;
//         }
//     }
    
    
//     if(uper && lower&& digit&& special){
//         console.log("strong password");
//     }else{
//         console.log("weakpassword");
//     }



// // Q5. Checking Username.

// let special=false;
// let user=prompt("Enter a Name ,only enter alphabets and numbers not allowed special characters or minimum length 5");
// if(user.length>=5){
// for(let i=0;i<=user.length-1;i++){
//     if("!@#$%^&*".includes(user[i])){
//        special=true;
//     }
// }}else{
//     console.log("enter minuimum 5 characters");
    
// }

// if(user.length>=5){
// if(special){
//     console.log("invalid name");

// }else{
//     console.log("valid name");
// }}



// Q6.count nsum of numbers in String.

// let str="wdasg2365 gs";
// sum=0;
// for(let i=0;i<=str.length-1;i++){
//     if(!isNaN(str[i])){
     
//     sum=sum+Number(str[i]);
//     }
// }console.log(sum);

// // Q7.reverse string words remain in same order .

// let str="hello world";
// let strn=str.split(" ");
// let Reverses="";


// for(let i=0;i<=strn.length-1;i++){
//    let  Reverse=strn[i].split("").reverse().join("");
// Reverses+=Reverse +" ";
// }
//     console.log(Reverses);



// // Q7.remove repition or Characters.


// let str="banabana";
// let nstr="";

// for(let i=0;i<=str.length-1;i++){
//     if(!nstr.includes(str[i])) {
//         nstr+=str[i];
//     }
// }
// console.log(nstr);


// // Q8.count vovuls.

// let strn="wAAAAAAAAsemhdirhcm";
// let str=strn.toLowerCase();
// let count=0;
// for(let i=0;i<=str.length;i++){
//  if(str[i]==="a" || str[i]==="e"|| str[i]==="i" ||str[i]==="o" ||str[i]==="u"){
//     count++;
//  }}
//  if(count>5){
//     console.log("Many vovles");
//  }
//  else{
//     console.log("few vovels");
//  }
 

// // Q9.convert string reverse.

// let str= "I love JavaScript";
// let nstr=str.split(" ");
// let reverse="";
// for(let i=nstr.length-1;i>=0;i--){

// reverse+=nstr[i]+" ";
// }
// console.log(reverse);


// // Q10.remove numbers and special symbol from string "JavaScript123!".

// let str = "JavaScript123!";
// let rem="";
// for(let i=0;i<=str.length-1;i++){
//     if(!isNaN(str[i]) || "!@#$%^&*".includes(str[i])){
//         continue;
//     }else{
//         rem+=str[i];
//     }
// }
// console.log(rem);



// // Q11.print diamond partren.
 
// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=1;j<=5-i;j++){
//         row+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         row+="*";
//     }
    
//     console.log(row)
// }

