// 566. Reshape the Matrix
// Easy

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// with splice
const reshape = (mat,r,c) => {
  let rows = mat.length
  let cols = mat[0].length
  if(rows*cols !== r*c) return mat
  else{
    let arr = mat.flat()
    let res = []
    while(arr.length) res.push(arr.splice(0,c))
  }
  return res
}

// with slice (less expensive)
const reshape = (mat,r,c) => {
  let rows = mat.length
  let cols = mat[0].length
  if(rows*cols !== r*c) return mat
  else{
    let arr = mat.flat()
    let res = []
    while(r--) res.push(arr.slice(res.length*c,res.length*c + c))
  }
  return res
}

// with no inbuilt-functions
const reshape = (mat,r,c) => {
  let m = mat.length
  let n = mat[0].length
  if(m*n !== r*c) return mat
  else{
    let res = []
    for(let i =0;i<m*n;i++){
      let r = Math.floor(i/c)
      if(!res[r]) res.push([])
      res[r].push(mat[Math.floor(i/n)][i%n])
    }    
  }
  return res
}
