// const coding = ["js", "ruby", "py", "java", "cpp"]

// const values = coding.forEach( (item) => {
//   // console.log(item);
//   return item
// })

// console.log(values);





const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//   return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//   if (num > 4){
//     newNums.push(num)
//   }
// })

// console.log(newNums);





const books = [
  { title: "Book One", genre: "friction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "non-friction", publish: 1992, edition: 2008 },
  { title: "Book three", genre: "history", publish: 1999, edition: 2004 },
  { title: "Book four", genre: "non-friction", publish: 1989, edition: 2007 },
  { title: "Book five", genre: "science", publish: 2009, edition: 2014 },
  { title: "Book six", genre: "friction", publish: 1987, edition: 2010 },
  { title: "Book seven", genre: "history", publish: 1986, edition: 1996 },
  { title: "Book eight", genre: "science", publish: 2011, edition: 2016 },
  { title: "Book nine", genre: "non-friction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "history");

// userBooks = books.filter((bk) => bk.publish >= 2000);

userBooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === "history"} );

console.log(userBooks);
