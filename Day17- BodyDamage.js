function damage(damage, speed, time) 
{
   if(damage > 0 && speed > 0)
{
   if(time === "minute")
  {
    console.log(damage * speed * 60);
  }
  else if(time === "hour")
  {
    console.log(damage * speed * 3600);
  }
  else if(time === "second")
  {
    console.log(damage * speed);
  }
  else
  {
    console.log("invalid");
  }
}
}
damage(20,100,"minute");