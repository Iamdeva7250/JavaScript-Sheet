// ++++++++++++++++++ 

// stack (primitive), Heap (Non-primitive)

let myYoutubename = "Devaaaaaaaaaaa"

let anotherName = myYoutubename
anotherName = "aryaaaasaaaaaaaaaaa"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
  email: "iamdeva7250@gmail.com",
  upi : "iamdeva@ybl"

}

let userTwo = userOne

userTwo.email = "sdfvgbfvcd@gmail,com"

console.log(userOne.email);
console.log(userTwo.email);
