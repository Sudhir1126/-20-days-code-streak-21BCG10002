function progressDays(runs) {
	var days=0;
	for(i =1; i<runs.length; i++){
		if(runs[i]>runs[i-1]){
			days++;
		} 
	}
	console.log(days);
}
progressDays([2,3,4,6]);
