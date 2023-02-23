var command = "G()(al)";

var command = "G()()()()(al)";



var interpret = function(command) {
      return  command.replace(/(\(\))|(\(al\))/g, (str) => {
	    return	str === '()' ? 'o' : 'al';

	});

    console.log(str);
};


interpret(command)