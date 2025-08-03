// ✅ Q.Number Guesing Game.
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
    
    
    