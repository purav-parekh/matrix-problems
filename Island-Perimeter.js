// 463. Island Perimeter
// Easy

// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island 
// (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. 
// The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = grid => {
  let rows = grid.length;
  let cols = grid[0].length;
  let p = 0
  for(let i =0;i<rows;i++){
    for(let j =0;j<cols;j++){
      if(!grid[i][j]) continue;
      p += 4
      if(i>0 && grid[i-1][j]) p--;
      if(i<rows-1 && grid[i+1][j]) p--;
      if(j>0 && grid[i][j-1]) p--;
      if(j<cols-1 && grid[i][j+1]) p--;
    }
  }
  return p;
}
