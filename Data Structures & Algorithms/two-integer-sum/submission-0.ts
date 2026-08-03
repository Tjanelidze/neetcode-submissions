class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let res = [];
        const count = new Map();

        for(let i = 0; i < nums.length; i++) {
            const t = target - nums[i];
            if(count.has(t)) res = [count.get(t), i]
            count.set(nums[i], i);
        }

        return res
    }
}
