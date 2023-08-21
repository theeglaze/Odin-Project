//Default Layout:

const sketchArea = document.createElement('div');
sketchArea.setAttribute('id','sketchArea');
sketchArea.style.cssText = 'display: flex; width: 1600px; height: 1600px; flex-wrap: wrap; border: 2px red solid; '
document.body.appendChild(sketchArea);


// User Interface:
 
let sizeGrid = document.querySelector('.sizeGrid');

sizeGrid.addEventListener('click',question);


// Creating Grid: 

function question()
{
    let squares = prompt("What are the number of squares per side: ");
    Grid(squares);
}


function Grid(gridSize = 16)
{
  gridSize *= 100;
  sketchArea.style.height = gridSize.toString()+'px';
  sketchArea.style.width = gridSize.toString()+'px';

  let cell = [];

// Creating Sketch Area:

/* Aug 21, 2023 - Under Construction:

Previous <divs> still exist after grid is resized, however, drawing application is functional. 

*/

for(let i = 1; i <= gridSize; i++)
{
    cell[i] = document.createElement('div');
    cell[i].classList.add("cell-" + i.toString());
    cell[i].style.cssText = 'width: 100px; height: 100px;';
    sketchArea.appendChild(cell[i]);
}

HoverEffect();

}

//Hover Effect:

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
    if(block == sketchArea)
    {
        console.log("Sketch Area")
    }

    else 
    {
        block.classList.add('hover')
        console.log(event.target);
        event.stopPropagation();
    }
}

}