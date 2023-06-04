/*
 * @lc app=leetcode.cn id=2202 lang=javascript
 *
 * [2202] K 次操作后最大化顶端元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
  let top = nums[0];
  if (nums.length < k) {
    if (nums.length == 1) {
      if (k % 2 !== 0) {
        top = -1;
      }
    } else {
      k = nums.length;
      for (let i = 0; i < k; i++) {
        if (nums[i] > top) {
          top = nums[i];
        }
      }
    }
  } else if (k == 0) {
    top = nums[0];
  } else if (nums.length == 1) {
    top = -1;
  } else if (k == 1) {
    top = nums[1];
  } else {
    for (let i = 0; i < k - 1; i++) {
      if (nums[i] > top) {
        top = nums[i];
      }
    }
  }

  if (nums[k] > top) {
    top = nums[k];
  }
  //   nums.unshift(top);
  return top;
};

// @lc code=end
