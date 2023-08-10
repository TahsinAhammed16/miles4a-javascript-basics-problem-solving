// Problem - 2
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Invalid Input: Both inputs should be valid strings.";
    } else {
      return string1.includes(string2);
    }
  }
  // Test cases
  console.log(matchFinder("John Doe", "ohn"));
  console.log(matchFinder("JavaScript", "Code"));
  console.log(matchFinder("Peter Parker", "Pen"));
  console.log(matchFinder("Peter Parker", "pet"));
  console.log(matchFinder(123, "456"));
  console.log(matchFinder(123, 456));
  