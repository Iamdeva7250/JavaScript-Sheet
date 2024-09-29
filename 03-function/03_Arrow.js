const user = {
  username: "Deva..",
  price: 999,

  welcomeMessage: function () {
    console.log("${this.usename} , Welcome to website");
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "asdfg"
// user.welcomeMessage()

// console.log(this);


// function chai() {
// let username = "Deva"
//   console.log(this.username);
// }
// chai();


// const chai = function (){
//   let username = "Devaa"
//   console.log(this.username);
  
// }


// const chai =  () {
//   let username = "Devaa"
//   console.log(this);
  
// }

// chai()


// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({username : "dfgnm"})


console.log(addtwo(3, 5));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() =>)



