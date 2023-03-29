let input=confirm("Do you want to play scissor paper");
if(confirm){
    let playerChoice = prompt("enter your choice");
    if(playerChoice)
    {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne==="rock"|| playerOne==="scissor"|| playerOne==="paper"){
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = computerChoice===1 ? "rock" : computerChoice===2 ? "paper" : "scissor";
            let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
        }
        else{
            alert("wrong input");
        }
    }
    else{
        alert("I guess you changed mind");
    }
}
else{
    alert("Ok lets play another time");
}
