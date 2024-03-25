function getComputerChoice(){
    let possibleChoices=["rock","paper","scissors"]
    let randomIndex=Math.floor(Math.random() * 3);
    let finalChoice=possibleChoices[randomIndex]
    return finalChoice
}

//console.log(getComputerChoice())

function getPlayerChoice(){
    let message="Please type Rock,Paper or Scissors"
    let choice=prompt(message)
    if (!choice){
        return 
    }
    let playerChoice=choice.toLowerCase()
    if (playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors"){
        window.alert("Invalid Input")
        return getPlayerChoice()
    }
    
    return playerChoice
}

function playGame(Computer,Player){
    
    if (!Player){
        return
    }
    

    if (Computer=="rock" && Player=="scissors" || 
    Computer=="scissors" && Player=="paper" || 
    Computer=="paper" && Player=="rock")
    {
        console.log("Computer Wins!")
        window.alert("Computer Wins!")
    }

    else if(Computer==Player)
    {
        window.alert("It's a draw!")
    }


    else{
        console.log("Player Wins!")
        window.alert("Player Wins!")
    }
}

function playRound(){
    for (i=0;i<5;i++){
        playGame(getComputerChoice(),getPlayerChoice())
    }
}

playRound()
