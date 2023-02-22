var sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]


var mostWordsFound = function(sentences) {

    let temp;
    let tempArray=[];
    for (let i = 0; i< sentences.length; i++){
        temp = sentences[i].split(' ').length;
        tempArray.push(temp);        
    }

    console.log(Math.max(...tempArray));
};


mostWordsFound(sentences)