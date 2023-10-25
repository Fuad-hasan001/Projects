/***
 * 1. 
 */

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);
// //step-4: 
//     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
//     withdrawTotalElement.innerText = currentWithdrawTotal;

//step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     //step-7: input field clear
     withdrawField.value = "";

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Bapp er Bank eto Taka nai');
        return;
    }

    //step-4: 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = currentWithdrawTotal;

//step-6: 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

   
})