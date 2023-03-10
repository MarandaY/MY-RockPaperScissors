const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //begin playing the match
    const playMatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            })
        })

        //computer choices
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const compNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[compNumber];

                

                setTimeout(() =>{
                //comparing hands
                compareHand(this.textContent, computerChoice);

                //update images
                playerHand.src = `./pictures/${this.textContent}.png`;
                compHand.src = `./pictures/${computerChoice}.png`

                }, 2000)
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                compHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };

    //score updater
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //checking the winner
    const compareHand = (playerChoice, computerChoice)=> {
        //updating the header text
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie.";
            return;
        }
        //checking for rock choice
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "The Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "The Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }

        //checking for paper choice
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "The Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "The Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }

        //checking for scissors choice
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "The Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "The Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
    }

//calling the inner functions
    startGame();
    playMatch();
    updateScore();
};

//starting the game function :)
game();