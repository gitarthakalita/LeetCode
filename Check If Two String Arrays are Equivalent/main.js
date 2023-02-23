
// var word1 = ["ab", "c"], word2 = ["a", "bc"];

// var word1 = ["a", "cb"], word2 = ["ab", "c"];

var word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];

var arrayStringsAreEqual = function(word1, word2) {
    let str1 = word1.join('');
    let str2 = word2.join('');

    console.log(str1, str2);

    // if(str1===str2){
    //     console.log("True");
    // } else {
    //     console.log("False");
    // }

    console.log(str1===str2);
};

arrayStringsAreEqual(word1,word2);