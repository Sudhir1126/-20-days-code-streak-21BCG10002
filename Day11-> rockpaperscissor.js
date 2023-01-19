function rockpaperscissors(p1,p2)
{
    if(p1===p2)

    console.log("It's a draw");

    else if ((p1==="Rock" && p2==="Scissors") || (p1==="Paper" && p2==="Rock") || (p1==="Scissors" && p2==="Paper"))
    {
        console.log("The winner is p1");
    }
    else
        console.log("The winner is p2");
}
rockpaperscissors("Rock", "Paper");
