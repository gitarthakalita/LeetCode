
var prices = [7, 1, 5, 3, 6, 4];

// var prices = [7,6,4,3,1];

var maxProfit = function (prices) {

    let profit;
    let max_profitBox=[];
    let max_profit=0;

    for (var i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {


            if(prices[i]<prices[j]){
                profit = prices[j] - prices[i];
                console.log(prices[j], "-", prices[i],"=",profit);
                max_profitBox.push(profit);
                
            } 
        }
    }
    max_profit= Math.max(...max_profitBox,max_profit);
    console.log(max_profit);

};


maxProfit(prices)