# Prime Programmers Hub
## Computer Programming Curriculum
### JSS 1 - JSS 3

---

# JSS 1 CURRICULUM
## FIRST TERM: Values, Types, and Program Structure
### Topic 1: Values and Types

**Objective:** Students will understand what values are and identify different types of values.

**Content:**
- What are values? (Bits and chunks of data)
- Numbers (integers and decimals)
- Strings (text in quotes)
- Boolean values (true and false)
- Empty values (null and undefined)

**Code Example:**
```
// Numbers
13;
9.81;
2.998e8;  // Scientific notation

// Strings
'Down on the sea';
"Lie on the ocean";
`Float on the ocean`;

// Boolean
true;
false;

// Empty values
null;
undefined;
```

**Activity:** Create a program that stores your name (string), age (number), and whether you're a student (boolean).

---

### Topic 2: Arithmetic and Operators

**Objective:** Students will perform calculations using arithmetic operators.

**Content:**
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Remainder (%) 
- Unary operators (typeof, -)

**Code Example**

```
// Arithmetic
100 + 4 * 11;        // 144
(100 + 4) * 11;      // 1144
314 % 100;           // 14
144 % 12;            // 0

// Unary operators
console.log(typeof 4.5);   // "number"
console.log(typeof "x");   // "string"
console.log(- (10 - 2));   // -8
```

**Activity:** Write expressions to calculate your age in months and days.

---

### Topic 3: Comparison and Logic

**Objective:** Students will compare values and use logical operators.

**Content:**
- Comparison operators (>, <, >=, <=, ==, !=, ===, !==)
- Logical AND (&&)
- Logical OR (||)
- Logical NOT (!)

**Code Example:**
```
// Comparisons
console.log(3 > 2);          // true
console.log(3 < 2);          // false
console.log("Aardvark" < "Zoroaster");  // true

// Logical operators
console.log(true && false);   // false
console.log(false || true);   // true
console.log(!true);           // false

// Strict equality
console.log(5 == "5");        // true (type coercion)
console.log(5 === "5");       // false (strict)
```

**Activity:** Write a program that checks if your age is greater than 10 AND less than 20.

---

### Topic 4: Program Structure and Statements

**Objective:** Students will understand the difference between expressions and statements.

**Content:**
- What is an expression? (Produces a value)
- What is a statement? (A complete sentence)
- The semicolon (ending statements)
- Comments in code

**Code Example:**

```
// Expressions produce values
1;
"hello";
5 + 3;

// Statements are complete instructions
let caught = 5 * 5;  // This is a statement
console.log(caught); // This is a statement

// Comments - from source
let accountBalance = 1000;  // This is a comment
/* This is a multi-line comment
   that can span multiple lines */
```

**Activity:** Identify which lines are expressions and which are statements.

---

### Topic 5: Bindings (Variables)

**Objective:** Students will create and use bindings (variables) to store values.

**Content:**
- What is a binding/variable?
- Creating bindings with let, const, var
- Assigning values to bindings
- Binding names (rules)
- The environment

**Code Example:**

```
// Creating bindings
let caught = 5 * 5;
console.log(caught);  // 25

// Changing bindings
let mood = "light";
console.log(mood);    // light
mood = "dark";
console.log(mood);    // dark

// Constant bindings
const greeting = "Hello ";
console.log(greeting + "World!");

// Multiple bindings
let one = 1, two = 2;
console.log(one + two);  // 3
```

**Activity:** Create bindings for your name, age, and school. Display them using console.log.

---

## SECOND TERM: Control Flow and Loops

---

### Topic 1: Conditional Execution (if/else)

**Objective:** Students will make decisions in programs using if/else statements.

**Content:**
- The if statement
- The else clause
- Chaining conditions
- Blocks and braces

**Code Example:**

```
// Simple if
let theNumber = 5;
if (!Number.isNaN(theNumber)) {
    console.log("Your number is " + theNumber);
}

// if/else
let num = 15;
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}
```

**Activity:** Write a program that checks if a number is even or odd using the remainder operator.

---

### Topic 2: While Loops

