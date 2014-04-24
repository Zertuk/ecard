window.onload = function() {

var playerTotal = 0;
var computerTotal = 0;
var slave = true;
var slaveCard = document.getElementById('slave');
var citizenCards = document.getElementsByClassName('citizen');
var play = document.getElementById('play');

var whoWins = function() {
	// var playerDeck = makeHand();
	// var pick1 = playerDeck[0];
	console.log(pick1);
	var pick2 = computerPickCard();
	console.log(pick2);
	var winner;
	switch (pick1) {
		case 'emperor': 
			if (pick2 == 'slave') {
				winner = 2;
				computerTotal++;
				break;
			}
			winner = 1;
			playerTotal++;
			break;
						

		case 'slave': 
			if (pick2 == 'emperor') {
				winner = 1;
				playerTotal++;
				break;
			}
			winner = 2;
			computerTotal++;
			break;		
		case 'citizen':
			if (pick2 == 'emperor') {
				winner = 2;
				computerTotal++;
				break;
			}
			winner = 1;
			playerTotal++;
			break;			
		}
	return winner;
}


play.addEventListener('click', function() {
	console.log(whoWins());
})

slaveCard.addEventListener('click', function() {
	pick1 = 'slave';
})

for (var i = 0; i < citizenCards.length; i++) {
	citizenCards[i].addEventListener('click', function() {
		pick1 = 'citizen';
	})
}

var makeHand = function() {
 	if (slave == false) {
 		var deck = new Array('emperor', 'citizen', 'citizen', 'citizen', 'citizen');
 	}
 	else {
 		var deck = new Array('slave', 'citizen', 'citizen', 'citizen', 'citizen');
 	}
 	return deck;
}
}

// var pickCard = function() {
// 	var newDeck = makeHand();
// 	console.log(newDeck);
// }

// pickCard();

// console.log(Math.round(Math.random()*4));

//var firstRound = function() {
//	slave == false;
// 	player.makeHand();
//  slave == true;
// 	computer.makeHand();
//}

// var pickCard = function() {

// }'





var computerPickCard = function() {
	var pick = Math.round(Math.random()*4);
 	if (pick < 4) {
 		return 'citizen';
 	}
 	else {
 		return 'emperor';
 	}
}


// var cards = get.ElementByTagName('cards');
// cards.addEventListener('click', function() {
// 	var emperor = document.getElementById('emperor');
// 	var citizen = document.getElementById('citizen');
// 	var slave = document.getElementById('slave');
// 	if (slave == true) {
// 		playerCard = 'slave';
// 	}
// 	else if (citizen == true) {
// 		playerCard = 'citizen';
// 	}
// 	else {
// 		playerCard = 'emperor'
// 	}
// }

// }
// var round = function() {

// }

// idea: emperor = 1, citizen = 2 slave = -1,
// if pick = 0 then slave and emp so slave wins 
// if pick = 3 then emperor beats citizen
// else pick = 1 and citizen beats slave



