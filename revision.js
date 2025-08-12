// 1️⃣ Reverse Vowels in a string "javascript".

let str="javascript";
let rev="";
for(let i=0;i<=str.length-1;i++){
    if(str[i]==="a" || str[i]==="i"){
rev=str[i]+rev;
    }
}
let nstr="";

for(let i=0, index=0;i<=str.length-1;i++){
    if("ai".includes(str[i])){
        nstr+=rev[index];
        index++;
    }
    else{
        nstr+=str[i];
    }
}
console.log(nstr);


// 2️⃣ Count Words That Start and End with Same Letter.

let sentence="Anna and Bob are amazing";
let words=sentence.split(" ");
let count=0;
for(let i=0;i<=words.length-1;i++){
    let word=words[i];
    let first=word[0].toLowerCase();
    let second=word[word.length-1].toLowerCase();
    if(first===second){
        count++;
    }
}
console.log(count);


// 4️⃣ Password Strength Checker.

let uper=false;
let lower=false;
let digit=false;ssss
let special=false;

 let password=prompt("Enter a pasword: folow these at least 1 uppercase, 1 lowercase, 1 digit, aur 1 special character ");
 for(let i=0;i<=password.length-1;i++){
    if(password[i]===password[i].toLowerCase() && isNaN(password[i] )){
        lower=true;}
        else if(password[i]===password[i].toUpperCase() && isNaN(password[i])){
            uper=true;
        }else if(!isNaN(password[i])){
            digit=true;
        }
        else if("!@#$%^&*".includes(password[i])){
            special=true;
        }
    }
    
    
    if(uper && lower&& digit&& special){
        console.log("strong password");
    }else{
        console.log("weakpassword");
    }
    
    
    
    
 
    
    
   
