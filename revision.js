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

