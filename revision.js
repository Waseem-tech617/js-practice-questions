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