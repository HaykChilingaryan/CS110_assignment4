const reader = require('readline-sync')

module.exports = 
{ 
     
 matrixProduct: function (mat1, mat2) {
  let mat3 = [];
  
  for (let i = 0; i < mat1.length; i++) {
    mat3[i] = [];
    for (let j = 0; j < mat2.length; j++) {
      let sum = 0;
      for (let k = 0; k < mat1.length; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      mat3[i][j] = sum;
    }
  }
  
  return mat3;
},

sumOfMatrices: function (mat1, mat2) {
    let mat3 = [];
    for (let i = 0; i < mat1.length; i++) {
      mat3[i] = [];
      for (let j = 0; j < mat1.length; j++) {
       mat3[i][j] = mat1[i][j] + mat2[i][j];
      }
    }
    return mat3;
  },

  sumOfEachRow: function (mat) {
    let arr = [];
    for (let i = 0; i < mat[0].length; i++)
    {
        let sum = 0;
        for (let j = 0; j < mat[1].length; j++)
        {
            sum += mat[i][j]
        }
        arr.push(sum);
    }
    return arr;
  }

};
