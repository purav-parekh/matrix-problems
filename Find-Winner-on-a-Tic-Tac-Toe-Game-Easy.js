// 1275. Find Winner on a Tic Tac Toe Game

// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

//     Players take turns placing characters into empty squares ' '.
//     The first player A always places 'X' characters, while the second player B always places 'O' characters.
//     'X' and 'O' characters are always placed into empty squares, never on filled ones.
//     The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
//     The game also ends if all squares are non-empty.
//     No more moves can be played if the game is over.

// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

const tictactoe = moves => {
  let m = moves.length
  let count = 0
  if(m<5) return 'Pending'
  let rows = [0,0,0]
  let cols = [0,0,0]
  let dia = 0
  let adia = 0
  for(let i =0;i<m;i++){
    let val = (i%2===0) ? 1 : -1
    let r = moves[i][0]
    let c = moves[i][1]
    rows[r] += val
    cols[c] += val
    
    if(r+c === 2) adia += val
    if(r === c) dia += val
    
    if([rows[r],cols[c],adia,dia].includes(3)) return 'A'
    else if ([rows[r],cols[c],adia,dia].includes(-3)) return 'B'
    count++
  }
  if(count<9) return 'Pending'
  return 'Draw'
}
