// var digits = [1,2,3];
// var digits = [1,2,531];

// var digits = [9];

var digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {

    let temp = digits.join('');

    console.log("Joined",temp);

    let newTemp = BigInt(temp);

    console.log("Big Int", newTemp);

    // newTemp = parseInt(newTemp, 10);


    // console.log(typeof(newTemp));

    // console.log("Parsed",newTemp);


    newTemp = newTemp + BigInt(1) ;

    console.log("Plus One",newTemp);


    let data = Array.from(newTemp.toString()).map(Number);

    console.log(data);
}




// The following passes all cases 1, 2,3 

// var plusOne = function(digits) {

//     let temp = digits.join('');

//     console.log("Joined",temp);

//     temp = parseInt(temp, 10);

//     console.log("Parsed",temp);


//     temp = temp+1;

//     console.log("Plus One",temp);


//     let data = Array.from(temp.toString()).map(Number);

//     console.log(data);
// }






// var plusOne = function(digits) {

    //     let lastIndex = digits.length - 1;
    //     digits.splice(lastIndex, 1, digits[lastIndex]+1);
    
    //     let temp = [digits[lastIndex]]
    
    //     let data;
    
    //     console.log(digits);
    
    //     if (digits[lastIndex] >= 10){
    //         data= Array.from(temp.toString()).map(Number)
    
    //         for(let i = 0; i < data.length; i++){
    //             // digits.splice(lastIndex, 1, data[i] )
                // digits.splice(lastIndex, 1,  data[0], data[1] ) // Coulding cycle through the digits for now
    
    //             console.log(data[i]);
    //         }
    
                    
            
    //     }
    
    //     console.log(digits);
    // };


    plusOne(digits);