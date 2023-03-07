//Calculate the factorial of a number using recursion

function factorial(num) {
    if (num === 0) {
    return 1;
    }
    return num * factorial(num - 1); // recursividad
  }
  
  
  console.log(factorial(5));
  
module.exports = factorial;