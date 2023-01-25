function damage(damage, speed, time) 
{
    if(damage > 0 && speed > 0 && time === "minute")
    {
        console.log(damage * speed * 60);
    }
    else{
         console.log("invalid");
        }
    if(time === "hour")
    {
        console.log(damage * speed * 3600);
    }
    else if(time === "second")
    {
        console.log(damage * speed);
    }
}
damage(20,-10,"seconds");