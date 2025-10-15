# 🌟 Functions: Undersatnding Functions with JavaScript and Scratch

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/functions.jpg" width="100%">

# Lesson 1 — Why We Need Functions

Think of your program as a busy kitchen. If every time you want to make dough you rewrite the recipe from scratch, the kitchen gets messy, you make more mistakes, and it takes forever. Functions are the recipe cards you write once and reuse.

**why functions matter**

* **Reduce repetition (DRY — Don’t Repeat Yourself):** One definition of maintainable code is “change one place to change everything.” If you need to change how you greet users, you want one place to edit, not a dozen repeated console.log lines.
* **Encapsulation:** Functions let you hide the internal steps of a task behind a name. The rest of your program only needs to know *what* the function does, not *how* it does it. That makes reasoning about the program far easier.
* **Abstraction & Naming:** A well-named function (`calculateTax`, `renderMenu`, `validateEmail`) becomes documentation. Reading code becomes reading high-level steps.
* **Reuse & Composition:** Small functions can be combined to build larger features. This reduces bugs because tested small pieces are easier to trust.
* **Testability:** Functions with clear inputs and outputs are straightforward to unit test. That’s how real projects stay stable.
* **Separation of concerns:** Functions let you separate UI, data handling, and business rules. This keeps your code modular and easier to refactor.

**JavaScript example — before vs after**

```javascript
// Without functions: repeated code, harder to update
console.log("Order #1: Total = 200, tax = 40, final = 240");
console.log("Order #2: Total = 150, tax = 30, final = 180");
// ... many more lines

// With a function: single place to change tax logic
function calculateFinal(total) {
  const taxRate = 0.20; // 20%
  const tax = total * taxRate;
  return { total, tax, final: total + tax };
}

const order1 = calculateFinal(200);
console.log(`Order #1: Total = ${order1.total}, tax = ${order1.tax}, final = ${order1.final}`);
```

**Scratch equivalent**
Create a custom block named `calculateFinal (total)` that computes `tax = total * 0.2`, `final = total + tax`, then `report final` or broadcast the values. Use it wherever you need final totals.

**Common pitfalls & tips**

* Don’t make functions do too many unrelated things—aim for a single responsibility.
* Name functions with verbs: `fetchUser`, `saveScore`, `formatDate`.
* Small functions are easier to test and reuse.

**Mini challenge**
Refactor a block of repeated code in a small script into a single function. Replace three repeated greeting or logging lines with one function call.

---

# Lesson 2 — What is a Function?

A **function** is a named, self-contained block of code that performs a specific task. It may accept inputs (parameters), may produce an output (return value), and has internal steps (the body). Functions are first-class citizens in JavaScript — meaning you can store them in variables, pass them around, return them from other functions, and use them as data.

Functions serve many roles:

* **Pure functions:** Given the same inputs, always produce the same outputs and have no side-effects (ideal for predictability).
* **Impure functions (procedures):** May cause side-effects like modifying global state, writing to the console, or changing a DOM element.
* **Higher-order functions:** Functions that take other functions as arguments or return functions (important in functional patterns).

**JavaScript examples**

1. **Simple named function**

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

2. **Anonymous function stored in a variable**

```javascript
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20
```

3. **Arrow function (concise modern syntax)**

```javascript
const square = x => x * x;
console.log(square(6)); // 36
```

4. **Higher-order function**

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}
repeat(3, i => console.log(`Run ${i}`));
```

**Scratch equivalent**
Scratch’s custom blocks are functions. You define a block like `report sum (a) (b)` and inside use `report (a + b)`. Scratch blocks are always callable by name and can accept inputs via block inputs.

**Common pitfalls & tips**

* Understand the difference between *defining* a function and *calling* it. `function foo() {}` defines it; `foo()` calls it.
* Be cautious with side-effects when you want pure behavior (easier to reason about and test).
* Prefer small, focused functions. Combine them when needed.

**Mini challenge**
Write three different versions of a function that returns the square of a number: a named function, an anonymous one assigned to a variable, and an arrow function.

---

# Lesson 3 — The Parts of a Function

Using this JavaScript function:

```javascript
function greet(name = "friend") {
  // parameter: name (with a default)
  const message = `Hello, ${name}!`; // local variable inside the body
  console.log(message); // side-effect: writing to console
  return message; // return value
}
```

