// console check karna ka tariqa
console.log("Apna Karachi");
console.log("I luv javaScript");

// variables can be declared and update. A globle scope variable
var fullName = "Rehan";
var age = 24;
console.log(fullName)
console.log(age)

// let variable cannot be re-declared but can be update. A block scope variable
let name =  "Rehan";
let price = 1000;
name = "Rafique"
console.log(name);
console.log(price)

// const variable cannot be re-declared or update. A block scope variable.
// {} brackets show new blocks
const city = "Karachi";
const country = "Pakistan";
{
    const city = "Lahore";
    console.log(city);
}
console.log(city);
console.log(country);

