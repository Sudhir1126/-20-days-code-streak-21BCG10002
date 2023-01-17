function factorial(n)
{
    let fact = 1;
    for(i = 1; i <= n; i++)
    {
        fact = fact * i;
    }
    console.log(fact);
}
factorial(7);