* **Keyword / Declaration:** `function` (or `const greet = ...` for function expressions). Tells the engine you are defining behavior. In ES6 you can also use `class`-like syntax for methods.
* **Name:** `greet` — identifier used to reference the function.
* **Parameters:** `(name)` — placeholders for inputs. You can have none, one, or many. Parameters can have default values (`name = "friend"`).
* **Function Body:** code inside `{}` — this is the procedure. Variables declared here are local (scoped to the function).
* **Return statement:** `return message;` — sends a value back to the caller. If missing, the function returns `undefined` (in JS).
* **Local variables / scope:** `const message` is not visible outside the function.
* **Side effects:** `console.log` modifies external environment — be aware of them.

**Advanced parts**

* **Rest parameters:** `function sum(...nums) {}` collects many values into an array.
* **Default parameters:** `function f(a = 1) {}` sets defaults.
* **Destructuring parameters:** `function show({name, age}) {}` accepts an object and extracts fields.
* **Method vs. function:** When inside an object `obj.do = function(){}`, `this` behaves differently (method context).

**JavaScript examples — advanced parameter forms**

```javascript
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}

function introduce({ name, age = 0 }) {
  return `${name} is ${age} years old.`;
}

console.log(sum(1,2,3)); // 6
console.log(introduce({ name: "Ada", age: 28 }));
```

**Scratch equivalent mapping**

* Parameter slots on a custom block = parameters in JS.
* Local variables are variables you create inside the block’s definition (Scratch supports variables that are global or local to a sprite; use sprite-local variables to mimic local scope).
* Scratch blocks can’t return complex values the same way JS does—use `report` blocks in custom blocks to return a value.

**Common pitfalls & tips**

* Don’t overuse global variables. Prefer passing data via parameters and returning results.
* If a function returns nothing (void), don’t expect a usable value when you call it.
* Use defaults and rest parameters for flexible APIs.

**Mini challenge**
Create a function `introduce` that accepts an object with `name` and optional `age`, and returns a sentence. Try the same in Scratch using a custom block and sprite variables.

---

# Lesson 4 — Calling a Function

Knowing how to call functions—synchronously, asynchronously, with different contexts—is crucial.

Calling a function means executing its body. Calls can be:

* **Direct calls:** `sum(1,2)`.
* **Method calls:** `obj.method()` — `this` refers to `obj`.
* **Indirect calls:** `func.call(context, arg1)` or `func.apply(context, argsArray)` — control `this`.
* **Asynchronous calls:** A function used as a callback in `setTimeout`, promises, or `async/await`.

**Synchronous vs asynchronous calls**

* **Synchronous:** Execution waits until the call completes. `const r = add(2,3);` — the next line uses `r`.
* **Asynchronous:** The call initiates work that completes later (e.g., network request). You handle results with callbacks, promises, or `async/await`.

**JavaScript examples**

1. **Direct call**

```javascript
function hello() { return "Hi"; }
console.log(hello()); // "Hi"
```

2. **Method call & `this`**

```javascript
const person = {
  name: "Ada",
  greet() { return `Hello, ${this.name}`; }
};
console.log(person.greet()); // Hello, Ada
```

3. **call / apply (changing context)**

```javascript
function say() { console.log(`I am ${this.name}`); }
say.call({ name: "Tunde" }); // I am Tunde
```

4. **Asynchronous: callback**

```javascript
setTimeout(() => console.log("After 1s"), 1000);
```

5. **Async/await**

```javascript
async function fetchData() {
  const res = await fetch("/api/data"); // returns a promise
  const json = await res.json();
  return json;
}
```

**Scratch equivalent**

* Calling a custom block is like a synchronous function call: the script pauses until the block finishes.
* For asynchronous behavior in Scratch, use broadcasts: broadcast a message, let other scripts respond over time.

**Common pitfalls & tips**

* Don’t forget to include parentheses when calling: `foo` (reference) vs `foo()` (call). Passing `foo` without `()` is useful for callbacks but it’s not a call.
* For asynchronous flows, prefer Promises / `async` functions over nested callbacks to avoid “callback hell.”
* Be careful with `this` — arrow functions do not have their own `this`.

**Mini challenge**
Write a function that logs "Done" after 2 seconds using both `setTimeout` (callback) and `async/await` with a helper `sleep` function.

---

# Lesson 5 — Functions That Just Do Things (Void Functions)

Some functions exist solely to cause effects: update UI, print logs, mutate an object. These are called procedures or void functions.

A **void function** carries out operations but does not return a meaningful value to the caller. Their primary purpose is **side-effects**. This is common and necessary—your app must interact with users and systems—but side-effects make programs harder to reason about, so balance is important.

**When are void functions appropriate?**

* Performing I/O: writing to console, modifying DOM, playing audio.
* Updating application state: setting a global variable, changing an object property.
* Triggering external behavior: sending network requests (the function may still return a Promise even if it causes side-effects).

