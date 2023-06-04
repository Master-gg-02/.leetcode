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
  let arrStr = x + '';
  let len = arrStr.length;
  let isPostive = true;
  if (arrStr[0] == '-') {
    arrStr = arrStr.slice(1, len);
    len -= 1;
    isPostive = false;
  }
  let temArr = new Array(len);
  let result = 0;
  for (let i = 0; i < len; i++) {
    let j = len - (i + 1);
    temArr[i] = arrStr[j];
    result += temArr[i] * Math.pow(10, j);
  }
  if (result > max || result < -max) {
    return 0;
  }
};
let a = reverse(24515255);
console.log(a);
// @lc code=end
