//const we cant reintialize and redeclare
// var a = 5342;

// const c = 100;
// console.log(c++);

//In let re-initialization is possible but
//re-declaration is not possible in let

let systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDate());
console.log(systemDate.getHours());

let date1 = new Date("Dec/21/2021");
console.log(date1);

let months = [""];

let dateVal = date1.getDate();
let dateMonth = months[getMonth()];
let dateFull = date1.getFullYear();

var fullDate = `${dateMonth + 1}/${dateVal}/${datefull}`;
console.log(fullDate);
