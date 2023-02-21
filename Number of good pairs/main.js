// var nums = [1,2,3,1,1,3];

var nums = [1,1,1,1];

var numIdenticalPairs = function(nums) {
    
    let count=0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {

            console.log(nums[i], nums[j]);
            if(nums[i] == nums[j]) {
                console.log(nums[i], nums[j]);
                count =count + 1;
            }
        }
    }

    console.log(count);

};

numIdenticalPairs(nums);