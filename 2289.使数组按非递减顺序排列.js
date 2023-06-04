/*
 * @lc app=leetcode.cn id=2289 lang=javascript
 *
 * [2289] 使数组按非递减顺序排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

let clearArr = (nums, total) => {
  let temp = [];
  temp[0] = nums[0];
  let isHave = false;
  let temPtotal = total + 1;
  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i - 1] <= nums[i]) {
      temp.push(nums[i]);
    } else if (!isHave) {
      isHave = true;
    }
  }
  if (isHave) {
    temPtotal = clearArr(temp, temPtotal);
  } else {
    temPtotal -= 1;
  }
  return temPtotal;
};
var totalSteps = function (nums) {
  let total = 0;
  total = clearArr(nums, total);
  return total;
};

// @lc code=end
