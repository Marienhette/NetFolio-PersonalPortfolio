document.getElementById('login-form').addEventListener('submit', (event) =>{
    event.preventDefault();
    var attempts = 3

 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;

 
 if (username !== 'Introtocomp' || password !== '123456') 
 {
    attempts--;
    alert('Invalid login credentials.');
    alert('You only have  attempts');
    
    if (attempts=0) 
    {
        alert('Sorry you have failed to access your account');
    }
}
else 
 {
    alert('Logged in successfully!');
    location.reload();
 }
});

