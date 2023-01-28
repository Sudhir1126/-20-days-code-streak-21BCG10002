function validatePIN(pin) {
	if (pin == "") {
		console.log(false);
	}
	if (pin.match(/\d/g).length == 4) {
		console.log(true);
	}
	if (pin.match(/\d/g).length == 6) {
		console.log(true);
}
	console.log(false);
}
validatePIN("@134");
