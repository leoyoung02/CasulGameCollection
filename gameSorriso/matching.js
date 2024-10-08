// number of images, start at zero because we increment it later
let numberOfImages = 0;
let score = -1;

let bodyElement = null;
let leftDiv = null;
let rightDiv = null;
let scoreDiv = null;

// our image source
let imageSource = "img/smile.png";

// initialization function, called when the body loads: <body onload="init()">
function init() {
  bodyElement = document.getElementsByTagName("body")[0];
  leftDiv = document.getElementById("left");
  rightDiv = document.getElementById("right");
  scoreDiv = document.getElementById("score");
  startGame();
}

// starting point of every new game
function startGame() {
  // reset the numberOfFaces and the score
  numberOfImages = 0;
  score = -1;

  // handles the next level logic, does not dispatch any events is this particular call
  nextLevel();

  // attach the gameOver function
  bodyElement.onclick = gameOver;
}

// this is where some of the code reuse is applied, this function is called through the startGame AND through the click event
function nextLevel(event) {

  // if an event is given, stop propagation
  if (event) {
    event.stopPropagation();
  }

  // add 5 to the number of faces
  numberOfImages += 5;

  // add 1 to your score
  score++;
  scoreDiv.innerHTML = "Score: " + score;

  clearImages();
  generateImagesOnLeft();
  cloneImagesToRight();
}

// removes all child elements (if any) from the left and right panels
function clearImages() {
  while (leftDiv.firstChild) {
    leftDiv.removeChild(leftDiv.firstChild);
  }

  while (rightDiv.firstChild) {
    rightDiv.removeChild(rightDiv.firstChild);
  }
}

// creates all divs and images on the left panel
function generateImagesOnLeft() {
  let div = null;
  let image = null;
  let container = document.createElement("div");

  for (let i = 0; i < numberOfImages; i++) {
    div = document.createElement("div");
    image = document.createElement("img");

    div.style.left = Math.random() * 400 + "px";
    div.style.top = Math.random() * 400 + "px";

    image.src = imageSource;

    div.appendChild(image);
    container.appendChild(div);
  }

  container.lastChild.onclick = nextLevel;
  leftDiv.appendChild(container);
}

// clone the children of the left panel to the right panel, minus the last child of the left panel
function cloneImagesToRight() {
  let nodes = leftDiv.firstChild.cloneNode(true); //copy with children = true
  nodes.removeChild(nodes.lastChild);

  rightDiv.appendChild(nodes);
}

// handles the end of the game
function gameOver() {
  bodyElement.onclick = null;
  leftDiv.lastChild.onclick = null;

  clearImages();

  // if confirmed, re-starts the game
  if (confirm("Game Over! \n\nPlay Again?")) {
    startGame();
  }
}
