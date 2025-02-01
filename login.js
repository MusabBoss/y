var users = JSON.parse(localStorage.getItem('users')) || [];
 function signin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Sign in successful! Welcome, ' + email + '!');
        window.location.href="musab.html";
    } else if (email === "" || password === "") {
        alert("All fields are required");
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function signup() {
 let email = document.getElementById('email1').value;
    let password = document.getElementById('password1').value;
    let userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Email already exists. Please use a different email.');
    }
    else if(email === ""||password ===""){
        alert("All fields are required")
    }
     else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up successful! Welcome, ' + email + '!');
    }
}
users[3].email="no@gmail.com"
users[3].password="12345678"




