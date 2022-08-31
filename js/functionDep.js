
//Deposit button event listener =================================

const DepositButton = document.getElementById('depositBtn');
DepositButton.addEventListener('click', function(){

   const newDeposit = getInputValuebyId('Deposit_Input');
   const prevDeposit = getInputElementById('depositBalance');
   const TotalDeposit = newDeposit + prevDeposit;
   const balance = getInputElementById('CurentBalance');
   if(isNaN(newDeposit)){
    alert("please provide a valid number")
    return newDeposit;
   }
   const totalBalance = balance + newDeposit;

   setElemntById('depositBalance', TotalDeposit)
   setElemntById('CurentBalance', totalBalance)


})


//Withdraw button event listener =================================
const withdrwaButton = document.getElementById('withdrwaBtn');
withdrwaButton.addEventListener('click', function(){

    const newWithdrawAmount = getInputValuebyId('withdraw_iput');
    if(isNaN(newWithdrawAmount)){
        alert('plase provide a valid number')
        return newWithdrawAmount
    }
    const prevWithdrawATotal = getInputElementById('WithdarwBalance');
    const balanced = getInputElementById('CurentBalance');
    if(newWithdrawAmount > balanced){
        alert('Sorry You Do not have sufficient Balance')
        return newWithdrawAmount
    }
   
    
    const newWithdrawTotal = newWithdrawAmount + prevWithdrawATotal;
    
    setElemntById('WithdarwBalance' , newWithdrawTotal);
    
    
    
    const TotalBalance = balanced - newWithdrawAmount;
    setElemntById('CurentBalance', TotalBalance)
    

   
})