const numOfShares=document.querySelector("#number-of-shares");
const purchasePrice=document.querySelector("#purchase-price");
const currentPrice=document.querySelector("#current-price");
const calculateButton=document.querySelector("#calculate");
const output=document.querySelector("absolute-output");
const percentOutput=document.querySelector("#percentage-output");
const warn= document.querySelector("#warning");

function profitorLoss(purchase,current,number){
    const diffrence=current-purchase;
    const total=diffrence*number;

    return total;
}
function percententaged(purchase,current,number){
    const pL=profitorLoss(purchase,current,number);
    const percentage=pL*100/purchase/number;
    return percentage;
}


function clickHandler(){
console.log("akshat");
    //     if(numOfShares.value,purchasePrice.value,currentPrice.value!==""){
//         const number=numOfShares.value;
// const purchased = purchasePrice.value;
// const currents=currentPrice.value;
// output.innerText="your profit is "+profitorLoss(number,purchased,currents);
// percentOutput.innerText="your percent return is"+percententaged(number,purchased,currents);

//     }
//     else{
// warn.innerText="please fill all the given fields";
//     }
}

calculateButton.addEventListener("click", clickHandler);