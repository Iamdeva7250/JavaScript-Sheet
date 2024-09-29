// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1264abd"
tinderUser.name = "Samu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email : "fcgvbhnjkm@gmail.com",
  fullname : {
    userfullname : {
      firstname: "Deva",
      lastname : "singh"
    }
  }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4= {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // merge object

const obj3 = {...obj1, ...obj2}           // merge object
// console.log(obj3);

const Users = [
  {
    id: 1,
    email:"fghjk@gmail.com"
  },
  {
    id: 1,
    email:"fghjk@gmail.com"
  },  
  {
    id: 1,
    email:"fghjk@gmail.com"
  },
]

Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  coursename: "js in english",
  price: "999",
  courseInstructor: "Devaaa"
}

// course.courseInstructor

const {courseInstructor: akki} = course

console.log(akki);

{
  "name": "Dvaaaaa",
  "coursename": "js in hindi",
  "price": "free"
}