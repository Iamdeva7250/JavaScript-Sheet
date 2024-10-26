// // const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// setInterval(function(){
//   let date = new Date()
// // console.log(date.toLocaleDateString());
// clock.innerHTML = date.toLocaleTimeString();
// }, 1000)


// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date
})