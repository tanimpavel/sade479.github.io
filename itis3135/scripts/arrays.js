var names = [];
var salaries = [];
var selectName = document.getElementById("names");
var enterSalary = document.getElementById("enterSalary");
var results = document.getElementById("results");
var results_table = document.getElementById("results_table");

enterSalary.focus();

function addSalary(salary)
{
    var person = selectName.value;
    var salary = enterSalary.value;
    
    if (isNaN(salary) || salary == "")
    {
        return alert("Please enter a number");
    }
    
    if (names.includes(person)) //Update the array if the name already exists
    {
        var nameIndex = names.indexOf(person);
        salaries[nameIndex] = parseInt(salary);
    }
    
    else
    {
        names.push(person);
        salaries.push(parseInt(salary));
    }
}

function displayResults()
{
    var highestSalary = 0;

    for (var i=0; i < salaries.length; i++)
    {
        if (salaries[i] > highestSalary){
            highestSalary = salaries[i];
        }
    }

    var salarySum = 0;

    for (var j=0; j < salaries.length; j++)
    {
        salarySum += salaries[j];
    }

    var averageSalary = salarySum/salaries.length;

    results.innerHTML = "<h2>Salary Summary</h2> <p>Highest Salary: " + highestSalary + "</p> <p>Average Salary: " + averageSalary;
}

function displaySalary()
{
    var tableDisplay = '<thead><tr><th>Name</th><th class="right">Salary</th></tr></thead><tbody>';
    for (var i=0; i < names.length; i++){
        tableDisplay = tableDisplay + '<tr><td>' + names[i] + '</td><td>' + salaries[i] + '</td></tr>';
    }
    tableDisplay += '</tbody>';
    results_table.innerHTML = tableDisplay;
}

