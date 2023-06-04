/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // if (s.length >= 0 && s.length <= 200) {
  let sTem = s.trim('');
  let sysmbolstr = '+';
  let temArr = [];
  let result = 0;
  let max = Math.pow(2, 31);
  let ishasNumber = false;
  let sysmbolstrArr = [];
  let isHasZero = false;
  for (let i = 0; i < sTem.length; i++) {
    let n = Number(sTem[i]);
    if (isNaN(n)) {
      if (isHasZero) {
        if (sTem[i] == '-' || sTem[i] == '+') {
          return 0;
        }
        break;
      } else {
        if (sTem[i] == '-' || sTem[i] == '+') {
          sysmbolstrArr.push(sTem[i]);
          continue;
        }
        if (sysmbolstrArr.length > 1) {
          if (ishasNumber) {
            sysmbolstr = sysmbolstrArr[0];
            break;
          } else {
            return 0;
          }
        } else if (sysmbolstrArr.length == 1) {
          sysmbolstr = sysmbolstrArr[0];
        }
        break;
      }
    } else {
      if (ishasNumber) {
        if (sTem[i] == '-' || sTem[i] == '+') {
          sysmbolstrArr.push(sTem[i]);
          break;
        }

        if (sysmbolstrArr.length > 1) {
          if (ishasNumber) {
            sysmbolstr = sysmbolstrArr[0];
            break;
          } else {
            return 0;
          }
        } else if (sysmbolstrArr.length == 1) {
          sysmbolstr = sysmbolstrArr[0];
        }
        if (sTem[i] == ' ') {
          break;
        } else {
          if (sTem[i] == 0) {
            isHasZero = true;
          }
          temArr.push(n);
          ishasNumber = true;
        }
      } else {
        if (sTem[i] == '-' || sTem[i] == '+') {
          sysmbolstrArr.push(sTem[i]);
          continue;
        }
        if (sysmbolstrArr.length > 1) {
          if (ishasNumber) {
            sysmbolstr = sysmbolstrArr[0];
            break;
          } else {
            return 0;
          }
        } else if (sysmbolstrArr.length == 1) {
          sysmbolstr = sysmbolstrArr[0];
        }
        if (sTem[i] == 0) {
          isHasZero = true;
        }
        temArr.push(n);
        ishasNumber = true;
      }
    }
  }

  for (let j = 0; j < temArr.length; j++) {
    result += temArr[j] * Math.pow(10, temArr.length - (j + 1));
  }
  if (sysmbolstr == '+') {
    if (result >= max - 1) {
      result = max - 1;
    }
    return result;
  } else {
    if (result >= max) {
      return -max;
    }
    return -result;
  }
};
// @lc code=end
