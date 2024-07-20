const url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json;"

const dropdowns=document.querySelectorAll(".dropdown select")
const img=document.querySelector("img")

for(let select of dropdowns){
for(code in countryList){
let newoption=document.createElement("option");
newoption.innerText= code;
newoption.value=code;
select.append(newoption);
if(select.name==="from" && code==="USD"){
    newoption.selected="selected"
}
if(select.name==="to" && code==="INR"){
    newoption.selected="selected";
  }
 }
 select.addEventListener("click", (evt)=>{
    updateflag(evt.target);
    console.log(evt.target)

})
}

let updateflag= (option)=>{

let currcode=option.value;
let countrycode=countryList[currcode];
console.log(countrycode);
newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
const img=option.parentElement.querySelector("img");
img.src=newsrc;
}