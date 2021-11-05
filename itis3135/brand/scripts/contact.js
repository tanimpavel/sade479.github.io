var userInput = document.getElementById("userInput");
var name = "";
var phonenumber = "";
var email = "";
var companysize = "";

function formSubmit ()
{
    alert("Thank you for submitting our from. Your results are below.");
    name = document.getElementById("name").value;
    phonenumber = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    companysize = document.getElementById("companysize").value;
    userInput.innerHTML = '<p class="contactFormInput">Your name is ' + name + "<br>Your phone number is " + phonenumber + 
        "<br>Your email is " + email + "<br> Your company size is " + companysize + "</p>"; 
    return false; //Prevents page from reloading
}
