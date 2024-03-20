// Vanilla JavaScript Function
// function addTwoNumbers (a,b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3,5)
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5)
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines
const returnMultiplLines = () => (
    `<p>
    This is a multiline string.
    </p>`
);
console.log(returnMultiplLines());