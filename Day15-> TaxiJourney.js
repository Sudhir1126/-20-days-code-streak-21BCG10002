function journeyDistance(num) {
	var count;
	if (num === 3)
		{
			count = 1;
			console.log(count);
		}
	else if(num < 2)
		{
			count = 0;
		}
	else
	{
		count = (num - 3)/2;
		console.log(count+1);
	}
	
}
	journeyDistance(9);
