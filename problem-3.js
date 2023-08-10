// Problem - 3
function sortMaker(arr) {
    if (!Array.isArray(arr)) {
      return "Invalid Input: Please provide an array.";
    } else if (arr.length !== 2) {
      return "Invalid Input: The array must have exactly two elements.";
    }
    const [first, second] = arr;
    if (first < 0 || second < 0) {
      return "Invalid Input";
    } else if (first === second) {
      return "equal";
    } else if (first > second) {
      return [first, second];
    } else {
      return [second, first];
    }
  }
  // Test cases
  console.log(sortMaker([2, 3]));
  console.log(sortMaker([4, 2]));
  console.log(sortMaker([4, 4]));
  console.log(sortMaker([4, -2]));
  console.log(sortMaker([-4, 2]));
  