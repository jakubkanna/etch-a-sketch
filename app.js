//popup
let pixelnumber = window.prompt("Resolution", "32");
console.log(pixelnumber);

//grid
const container = document.createElement("div");
container.classList.add("container");

const createGrid = () => {
  for (let i = 1; i <= pixelnumber * pixelnumber; i++) {
    if (pixelnumber >= 100) {
      container.innerHTML = `${pixelnumber} is bigger than 100`;
    }
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / pixelnumber}%`;
    square.style.paddingBottom = `${100 / pixelnumber}%`;
    container.appendChild(square);
  }
};

document.body.appendChild(container);

// Function to change the color of a square to black
const colorSquare = (square) => {
  square.style.backgroundColor = "black";
};

// Event listeners for square coloring
container.addEventListener("mousedown", (mousedownEvent) => {
  if (mousedownEvent.target.classList.contains("square")) {
    colorSquare(mousedownEvent.target);

    const mouseoverListener = (mouseoverEvent) => {
      if (mouseoverEvent.target.classList.contains("square")) {
        colorSquare(mouseoverEvent.target);
      }
    };

    const mouseupListener = () => {
      container.removeEventListener("mouseover", mouseoverListener);
    };

    container.addEventListener("mouseover", mouseoverListener);
    document.addEventListener("mouseup", mouseupListener);
  }
});

// Call createGrid
createGrid();

//add ass as background
