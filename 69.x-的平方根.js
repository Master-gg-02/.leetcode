/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (isNaN(x)) return NaN;
  if (x === 0 || x === 1) return x;
  let val = x,
    last;
  do {
    last = val;
    val = (val + x / val) / 2;
  } while (Math.abs(val - last) >= Number.EPSILON);
  val = Math.floor(val);
  return val;
};

// @lc code=end
