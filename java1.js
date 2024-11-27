const form = document.getElementById('login-form');
failureMessage = document.getElementById('fail');
let attempts = 0;
document.getElementById('login-form').addEventListener('submit', validateform=(event) {
    event.preventDefault();

form.addEventListener('submit', (event) => {
 event.preventDefault();
 function validateForm() {
    var textInput = document.getElementById('myText').value;
    if (textInput === '') {
        document.getElementById('alertBox').textContent = 'The text field cannot be empty!';
        return false;
    } else {
        document.getElementById('alertBox').textContent = '';
        return true;
    }
}
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 if (username !== 'Introtocomp' || password !== '123456') {
    attempts++;
    if (attempts <= 3) {
        alert('Invalid login credentials.')
    }
 } else {
    alert('Logged in successfully!');
    location.reload();
 }
});
})
