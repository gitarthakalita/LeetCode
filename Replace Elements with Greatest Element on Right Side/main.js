
var arr = [17, 18, 5, 4, 6, 1];

// var arr = [400];
var replaceElements = function (arr) {

    let result = new Array(arr.length);

    result[arr.length -1] = -1;

    for (let i = arr.length-1; i > 0; i -= 1) {
        console.log(result);
       
        result[i-1] = Math.max(arr[i], result[i]);
                
    }

    console.log(result);
};

replaceElements(arr);