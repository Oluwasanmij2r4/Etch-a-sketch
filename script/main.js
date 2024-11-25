const cont = document.querySelector(".container");

for (let i = 0; i < 256; i++){
const div = document.createElement('div');
div.classList.add('square');
cont.appendChild(div);
}

