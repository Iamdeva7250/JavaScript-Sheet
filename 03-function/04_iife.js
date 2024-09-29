// immediately Invoked function Expressions  (IIFE)

(function chai(){
  // named iife
  console.log('DB Connected');
  
})();

( (name)  => {
  console.log('DB Connected TWO ${name}');
  
})('Deva')