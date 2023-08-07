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

function Evaluation(user = PlayerSelection(), computer = ComputerSelector() )

{
    if (user === "ROCK" && computer === "SCISSORS")
    {
   
        result("user"); 
        return "user won"; 
    }
   
   else if (user === "PAPER" && computer === "ROCK")
    {
    
        result("user");
        return "user won";

    }

    else if (user === "SCISSORS" && computer === "PAPER")
    {
   
        result("user");
         return "user won";
    }

    else if (user === computer) 
    
    {
    
        result("tie");
        return "tie";
    }
    
    else 
    {
    
        result("computer");
        return "computer won";
    }
    
}

function result(result)
{
    var display, para; 

    switch(result)
    {

      case "user":
            display = document.querySelector('.result');
            para = document.createElement('p');
            para.textContent = 'The User Won';
            display.appendChild(para);
            break;

        case "computer":
            display = document.querySelector('.result');
            para = document.createElement('p');
            para.textContent = 'The Computer Won';
            display.appendChild(para);
            break;

        case "tie": 
            display = document.querySelector('.result');
            para = document.createElement('p');
            para.textContent = 'There Was A Tie';
            display.appendChild(para);
            break;
    }
}

function PlayGame()
{
    var user_wins = 0;
    var computer_wins = 0;
    var trys = 1;

    while(trys <= 5)

    {
        console.log(`trial ${trys}`);
       
        let score = Evaluation();
        console.log(`result: ${score}`);
        
        (score === "user won") ?

        user_wins += 1 :

        (score === "computer won") ? 

        computer_wins += 1 : 

       (score === "tie") ?
        
       console.log("There was a tie"):

       console.log("There was a error with PlayGame()")


        trys += 1; 
        
    }

    if(user_wins > computer_wins)
    {
        alert(`The game belongs to the user, winning ${user_wins} games`);
    }
    
    else if (user_wins < computer_wins)
    {
        alert(`The game belongs to the computer, winning ${computer_wins} games`);
    }    
    

    else
    {
        alert(`The game is a draw, user has = ${user_wins} wins and computer has = ${computer_wins} wins`);
    }

    console.log(`The user won: ${user_wins} games`);
    console.log(`The computer won: ${computer_wins} games`);
}


// TOP EXERCISE ADDING UI (AUG 7, 2023).
 
const buttons = document.querySelector('.buttons');

 buttons.addEventListener('click', (e)=> {

    Evaluation(e.target.textContent);

});
































/* Below is an attempt at using the ternary operator in the evaluation function.

The result is inconclusive:

function Evaluation(user = PlayerSelection(), computer = ComputerSelector() )
{


    (user === "ROCK") && (computer === "SCISSORS") ?
   
     alert("The user wins :)"):  

    
    (user === "PAPER") && (computer === "ROCK") ?

        alert("The user wins :)"):

    (user === "SCISSORS") && (computer === "PAPER") ?

        alert("The user wins :)"):

    (user === computer) ?

    alert("There is a tie :)"):

    alert("The computer wins ;)")
 
    return a; // The value of 'a' should state what happened in the evaluation process.
}
    */
