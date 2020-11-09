const matUtil = require('./utils');

let mat1 = [
    [1,2],
    [3,4]
]
let mat2 = [
    [5,6],
    [7,8]
]
//console.table(matUtil.matrixProduct(mat1,mat2));
//console.table(matUtil.sumOfMatrices(mat1,mat2));
console.log(matUtil.sumOfEachRow(mat1));

