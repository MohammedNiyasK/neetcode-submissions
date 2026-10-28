class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const compMap = new Map();
        for(let i=0;i<nums.length;i++){
           if(compMap.has(target - nums[i])) {
            return [compMap.get(target-nums[i]),i]
           }else{
            compMap.set(nums[i],i)
           }
        }
    }
}
