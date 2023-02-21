var address = "1.1.1.1";

// var address = "255.100.50.0;"

var defangIPaddr = function(address) {
    
    let temp = address.split(".").join("[.]")

    // let temp = address.split();

    console.log(temp);

    
};


defangIPaddr(address);
