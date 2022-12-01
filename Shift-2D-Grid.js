// 1260. Shift 2D Grid
// Easy

// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

//     Element at grid[i][j] moves to grid[i][j + 1].
//     Element at grid[i][n - 1] moves to grid[i + 1][0].
//     Element at grid[m - 1][n - 1] moves to grid[0][0].

// Return the 2D grid after applying shift operation k times.

// approach 1
const shiftGrid = (grid,k) => {
  let arr = grid.flat()
  let len = grid[0].length
  let res = []
  while(k--){
    arr.unshift(arr.pop())
  }
  
  while(arr.length){
    res.push(arr.splice(0,len))
  }
  return res
}

// approach 2
const shiftGrid = (grid,k) => {
  while(k--){
    let p = null
    for(let i =0;i<grid.length;i++){
      if(p!==null) grid[i].unshift(p)
      p = grid[i].pop()
    }
    grid[0].unshift(p)
  }
  return grid
}
