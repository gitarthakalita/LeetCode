
// var operations = ["--X","X++","X++"];

var operations = ["++X","++X","X++"];

var finalValueAfterOperations = function(operations) {

    let X = 0;

    console.log(operations);

    for (let i =0; i<operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            X++;
        } else if (operations[i] === "X--" || operations[i] === "--X") {
            X--;
        }
    }

    console.log(X);
    
};

finalValueAfterOperations(operations);