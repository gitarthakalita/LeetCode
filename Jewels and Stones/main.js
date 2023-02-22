// var jewels = "aA", stones = "aAAbbbb";

var jewels = "z", stones = "ZZ";







var numJewelsInStones = function (jewels, stones) {

    const J = new Set(jewels);

    let temp = stones.split('').reduce((res, s) => res + J.has(s), 0)

    console.log(temp);
}

// var numJewelsInStones = function (jewels, stones) {

//     let j = jewels.split('')

//     let regexTemp = `/[${j}]/g`;

//     let regex = /[a,A]/g;


//     let s = stones.match(regex);
//     let s1 = stones.match(regexTemp)


//     console.log(regex, regexTemp);
//     console.log(s, s1);
//     console.log(j, `${j}`);



// };

numJewelsInStones(jewels, stones)