**Objective:** Students will use while loops to repeat actions.

**Content:**
- When to use loops
- The while loop structure
- Avoiding infinite loops
- Updating bindings in loops

**Code Example:**

```
// Print even numbers 0 to 12
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// Output: 0, 2, 4, 6, 8, 10, 12

// Calculate 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);  // 1024
```

**Activity:** Use a while loop to print numbers from 10 down to 1.

---

### Topic 3: For Loops

**Objective:** Students will use for loops for counted repetition.

**Content:**
- The for loop structure
- Initialization, condition, update
- When to use for vs while
- Break and continue

**Code Example:**

```
// For loop - even numbers
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

// Finding first number divisible by 7
for (let current = 20; ; current++) {
    if (current % 7 == 0) {
        console.log(current);  // 21
        break;
    }
}

// Shorter update syntax
for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}
```

**Activity:** Write a for loop that prints the first 10 square numbers (1, 4, 9, 16, ...).

---

### Topic 4: Functions (Introduction)

**Objective:** Students will define and call simple functions.

**Content:**
- What is a function? (Wrapping code)
- Defining a function
- Function parameters
- Return values

**Code Example:**

```
// Define a function
const square = function(x) {
    return x * x;
};

console.log(square(12));  // 144

// Function with multiple parameters
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));  // 20

// Function with no parameters
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();  // Pling!
```

**Activity:** Create a function that multiplies two numbers and returns the result.

---

### Topic 5: The Console.log Function

**Objective:** Students will use console.log to output values and debug programs.

**Content:**
- What is console.log?
- Outputting values
- Debugging with console.log
- Return values vs side effects

**Code Example:**

```
// Outputting values
console.log("Hello, World!");
console.log(100 + 50);

// console.log with variables
let name = "Chidi";
console.log("My name is " + name);

// Multiple values in one console.log
console.log("The answer is", 42);

// Debugging example
let total = 0;
let count = 1;
while (count <= 10) {
    total += count;
    console.log("Adding", count, "Total is now", total);
    count += 1;
}
```

**Activity:** Use console.log to debug a program that calculates your age.

---

## THIRD TERM: Functions and Recursion

---

### Topic 1: Function Expressions and Declarations

**Objective:** Students will understand different ways to create functions.

**Content:**
- Function expressions
- Function declarations
- Arrow functions
- Differences between them

**Code Example:**

```
// Function expression
const square1 = function(x) {
    return x * x;
};

// Function declaration (moves to top)
function square2(x) {
    return x * x;
}

// Arrow function (shorter)
const square3 = x => x * x;

console.log(square1(5));  // 25
console.log(square2(5));  // 25
console.log(square3(5));  // 25

// Arrow function with multiple parameters
const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

**Activity:** Write a function using all three styles: expression, declaration, and arrow.

---

### Topic 2: Recursive Functions

**Objective:** Students will solve problems using recursion (functions that call themselves).

**Content:**
- What is recursion?
- Base case and recursive case
- The call stack
- When to use recursion

**Code Example:**

```
// Recursive power function
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 10));  // 1024

// Recursive findSolution (number puzzle)
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));  // (((1 * 3) + 5) * 3)
```

**Activity:** Write a recursive function to calculate factorial (n!).

---

### Topic 3: Scope and Closures

**Objective:** Students will understand variable scope and closures.

**Content:**
- Global vs local scope
- Nested scope (lexical scoping)
- Closures (functions remembering their environment)

**Code Example:**

```
// Local and global scope
let x = 10;  // Global

function test() {
    let y = 20;  // Local to function
    console.log(x);  // Can see global x
    console.log(y);  // Can see local y
}
test();
// console.log(y);  // Error! y is not defined

// Nested scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
};

// Closure example
function wrapValue(n) {
    let local = n;
    return () => local;  // Returns a function that remembers local
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());  // 1
console.log(wrap2());  // 2
```

**Activity:** Write a function that creates a counter (starts at 0, returns the count each time).

---

### Topic 4: Functions as Values

**Objective:** Students will understand that functions can be passed as values.

**Content:**
- Functions are values
- Passing functions to other functions
- Optional arguments
- Default parameters

**Code Example:**
```
// Functions as values
let launchMissiles = function() {
    console.log("Missiles launched!");
};

