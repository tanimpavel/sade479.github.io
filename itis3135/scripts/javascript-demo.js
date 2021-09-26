var brandName = "Pavel Designs";

function demoAlert()
{
    return alert("This is a test alert");
}

function userIntroduction()
{
    var name = prompt("What is your name?");
    var howAreYouDoing = prompt("How are you doing today?");
    var currentDate = new Date();
    var today = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
    document.write("<p> The date today is " + today + " and the time currently is " + time + ".</p>");
    document.write("<p> Welcome to the " + brandName + " website " + name + " we hope you enjoy your stay.</p>");
    document.write("<p> We see that you are doing " + howAreYouDoing + " today.</p>");
}

function multiply()
{
    var firstNumber = prompt("Enter the first number:");
    var secondNumber = prompt("Enter the second number:");
    return alert("The result is: " + (firstNumber*secondNumber));
}

function pinkText()
{
    var sampleColorText = document.getElementById("sampleColorText");
    sampleColorText.style.color = 'pink';
}

function greenText()
{
    var sampleColorText = document.getElementById("sampleColorText");
    sampleColorText.style.color = 'green';
}

function hidePelican()
{
    var pelican = document.getElementById("pelican");
    pelican.style.visibility = 'hidden';
}

function showPelican()
{
    var pelican = document.getElementById("pelican");
    pelican.style.visibility = 'visible';
}