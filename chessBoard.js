let size = 8; // Size of the grid
let chessboard = "";

for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      line += "#";
    } else {
      line += " ";
    }
  }
  chessboard += line + "\n"; // Add the constructed line to the chessboard string
}

console.log(chessboard);
