window.onload = function() {

var playerTotal = 0;
var computerTotal = 0;
var count = 0;
var roundNumber = 1;
var slaveCard = document.getElementById('slave');
var citizenCards = document.getElementsByClassName('citizen');
var emperorCard = document.getElementById('emperor');
var play = document.getElementById('play');


var slaveOrEmperor = function() {
	if (slave == true) {
		slaveCard.style.display = 'inline';
		emperorCard.style.display = 'none';
	}
	else {
		slaveCard.style.display = 'none';
		emperorCard.style.display = 'inline';
	}
}

//changes value of slave based on round, 1-3 & 7-9 emperor, 4-6 & 10-12 slave
var whichRound = function() {
	console.log(roundNumber);
	if ((roundNumber < 4) || (6 < roundNumber < 10)) {
		slave = false;
		return slave;
	}
		slave = true;
		return slave;
	
}	


//decides who wins based on which cards are picked, removes citizen cards played, resets hand with makeHand() on w/l
var whoWins = function() {
	// var playerDeck = makeHand();
	// var pick1 = playerDeck[0];
	
	if (pick1 == 'citizen') {
		citizenCards[count].style.display = 'none';
		count++;
		console.log(count);
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
				roundNumber++;
				makeHand();
				break;
			}
			winner = 'you win this round';
			playerTotal++;
			roundNumber++;
			makeHand();
			break;
						

		case 'slave': 
			if (pick2 == 'emperor') {
				winner = 'you win this round';
				playerTotal++;
				roundNumber++;
				makeHand();
				break;
			}
			winner = 'computer wins this round';
			computerTotal++;
			roundNumber++;
			makeHand();
			break;		
		case 'citizen':
			if (pick2 == 'emperor') {
				winner = 'computer wins this round';
				computerTotal++;
				roundNumber++;
				makeHand();
				break;
			}
			else if (pick1 == pick2) {
				winner = 'tie, play another card';
				break;
			}
			winner = 'you win this round';
			roundNumber++;
			playerTotal++;
			makeHand();
			break;			
		}
	return winner;
}

slaveOrEmperor();
whichRound();


//event listeners for play button, and picking the cards
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


//makes hand with 4 citizens and either slave or emperor depending on the boolean value of slave
var makeHand = function() {
	whichRound();
	slaveOrEmperor();
	console.log(slave);
	count = 0;
 	if (slave == true) {
 		slaveCard.style.display = 'inline';
 		for (var i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	else {
 		emperorCard.style.display = 'inline';
 		for (var i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	return;
	}
}




//from here on is temp stuff/in progress stuff

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



