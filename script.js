const etchASketchDiv = document.getElementById("etch-a-sketch");
const changeBtn = document.getElementById("change");
const clearBtn = document.getElementById("clear");
changeBtn.addEventListener("click", changeSize);

let mouseDown = false;

window.onmousedown = () => {
  mouseDown = true;
  console.log(mouseDown);
};

window.onmouseup = () => {
  mouseDown = false;
  console.log(mouseDown);
};

let size = 100;

function clearCanvas() {
  const gridElements = Array.from(document.getElementsByClassName("grid"));
  gridElements.forEach((g) => {
    g.classList.remove("hovered");
  });
}

function changeSize() {
  let invalid = true;
  while (invalid) {
    size = prompt("Input desired size (max of 100)", "");
    if (size <= 100 && size > 0) {
      invalid = false;
    }
  }
  clearCanvas();
  createGrid();
}

function hovered() {
  if (mouseDown) {
    this.classList.add("hovered");
  }
}

function createGrid() {
  etchASketchDiv.style.setProperty("--grid-rows", size);
  etchASketchDiv.style.setProperty("--grid-cols", size);
  for (let i = 0; i < size * size; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = i + 1;
    newDiv.addEventListener("mouseover", hovered);
    etchASketchDiv.appendChild(newDiv).className = "grid";
  }
}

createGrid();
