// Singleton
// Object.create


// Object Literals

const mysym = Symbol("key1")


const jsUser = {
  name : "Deva",
  "Full name" : "Devanand Singh",
  [mysym] : "mykey1",
  age : 18,
  location : "Siwan",
  email : "iamdeva7250@gmail.com",
  isLoogedIn : false,
  lastLoginDays : ["monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mysym]);


jsUser.email = "devanandsingh@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "rarayadeva@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello js user");
}
jsUser.greetingtwo = function(){
  console.log('Hello js user, ${this.name}');
  
}
console.log(jsUser.greeting);
console.log(jsUser.greetingtwo);
