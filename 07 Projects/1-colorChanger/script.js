const buttons = document.querySelectorAll('.button')

const body  = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
    
  })
  
})




// Switch use

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function(button) {
//   console.log(button);
//   button.addEventListener('click', function(e) {
//     console.log(e);
//     console.log(e.target);

//     switch (e.target.id) {
//       case 'grey':
//         body.style.backgroundColor = 'grey';
//         break;
//       case 'white':
//         body.style.backgroundColor = 'white';
//         break;
//       case 'blue':
//         body.style.backgroundColor = 'blue';
//         break;
//       case 'yellow':
//         body.style.backgroundColor = 'yellow';
//         break;
//       case 'purple':
//         body.style.backgroundColor = 'purple';
//         break;
//       default:
//         console.log('Unknown color!');
//     }
//   });
// });



// if else 

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function(button) {
//   console.log(button);
//   button.addEventListener('click', function(e) {
//     console.log(e);
//     console.log(e.target);

//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = 'grey';
//     } else if (e.target.id === 'white') {
//       body.style.backgroundColor = 'white';
//     } else if (e.target.id === 'blue') {
//       body.style.backgroundColor = 'blue';
//     } else if (e.target.id === 'yellow') {
//       body.style.backgroundColor = 'yellow';
//     } else if (e.target.id === 'purple') {
//       body.style.backgroundColor = 'purple';
//     } else {
//       console.log('Unknown color!');
//     }
//   });
// });


