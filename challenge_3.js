// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag (str) {
console.log(str);
 if (str == "" || /^\s*$/.test(str)){
 	return false
 } else {

var arr = str.trim().split(' ');
var arr1 = [];

arr.forEach(word => {
	let arr1word = word.charAt(0).toUpperCase() + word.slice(1);
	arr1.push(arr1word);

});

var hash = "#" + arr1.join('');
if(hash.length > 140 ){
return false;
}else{ return hash;}

}

}