if (true) {
    launchMissiles = function() {
        console.log("Nothing happens (safe mode)");
    };
}
launchMissiles();

// Optional arguments
function square(x) {
    return x * x;
}
console.log(square(4, true, "hedgehog"));  // 16 (extra args ignored)

// Default parameters
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(roundTo(4.5));    // 5 (step defaults to 1)
console.log(roundTo(4.5, 2)); // 4
```

**Activity:** Write a function that takes another function as an argument and calls it.

---

### Topic 5: Growing Functions

**Objective:** Students will learn how to build programs by growing functions.

**Content:**
- Recognizing repeated code
- Creating helper functions
- Separating concepts
- Side effects vs return values

**Code Example:**

```
// Original: Print farm inventory
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

// Improved: Extract the zero-padding concept
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

**Activity:** Create a function that prints a formatted time (HH:MM:SS) using a helper function.

---

# JSS 2 CURRICULUM

## FIRST TERM: Data Structures - Objects and Arrays

---

### Topic 1: Arrays (Datasets)

**Objective:** Students will use arrays to store collections of values.

**Content:**
- What is an array?
- Creating arrays with square brackets
- Accessing elements by index
- Array length property

**Code Example:**

```
// Creating arrays
let listOfNumbers = [2, 3, 5, 7, 11];

// Accessing elements (0-based index)
console.log(listOfNumbers[0]);   // 2
console.log(listOfNumbers[2]);   // 5
console.log(listOfNumbers[2 - 1]); // 3

// Array length
console.log(listOfNumbers.length); // 5

// Accessing last element
console.log(listOfNumbers[listOfNumbers.length - 1]); // 11
```

**Activity:** Create an array of your 5 favorite subjects and print the first and last ones.

---

### Topic 2: Properties and Methods

**Objective:** Students will access properties and use methods on arrays and strings.

**Content:**
- Properties (dot notation)
- Methods (functions stored in properties)
- String methods (toUpperCase, toLowerCase)
- Array methods (push, pop, includes)

**Code Example:**

```
// String properties and methods
let doh = "Doh";
console.log(doh.toUpperCase());  // "DOH"
console.log(doh.toLowerCase());  // "doh"
console.log(doh.length);         // 3

// Array methods
let sequence = [1, 2, 3];
sequence.push(4);        // [1, 2, 3, 4]
sequence.push(5);        // [1, 2, 3, 4, 5]
console.log(sequence);   // [1, 2, 3, 4, 5]

console.log(sequence.pop());  // 5
console.log(sequence);        // [1, 2, 3, 4]

// includes method
console.log([1, 2, 3].includes(2));  // true
console.log([1, 2, 3].includes(5));  // false
```

**Activity:** Use push and pop to simulate a stack (LIFO data structure).

---

### Topic 3: Objects

**Objective:** Students will create and manipulate objects to group related data.

**Content:**
- Creating objects with braces
- Properties and values
- Accessing properties (dot and bracket notation)
- Adding and changing properties
- The delete operator

**Code Example:**

```
// Creating objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);  // false
console.log(day1.wolf);      // undefined

// Adding properties
day1.wolf = false;
console.log(day1.wolf);      // false

// Object with quoted property names
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

// Delete property
let anObject = {left: 1, right: 2};
delete anObject.left;
console.log("left" in anObject);   // false
console.log("right" in anObject);  // true

// Object.keys
console.log(Object.keys({x: 0, y: 0, z: 2}));  // ["x", "y", "z"]
```

**Activity:** Create an object representing a student (name, age, class, subjects).

---

### Topic 4: Mutability

**Objective:** Students will understand the difference between mutable and immutable values.

**Content:**
- Immutable values (numbers, strings, booleans)
- Mutable values (objects, arrays)
- Object identity vs content
- Shared references

**Code Example:**

