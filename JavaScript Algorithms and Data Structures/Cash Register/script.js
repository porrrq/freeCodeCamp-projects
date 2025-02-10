const cashInput = document.querySelector('#cash');
const changeDueDiv = document.querySelector('#change-due');
const purchaseBtn = document.querySelector('#purchase-btn');
const priceDiv = document.querySelector('#price');
const cidContainer = document.querySelector('#cid-container');

let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// ---------- [function] ---------- 
const getCurrencyAmount = () =>  [...cid].map(arr => parseFloat((arr[1]).toFixed(2)))
const getTotalChangeAvailable = (currencyAmountArray) => parseFloat((currencyAmountArray.reduce((acc,val)=>acc+val,0)).toFixed(2))
const checkEnoughPayment = (payment,price) => payment >= price //return true if payment >= price
const isPriceEqualToPayment = (payment,price) => payment === price //return true if payment = price -> no change due
const getChangeDue = (payment,price) => parseFloat((payment-price).toFixed(2))
const isTotalChangeLessThanChangeDue = (totalChange,changeDue) => totalChange < changeDue 
const isTotalChangeEqualToChangeDue = (totalChange,changeDue) => totalChange === changeDue 
const isDenominationSufficient = (currencyAvailable,changeDue) => { //return charge array if it is sufficient , return null if it not.
    const denomination = [0.01,0.05,0.1,0.25,1,5,10,20,100]
    let change = new Array(denomination.length).fill(0)
    for (let i = currencyAvailable.length-1 ; i > -1 ; i--){
        let currentDenominationValue= denomination[i]
        let currentDenominationAvailable = currencyAvailable[i]
        let used = 0

        while (changeDue >= currentDenominationValue && currentDenominationValue <= currentDenominationAvailable) {
            used = parseFloat((used + currentDenominationValue).toFixed(2))
            changeDue = parseFloat((changeDue - currentDenominationValue).toFixed(2))
            currentDenominationAvailable = parseFloat((currentDenominationAvailable-currentDenominationValue).toFixed(2))
        }
        change[i] = parseFloat(used.toFixed(2))        
    }
    if (changeDue === 0) {return change}
    else {return null}
}
const updateCid = (change) => {
    if (change) {
    for (let i=1 ; i<cid.length ; i++) {
        cid[i][1] = parseFloat((cid[i][1]-change[i]).toFixed(2))
    }}
}
const updateUI = (statusString,changeArr) => {
    //update price
    priceDiv.innerHTML = `Total: ${price}`
    //update changeDueDiv
    if (statusString !== "") {
        changeDueDiv.innerHTML = `Status: ${statusString}`
        if (statusString !== "INSUFFICIENT_FUNDS"){
        for (let i = cid.length-1 ; i>-1 ; i--) {
            if (changeArr[i] !== 0) {
            changeDueDiv.innerHTML += `<p class="charge-text">${cid[i][0]}: $${changeArr[i]}</p>`
            }
        }}
    }
    //update cid UI
    cidContainer.innerHTML = `
    <p class="drawer-header">Change in drawer: </p>
    <p class="drawer-text">Pennies: $${cid[0][1]}</p>
    <p class="drawer-text">Nickles: $${cid[1][1]}</p>
    <p class="drawer-text">Dimes: $${cid[2][1]}</p>
    <p class="drawer-text">Quarters: $${cid[3][1]}</p>
    <p class="drawer-text">Ones: $${cid[4][1]}</p>
    <p class="drawer-text">Fives: $${cid[5][1]}</p>
    <p class="drawer-text">Tens: $${cid[6][1]}</p>
    <p class="drawer-text">Twenties: $${cid[7][1]}</p>
    <p class="drawer-text">Hundreds: $${cid[8][1]}</p>
    `
}
window.onload = () => {
    updateUI("")
}
const main = () => {
    const payment = Number(cashInput.value);
    if (payment==="") {return} //if user doesn't input anything -> return
    let statusString = "";
    const currencyAmount = getCurrencyAmount();
    const totalChange = getTotalChangeAvailable(currencyAmount);
    const changeDue = getChangeDue(payment,price);
    let change;
    if (!checkEnoughPayment(payment,price)) { //Case: payment < price
       alert("Customer does not have enough money to purchase the item");
       return
    } 
    else if (isPriceEqualToPayment(payment,price)) { //Case: payment = price
        changeDueDiv.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
        return
    }
    else if (isTotalChangeLessThanChangeDue(totalChange,changeDue)) { //Case: the total change is not enough to be given
        statusString = "INSUFFICIENT_FUNDS"
        change = (new Array(cid.length)).fill(0)
    }
    else if (isTotalChangeEqualToChangeDue(totalChange,changeDue)) { //Case: the total change is equal to change due
        statusString = "CLOSED"
        change = [...currencyAmount]
    }
    else { //Case: Total change is enough + free
        change = isDenominationSufficient(currencyAmount,changeDue)
        if (change) { //case: can give a change 
            statusString = "OPEN";
        }
        else { //case: can't give a change because the denominaltion is no sufficient
            statusString = "INSUFFICIENT_FUNDS"
        }
    }
    updateCid(change)
    updateUI(statusString,change)
    changeDueDiv.style.padding = "20px";
} 
purchaseBtn.addEventListener('click',main)
