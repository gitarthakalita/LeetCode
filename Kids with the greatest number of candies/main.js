var candies = [2, 3, 5, 1, 3];
// var candies=[4,2,1,1,2]
var extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
    var result = [];
    var temp = [];
    var maxCandies = Math.max(...candies);
    for (var i = 0; i < candies.length; i++) {
        temp.push(candies[i] + extraCandies);

        if(temp[i] >= maxCandies){
            result.push("true");
        } else {
            result.push("false");
        }        
    }

    console.log(result);
    return(result);

};


kidsWithCandies(candies, extraCandies);