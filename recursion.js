/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWord=0) {
  if (idx === words.length) return longestWord;
  longestWord = Math.max(words[idx].length, longestWord);
  return longest(words, idx + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) return str;
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx >= arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str;
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") result.push(obj[key]);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result.push(...gatherStrings(obj[key]));
    }
  }
  return result;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
