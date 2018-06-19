'use strict';

let score = 0;
let countHit = 0;

let shipArea1 = Math.floor(Math.random() * 8);
let shipArea2 = shipArea1 + 1;
let shipArea3 = shipArea1 + 2;

let sector1 = document.getElementById("sector-1-1");
let sector2 = document.getElementById("sector-1-2");
let sector3 = document.getElementById("sector-1-3");
let sector4 = document.getElementById("sector-1-4");
let sector5 = document.getElementById("sector-1-5");
let sector6 = document.getElementById("sector-1-6");
let sector7 = document.getElementById("sector-1-7");
let sector8 = document.getElementById("sector-1-8");
let sector9 = document.getElementById("sector-1-9");
let sector10 = document.getElementById("sector-1-10");

let scoreWin = document.getElementById("score");
let messageWin = document.getElementById("message");

function checkAttribute(sectorX) {
	return sectorX.getAttribute('style');
}

function gameOn(sector, x) {
	sector.addEventListener('click', () => {
		if (checkAttribute(sector) === null && checkAttribute(messageWin) === null) {
			score++;

			if (countHit < 3) {
				if (shipArea1 === x || shipArea2 === x || shipArea3 === x) {
					sector.setAttribute('style', 'background-color: red;');
					countHit++;
					
					if (countHit === 3 && score == 3) {
						messageWin.innerHTML = "Perfect!!!";
						messageWin.setAttribute('style', 'display: block');
					} else if (countHit === 3 && score <= 5 && score > 3) {
						messageWin.innerHTML = "You win!!!";
						messageWin.setAttribute('style', 'display: block');
					} else if (countHit === 3 && score > 5 && score <= 9) {
						messageWin.innerHTML = "You loose!!!";
						messageWin.setAttribute('style', 'display: block; background-color: red;');
					} else if (countHit === 3 && score > 9) {
						messageWin.innerHTML = "Fuuu, looser!!!";
						messageWin.setAttribute('style', 'display: block; background-color: red;');
					}
				} else {
					sector.setAttribute('style', 'background-color: yellow;');
				}
			}

			scoreWin.innerHTML = "You score is: " + score;
		}
	});
}

gameOn(sector1, 0);
gameOn(sector2, 1);
gameOn(sector3, 2);
gameOn(sector4, 3);
gameOn(sector5, 4);
gameOn(sector6, 5);
gameOn(sector7, 6);
gameOn(sector8, 7);
gameOn(sector9, 8);
gameOn(sector10, 9);