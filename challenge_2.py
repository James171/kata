# Stop gninnipS My sdroW!

# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
# Strings passed in will consist of only letters and spaces. 
# Spaces will be included only when more than one word is present.

# Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
  //TODO Have fun :)
  var arr2 = [];
  var arr = str.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
  	if(arr[i].length >= 5){
  		arr2.push(arr[i].split('').reverse().join(''));
  		// arr2.push(more5or);
  	}else {
  		arr2.push(arr[i]);
  	}
  }
  	return arr2.join(" ");

}

