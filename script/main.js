const cont = document.querySelector(".container");
const button = document.querySelector(".btn");
const reset = document.querySelector(".reset");
let getGrid;
let gridNum;


for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

   div.addEventListener("mouseover", () => {
      const randomcolor = getRandomColor();
      div.style.backgroundColor = randomcolor;
    });

    cont.appendChild(div);
  }
 

button.onclick = () => {
  getGrid = prompt(
    "Please enter a value for the grid per sides; no more than 100"
  );

  if (getGrid === "" || getGrid.trim() === "") {
    alert("grid unchanged");
    return;
  }
  if (isNaN(getGrid)) {
    alert("Enter a valid number");
    return;
  }

  getGrid = Number(getGrid);

  if (getGrid > 100) {
    alert("Enter a number between 0 - 100");
    return;
  }

  generateGrid(getGrid);
};



// Function to generate different square size between 0 - 100
function generateGrid(size) {
  cont.innerHTML = "";

  const squareSize = 100/size;

  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    div.style.width = `${squareSize}%`
    div.style.height = `${squareSize}%`;
    div.style.border = ".2rem solid black"

    div.addEventListener("mouseover", () => {
      const randomcolor = getRandomColor();
      div.style.backgroundColor = randomcolor;
    });

    cont.appendChild(div);
  }
}

function getRandomColor(){
    const r = Math.floor (Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

reset.onclick = () => {

    cont.innerHTML = "";

    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add("square");

       div.addEventListener("mouseover", () => {
      const randomcolor = getRandomColor();
      div.style.backgroundColor = randomcolor;
    });
      cont.appendChild(div);
    }
}
