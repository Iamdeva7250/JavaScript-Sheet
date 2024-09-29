// primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol. BitInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidTemp = null
let userEmail;

const id  = Symbol('123')
const anotherId  = Symbol('123')

console.log(id == anotherId);

const bigNumber = 65454487585127456n
console.log(bigNumber);





// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
  name: "Deva",
  age : 21,
}

const myFunction =function(){
  console.log("HEllo world")
}

console.log(typeof outsidTemp);
