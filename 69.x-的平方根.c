/*
 * @lc app=leetcode.cn id=69 lang=c
 *
 * [69] x 的平方根 
 */

// @lc code=start
#include <math.h>

int mySqrt(int x){
   double p=0.001;
   double val=1.0;double cheak;
    do
   {
        val = (x / val + val) / 2.0;
        cheak = val * val - x;
    } while((cheak >= 0 ? cheak : -cheak) > p);
    return floor(val);
}
// @lc code=end

