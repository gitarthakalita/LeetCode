// var nums = [2,5,1,3,4,7];
// var n = 3;

var nums = [1,2,3,4,4,3,2,1], n = 4

var shuffle = function(nums, n) {
    let tempx= nums.slice(0,n);
    let tempy = nums.slice(n);

    let temp=[];


    for (let i = 0; i < n; i++) {

        temp.push(tempx[i],tempy[i]);
        

    }

    console.log(temp);



};

shuffle(nums, n);