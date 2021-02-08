// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const pTag = document.createElement('p');
pTag.style.color = 'red';
pTag.textContent = 'Hey I\’m red!';

container.appendChild(pTag)


const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = 'I\'m a blue h3';

container.appendChild(header3);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = '1px solid black';

const header1 = document.createElement('h1');
const p = document.createElement('p');

header1.textContent = 'I\'m in a div';
p.textContent = 'ME TOO!';

div.appendChild(header1);
div.appendChild(p);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  alert("Hello World");
});
