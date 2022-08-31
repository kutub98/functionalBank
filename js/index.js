const submitButton = document.getElementById('Submit');
submitButton.addEventListener('click', function(){

    const passwordfied =document.getElementById('password')
    const emailfied =document.getElementById('UserEmail')
    const password = passwordfied.value;
    const email = emailfied.value;
    if(email ==="bank@gmail.com" && password==='kutub'){
        window.location.href = 'bank.html';
    }else{
        alert('please provide correct email or password')
    }
})