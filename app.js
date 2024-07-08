// Lecture No 1
// // console check karna ka tariqa
// console.log("Apna Karachi");
// console.log("I luv javaScript");

// // variables can be declared and update. A globle scope variable
// var fullName = "Rehan";
// var age = 24;
// console.log(fullName)
// console.log(age)

// // let variable cannot be re-declared but can be update. A block scope variable
// let name =  "Rehan";
// let price = 1000;
// name = "Rafique"
// console.log(name);
// console.log(price)

// // const variable cannot be re-declared or update. A block scope variable.
// // {} brackets show new blocks
// const city = "Karachi";
// const country = "Pakistan";
// {
//     const city = "Lahore";
//     console.log(city);
// }
// console.log(city);
// console.log(country);

// // Primitive 7 Data Types in JS: Numbers, String, Boolean, Undefined, Null, Bigint, Symbol
// // objects means collection of deffrent variables

// const student = {
//     fullName: "Rehan Rafique",
//     age: 24,
//     cgpa: 8.5,
//     isPass: true,
// };
// student ["age"] = student ["age"] + 10;
// console.log(student.age);

// // Practice 1 for Lecture 1
// const product = {
// title: "Ball Pen",
// rating: 4,
// offer: 5,
// price: 270,
// };
// console.log(product);

// // Practice 2 for Lecture 1
// const profile = {
//     userName: "Rehan Rafique",
//     isFollow: false,
//     followers: 123,
//     following: 256, 
// };
// console.log(profile)



// Lecture No 2
//Artimetic opraters
// let a = 5;
// let b = 2;
// console.log("a =", a, "&", "b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b); //called Modulus given remanig value
// console.log("a ** b =", a ** b); //called Exponentiation 

//Unary Operater
// let a = 5;
// let b = 2;
// a++;//increment
// b--;//dicrement
// console.log("a =", a);
// console.log("b =", b);

let a = 5;
let b = 2;
// a++;//post increment
// ++a;//pre increment 
// b--;//post dicrement
// --b;//pre dicrement

console.log("a++", a++);
console.log("a", a);
console.log("++a", ++a);

console.log("b--", b--);
console.log("b", b);
console.log("--b", --b);
