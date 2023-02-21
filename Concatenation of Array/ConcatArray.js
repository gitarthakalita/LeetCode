let nums = [1,2,1];
let ans = [];

var getConcatenation = (nums) => {
    for (let i = 0; i < 2*nums.length; i++) {
        ans.push(nums[i]);
        
    }
    console.log(ans);
    return ans;

    
}


getConcatenation(nums)
