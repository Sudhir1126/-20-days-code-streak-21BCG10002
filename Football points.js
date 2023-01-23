function footballPoints(wins, draws, losses) {
	const pointSystem = {
		wins: 3,
		draws: 1,
		losses: 0
	};
	console.log((pointSystem.wins * wins) + (pointSystem.draws * draws) + (pointSystem.losses * losses));
};
footballPoints(5,2,3);