let rockBtn=document.querySelector("#rock")
let paperBtn=document.querySelector("#paper")
let scissorsBtn=document.querySelector("#scissors")
let result=document.querySelector("#result")
let playerScore=document.querySelector("#playerscore")
let computerScore=document.querySelector("#computerscore")
let computerChoiceField=document.querySelector("#computerChoice")
let playerChoiceField=document.querySelector("#playerChoice")
let resetBtn=document.querySelector("#reset")
let welcomeText=document.querySelector("h1")


resetBtn.onclick=()=>{
    playerChoiceField.textContent=""
    result.textContent=""
    computerScore.textContent="0"
    playerScore.textContent="0"
    computerChoiceField.textContent=""
    welcomeText.textContent="WELCOME"
}

rockBtn.onclick = () => {
    playerChoiceField.textContent="You chose rock."
    playGame(getComputerChoice(),"rock")
};

paperBtn.onclick = () => {
    playGame(getComputerChoice(),"paper")
    playerChoiceField.textContent="You chose paper."
}


scissorsBtn.onclick = () => {
    playGame(getComputerChoice(),"scissors");
    playerChoiceField.textContent="You chose scissors."
}



function getComputerChoice(){
    let possibleChoices=["rock","paper","scissors"]
    let randomIndex=Math.floor(Math.random() * 3);
    let finalChoice=possibleChoices[randomIndex]
    computerChoiceField.textContent=`The mighty computer chose ${finalChoice}!`
    return finalChoice
}

function playGame(Computer,Player){
    if (Computer=="rock" && Player=="scissors" || 
    Computer=="scissors" && Player=="paper" || 
    Computer=="paper" && Player=="rock")
    {
        console.log("Computer Wins!")
        welcomeText.textContent="DAMN!"
        result.textContent="Computer Wins!"
        computerScore.textContent=Number(computerScore.textContent)+1
    }

    else if(Computer==Player)
    {
        result.textContent="It's a draw"
        welcomeText.textContent="Not Good / Not Bad"
    }


    else{
        console.log("Player Wins!")
        welcomeText.textContent="YES BABY"
        result.textContent="YOU WON"
        playerScore.textContent=Number(playerScore.textContent)+1
    }
}

function playRound(){
   for (i=0;i<1;i++){
      playGame(getComputerChoice(),playerChoice)
   }
}