```
// Objects are mutable
let object1 = {value: 10};
let object2 = object1;    // Same object
let object3 = {value: 10}; // Different object

console.log(object1 == object2);  // true (same object)
console.log(object1 == object3);  // false (different objects)

// Changing one object affects all references
object1.value = 15;
console.log(object2.value);  // 15
console.log(object3.value);  // 10

// Strings are immutable
let kim = "Kim";
kim.age = 88;
console.log(kim.age);  // undefined (can't add properties to strings)
```

**Activity:** Create two objects with the same content and test if they're equal.

---

### Topic 5: Array Loops

**Objective:** Students will loop through arrays to process data.

**Content:**
- Classic for loop
- for/of loop
- Processing array elements

**Code Example:**

```
// Classic for loop
let JOURNAL = [
    {events: ["work", "pizza"], squirrel: false},
    {events: ["weekend", "cycling"], squirrel: true}
];

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    console.log(entry.events.length, "events");
}

// for/of loop (modern)
for (let entry of JOURNAL) {
    console.log(entry.events.length, "events");
}

// Array methods for iteration
// Using forEach (from source)
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```

**Activity:** Use a for/of loop to print all elements in an array of student names.

---

## SECOND TERM: Advanced Data Structures

---

### Topic 1: More Array Methods

**Objective:** Students will use advanced array methods.

**Content:**
- unshift and shift
- indexOf and lastIndexOf
- slice and concat
- split and join

**Code Example:**

```
// unshift and shift (front operations)
let todoList = [];
todoList.push("groceries");
todoList.push("homework");
console.log(todoList);          // ["groceries", "homework"]
console.log(todoList.shift());  // "groceries"
console.log(todoList);          // ["homework"]

// indexOf and lastIndexOf
console.log([1, 2, 3, 2, 1].indexOf(2));       // 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));   // 3

// slice (copy portion of array)
console.log([0, 1, 2, 3, 4].slice(2, 4));  // [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));     // [2, 3, 4]

// concat (join arrays)
let a = ["a", "b"];
let b = ["c", "d"];
console.log(a.concat(b));  // ["a", "b", "c", "d"]

// split and join
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);  // ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join("."));  // "Secretarybirds.specialize.in.stomping"
```

**Activity:** Write a function that removes an element at a specific index from an array.

---

### Topic 2: Strings and Properties

**Objective:** Students will manipulate strings using built-in methods.

**Content:**
- String length
- String slice and indexOf
- trim, padStart
- repeat
- Accessing characters with []

**Code Example:**

```
// String methods
console.log("coconuts".slice(4, 7));  // "nut"
console.log("coconut".indexOf("u"));  // 5

// Searching for multi-character strings
console.log("one two three".indexOf("ee"));  // 11

// trim (remove whitespace)
console.log(" okay \n ".trim());  // "okay"

// padStart (zero padding)
console.log(String(6).padStart(3, "0"));  // "006"

// repeat
console.log("LA".repeat(3));  // "LALALA"

// Accessing characters
let string = "abc";
console.log(string.length);  // 3
console.log(string[1]);      // "b"
```

**Activity:** Write a function that capitalizes the first letter of a word.

---

### Topic 3: Rest Parameters and Math

**Objective:** Students will use rest parameters and the Math object.

**Content:**
- Rest parameters (...)
- The Math object
- Math.random, Math.floor
- Math.max, Math.min

**Code Example:**

```
// Rest parameters
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));  // 9

// Spread operator with arrays
let numbers = [5, 1, 7];
console.log(max(...numbers));  // 7

// Math object
console.log(Math.max(2, 4));    // 4
console.log(Math.min(2, 4));    // 2
console.log(Math.sqrt(144));    // 12
console.log(Math.PI);           // 3.14159...

// Random numbers
console.log(Math.random());  // Random between 0 and 1
console.log(Math.floor(Math.random() * 10));  // 0-9
```

**Activity:** Write a function that picks a random element from an array.

---

### Topic 4: Destructuring

**Objective:** Students will extract values from arrays and objects using destructuring.

**Content:**
- Array destructuring
- Object destructuring
- Using destructuring in function parameters

**Code Example:**

