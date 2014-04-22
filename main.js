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

var computerPickCard = function() {
	var pick = Math.round(Math.random()*4);
 	if (pick <4) {
 		return 'Citizen';
 	}
 	else {
 		return 'Emperor';
 	}
}

// var round = function() {
// 	var compPick = computerPickCard();

// idea: emperor = 1, citizen = 2 slave = -1,
// if pick = 0 then slave and emp so slave wins 
// if pick = 3 then emperor beats citizen
// else pick = 1 and citizen beats slave



var whoWins = function() {
	var pick1 = 'Slave';
	var pick2 = computerPickCard();
	console.log(pick2);
	var winner;
	switch (pick1) {
		case 'Emperor': 
			if (pick2 == 'Slave') {
				winner = 2;
				break;
			}
			winner = 1;
			break;
						

		case 'Slave': 
			if (pick2 == 'Emperor') {
				winner = 1;
				break;
			}
			winner = 2;
			break;		
		case 'Citizen':
			if (pick2 == 'Emperor') {
				winner = 2;
				break;
			}
			winner = 1;
			break;			
		}
	return winner;
}

console.log(whoWins());
