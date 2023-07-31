const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement ('p');
para.textContent = "hey I'm red!";
para.style.color ='red';

container.appendChild(para);

const head3 = document.createElement('h3');
head3.textContent = "I'm a blue h3";
head3.style.cssText = "color: blue";

container.appendChild(head3);

const box = document.createElement('div');
box.style.cssText = "border: 2px solid black; background-color: pink";

const boxHead = document.createElement('h1');
boxHead.textContent = "I'm in a div"
const boxPara = document.createElement('p');
boxPara.textContent = "ME TOO!";

box.appendChild(boxHead)
box.appendChild(boxPara);
container.appendChild(box);

// Button 

function alertFunction(){
    alert("YAY1 YOU DID IT!");
}

const btn = document.querySelector('#btn');
btn.onclick =alertFunction;

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',function(e){e.target.style.background ='blue'});