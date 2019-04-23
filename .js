//# rockPaperScissors
//game
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput ==='rock'||userInput === 'paper'||userInput === 'scissors') {
  return userInput;
} else {
  console.log('error');
}
};

const getComputerChoice = () =>{
compInput = Math.floor(Math.random()*3);
  switch (compInput) {
  case 0:
  return 'rock';
    break;
  case 1:
   return 'paper';
  case 2:
  return 'scissors';
}
};

const determineWinner = (userChoice,computerChoice) => {

  if (userChoice === computerChoice) {
    return 'its a tie';
  } 
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'you lose';
     } else {
       return 'you win'; 
     }
   }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'you lose';
     } else {
       return 'you win'; 
     }
   }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'you lose';
     } else {
       return 'you win'; 
     }
   }
};

const playGame = () =>{
  const useChoice = getUserChoice ('paper');
  const compChoice = getComputerChoice();
  console.log ('You threw:' + useChoice);
  console.log ('The computer threw:' + compChoice);
  console.log (determineWinner(useChoice, compChoice));
};
playGame ();