```
// Array destructuring
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
           Math.sqrt((n10 + n11) * (n00 + n01) *
                     (n01 + n11) * (n00 + n10));
}

// Object destructuring
let {name} = {name: "Faraji", age: 23};
console.log(name);  // "Faraji"

// Destructuring in loops
let journal = [
    {events: ["work"], squirrel: false},
    {events: ["weekend"], squirrel: true}
];

for (let {events, squirrel} of journal) {
    console.log(`Events: ${events}, Squirrel: ${squirrel}`);
}
```

**Activity:** Use destructuring to extract values from a student object.

---

### Topic 5: JSON

**Objective:** Students will convert data to and from JSON format.

**Content:**
- What is JSON?
- JSON.stringify
- JSON.parse
- JSON vs JavaScript objects

**Code Example:**

```
// Converting to JSON
let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}

// Converting from JSON
console.log(JSON.parse(string).events);
// → ["weekend"]

// Real-world example
let student = {name: "Chidi", age: 14, subjects: ["Math", "Science"]};
let jsonData = JSON.stringify(student);
console.log(jsonData);

let parsedStudent = JSON.parse(jsonData);
console.log(parsedStudent.name);  // "Chidi"
```

**Activity:** Create a student object, convert it to JSON, then parse it back.

---

## THIRD TERM: Higher-Order Functions

---

### Topic 1: Abstraction and Repetition

**Objective:** Students will understand abstraction and how to use functions to avoid repetition.

**Content:**
- What is abstraction?
- Abstracting repetition with functions
- Passing functions as arguments

**Code Example:**

```
// Without abstraction - repeated code
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// With abstraction
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// Even better: pass the action as a function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);  // 0, 1, 2

// Creating function on the spot
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);  // ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

**Activity:** Write a repeat function that prints "Hello" N times.

---

### Topic 2: Higher-Order Functions

**Objective:** Students will create and use functions that operate on other functions.

**Content:**
- What are higher-order functions?
- Functions that create functions
- Functions that change functions
- Functions that provide control flow

**Code Example:**

```
// Function that creates functions
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));  // true

// Function that changes functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1], returned 1

// Function that provides control flow
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
// 0 is even
// 2 is even
```

**Activity:** Write a function that logs a message before and after calling another function.

---

### Topic 3: Filtering Arrays

**Objective:** Students will use filter to select elements from arrays.

**Content:**
- What is filtering?
- The filter method
- Creating custom filter functions

**Code Example:**

```
// Custom filter function
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// Using filter on a dataset
let SCRIPTS = [
    {name: "Latin", living: true},
    {name: "Cyrillic", living: true},
    {name: "Egyptian", living: false}
];

let livingScripts = filter(SCRIPTS, script => script.living);
console.log(livingScripts);
// → [{name: "Latin", living: true}, {name: "Cyrillic", living: true}]

// Using built-in filter
console.log(SCRIPTS.filter(s => s.living));
```

**Activity:** Filter an array of numbers to get only even numbers.

---

### Topic 4: Transforming with Map

**Objective:** Students will use map to transform array elements.

**Content:**
- What is mapping?
- The map method
- Creating custom map functions

**Code Example:**

```
// Custom map function
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let SCRIPTS = [
    {name: "Latin", year: 0},
    {name: "Cyrillic", year: 500},
    {name: "Egyptian", year: -3000}
];

// Extract names
let rtlScripts = SCRIPTS.filter(s => s.year < 0);
let names = map(rtlScripts, s => s.name);
console.log(names);  // ["Egyptian"]

// Using built-in map
console.log(SCRIPTS.map(s => s.name));
// → ["Latin", "Cyrillic", "Egyptian"]
```

**Activity:** Use map to convert an array of numbers to their squares.

---

### Topic 5: Reducing Arrays

**Objective:** Students will use reduce to combine array elements into a single value.

**Content:**
- What is reducing?
- The reduce method
- Combining values
- Real-world examples

**Code Example:**

```
// Custom reduce
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

// Summing with reduce
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));  // 10

