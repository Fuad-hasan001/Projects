// step-1: 
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log("submit button clicked");
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log("emailAddress got it");
    // step-3: get the password inside the email input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log("Password got it");


    /***Danger: Do Not verify email password on the client side  */
    // step-4: verify email and password 
    if (email === 'sontan@gmail.com' && password === 'sontan') {
        // console.log("valid user");
        // traverse one html-file to another html-file
        window.location.href = 'bank.html' ;
    }
    else {
        alert("invalid user");

    }

})