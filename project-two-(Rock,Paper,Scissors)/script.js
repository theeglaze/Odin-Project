function ComputerSelector()
{
    //Array of potential choices available to the computer. 
    let choice = 
    [
        'ROCK',
        'PAPER',
        'SCISSORS',
    ]

    let computer = choice[Math.floor(Math.random()*choice.length)]; // Allows for the random selection of a string value from the array. 

    return computer;
}

function PlayerSelection ()
{
    let user = prompt("Select Rock, Paper or Scissors" );

    user = user.toUpperCase(); // Converts the input to all upper-case letters. Causes function to execute with non case-sensitive inputs.

    if(user === "ROCK" || user === "PAPER" || user === "SCISSORS")

    {
        return user;
    }

    else
    
    {
        alert("Invalid Input!");
        PlayerSelection(); // Recursive Function - used to loop application in the event of an invalid input.

    }
}


// Last Updated: Aug 9, 2023. 

// Evaluates who wins a particular round:

function Evaluation(user = PlayerSelection(), computer = ComputerSelector() )

{
    if (user === "ROCK" && computer === "SCISSORS")
    {
   
        roundWinner("user"); 
        return "1"; 
    }
   
   else if (user === "PAPER" && computer === "ROCK")
    {
    
        roundWinner("user");
        return "1";

    }

    else if (user === "SCISSORS" && computer === "PAPER")
    {
   
        roundWinner("user");
         return "1";
    }

    else if (user === computer) 
    
    {
    
        roundWinner("tie");
        return "3";
    }
    
    else 
    {
    
        roundWinner("computer");
        return "2";
    }
    
}

//Prints winner of Round to Screen: 

async function roundWinner(winner)
{
    var victor, para; 

    switch(winner)
    {

      case "user":
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'The User Won The Round';
            victor.appendChild(para);
            break;

        case "computer":
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'The Computer Won The Round';
            victor.appendChild(para);
            break;

        case "tie": 
            victor = document.querySelector('.victor');
            para = document.createElement('p');
            para.textContent = 'There Was A Tie';
            victor.appendChild(para);
            break;
    }

     await delay(1250);
     victor.removeChild(para);
}


// TOP EXERCISE ADDING UI (AUG 7, 2023). 

// Button Event Listen / Handler: 

const buttons = document.querySelector('.buttons');

 buttons.addEventListener('click', (e)=> {

    let winner = Evaluation(e.target.textContent);

    count(winner); 
    score();
});

//Global Variables:

var playerScore = 0, computerScore = 0;

let playerTally = document.querySelector('.playerIcon .score')
let computerTally = document.querySelector('.computerIcon .score')


// Used to keep Score of User & Computer Wins:

function count(winner)
{
    if(winner === '1')
    {
        playerScore += 1;
        playerTally.innerHTML = playerScore;
    }

    else if (winner === '2')
    {
        computerScore += 1;
        computerTally.innerHTML = computerScore;
    }

    else if (winner === '3')
    {
        console.log('There was a Tie')
    }

    else 
    {
        console.log('Error')
    }
    
}

//To be Completed 

async function score()
{
await delay(2000);

    if(playerScore === 5)
    {
       victor = document.querySelector('.victor');
        para = document.createElement('p');
        game = document.createElement('p');
        game.textContent = 'Game Over !!!'
        para.textContent = 'User Won';
        victor.appendChild(game);
        await delay(1500);
        victor.appendChild(para);
        clear();
    }

    else if (computerScore === 5)
    {
        victor = document.querySelector('.victor');
        para = document.createElement('p');
        game = document.createElement('p');
        game.textContent = 'Game Over !!!'
        para.textContent = 'Computer Won';
        victor.appendChild(game);
        await delay(1500);
        victor.appendChild(para);
        clear();
    }

    async function clear()
    {
        playerScore = 0;
        computerScore = 0;
        await delay(2000)
        victor.removeChild(game);
        victor.removeChild(para);
        //playerTally.innerHTML = playerScore;
        //computerTally.innerHTML = computerScore;
    }

    
}

// Used to delay the execution of the Script:
 
function delay(ms)
{
    return new Promise(resolve => setTimeout (resolve, ms));
}