// Built-in reduce (without start)
console.log([1, 2, 3, 4].reduce((a, b) => a + b));  // 10

// Finding largest script
let SCRIPTS = [
    {name: "Latin", ranges: [[0, 26]]},
    {name: "Han", ranges: [[0, 89000]]},
    {name: "Cyrillic", ranges: [[0, 33]]}
];

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

let largest = SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
});
console.log(largest.name);  // "Han"
```

**Activity:** Use reduce to find the sum of all numbers in an array.

---

# JSS 3 CURRICULUM

## FIRST TERM: Objects and Object-Oriented Programming

---

### Topic 1: Methods and This

**Objective:** Students will use methods and understand the this keyword.

**Content:**
- What are methods? (Functions as properties)
- The this keyword
- Methods in objects
- Arrow functions and this

**Code Example:**

```
// Simple method
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'

hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'

// Using call to set this explicitly
speak.call(whiteRabbit, "Hurry");
// → The white rabbit says 'Hurry'

// Arrow functions don't bind this
let finder = {
    find(array) {
        return array.some(v => v == this.value);
    },
    value: 5
};
console.log(finder.find([4, 5]));  // true
```

**Activity:** Create an object with a method that uses this to access its properties.

---

### Topic 2: Prototypes

**Objective:** Students will understand prototypes and prototypal inheritance.

**Content:**
- What is a prototype?
- Object.getPrototypeOf
- Object.create
- The prototype chain

**Code Example:**

```
// Every object has a prototype
let empty = {};
console.log(empty.toString);  // function toString()...
console.log(empty.toString());  // [object Object]

// Getting the prototype
console.log(Object.getPrototypeOf({}) == Object.prototype);  // true
console.log(Object.getPrototypeOf(Object.prototype));  // null

// Array prototype
console.log(Object.getPrototypeOf([]) == Array.prototype);  // true

// Creating objects with a prototype
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'
```

**Activity:** Create a prototype for a "Book" object and use it to create multiple books.

---

### Topic 3: Classes

**Objective:** Students will create classes using the class syntax.

**Content:**
- The class keyword
- Constructor
- Methods
- Class expressions

**Code Example:**

```
// Class declaration
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I will destroy you!");
// → The killer rabbit says 'I will destroy you!'

// Class expression
let object = new class {
    getWord() {
        return "hello";
    }
};
console.log(object.getWord());  // "hello"

// Pre-2015 style (function constructor)
function ArchaicRabbit(type) {
    this.type = type;
}
ArchaicRabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
```

**Activity:** Create a Student class with name, age, and a method to introduce themselves.

---

### Topic 4: Private Properties

**Objective:** Students will use private properties to encapsulate data.

**Content:**
- Private properties (# notation)
- Encapsulation
- Public vs private
- Private methods

**Code Example:**

```
// Private properties
class SecretiveObject {
    #getSecret() {
        return "I ate all the plums";
    }
    interrogate() {
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

let secret = new SecretiveObject();
console.log(secret.interrogate());  // "never"
// console.log(secret.#getSecret());  // Error!

// Private instance property
class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}

let source = new RandomSource(10);
console.log(source.getNumber());  // 0-9
```

**Activity:** Create a BankAccount class with private balance and public deposit/withdraw methods.

---

### Topic 5: Overriding and Maps

**Objective:** Students will override properties and use the Map class.

**Content:**
- Overriding properties
- The in operator
- The Map class
- Polymorphism

**Code Example:**

```
// Overriding properties
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);  // "small"

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);  // "long, sharp, and bloody"
console.log((new Rabbit("basic")).teeth);  // "small"

// Map class (safer than objects)
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(ages.get("Júlia"));  // 62
console.log(ages.has("toString"));  // false

// Object.hasOwn (ignore prototype)
console.log(Object.hasOwn({x: 1}, "x"));  // true
console.log(Object.hasOwn({x: 1}, "toString"));  // false
```

**Activity:** Use a Map to store student names and their scores.

---

## SECOND TERM: Project - A Robot

---

### Topic 1: Graphs and Roads

**Objective:** Students will represent road networks as graphs.

**Content:**
- What is a graph?
- Building graphs from data
- Representing connections
- The buildGraph function

**Code Example:**

```
// Road data
const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

