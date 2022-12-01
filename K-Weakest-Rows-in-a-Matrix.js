// 1337. The K Weakest Rows in a Matrix

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.

// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

const kWeakestRows = (mat, k) => {
    let res = []
    let ans = []
    for(let i = 0;i<mat.length;i++){
        let c = 0
        for(let j =0;j<mat[0].length;j++){
            if(mat[i][j] === 1) c++
            else break;
        }
        res.push([i,c])
    }
    res.sort((a,b) => a[1]-b[1])
    for(let p =0;p<k;p++){
        ans.push(res[p][0])
    }
    return ans
};
