function acceptMovie(age, isSupervised) {
	if (age >= 15){
		console.log(true);
	}
	else if (age < 15 ){
		if (isSupervised == true)
		{
			console.log(true);
		}else
		{
			console.log(false);
		}
	}
}
acceptMovie(16,false);