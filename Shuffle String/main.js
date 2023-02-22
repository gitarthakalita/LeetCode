var s = "codeleet", indices = [4, 5, 6, 7, 0, 1, 2, 3];
// var s = "abc", indices = [0,1,2];

var restoreString = function (s, indices) {
    let sArr = s.split('');
    let temp = [];

    for (let i = 0; i < sArr.length; i++) {

        temp.splice(indices[i], 0, sArr[i])
    }

    console.log(temp.join(''));

};


restoreString(s, indices)