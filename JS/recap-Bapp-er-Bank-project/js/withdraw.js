// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const getWithdrawElement = document.getElementById('withdraw-field');
//     const getNewWithdrawTotalString = getWithdrawElement.value ;
//     const newWithdrawTotal = parseFloat(getNewWithdrawTotalString);

//     getWithdrawElement.value = '' ;

//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = withdrawTotalElement.innerText;
//     const previousTotalWithdraw = parseFloat(previousWithdrawTotalString);

//     const totalWithdraw = previousTotalWithdraw + newWithdrawTotal;
//     withdrawTotalElement.innerText = totalWithdraw;

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalElementString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

//     const totalBalance = previousBalanceTotal - newWithdrawTotal;
//     balanceTotalElement.innerText = totalBalance;
// })


document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueId('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');

    const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;
    setTextElementValueId('balance-total', newBalanceTotal);


})
