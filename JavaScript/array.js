// Reference type
// var arr = ["a", 1, true, { ename: "Sanooj " }];
// console.log(arr);

//for loop
// for (var i = 0; i < arr.length; i++) {
// array[i] += 10;
// }

//for of loop
// var arr1 = [10, 20, 30, 40, 50];
// for (var i of arr1) {
//   console.log(i + 10);
// }

//for in loop
// var arr1 = [10, 20, 30, 40, 50];
// for (var key in arr1) {
//   console.log(key);
// }

console.log("good morning");
function getName() {
  console.log("welcome");
}
getName();

//asynchronus code will execute last
setTimeout(() => {
  console.log("hello javascript");
}, 5000);

console.log("megha");

//array of objects
var arr = [10, 20, 50, 40];
var mapMethod = arr.map(value, index, arr); //
console.log(value + 10);

console.log(index);
console.log(Array);

console.log(mapMethod);
var books = [
  {
    author: "anni frank",
    bookname: "Dairy of a young girl",
    price: 350,
    publication: "sapna",
  },
  {
    author: "vyasa",
    bookname: "Mahabharata",
    price: 1000,
    publication: "sapna stores",
  },
  {
    author: "valmiki",
    bookname: "Ramayana",
    price: 1000,
    publication: "sapna store",
  },
];

books.map((val, ind) => {
  console.log(val.author);
  console.log(val.bookname);
  console.log(val.price);
  console.log(val.publication);
});
