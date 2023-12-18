// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // console.log('Deposit clicked')

//     const getDepositElement = document.getElementById('deposit-field');
//     const getNewDepositTotalString = getDepositElement.value ;
//     const newDepositTotal = parseFloat(getNewDepositTotalString);
    
//     getDepositElement.value = '';

//     const previousTotalDepositElement = document.getElementById('deposit-total');
//     const previousTotalDepositSting = previousTotalDepositElement.innerText;
//     const previousTotalDeposit = parseFloat(previousTotalDepositSting);

//     const totalDeposit = previousTotalDeposit + newDepositTotal ; 
//     previousTotalDepositElement.innerText = totalDeposit ;
    
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalElementString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

//     const totalBalance = newDepositTotal + previousBalanceTotal;
//     balanceTotalElement.innerText = totalBalance ;  
// })

/**
step-1: get the element by id
step 2: get the value from the element
step 3: convert string value to a number
 */
// step-1: get the element by id
document.getElementById('btn-deposit').addEventListener('click' ,function(){
    // step-2:
    const newDepositAmount = getInputValueById('deposit-field');

    // step-3: 
    const previousDepositTotal = getElementValueById('deposit-total');
    console.log(previousDepositTotal);

    // step4:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
// set
    setTextElementValueId('deposit-total', newDepositTotal);

    //get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total'); 
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueId('balance-total', newBalanceTotal);


})