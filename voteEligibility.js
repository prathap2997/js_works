function canvote(age)
{
    var result = " " ;
    if (age>=18)
    {
        result = "allowed";
    }
    else
    {
        result = "Not allowed";
    }
    return result;
}

function checkrank(mark)
{
    var result = "" ;
    if (mark>=35)
    {
        result = "pass";
    }
    else
    {
        result = "fail";
    }
    return result;
}
