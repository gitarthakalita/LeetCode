// var s = "()";
// var s = "()[]{}[]";
var s = "(]";

var isValid = function (s) {
    let temp = Array.from(s);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == "(" || temp[i] == ")") {
            temp[i] = 1;
        } if (temp[i] == "{" || temp[i] == "}") {
            temp[i] = 2;
        } if (temp[i] == "[" || temp[i] == "]") {
            temp[i] = 3;
        }
    }
    for (let j = 0; j < temp.length; j += 2) {
        if (temp[j] == temp[j+ 1]) {
            console.log("True");
            console.log(temp[j], "=",temp[j+1]);
        } else {
            console.log("False");
        }
    }
};

isValid(s)


