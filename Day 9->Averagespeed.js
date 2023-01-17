function aveSpd(upTime, upSpd, downSpd) {
	let dist = upTime * upSpd / 60 
  let totalDist = 2 * dist
	let downTime = dist / downSpd * 60
	let totalTime = downTime + upTime 
	console.log(totalDist / totalTime * 60); 
}
aveSpd(12,10,30);
