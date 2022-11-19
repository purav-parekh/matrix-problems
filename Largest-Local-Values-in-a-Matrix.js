// [2373. Largest Local Values in a Matrix](https://leetcode.com/problems/largest-local-values-in-a-matrix/)

// You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

//    maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

// Return the generated matrix.

// Solution:

const sol = grid => {
  let n = grid.length;
  let ans = [];
  for(let i =0;i<n-2;i++){
    let r = [];
    let max = 0;
    for(let j =0;j<n-2;j++){
      max = Math.max(Math.max(grid[i][j],grid[i][j+1],grid[i][j+2],
                       grid[i+1][j],grid[i+1][j+1],grid[i+1][j+2],
                       grid[i+2][j],grid[i+2][j+1],grid[i+2][j+2]));
      r.push(max);
    }
    ans.push(r)
  }
  return ans
}
