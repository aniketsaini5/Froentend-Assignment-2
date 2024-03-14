Qustion 4: Explain the difference between var, let, and const in JavaScript. Discuss the concept of scope as it relates to these declarations and provide examples.

Answer: 
⭐ var: Declares a variable with function scope or global scope if declared outside a function. Variables declared with var can be re-declared and updated within their scope.

⭐ let: Declares a block-scoped variable, limited to the block (statement or expressions) in which it is defined. Variables declared with let can be updated, but not re-declared within their scope.

⭐ const: Declares a block-scoped variable like let, but its value cannot be re-assigned once initialized. However, for objects and arrays declared with const, their properties or elements can be modified.

Example:

javascript
// var example
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs 10, x is accessible outside the if block
}

// let example
function exampleLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Throws an error, y is not defined outside the if block
}

// const example
function exampleConst() {
    const z = 30;
    z = 40; // Throws an error, const variables cannot be reassigned
}
