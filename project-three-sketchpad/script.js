//Default Layout:
const control = document.querySelector('.control');
const sketchArea = document.createElement('div');
sketchArea.setAttribute('id','sketchArea');
sketchArea.style.cssText = 'display: flex; flex-wrap: wrap; border: 2px red solid; margin-left: auto; margin-right: auto'
document.body.appendChild(sketchArea);


// User Interface:
 
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

function Grid(squares = 16)
{
  let numOfSquares = squares ** 2;
  let gridSize = squares * 102;
  sketchArea.style.height = gridSize.toString()+'px';
  sketchArea.style.width = gridSize.toString()+'px';

  let cell = [];
  clear();


// Creating Sketch Area:

for(let i = 1; i <= numOfSquares; i++)
{
    cell[i] = document.createElement('div');
    cell[i].classList.add("cell-" + i.toString());
    cell[i].style.cssText = 'width: 100px; height: 100px; border: 0.5px red solid;';
    sketchArea.appendChild(cell[i]);
}

HoverEffect();

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

function clear()
{
    let cells = document.querySelectorAll('div');

    loop: for(let i = 0; i < cells.length; i++)
    {
        if(cells[i] == sketchArea || cells[i] == control)
        {
            continue loop; 
        }

        else
        {
            sketchArea.removeChild(cells[i]);
        }
    }

}