//Formatting page layout:

const sketchArea = document.createElement('div');
sketchArea.setAttribute('id','sketchArea');
sketchArea.style.cssText = 'display: flex; width: 1600px; height: 1600px; flex-wrap: wrap; border: 2px red solid; '
document.body.appendChild(sketchArea);

let cell = [];

// Creating Square Cells on Screen:

for(let i = 1; i <= 256; i++)
{
    cell[i] = document.createElement('div');
    cell[i].classList.add("cell-" + i.toString());
    cell[i].style.cssText = 'width: 100px; height: 100px;';
    sketchArea.appendChild(cell[i]);
}


// Pen Highlighter / hover Effect:

const blocks = document.querySelectorAll('div');

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


// Adding User Interface:
 

