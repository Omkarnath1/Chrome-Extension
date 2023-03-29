

// let DB1 = document.getElementById("DB");
// let count1 = document.getElementById("count");          
// let count=0;
// function increment() {
//     count += 1;
//     count1.innerText = count;
// }
// function save(){ 
//     let countStr = count + " - ";
//     DB1.textContent += countStr;
//     count=0;
//     count1.textContent = 0;

// }

// 22 18 65 59 4 1114


// function name(){
// let name = "Linda";
// let greeting = "Hi there";
// console.log(greeting +", " + name + "!");
// }
// name();

// function error(){
//     document.getElementById("error").textContent += "error";
// }

// let num1 = 8;
// let num2 = 3;

// document.getElementById("num1-el").innerText = num1;
// document.getElementById("num2-el").innerText = num2;
// let sum = document.getElementById("sum-el");


// function Add(){
//      let ans = num1 + num2;
//      sum.innerText += ans;
// }
// function Subtract(){
//     let ans = num1 - num2;
//     sum.innerText = ans;
// }
// function Divide(){
//     let ans = num1 / num2;
//     sum.innerText += ans;
// }
// function Multiply(){
//     let ans = num1 * num2;
//     sum.innerText += ans;
// }


// let sum = 0;
// let hasBlackJack = false;
// let alive = true;
// let message = "";
// let messageE1 = document.getElementById("message-el"); 
// let sumE1 = document.getElementById("sum-el");
// // document.querySelector("#sum-el");
// let cardE1 = document.getElementById("card-el");
// let cards = [];
// let isAlive = true ;
// let player={
//     name : "Per",
//     chips : 145
// }

// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;


// function getRanmdomCard(){
//      let number = Math.floor(Math.random()*13)+1;
//      if(number===1){
//         return 11;
//      }
//      else if(number <= 10){
//         return number;
//      }
//      else{
//         return 10;
//      }
// }

// function start(){
//     if(sum <= 20){
//         message = "Do you want new Card?";
//     }
//     else if(sum === 21){
//         hasBlackJack = true;
//         message="You Won!!!"
//     }
//     else{
//         isAlive = false;
//         message= "You lose!!!"
//     }
//     messageE1.textContent = message;
//     sumE1.textContent = "Sum : " + sum;
   
//     cardE1.textContent = "Cards : " ;
//     for(let i=0;i<cards.length;i++){
//         cardE1.textContent += cards[i] + " "; 
//     }
// }

// function drawCard(){
//     if(isAlive === true && hasBlackJack===false){
//     let newCard = getRanmdomCard();
//     cards.push(newCard);
//     sum += newCard;
//     start();
//     }
// }

// function startGame(){
//     isAlive = true;
//     let firstCard = getRanmdomCard();
//     let secondCard = getRanmdomCard();
//      sum = firstCard + secondCard;
//     cards = [firstCard, secondCard];
//     start();
// }




let hands = ["rock" , "paper" , "scissor"];

function randomNumber(){
    console.log(hands[Math.floor(Math.random() * 3)]);
}
randomNumber();













