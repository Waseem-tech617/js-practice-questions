// ✅ Q.Reverse a string using a loop.

let a = "apple";
let b = "";
for (let i = a.length - 1; i >= 0; i--) {
  b = b + a[i];
}
console.log(b);


//✅ Q. Ek string hai "banana". Tumne usme sirf "a" count karna hai

let str="banana";
let count=0;
for(let i=0;i<=str.length;i++){

    if(str[i]==="a"){
        count++;
    }
}
 console.log(count);


// ✅ Q. Print each letter of "JavaScript" on a new line using a loop.

let str="Javascript";

for(let i=0;i<str.length;i++){
console.log(str[i]);

}


// ✅ Q.Ek string "racecar" hai. Check karo kya ye palindrome hai ya nahi.

let a="racecar";
let b="";
for(let i=0;i<a.length;i++){
    b =a[i]+b;
}
    if(a===b){
        console.log("youer string is palindrome  ");
    }
    else{
        console.log("not a plandrome");
    }


// ✅ Q. Print each word of "hello world" in a new line.

let str="hello world";
let words=str.split(" ");
for(let i=0;i<str.length;i++){
    console.log(words[i]);
}


// ✅ Q.Ek string hai "apple mango banana". Tumne last word print karna hai.

let str="apple mango banana";
let words=str.split(" ");

 console.log(words[2]);



// ✅ Q. Print characters of this string in reverse but only vowels "javscript".

let str="javascript"
for(let i=str.length;i>0;i--){
    let reverse=str[i];
    if(reverse=== "a" || 
   reverse=== "e" || 
   reverse=== "i" ||
   reverse=== "o" || 
   reverse=== "u" )
   {
 console.log(reverse); 
} 
}


// ✅ Q.is number ma ko reverse karo.

   let num=12345;
   let str=num.toString();
   let reverse="";
   
   for(let i=0;i<str.length;i++){
    reverse=str[i]+reverse;
   }
   console.log( Number(reverse));


// ✅ Q. Is string ma sa spaces ko count karo.

   let str="loops are fun to practice";
   let count=0;
   for(let i=0;i<=str.length;i++){
   
   if(str[i]===" "){
    count++;
   }
   }
    console.log(count);


// ✅ Q.Count the each string word "javascript".

let str="javascript";
let count={};
for(let i=0;i<str.length;i++){
  let char=str[i];
  if(count[char]){
    count[char]++;
  }else {
    count[char] = 1;
  }
}
console.log(count);

// ✅ Q.print a srting in same order.

let str="hello world";
let nstr=str.split(" ");
let newv=[];
for(let i=0;i<nstr.length;i++){
    
     let word=nstr[i];

     let newvr="";
     for(let j=word.length-1;j>=0;j--){
        newvr+=word[j];
     }
    newv.push(newvr);
}
let reverse=newv.join(" ");
console.log(reverse );

