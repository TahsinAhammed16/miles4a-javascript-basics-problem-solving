// Problem - 1
function cubeNumber(number) {
    if (typeof number !== "number") {
      return "Invalid Input: Please provide a valid number.";
    } else {
      return Math.pow(number, 3);
    }
  }
  // Test cases
  console.log(cubeNumber(3));
  console.log(cubeNumber(4));