function getComputerChoice(){
    let possibleChoices=["rock","paper","scissors"]
    let randomIndex=Math.floor(Math.random() * 3);
    let finalChoice=possibleChoices[randomIndex]
    return finalChoice


}

console.log(getComputerChoice())

function getPlayerChoice(){
    let message="Please type Rock,Paper or Scissors"
    let choice=prompt(message)
    return choice
}

function playGame(Computer,Player){
    let playerChoice=Player.toLowerCase()
    if (playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors"){
        window.alert("Invalid Input")
        return
    }

    if (Computer=="rock" && playerChoice=="scissors" || Computer=="scissors" && playerChoice=="paper" || Computer=="paper" && playerChoice=="rock"){
        console.log("Computer Wins")
        window.alert("Computer Wins")
        return
    }

    if(Computer==playerChoice){
        window.alert("DRAW")
        return
    }


    else{
        console.log("Player Wins")
        window.alert("Player Wins")
        return
    }
}

function playRound(){
    for (i=0;i<5;i++){
        playGame(getComputerChoice(),getPlayerChoice())
    }
}

playRound()
