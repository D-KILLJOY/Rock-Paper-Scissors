const compScore = document.querySelector(".comp-score");
const compImg = document.querySelector(".comp-img-con");
const compImgName = document.querySelector(".comp-image-name");

const message = document.querySelector(".stat-message");

const playerScore = document.querySelector(".player-score");
const playerImg = document.querySelector(".player-img-con");
const playerImgName = document.querySelector(".player-image-name");
const playerChoice = document.querySelectorAll(".btn");
const pName = document.querySelector(".player-name");

let choice = "";
let compChoices = ["rock", "paper", "scissors"];
let computerChoice = "";
let stat = "";
let cScore = 0;
let pScore = 0;

let playerName = prompt(
	"INPUT YOUR NAME \n name should be at least 2 characters long and should not start with a space"
);

if (playerName == null) {
	alert("You selected CANCEL \n You will be addressed as PLAYER");
	playerName = "player";
	pName.textContent = playerName;
} else if (playerName.length < 1 || playerName.startsWith(" ")) {
	alert("You didn't input a valid name \n You will be addressed as PLAYER");
	playerName = "player";
	pName.textContent = playerName;
} else if (playerName.length > 15) {
	alert("Name too long \n You will be addressed as PLAYER");
	playerName = "player";
	pName.textContent = playerName;
} else {
	pName.textContent = playerName;
}

for (let i = 0; i < playerChoice.length; i++) {
	playerChoice[i].addEventListener("click", addChoice);

	function addChoice() {
		choice = playerChoice[i].getAttribute("choice");
		playerImgName.textContent = choice;
		playerImg.innerHTML = `<img src="./images/${choice}.png"/>`;
		addCompChoice();
	}
}

function addCompChoice() {
	let num = Math.floor(Math.random() * 3);
	computerChoice = compChoices[num];
	compImgName.textContent = computerChoice;
	compImg.innerHTML = `<img src="./images/${computerChoice}.png"/>`;
	validate();
}

function validate() {
	if (choice === computerChoice) {
		stat = "draw";
		message.style.color = "gray";
	} else if (choice === "rock") {
		if (computerChoice === "paper") {
			stat = "computer wins";
			message.style.color = "#f00";
			cScore++;
		} else {
			stat = `${playerName} wins`;
			message.style.color = "green";
			pScore++;
		}
	} else if (choice === "paper") {
		if (computerChoice === "scissors") {
			stat = "computer wins";
			message.style.color = "#f00";

			cScore++;
		} else {
			stat = `${playerName} wins`;
			message.style.color = "green";
			pScore++;
		}
	} else if (choice === "scissors") {
		if (computerChoice === "rock") {
			stat = "computer wins";
			message.style.color = "#f00";
			cScore++;
		} else {
			stat = `${playerName} wins`;
			message.style.color = "green";
			pScore++;
		}
	}
	message.textContent = stat;
	playerScore.textContent = pScore;
	compScore.textContent = cScore;
}
