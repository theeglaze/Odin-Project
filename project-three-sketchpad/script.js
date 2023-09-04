//Global Variables:

let sketchArea = document.querySelector('.sketchArea');

// User Interface :
//(Last Update Aug 28, 2023.)


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

//Displays default slider value:
output.innerHTML = slider.value;

// Update slider value:

slider.oninput = function(){
    let squares = this.value;
    
    output.innerHTML = this.value;
   Grid(squares)
}

/*Building Sketch Area*/


function Grid(squares)
{
  let numOfSquares = ~~squares;
  let numOfCells = numOfSquares ** 2;
  let squareSize = ((600 / numOfSquares).toFixed(1)).toString();
  console.log(squareSize);

  clear();

// Creating Sketch Area:

  /*  let adjustSketchArea = (numOfCells * 0.5) + 600;
    sketchArea.style.width = adjustSketchArea.toString() + 'px';
    sketchArea.style.height = adjustSketchArea.toString() + 'px';
    console.log(sketchArea.width) */

   
    for(let i = 1; i <= numOfCells ; i++)
    {
    cell = document.createElement('div');
    cell.classList.add("cell-" + i.toString());
    cell.style.width = squareSize.toString() + 'px';
    cell.style.height = squareSize.toString() + 'px';
    cell.style.border = '0.5px red solid';
    //cell.style.borderBottom = '0.5px red solid';
    sketchArea.appendChild(cell);
    }


//HoverEffect();

}


//Adds color to grid via hovering over elements:

function HoverEffect()
{

let blocks = document.querySelectorAll('div');

blocks.forEach((block) =>
{
    block.addEventListener('mouseover', (event) => Highlight(event, block))
}
)


function Highlight(event,block)

{
    if(block == sketchArea || block == control)
    {
        console.log("You are outside the sketch area")
    }

    else 
    {
        block.classList.add('hover')
        console.log(event.target);
        event.stopPropagation();
    }
}

}


// Removes previous square cells when the user resizes the grid:

// Rework Clear function: Aug
function clear()
{
    let cells = sketchArea.querySelectorAll('div');

    loop: for(let i = 0; i < cells.length; i++)
    {
            sketchArea.removeChild(cells[i]);
        
    }

}


/*Default Layout:
const control = document.querySelector('.control');
const sketchArea = document.createElement('div');
sketchArea.setAttribute('id','sketchArea');
sketchArea.style.cssText = 'display: flex; flex-wrap: wrap; border: 2px red solid; margin-left: auto; margin-right: auto'
document.body.appendChild(sketchArea);



 
let sizeGrid = document.querySelector('.sizeGrid');

sizeGrid.addEventListener('click',question);


// Creating Grid: 

function question()
{
    let squares = + prompt("What are the number of squares per side: ");

    console.log(typeof(squares));
    console.log(squares);
    if( isNaN(squares))
    {
        question();
    }

    else
    {

        if(squares > 100)
        {
            alert("Please enter a smaller amount of squares");
            question();
        }
        
        else
        {
        Grid(squares);
        } 
    }
}

}*/
