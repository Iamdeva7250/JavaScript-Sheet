# Project related to DOM

## project Link
[Click here] 


# Solution Code

# Project 1


```javascript
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



```

# Project 2  Solution

```javaScript


const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Categorize the BMI
    let category;
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Overweight";
    }

    // show the results

    results.innerHTML = `<span>${bmi}, which is considered ${category}</span>`;
  }
});


```

