// var playerTotal = 0;
// var computerTotal = 0;

// var makeHand = function() {
// 	if (slave == false) {
// 		var deck = new Array('Emperor', 'Citizen', 'Citizen', 'Citizen', 'Citizen');
// 	}
// 	else {
// 		var deck = new Array('Slave', 'Citizen', 'Citizen', 'Citizen', 'Citizen');
// 	}
// 	return deck;
// }

// var firstRound = function() {
// 	slave == false;
// 	player.makeHand();
// 	slave == true;
// 	computer.makeHand();

// }

// var pickCard = function() {

// }

// var computerPickCard = function() {
// 	var pick = Math.round(Math.random()*4);
// 	if (pick <4) {
// 		return 'Citizen';
// 	}
// 	else {
// 		return 'Emperor';
// 	}

// }

// var round = function() {
// 	var compPick = computerPickCard();

// idea: emperor = 1, citizen = 2 slave = -1,
// if pick = 0 then slave and emp so slave wins 
// if pick = 3 then emperor beats citizen
// else pick = 1 and citizen beats slave


var whoWins = function() {
	var pick1 = 'Slave';
	var pick2 = 'Citizen';
	switch (pick1, pick2) {
		case pick1 == 'Emperor': 
			if (pick2 == 'Slave') {
				return 1;
			}
			return 2;			

		case pick1 == 'Slave': 
			if (pick2 == 'Emperor') {
				return 3;
			}
			return 4;			
		case pick1 == 'Citizen':
			if (pick2 == 'Emperor') {
				return 5;
			}
			return 6;
			
	}
	console.log(whoWins());
}