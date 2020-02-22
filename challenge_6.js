// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pig_it('Pig latin is cool') # igPay atinlay siay oolcay
// pig_it('Hello world !')     # elloHay orldway !


function pigIt(str){
let finalString= [];
let arr = str.split(" ");
console.log(arr);
for(let i = 0; i < arr.length; i++){
	if(!(arr[i] === "!" || arr[i] === "?")){
	let word = arr[i].split("");
		let firstLetter = word.shift();
		word.push(firstLetter);
		
	let newWord = word.join('').concat("ay");
    finalString.push(newWord);
    

}else { finalString.push(arr[i]); }
} 
	return finalString.join(" ");
}