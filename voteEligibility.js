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