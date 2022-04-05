function reverseStr(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome(str) {
    if (str === stringReverse(str)) {
      return true;
    }
    return false;
}