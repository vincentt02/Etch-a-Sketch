const containerDiv = document.getElementById("container");
const resetBtn = document.getElementById("reset");

let size = 100;
resetBtn.addEventListener("click", changeSize);

function changeSize() {
  let invalid = true;
  while (invalid) {
    size = prompt("Input desired size (max of 100)", "");
    if (size <= 100 && size > 0) {
      invalid = false;
    }
  }
  const gridElements = Array.from(document.getElementsByClassName("grid"));
  gridElements.forEach((g) => {
    g.classList.remove("hovered");
  });
  createGrid();
}

function hovered() {
  this.classList.add("hovered");
}

function createGrid() {
  containerDiv.style.setProperty("--grid-rows", size);
  containerDiv.style.setProperty("--grid-cols", size);
  for (let i = 0; i < size * size; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = i + 1;

    newDiv.addEventListener("mouseleave", hovered);

    containerDiv.appendChild(newDiv).className = "grid";
  }
}

createGrid();
