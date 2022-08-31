// const withdrawButton = document.getElementById('withdrwaBtn');
// withdrawButton.addEventListener('click', function(){
    
//     const withdrawInput = document.getElementById('withdraw_iput');
//     const withdrawInputString = withdrawInput.value;
//     const newWithdraw = parseFloat(withdrawInputString);

//     if(isNaN(newWithdraw)){
//         alert('please provide a valid number')
//         return
//     }
//     withdrawInput.value = '';

//     const withdrawBalanceInput = document.getElementById('WithdarwBalance');
//     const withdrawBalanceString = withdrawBalanceInput.innerText;
//     const newWithdrbalance = parseFloat(withdrawBalanceString);

//     const totabalanceInput = document.getElementById('CurentBalance');
//     const totalbalanceString = totabalanceInput.innerText;
//     const newtoatalBalance = parseFloat(totalbalanceString);

//     if(newWithdraw >  newtoatalBalance ){
//         alert('sorry you dont have sufficient Balance')
//         return
//     }
//     const totalBwithdrawBalance = newWithdrbalance + newWithdraw;
//     withdrawBalanceInput.innerText = totalBwithdrawBalance;
   
//     const currentTotalBalance = newtoatalBalance - newWithdraw;
    
//     totabalanceInput.innerText = currentTotalBalance;



// })