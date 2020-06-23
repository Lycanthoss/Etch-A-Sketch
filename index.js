//#region VARIABLES

let main_body = document.createElement("div");
let header = document.createElement("h1");
let reset_button = document.createElement("button");

//#endregion VARIABLES

//#region DOCUMENT CSS

document.documentElement.style.margin = "0px";
document.documentElement.style.backgroundColor = "#1d1d1d";
header.style.fontFamily = "poppins";
header.textContent = "Welcome to my Etch-A-Sketch for The Odin Project";
header.style.color = "#ab611d";
header.style.fontStyle = "italic";
reset_button.textContent = "Reset Game";
reset_button.style.outline = "none";
reset_button.style.padding = "1em 2em";
reset_button.style.backgroundColor = "rgb(38, 34, 61)";
reset_button.style.color = "#ab611d";
reset_button.style.border = "none";
reset_button.style.transition = "0.5s";
document.body.style.margin = "0px";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.alignContent = "center";
main_body.style.width = "50%";
main_body.style.height = "80vh";
main_body.style.marginBottom = "3vh";

//#endregion DOCUMENT CSS

//#region GRID SETUP

function generateGrid(size) {
    let gridContainer = document.createElement("div");
    gridContainer.id = "grid";

    gridContainer.style.width = "100%";
    gridContainer.style.height = "100%";
    
    gridContainer.style.display = "grid";
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridAutoColumns = "auto";
    gridContainer.style.gridAutoRows = "auto";

    for (let i = 0; i < size * size; i++) {
        gridContainer.appendChild(createGridSquare());
    }

    return gridContainer;
}

function createGridSquare() {
    let square = document.createElement("div");
    setupSquareCSS(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#cc2d55";
    });

    return square;
}

function setupSquareCSS(squareElement) {
    squareElement.classList.add("grid-square");
    squareElement.style["transition"] = "0.3s";
    squareElement.style["background-color"] = "rgb(38, 34, 61)";
    squareElement.style["padding"] = "auto";
}

function resetGame() {
    let size = prompt("Input new grid size: ");
    let newGrid = generateGrid(size);
    let oldGrid = document.getElementById("grid");
    main_body.replaceChild(newGrid, oldGrid);
}

//#endregion GRID SETUP

//#region ADD ELEMENTS TO HTML

main_body.appendChild(generateGrid(5));
document.body.appendChild(header);
document.body.appendChild(main_body);
document.body.appendChild(reset_button);

reset_button.addEventListener("mouseover", () => {
    reset_button.style.backgroundColor = "#cc2d55";
});
reset_button.addEventListener("mouseleave", () => {
    reset_button.style.backgroundColor = "rgb(38, 34, 61)";
});
reset_button.addEventListener("click", () => {
    resetGame();
});

//#endregion ADD ELEMENTS TO HTML