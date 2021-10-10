const numOfShares = document.querySelector("#number-of-shares");
const purchasePrice = document.querySelector("#purchase-price");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate");

const warn = document.querySelector("#warning");

function profitorLoss(purchase, current, number) {
    const diffrence = current - purchase;
    const total = diffrence * number;

    return total;
}

function percententaged(purchase, current, number) {
    const pL = profitorLoss(purchase, current, number);
    const percentage = pL * 100 / purchase / number;
    return percentage;
}


function clickHandler() {

    const number = numOfShares.value;
    const purchased = purchasePrice.value;
    const currents = currentPrice.value;

    if (numOfShares.value, purchasePrice.value, currentPrice.value !== '')
     {
        if (numOfShares.value<=0 || purchasePrice.value<=0 || currentPrice.value < 0)
        {
            warn.innerText="Please enter valid values"

        } else 
        {
            const absoluteReturn = profitorLoss(purchased, currents, number);
            const percentageReturn = percententaged(purchased, currents, number);
            const percent = percentageReturn.toFixed(2);

            if(absoluteReturn === 1){
                warn.style.color='blue';
                warn.innerText=`you have earned neither profit nor made loss`;
            }
else{
    if (absoluteReturn < 0) {
        const negativeReturn = -(absoluteReturn);
        const negativePercent = -(percent);
        warn.style.color = 'red';
        warn.innerText = `your loss is ${negativeReturn} you have losted ${negativePercent}% of your wealth`;
    }
 else {
    warn.style.color = 'green';
    warn.innerText = `you profit is ${absoluteReturn} you have earned ${percent}% from your wealth`;

}
}

            }
    } else {
        warn.innerText = "please fill all the given fields";
    }
}

calculateButton.addEventListener("click", clickHandler);