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

// let a = 5;
// let b = 2;
// // a++;//post increment
// // ++a;//pre increment 
// // b--;//post dicrement
// // --b;//pre dicrement

// console.log("a++", a++);
// console.log("a", a);
// console.log("++a", ++a);

// console.log("b--", b--);
// console.log("b", b);
// console.log("--b", --b);


//Comparison Operator
// let a = 5;
// let b = 2;
// let c = 10;
// let d = "20";
// console.log("5 == 2", a == b); //equals to
// console.log("5 != 2", a != b); //Is not equals to
// console.log("10 === 20", c === d); //strictly equals to
// console.log("10 !== 20", c !== d); //strictly not equals to
// console.log("5 > 2", a > b); //greter then
// console.log("5 < 2", a < b); //less then


//Logical Operater
//Logical && And
// let a = 6;
// let b = 5;
// console.log("cond1 && cond2 =", a > b && a === 6);

// Logical || OR
// let a = 6;
// let b = 5;
// console.log("cond1 || cond2 =", a < b || a === 6);

// ! is not
// let a = 6;
// let b = 5;
// console.log("!(6>5)", !(6>5))


//Conditional Statment
//There are three types of Statments
//If Statment
// let age = 16;
// if (age >= 18){
//     console.log("You are eligible to vote");
// }
// if (age < 18){
//     console.log("You are !!!not eligible... to vote");
// }

//else Statment
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log(color);

//else If Statment
// let mode = "pink";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "blue") {
//     color = "blue";
// }
// else if (mode === "pink") {
//     color = "pink";
// }
// else {
//     color = "grey";
// }
// console.log(color);


//Ternary Operators (? , :)
// let age = 15;
// let result = age >= 18 ? "You are eligible to vote" : "You are !!!not eligible... to vote";
// console.log(result);


// Practice 1 for Lecture 2
// let num = prompt("Enter a number");
// if (num % 5 === 0){
// console.log(num, "is a multiple of 5")
// } else {
//     console.log(num, "is !!NOT... a Multiple of 5")
// }


// Practice 2 for Lecture 2
// let score = prompt("Enter your score");
// if (score >= 101){
//     console.log("This is NOT a correct score")
// }
// else if (score >= 90){
//     console.log("Your Grade is A+");  
// }
// else if (score >= 80){
//     console.log("Your Grade is A");
// }
// else if (score >= 70){
//     console.log("Your Grade is B");
// }
// else if (score >= 60){
//     console.log("Your Grade is C");
// }
// else if (score >= 50){
//     console.log("Your Grade is D");
// }
// else if (score >= 0){
//     console.log("You are !!FALI...");
// }
// else{
//     console.log("This is NOT a correct score")
// }



// Lecture No 3
// Loops 
// for loop
// for (let i = 1; i <= 5; i++){
//     console.log("Apna Karachi");
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum = sum + i;
    
// }
// console.log("sum =", sum); 

//While Loop:
// let i = 1;
// while (i <= 5) {
// console.log("Apna Collage")
// i++;
// }

//Do while loop
// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// }while (i <= 5);

// Practice 1 for Lecture 3
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//     console.log("num =", num)
// } //even number print
// }

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 !== 0) {
//     console.log("num =", num)
// } // odd number print
// }

// Practice 2 for Lecture 3
// let gameNum = 25;
// let userNum = prompt("Guess the game number");
// while (userNum != gameNum){
//     userNum = prompt("You enter wrong number !!Guess again!!")
// }
// document.write("Cogratulation you ...Win...");



// Strings: String length: String indices
// let str = "Rehan"
// console.log(str.length)
// console.log(str[2])



// Template Literals
// let obj = {
//     item: 'Pen',
//     price: 10,
// };
// let outPut = `the cost of ${obj.item} is ${obj.price} Rupees`;
// console.log(outPut);

//Escape caracter
// Line change\n
// console.log("Rehan\nRafique");
// // Tab \t
// console.log("Rehan\tRafique");



// Strings Methods
// toUpperCase
// let str = "Apna Karachi"
// console.log(str.toUpperCase());

// // toLowerCase
// let str1 = "Apna Karachi"
// let newStr = "Apna Karachi"
// console.log(newStr);
// console.log(str1.toLowerCase());

// // trim
// let str2 = "    Apna Karachi    Local   ";
// console.log(str2.trim());

// slice
// let str4 = "Apna Karachi";
// console.log(str4.slice(2, 7));

// concat
// let str1 = "Apna";
// let str2 = "Karachi";
// let res = str1 + str2;
// console.log(res);

// replace
// let str1 = "Apna Karachi"
// console.log(str1.replace('a', 't'));

// charAt
// let str = "Apna Karachi";
// console.log(str.charAt(5));

// Practice 3 for Lecture 3
// let fullName = prompt ("enter your full name without spaces");
// let userName = "@" + fullName + fullName.length;  
// console.log(userName);



// Array
let marks = [96, 86, 72, 52, 38];
console.log (marks);