// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(arr, driver) {
  return arr.filter(function (mydriver) {
    return mydriver.toLowerCase() === driver.toLowerCase();
  });
}
function fuzzyMatch(arr, driver) {
  return arr.filter(function (mydriver) {
    return mydriver.startsWith(driver);
  });
}
function matchName(arr, driver) {
  return arr.filter((mydriver) => mydriver.name === driver);
}
