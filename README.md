# ES6 Shortcuts for Array/Object Manipulation and Variable Creation

ES6 introduces several features that provide shortcuts for working with arrays and objects, as well as creating variables more elegantly. Some of the prominent features include:

1. **Arrow Functions**: Arrow functions offer a concise syntax for defining functions. They are particularly useful for one-liners and implicit returns, making code more readable.

2. **Spread Operator**: The spread operator (`...`) allows for easy copying of arrays and objects. It simplifies tasks such as combining arrays/objects or creating shallow copies.

3. **Rest Parameter Syntax**: The rest parameter syntax (`...rest`) enables functions to accept variable numbers of arguments. It simplifies handling additional arguments beyond a specified number.

4. **Destructuring**: Destructuring provides a convenient way to extract values from arrays and objects. It allows for assigning values to multiple variables in a single expression.

### Example Usage:

```javascript
// Arrow Functions
const addTwoNumbers = (a, b) => a + b;
let sum = addTwoNumbers(3, 5);

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];

// Rest Parameter Syntax
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

// Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];


## Running the Script

To run the provided JavaScript script, follow these steps:

1. Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. Open a terminal or command prompt.
3. Navigate to the directory where the `destructuring.js` file is located.
4. Run the script using the following command:

```bash
node destructuring.js
