const useremail = "devanandsingh839@gmail.com";

if (useremail) {
  console.log("got user gmail");
} else {
  console.log("don't have user gmail");
}

//// falsy values

// false, 0, -0, BigInt 0n; "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}


// if(useremail.length === 0){
//   console.log("Array is empty");
// }

const emptyObbject = {}
  if(Object.keys(emptyObbject).length === 0){
    console.log("Arry is empty");
  }


  // Nullish Coalescing Operator (??): null undefined

  let val1;
  // val1 = 5 ?? 10
  // val1 = null ?? 10
  // val1 = undefined ?? 15
  val1 = null ?? 10 ?? 15
  
  console.log(val1);
  



  // ternary Operator 

  // condition  ? true : false 


  const iceTeaPrice = 100
  iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
  
  