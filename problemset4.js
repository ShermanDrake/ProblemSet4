// var letters =[]
// var digits =[]

// var addNumbers = function(number) {
// 	var myloop = number

// 	for( i=0; i<myloop.length; i++){
// 		// console.log(parseInt(myloop[i], 10))

// 		if(!isNaN(parseInt(myloop[i],10))&& !isNaN(parseInt(myloop[i+1], 10))){
// 			// console.log('!!',myloop[i], parseInt(myloop[i],10))

// 		digits.push(myloop[i]+ myloop[i+1])
// 		i++
// 		}
// 		else if(!isNaN(parseInt(myloop[i], 10))){
// 			digits.push(myloop[i])
// 		}
// 	}
// 	return digits.reduce(function(memo,element){
// 		return memo += parseInt(element)

// 	},0)

// }
// console.log(addNumbers("88hello3 world44"))



var longestWord = function(string) {
	var string = string.split(" ");
	var longest = 0;
	var word = null;

	for( var i=0; i<=string.length - 1; i++){

		if(longest < string[i].length) {
			longest = string[i].length;
			word = string[i];
		}
	}
	return word;

}
console.log(longestWord("The Bronco's play Da'Raiders on Sunday"))