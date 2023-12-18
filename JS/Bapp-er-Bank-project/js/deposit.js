// step-1: 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit btn clicked')

// step-2:  
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

//step-3: current deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
//step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
//set the deposit
    depositTotalElement.innerText =currentDepositTotal;
//step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    
//set: 
    balanceTotalElement.innerText = currentBalanceTotal    


//step-7: input fiels clear
    depositField.value = "";
    
})