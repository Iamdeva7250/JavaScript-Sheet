const name = "Deva ";
const repoCount = 454;

// console.log(name + repoCount + " Arya");

console.log('Hello My name is ${name} and my repo count is ${repoCount}');

const gameName = new String("devanand");

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "  Dmkkkkkkkkkkkkkkk     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Deva.com/devanand%20singh"

console.log(url.replace('%20', '-'));


console.log(url.includes('sundar'));


console.log(gameName.split('-'));




