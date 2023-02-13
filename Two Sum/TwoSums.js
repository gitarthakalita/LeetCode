var nums = [2,5,5,11];

var target = 10;

var twoSum = function (nums, target) {

    var sum;



    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            sum = nums[i] + nums[j]        
            if(target == sum && i!=j) {
                console.log(i, j, sum);
                return [i, j];
                
            }

        }
    };

}

twoSum(nums, target);