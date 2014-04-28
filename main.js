window.onload = function() {

//init all global variables
var playerTotal = 0;
var computerTotal = 0;
var roundNumber = 1;
var slaveCard = document.getElementById('slave');
var citizenCards = document.getElementsByClassName('citizen');
var emperorCard = document.getElementById('emperor');
var play = document.getElementById('play');
var gameWrapper = document.getElementById('gameWrapper');
var endGameText = document.getElementById('endGameText');
var gameText = document.getElementById('gameText');
var endStats = document.getElementById('endStats');
var rules = document.getElementById('rules');
var intro = document.getElementById('introScreen');
var zawa = document.createElement('audio');
zawa.src = 'sound/zawa.mp3';
var draw = document.createElement('audio');
draw.src = 'sound/draw.wav';
var shuffle = document.createElement('audio');
shuffle.src = 'sound/shuffle.wav';
var cheer = document.createElement('audio');
cheer.src = 'sound/cheer.mp3';
var lose = document.createElement('audio');
lose.src = 'sound/pain.mp3';
var pick1;
var compDeck;
var count = 0;
var compNum = 0;
var hide = false;

//decides whether to show the emperor or slave card
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
	if ((roundNumber < 4)) {
		slave = false;
		return slave;
	}
	else if ((roundNumber > 6) && (10 > roundNumber)) {
		slave = false;
		return slave;
	}
	else if (roundNumber > 12) {
		gameEnd();
	} 
	else {
		slave = true;
		return slave;
	}
}	

//wow this function is out of control trash right now
//decides who wins based on which cards are picked, removes citizen cards played, resets hand with makeHand() on w/l
var whoWins = function() {
	if (pick1 == undefined) {
		gameText.innerHTML = 'Pick a card by clicking it!';
		compNum--;
	}
	if (pick1 == 'citizen') {
		citizenCards[count].style.display = 'none';
		count++;
		console.log(count);
	}
	draw.play();
	pick2 = compDeck[compNum];
	compNum++;
	var winner;
	switch (pick1) {
		case 'emperor': 
			if (pick2 == 'slave') {
				gameText.innerHTML ='computer plays ' + pick2 + ' computer wins this round...';
				computerTotal = computerTotal + 3;
				zawa.play();
				endStats.innerHTML = ' You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
				roundNumber++;
				makeHand();
				break;
			}
			gameText.innerHTML = 'computer plays ' + pick2 + ', you win this round!';
			playerTotal++;
			endStats.innerHTML = 'You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
			roundNumber++;
			makeHand();
			break;
						

		case 'slave': 
			if (pick2 == 'emperor') {
				gameText.innerHTML = 'computer plays ' + pick2 + ', you win this round!';
				playerTotal = playerTotal + 3;
				roundNumber++;
				endStats.innerHTML = 'You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
				makeHand();
				break;
			}
			gameText.innerHTML = 'computer plays ' + pick2 + ', computer wins this round...';
			computerTotal++;
			roundNumber++;
			zawa.play();
			endStats.innerHTML = 'You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
			makeHand();
			break;		
		case 'citizen':
			if (pick2 == 'emperor') {
				gameText.innerHTML = 'computer plays ' + pick2 + ', computer wins this round...';
				computerTotal++;
				roundNumber++;
				zawa.play();
				endStats.innerHTML = 'You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
				makeHand();
				break;
			}
			else if (pick2 == 'slave') {
				gameText.innerHTML = 'computer plays ' + pick2 + ', you win this round!';
				roundNumber++;
				playerTotal++;
				endStats.innerHTML = 'You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;				
				makeHand();
				break;
			}
			gameText.innerHTML = 'computer plays ' + pick2 + ', tie, play another card...';
			zawa.play();
			break;			
		}
	pick1 = null;
	resetStyles();
	return;
}

//event listeners for play button, and picking the cards
play.addEventListener('click', function() {
	console.log(whoWins());
})

slaveCard.addEventListener('click', function() {
	pick1 = 'slave';
	this.style.border = '3px solid orange';
	this.style.width = '175px';
	emperorCard.style.border = 'none';
	emperorCard.style.width = '150px';
	for (var i = 0; i < citizenCards.length; i++) {
		citizenCards[i].style.border = 'none';	
		citizenCards[i].style.width = '150px';
	}
})

emperorCard.addEventListener('click', function() {
	pick1 = 'emperor';
	this.style.border = '3px solid orange';
	this.style.width = '175px';
	slaveCard.style.border = 'none';
	slaveCard.style.width = '150px';	
	for (var i = 0; i < citizenCards.length; i++) {
		citizenCards[i].style.border = 'none';	
		citizenCards[i].style.width = '150px';
	}

})

for (var i = 0; i < citizenCards.length; i++) {
	citizenCards[i].addEventListener('click', function() {
		slaveCard.style.border = 'none';
		slaveCard.style.width = '150px';
		emperorCard.style.border = 'none';
		emperorCard.style.width = '150px';
		for (var i = 0; i < citizenCards.length; i++) {
			citizenCards[i].style.border = 'none';	
			citizenCards[i].style.width = '150px';
		}

		pick1 = 'citizen';
		this.style.border = '3px solid orange';
		this.style.width = '175px';
	})
}

rules.addEventListener('click', function() {
	if (hide == true) {
		intro.style.display = 'block';
		rules.innerHTML = 'Hide';
		hide = false;
	}
	else {
		intro.style.display = 'none';
		rules.innerHTML = 'Show';
		hide = true;
	}
})

//resets the style of the cards after they are played
var resetStyles = function() {
	slaveCard.style.border = 'none';
	slaveCard.style.width = '150px';
	emperorCard.style.border = 'none';
	emperorCard.style.width = '150px';
	for (var i = 0; i < citizenCards.length; i++) {
		citizenCards[i].style.border = 'none';	
		citizenCards[i].style.width = '150px';
	}
}


//makes the computers deck depending on if they are the emp or slave and then shuffles the array;

var computerDeck = function() {
	compDeck = new Array(5);
	if (slave == true) {
		compDeck = ['emperor', 'citizen', 'citizen', 'citizen', 'citizen'];
		compDeck.sort(function() { return 0.5 - Math.random() });
		return compDeck;
	}
	else {
		compDeck = ['slave', 'citizen', 'citizen', 'citizen', 'citizen'];
		compDeck.sort(function() { return 0.5 - Math.random() });
		return compDeck;
	}
}


//makes hand with 4 citizens and either slave or emperor depending on the boolean value of slave
var makeHand = function() {
	shuffle.play();
	whichRound();
	slaveOrEmperor();
	computerDeck();
	count = 0;
	compNum = 0;
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

	//displays end of game screen and removes game
var gameEnd = function() {
	endGameText.style.display = 'inline';
	gameWrapper.style.display = 'none';
	if (playerTotal < computerTotal) {
		endGameText.innerHTML = 'The enemy wins with a score of ' + computerTotal + '...';
		lose.play();
	}
	else if (playerTotal == computerTotal) {
		endGameText.innerHTML = 'you tie with ' + playerTotal + '...';
		zawa.play();

	}
	else {
		endGameText.innerHTML = 'You win with a score of ' + playerTotal + '!';
		cheer.play();
	}
}


//first round init
endStats.innerHTML = ' You: ' + playerTotal + ' | ' + 'Enemy: ' + computerTotal;
slaveOrEmperor();
whichRound();
makeHand();

};




