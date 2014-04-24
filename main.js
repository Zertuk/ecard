window.onload = function() {

var playerTotal = 0;
var computerTotal = 0;
var slave = true;
var slaveCard = document.getElementById('slave');
var citizenCards = document.getElementsByClassName('citizen');
var emperorCard = document.getElementById('emperor');
var play = document.getElementById('play');

if (slave == true) {
	slaveCard.style.display = 'inline';
	emperorCard.style.display = 'none';
}

else {
	slaveCard.style.display = 'none';
	emperorCard.style.display = 'inline';
}	

var whoWins = function() {
	// var playerDeck = makeHand();
	// var pick1 = playerDeck[0];
	i = 0;
	if (pick1 == 'citizen') {
		citizenCards[i].style.display = 'none';
		i++;
		console.log(i);
	}
	console.log(pick1);
	var pick2 = computerPickCard();
	console.log(pick2);
	var winner;
	switch (pick1) {
		case 'emperor': 
			if (pick2 == 'slave') {
				winner = 'computer wins this round';
				computerTotal++;
				break;
			}
			winner = 'you win this round';
			playerTotal++;
			break;
						

		case 'slave': 
			if (pick2 == 'emperor') {
				winner = 'you win this round';
				playerTotal++;
				break;
			}
			winner = 'computer wins this round';
			computerTotal++;
			break;		
		case 'citizen':
			if (pick2 == 'emperor') {
				winner = 'computer wins this round';
				computerTotal++;
				break;
			}
			else if (pick1 == pick2) {
				winner = 'tie, play another card';
				break;
			}
			winner = 'you win this round';
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
	this.style.border = '3px solid orange';
	this.style.width = '200px';
})

emperorCard.addEventListener('click', function() {
	pick1 = 'emperor';
	this.style.border = '3px solid orange';
	this.style.width = '200px';

})

for (var i = 0; i < citizenCards.length; i++) {
	citizenCards[i].addEventListener('click', function() {
		pick1 = 'citizen';
		this.style.border = '3px solid orange';
		this.style.width = '200px';
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



