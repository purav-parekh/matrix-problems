// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

//Brute force - O(mn)
var countNegatives = function(grid) {
    let c = 0;
    for(let i =0;i<grid.length;i++){
        for(let j =0;j<grid[0].length;j++){
            if(grid[i][j] < 0) c++;
        }
    }
    return c;
};

//Optimal - O(m+n)
const countNegatives = grid => {
  let height = grid.length;
  let width = grid[0].length;
  let col = 0
  let row = height-1
  let c = 0
  while(col < width && row>=0){
    if(grid[row][col] < 0){
      c += width - col;
      row--;
    } else {
      col++;
    }
  }
  return c
}
