//assign the board element to a variable(HTML DOM feature)
const board = document.getElementById('board');
//create an array of cells by selecting all elements with the class cell
const cells = document.getElementsByClassName('cell');
//create an array of players
const players = ['X', 'O'];
   //create a variable to keep track of the current player
   let currentPlayer = players[0];

const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign='center';

board.after(endMessage);

//create an array of winning combinations
const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
];

//a function to providecalled checkWin to check the win status of the game  
function checkWin(currentPlayer) {
   for(let i = 0; i < winningCombinations.length; i++){
      const [a, b, c] = winningCombinations[i];
      //checks if the textContent of the cells in the winning combination array is equal to the currentPlayer
      if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
         return true;
      }
   }
   return false;
}
