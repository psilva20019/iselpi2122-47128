const numberOfSquaresColumn = 8 //board lenght
const numberOfSquaresTotal = numberOfSquaresColumn * numberOfSquaresColumn
const breakLine = numberOfSquaresColumn % 2 == 0 ? numberOfSquaresColumn + 1 : numberOfSquaresColumn;
let board = ""

for (let i = 1; i < numberOfSquaresTotal ; i++){ 
    if(i % 2 == 0)board += "#"
        else board += " "
    if (i % breakLine == 0) board += "\n"
}

console.log(board)