// Build graph function
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (from in graph) {
            graph[from].push(to);
        } else {
            graph[from] = [to];
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

let roadGraph = buildGraph(roads);
console.log(roadGraph["Alice's House"]);
// → ["Bob's House", "Cabin", "Post Office"]
```

**Activity:** Draw a graph representing your school's classroom connections.

---

### Topic 2: Village State

**Objective:** Students will model state with immutable objects.

**Content:**
- State objects
- Immutable data
- The VillageState class
- Moving between states

**Code Example:**

```
// VillageState class
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// Example usage
let first = new VillageState("Post Office", [
    {place: "Post Office", address: "Alice's House"}
]);
let next = first.move("Alice's House");
console.log(next.place);        // "Alice's House"
console.log(next.parcels);      // []
console.log(first.place);       // "Post Office" (unchanged)
```

**Activity:** Create a state representing a robot at a location with parcels.

---

### Topic 3: Simulation

**Objective:** Students will simulate robot movement in a virtual world.

**Content:**
- The runRobot function
- Random robots
- Tracking robot memory
- Random parcel generation

**Code Example:**

```
// Random pick
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// Random robot
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

// Create random parcels
VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

// Run robot
function runRobot(state, robot) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state);
        state = state.move(action.direction);
    }
}

runRobot(VillageState.random(), randomRobot);
```

**Activity:** Create a robot that follows a fixed route.

---

### Topic 4: Route-Finding

**Objective:** Students will implement a route-finding algorithm.

**Content:**
- The findRoute function
- Breadth-first search
- Goal-oriented robot
- Pathfinding

**Code Example:**

```
// Find shortest route
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

// Goal-oriented robot
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// Test the robot
let state = VillageState.random();
runRobot(state, goalOrientedRobot);
```

**Activity:** Modify the robot to find the shortest route for all parcels.

---

### Topic 5: Robot Efficiency

**Objective:** Students will measure and improve robot efficiency.

**Content:**
- Comparing robots
- Measuring performance
- Optimizing algorithms
- Persistent data structures

**Code Example:**

```
// Compare robots
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += runRobot(state, robot1, memory1);
        total2 += runRobot(state, robot2, memory2);
    }
    console.log(`Robot 1 average: ${total1 / 100}`);
    console.log(`Robot 2 average: ${total2 / 100}`);
}

// Persistent group (from exercise)
class PGroup {
    constructor(members) {
        this.members = members;
    }
    add(value) {
        if (this.has(value)) return this;
        return new PGroup(this.members.concat([value]));
    }
    delete(value) {
        if (!this.has(value)) return this;
        return new PGroup(this.members.filter(v => v !== value));
    }
    has(value) {
        return this.members.includes(value);
    }
    static empty = new PGroup([]);
}

let group = PGroup.empty.add("a").add("b");
console.log(group.has("a"));  // true
console.log(group.has("c"));  // false
```

**Activity:** Improve the goalOrientedRobot to be more efficient.

---

## THIRD TERM: Bugs, Errors, and RegEx

---

### Topic 1: Strict Mode and Types

**Objective:** Students will use strict mode and understand types.

**Content:**
- Strict mode ("use strict")
- Type checking
- Function annotations
- TypeScript mention

**Code Example:**

```
// Strict mode
"use strict";

function canYouSpotTheProblem() {
    // counter is not declared with let/var
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
// canYouSpotTheProblem();  // ReferenceError

// Strict mode with constructors
function Person(name) {
    this.name = name;
}
// let ferdinand = Person("Ferdinand");  // TypeError in strict mode

// Type annotations (comments)
// (graph: Object, from: string, to: string) => string[]
function findRoute(graph, from, to) {
    // ...
}
```

**Activity:** Enable strict mode and identify errors in your code.

---

### Topic 2: Debugging and Testing

**Objective:** Students will debug programs and write simple tests.

**Content:**
- Debugging techniques
- console.log for debugging
- Breakpoints
- Writing tests

**Code Example:**

```
// Test function
function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}

