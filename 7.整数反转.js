/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = Math.pow(2, 31);
  let numStr = x.toString();
  let numLen = 0;
  let ret = 0;
  let remainder = 0;
  if (numStr[0] == '-' || numStr[0] == '+') {
    numLen = numStr.length - 1;
  } else {
    numLen = numStr.length;
  }
  for (let i = 0; i < numLen; i++) {
    remainder = x % 10;
    x = (x - remainder) / 10;
    ret += remainder * Math.pow(10, numLen - i - 1);
  }
  if (ret > max || ret < -max) {
    return 0;
  }
  return ret;
};
