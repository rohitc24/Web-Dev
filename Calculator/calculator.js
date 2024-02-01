let buttons=document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",()=>{
        button.style.opacity="1";
        setTimeout(()=>{
            button.style.opacity=0.7;
        },200);
    })
}
let nums=document.querySelectorAll(".number");
let ans=document.querySelector("input");
nums.forEach((num)=>{
   num.addEventListener("click",()=>{
   ans.value+=num.innerText;
   });
});

let divison=document.querySelector(".divison");
let module=document.querySelector(".module");
let add=document.querySelector(".add");
let minus=document.querySelector(".minus");
let multi=document.querySelector(".multi");
let plusminus=document.querySelector(".plusminus")
divison.onclick=function(){
    ans.value+="/"
}
module.onclick=function(){
    ans.value+="%"
}
add.onclick=function(){
    ans.value+="+"
}
multi.onclick=function(){
    ans.value+="*"
}
minus.onclick=function(){
    ans.value+="-"
}
// plusminus.onclick=function(){
//     ans.value+=`(-${ans.value.slice(-2,-1)})`;
// }
document.addEventListener("keypress",(event)=>{
    if(event.key=='/'){
        ans.value+=event.key;
    }
    if(event.key=='*'){
        ans.value+=event.key;
    }
    if(event.key=='+'){
        ans.value+=event.key;
    }
    if(event.key=='-'){
        ans.value+=event.key;
    }   
    nums.forEach((num1)=>{
        if(num1.innerText==event.key){
            ans.value+=event.key;
        }
    });
    if(event.key=="Enter"){
        event.preventDefault();//to prevent the click by enter key like if i first clcik on 7 button if i press enter key then the 7 will click again to stop that this method use
        ans.value=eval(ans.value);
    }

});
document.addEventListener("keydown",(e)=>{
    if(e.key=="Backspace"){
        ans.value=(ans.value).toString().slice(0,-1);
    }
})
// module.addEventListener("click",()=>{
//     ans.innerHTML=ans.innerHTML+module.innerText;
// });
let operators=document.querySelectorAll(".operator");

document.addEventListener("keypress",(event)=>{
    
    // for(let operator of operators){
    //     if(operator.innerHTML==event.key){
    //         ans.value+=event.key;
    //     }
    // }
});
let cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
    ans.value=(ans.value).toString().slice(0,-1);
});
let eql=document.querySelector(".equal");
eql.onclick=function(){
    ans.value=eval(ans.value);
}
let clear=document.querySelector(".ac");
clear.onclick=function(){
    ans.value="";
}

