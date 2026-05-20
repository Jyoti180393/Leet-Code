document.getElementById("title").innerHTML = "Two Sum";
document.getElementById("description").innerHTML = `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`;
document.getElementById("Assumptions").innerHTML = `
Assumptions:
You may assume that each input would have exactly one solution, and you may not use the same element twice.
`;

function twoSum(nums, target) {
  const numMaps = new Map();
  for (let i = 0; i < nums.length; i++) {
    const otherNum = target - nums[i];
    if (numMaps.has(otherNum)) {
      // will check if the otherNum is present in the may as key or not,
      // if it is present then we will return the index of otherNum and current index i
      return [numMaps.get(otherNum), i];
    } else {
      numMaps.set(nums[i], i); // setting the nums[i] i.e. value as key and index as value
    }
  }
}

const nums = [0, 3, 5, 2, 4, 7];
const target = 9;
console.log(twoSum(nums, target));
