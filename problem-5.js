// Problem - 5
function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return "Invalid Input: This array is empty";
    }
    let sumOfRetail = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sumOfRetail += changeArray[i];
    }
    if (sumOfRetail >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
  // Test cases
  console.log(canPay([1, 2, 5], 10));
  console.log(canPay([1, 5, 5], 10));
  console.log(canPay([-10, 7, 5], 10));
  console.log(canPay([0, 5, 5], 10));
  console.log(canPay([2, 3, 5], 10));
  console.log(canPay([], 10));
  