**JavaScript examples**

1. **Pure void function**

```javascript
function logGreeting(name) {
  console.log(`Hello, ${name}!`); // side-effect
  // no return -> undefined
}
logGreeting("Ada");
```

2. **Void with state change**

```javascript
const appState = { count: 0 };
function increment() {
  appState.count += 1; // mutates shared state
}
increment();
console.log(appState.count); // 1
```

3. **Void but returns a Promise**
   Sometimes a function triggers side-effects but returns a Promise to indicate completion:

```javascript
function sendData(data) {
  return fetch("/endpoint", { method: "POST", body: JSON.stringify(data) });
}
// sendData causes network activity (side-effect) but returns a promise
```

**Scratch equivalent**
Most Scratch custom blocks are procedural — they move sprites, change variables, or display text. Use `broadcast` and scripts responding to messages for global side-effects.

**Best practices**

* Limit side-effects to the edge of your system (UI, I/O). Keep business logic pure when possible.
* If a function mutates data, document it or use a name that implies mutation: `updateScore` instead of `getScore`.
* Consider returning status or promise when the caller needs to know completion.

**Mini challenge**
Create a `toggleLight` function that flips a boolean `isOn` variable and logs the new state. Then rewrite it to return the new state.

---

# Lesson 6 — Inputs — Pass by Value vs. Pass by Reference

When you pass something to a function, the function receives either a *copy* of the value (pass-by-value) or a *reference* to the same underlying object (reference semantics). JavaScript’s behavior:

* **Primitives (numbers, strings, booleans, `null`, `undefined`, Symbols, BigInt)** are passed by **value**. The function receives a copy; changing it inside does not affect the original variable.
* **Objects (objects, arrays, functions)** are passed as **references** to the same object. The reference itself is passed by value (i.e., you can’t swap the caller’s variable to a new object by reassigning the parameter), but you can mutate the object the reference points to, and the mutation is visible to the caller.

**Important nuance**
Even though objects are often described as “passed by reference,” be precise: JS passes a *copy of the reference* (sometimes called pass-by-sharing). Reassigning the parameter to a new object does not change the caller’s variable; mutating the referenced object does.

**JavaScript examples**

1. **Pass-by-value (primitive)**

```javascript
function setToHundred(x) {
  x = 100;
}
let a = 50;
setToHundred(a);
console.log(a); // 50 — unchanged
```

2. **Objects (reference semantics)**

```javascript
function addTag(post) {
  post.tags = post.tags || [];
  post.tags.push("new");
}

const blog = { title: "Post", tags: ["intro"] };
addTag(blog);
console.log(blog.tags); // ["intro", "new"] — mutated
```

3. **Reassigning parameter vs mutating**

```javascript
function replaceObj(o) {
  o = { replaced: true }; // reassigns local parameter only
}
const obj = { original: true };
replaceObj(obj);
console.log(obj); // still { original: true }

function mutateObj(o) {
  o.newProp = 123; // mutates the passed object
}
mutateObj(obj);
console.log(obj); // { original: true, newProp: 123 }
```

**Scratch equivalent**
Scratch variables and lists behave like references when you pass them into custom blocks: modifying a list inside a block changes the same list outside. Sprites and stage-level variables are global—so changes are visible everywhere.

**Best practices**

* Prefer immutability for pure functions: return new objects instead of mutating inputs. This avoids surprising side-effects.
* If you must mutate, do it intentionally and document it.
* Use helper libraries or patterns (like `Object.assign({}, obj, { added: true })` or spread `{ ...obj, x: 1 }`) to create new objects instead of mutating.

**Mini challenge**
Write a function `addTagImmutable(post, tag)` that returns a new object with the tag added, leaving the original `post` unchanged.

---

## Final: 10 Review Fill-Gap Questions

Fill each blank with the most appropriate word or short phrase.

1. A __________ is a named, reusable block of code that performs a single task.
2. In JavaScript, you use the keyword __________ to define a traditional named function.
3. The placeholders inside a function definition that receive input values are called __________.
4. A function that performs actions but does not return a value is often called a __________ function.
5. When a function returns a value to its caller, it uses the __________ statement.
6. Primitive values like numbers and strings in JavaScript are passed into functions by __________.
7. Objects and arrays are passed to functions as a __________ to the same underlying data (often described as pass-by-__________).
8. Reassigning a parameter inside a function does not change the caller’s variable because JavaScript passes a copy of the __________.
9. A function that accepts another function as an argument or returns a function is called a __________-order function.
10. To avoid unexpected changes to input objects, prefer returning a __________ object instead of mutating the original.
