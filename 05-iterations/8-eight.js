const myNums =  [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue){
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  
//   return accumulator + currentValue
// }, 0)



const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999
  },
  {
    itemName: "java",
    price: 3999
  },
  {
    itemName: "data Science",
    price: 5999
  },
  {
    itemName: "deveops",
    price: 51999
  },
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(pricetopay);

