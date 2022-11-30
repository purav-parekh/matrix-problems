// 867. Transpose Matrix

// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// works for all cases including when rows != cols
const transpose = matrix => {
  let rows = matrix.length
  let cols = matrix[0].length
  let res = []
  for(let i =0;i<cols;i++){
    let newCol = []
    for(let j =0;j<rows;j++){
      newCol.push(matrix[j][i]
    }
    res.push(newCol)
  }
  return res
}
