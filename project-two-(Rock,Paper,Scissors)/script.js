function ComputerSelector()
{
    //Array of potential choices available to the computer. 
    let choice = 
    [
        'Rock',
        'Paper',
        'Scissors',
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

