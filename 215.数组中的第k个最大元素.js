/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  let temp = nums.sort((a, b) => b - a);
  if (k > nums.length) {
    return nums[nums.length - 1];
  }
  return temp[k - 1];
};
// @lc code=end
