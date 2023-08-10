// Problem - 4
function findAddress(obj) {
    if (typeof obj !== "object") {
      return "Invalid Input: Please provide me a valid object";
    } else {
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
      return street + "," + house + "," + society;
    }
  }
  // Test cases
  console.log(
    findAddress({ street: 10, house: "15A", society: "Earth Perfect" })
  );
  console.log(findAddress({ street: 10, society: "Earth Perfect" }));
  console.log(findAddress({ street: 10 }));
  console.log(findAddress({}));
  