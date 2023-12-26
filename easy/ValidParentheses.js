/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let string = s;

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" && string[i + 1] === ")") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }

    if (string[i] === "{" && string[i + 1] === "}") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }

    if (string[i] === "[" && string[i + 1] === "]") {
      string = string.slice(0, i) + string.slice(i + 2);
      i = i - 2;

      continue;
    }
  }

  if (string.length === 0) {
    return true;
  }

  return false;
};
