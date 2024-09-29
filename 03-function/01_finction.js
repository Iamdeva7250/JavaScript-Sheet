function saymyname() {
  console.log("D");
  console.log("E");
  console.log("V");
  console.log("A");
}

// saymyname()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // console.log("sdfg");
  // return result

  return number1 + number2
  
  
}

// addTwoNumbers(3, "8")
const result = addTwoNumbers(3, 8);
// console.log("result :", result);


function logUserMessage(username = "dev"){
  if(!username){
    console.log("Please enter a username");
    return
    
  }
  return '${username} just logged in'
}

// console.log(logUserMessage("dfghjkml,"));
// console.log(logUserMessage("deva"));


function calculateCarPrice(...num1){
  return num1

}

// console.log(calculateCarPrice(200, 300, 500, 2000));

const user = {
  username: "devanand",
  price: 500
}

function handleobject(anyobject){
  console.log('username is ${anyobject.username} and price is ${anyobject.price}');
  
}

// handleobject(user)
handleobject({
  username: "sdfg",
  price: 7888
})

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 500]));