// Writing tests
test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

// Debugging example
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        console.log("Debug: n =", n, "result =", result);  // Debug output
        n = Math.floor(n / base);  // Fixed: use Math.floor
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));  // "13"
```

**Activity:** Debug a program with logical errors using console.log.

---

### Topic 3: Error Propagation and Exceptions

**Objective:** Students will handle errors using try/catch/throw.

**Content:**
- Error propagation
- Throwing exceptions
- Try/catch blocks
- Finally blocks

**Code Example:**

```
// Error with special return value
function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
}

// Error with exceptions
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

// Try/catch
try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}

// Finally block
function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}
```

**Activity:** Write a program that handles division by zero with try/catch.

---

### Topic 4: Regular Expressions Introduction

**Objective:** Students will create and use regular expressions for pattern matching.

**Content:**
- Creating regular expressions
- Testing matches
- Character sets
- Repeating patterns
- Groups

**Code Example:**

```
// Creating regex
let re1 = new RegExp("abc");
let re2 = /abc/;

// Testing
console.log(/abc/.test("abcde"));   // true
console.log(/abc/.test("abxde"));   // false

// Character sets
console.log(/[0123456789]/.test("in 1992"));  // true
console.log(/[0-9]/.test("in 1992"));         // true

// Shortcuts
// \d = digit, \w = word character, \s = whitespace
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));  // true

// Repetition
console.log(/'\d+'/.test("'123'"));  // true
console.log(/'\d+'/.test("''"));     // false

// Optional
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));  // true
console.log(neighbor.test("neighbor"));   // true

// Groups
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));  // true
```

**Activity:** Create a regex that matches Nigerian phone numbers.

---

### Topic 5: Advanced Regular Expressions

**Objective:** Students will use advanced regex features for text processing.

**Content:**
- Matching and groups
- Exec method
- Replace with regex
- Greedy vs non-greedy
- Parsing with regex

**Code Example:**

```
// Match and groups
let match = /\d+/.exec("one two 100");
console.log(match);        // ["100"]
console.log(match.index);  // 8

// Groups in regex
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

// Replace
console.log("papa".replace("p", "m"));           // "mapa"
console.log("Borobudur".replace(/[ou]/g, "a"));  // "Barabadar"

// Using groups in replace
let names = "Liskov, Barbara\nMcCarthy, John";
console.log(names.replace(/(\w+), (\w+)/g, "$2 $1"));
// → "Barbara Liskov\nJohn McCarthy"

// Greedy vs non-greedy
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → "1 + 1"

// Parsing INI files
function parseINI(string) {
    let result = {};
    let section = result;
    for (let line of string.split(/\r?\n/)) {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if (!/^\s*(;|$)/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    }
    return result;
}
```

**Activity:** Use regex to extract all email addresses from a text.

---

## COMPLETE SUMMARY TABLE

All programming concepts, code examples, and explanations are **directly from "Eloquent JavaScript"** (4th Edition) by Marijn Haverbeke.

| Grade | Term | Topics | Source Chapters |
|-------|------|--------|-----------------|
| **JSS 1** | 1st | Values, Types, Operators, Bindings | Chapters 1-2 |
| | 2nd | Control Flow, Loops, Functions | Chapters 2-3 |
| | 3rd | Function Expressions, Recursion, Scope | Chapter 3 |
| **JSS 2** | 1st | Arrays, Properties, Objects, Mutability | Chapter 4 |
| | 2nd | Array Methods, Strings, Rest, Destructuring, JSON | Chapter 4 |
| | 3rd | Higher-Order Functions (Filter, Map, Reduce) | Chapter 5 |
| **JSS 3** | 1st | Methods, Prototypes, Classes, Private Properties | Chapter 6 |
| | 2nd | Robot Project (Graphs, State, Pathfinding) | Chapter 7 |
| | 3rd | Strict Mode, Debugging, Exceptions, Regular Expressions | Chapters 8-9 |

**Credit: [Agunechemba Ekene](https://agunechemba.name.ng/)**