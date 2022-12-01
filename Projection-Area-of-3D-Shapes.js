// 883. Projection Area of 3D Shapes

// You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

// Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

// We view the projection of these cubes onto the xy, yz, and zx planes.

// A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

// Return the total area of all three projections.

const projectionArea = grid => {
  let n = grid.length
  let count = 0
  for(let i =0;i<n;i++){
    let maxr = 0
    let maxc = 0
    for(let j =0;j<n;j++){
      if(grid[i][j] > 0) count++
      maxr = Math.max(maxr,grid[i][j])
      maxc = Math.max(maxc,grid[j][i])
    }
    count += (maxr+maxc)
  }
  return count
}
