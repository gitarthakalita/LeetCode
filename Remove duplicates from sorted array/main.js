// var nums = [1,1,2];
var nums = [0,0,1,1,1,2,7,8,2,7,3,3,4, 1, 1];

var removeDuplicates = function(nums) {
    
    nums = nums.sort()

    for (var i = 0; i < nums.length; ) {
        if (nums[i] === nums[i + 1]) {
            
            nums.splice(i, 1);
        } 
        else{
            i++
        }       
    }    
    console.log(nums.length, nums);


    


};


removeDuplicates(nums);
