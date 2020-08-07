function twoSum(nums, target) {
    for (let i=0; i< nums.length; i++) {
        for (let n=i+1; n < nums.length; n++) {
            if ((nums[i] + nums[n]) === target) {
    console.log([i, n]);
                return [i, n]
            }
        }
    }
}
twoSum([1,2,3], 5);