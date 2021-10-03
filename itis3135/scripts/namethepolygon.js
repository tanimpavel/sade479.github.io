const polygons = ["henagon","digon","trigon","tetragon","pentagon","hexagon","heptagon","octagon","enneagon","decagon"];

function validateEntry(entry)
{
    if (isNaN(entry))
    {
        return -1;
    }
    entry = Math.abs(Math.round(entry)); //Rounds and finds absolute value
    if (entry>0 && entry<11)
    {
        return entry;
    }
    else
    {
        return -1;
    }
}

function getShape(entry)
{
    entry--;
    return polygons[entry];
}

function nameThePolygon()
{
    var userEntry = prompt("The Pavel Pelican would like you to enter a number between 0 and 10:");
    while(validateEntry(userEntry) == -1)
    {
        userEntry = prompt("We are sorry but the Pavel Pelican needs you to enter a number between 0 and 10");
    }
    userEntry = validateEntry(userEntry); //Uses validateEntry to make sure entry is rounded and a positive value
    alert("Your polygon is a: " + getShape(userEntry));
}

