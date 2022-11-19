// 1572. Matrix Diagonal Sum (https://leetcode.com/problems/matrix-diagonal-sum/)
// Easy

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

const sol = matrix => {
  let sum = 0;
  let [i,j] = [0,matrix.length-1];
  while(i<matrix.length-1){
    sum += matrix[i][j]; // sum of primary diagonal elements
    if(i!==(j-i)) sum += matrix[i][j-1]; // sum of secondary diagonal elements
  }
  return sum
}
