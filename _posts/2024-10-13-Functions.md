# 🌟 Functions: Understanding Functions with JavaScript and Scratch

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/functions.jpg" width="100%">

# 🧑‍🍳 **Lesson 1 — Why We Need Functions**

Imagine your code as a busy kitchen. Every time you want to make dough, you rewrite the whole recipe from scratch — flour here, yeast there — what a mess! You’ll waste time, make mistakes, and exhaust yourself.

That’s what coding without **functions** feels like.

Functions are like **recipe cards** — neat, reusable instructions you write once and use again and again.

---

### 💡 Why Functions Matter

1. **Reduce Repetition (DRY — Don’t Repeat Yourself):**
   Functions prevent you from writing the same logic over and over. Update one function, and all your code updates with it.

2. **Encapsulation:**
   Hide complex steps behind a simple name. Your teammates don’t need to know *how* the dough is made — just that `makeDough()` does it.

3. **Abstraction & Naming:**
   Good names like `calculateTax()` or `validateEmail()` make your code read like English.

4. **Reuse & Composition:**
   Build small, tested functions and combine them to make larger features.

5. **Testability:**
   Clear inputs and outputs make it easy to test parts of your program.

6. **Separation of Concerns:**
   Keep different responsibilities (UI, data, logic) in different functions.

---

### 💻 JavaScript Example

**Without functions:**

```js
console.log("Order #1: Total = 200, tax = 40, final = 240");
console.log("Order #2: Total = 150, tax = 30, final = 180");
```

**With a function:**

```js
function calculateFinal(total) {
  const taxRate = 0.2;
  const tax = total * taxRate;
  return { total, tax, final: total + tax };
}
```

Now you just call:

```js
const order1 = calculateFinal(200);
```

---

### 🧩 Scratch Equivalent

In **Scratch**, you can create a **custom block** named
`calculateFinal (total)`
Inside that block, you’d:

* Set `tax = total * 0.2`
* Set `final = total + tax`
* **Report** the `final` value (if you need it) or **broadcast** it.

Now you can reuse that block anytime — just like calling a JavaScript function!

---

### 🧠 Common Tips

* Give each function one job.
* Use clear, action-oriented names (`showMenu()`, `printReceipt()`).
* Smaller is better for reuse and testing.

---

### 🧭 Mini Challenge

Refactor repeated greeting messages into one function:
`function greet(name) { console.log("Hello, " + name); }`

---

### 📝 Fill-in-the-Gap Review

1. Functions are like __________ cards that can be reused.
2. The DRY principle means “__________.”
3. Encapsulation hides the function’s __________ from other parts of the program.
4. Well-named functions serve as natural __________ for your code.
5. Combining small functions to make big ones is called __________.
6. Functions with clear inputs and outputs are easy to __________.
7. Separating UI and logic is known as __________ of concerns.
8. In Scratch, reusable code is made using __________ blocks.
9. In the Scratch block `calculateFinal (total)`, `(total)` represents a __________.
10. Changing one function to update all behavior illustrates the power of __________.

---

# ⚙️ **Lesson 2 — What Is a Function?**

A **function** is a named, reusable block of code that performs one task. It can take **inputs (parameters)** and give back **outputs (return values)**.

Functions are the *building blocks of programs*.

---

### 🎓 Types of Functions

* **Pure functions:** Same inputs → same outputs, no side-effects.
* **Impure functions:** Cause side-effects like printing or changing data.
* **Higher-order functions:** Take or return other functions.

---

### 💻 JavaScript Examples

**Named Function**

```js
function add(a, b) { return a + b; }
```

**Anonymous Function**

```js
const multiply = function(a, b) { return a * b; };
```

**Arrow Function**

```js
const square = x => x * x;
```

**Higher-order Function**

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}
repeat(3, i => console.log(`Run ${i}`));
```

---

### 🧩 Scratch Equivalent

In **Scratch**, when you create a **custom block**, you are defining a function.
Example:
`report sum (a) (b)`

Inside that block, you might do `report (a + b)`.

Scratch doesn’t use text syntax but the idea is identical — reusable logic, optional inputs, and sometimes a reported result.

---

### 🧠 Common Pitfalls

* Remember: `function foo() {}` defines it; `foo()` calls it.
* Keep functions short and focused.
* Watch out for side-effects (they make testing harder).

---

### 🧭 Mini Challenge

Write three versions of a square function: named, anonymous, and arrow.

---

### 📝 Fill-in-the-Gap Review

1. A function is a self-contained __________ of code.
2. Function inputs are called __________.
3. A function sends back data with the __________ statement.
4. A function without side effects is called __________.
5. A function that takes or returns another function is __________.
6. The short syntax for writing functions uses the __________ arrow.
7. In Scratch, functions are created using __________ blocks.
8. A block with input slots in Scratch represents __________.
9. Impure functions usually produce __________ effects.
10. Combining small reusable pieces is known as __________.

---

# 🧩 **Lesson 3 — The Parts of a Function**

Every function has anatomy — let’s take one apart.

```js
function greet(name = "friend") {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}
```

### 🔍 Parts of the Function

* **Keyword:** `function` — declares a function.
* **Name:** `greet` — identifier used to call it.
* **Parameters:** `(name)` — placeholders for inputs.
* **Body:** `{}` — where logic lives.
* **Return:** `return message;` — sends data back.
* **Scope:** Variables like `message` live only inside the function.

---

### ⚙️ Advanced Forms

```js
function sum(...nums) { return nums.reduce((a, n) => a + n, 0); }
function introduce({ name, age = 0 }) { return `${name} is ${age} years old.`; }
```

---

### 🧩 Scratch Equivalent

Scratch **custom block parameters** are just like function parameters.
If you create `introduce (name) (age)` in Scratch, you can use `(name)` and `(age)` inside your block definition.

You can also use **sprite-local variables** (like local scope in JS), meaning only that sprite’s scripts can see them.

---

### 🧭 Mini Challenge

Create `introduce({ name, age })` that returns a sentence.

---

### 📝 Fill-in-the-Gap Review

1. The word `function` begins a function __________.
2. The unique name of a function is its __________.
3. Items inside parentheses are called __________.
4. The code inside curly braces is the function’s __________.
5. `return` sends a __________ back to the caller.
6. Variables inside a function are called __________ variables.
7. A function without a return returns __________.
8. A function inside an object is called a __________.
9. Rest parameters gather many arguments into an __________.
10. In Scratch, parameters appear as __________ on a custom block.

---

# ☎️ **Lesson 4 — Calling a Function**

Defining a function is like writing a recipe.
Calling it is like actually cooking!

---

### 💻 JavaScript Examples

**Direct Call**

```js
function hello() { return "Hi"; }
console.log(hello());
```

**Method Call**

```js
const person = { name: "Ada", greet() { return `Hello, ${this.name}`; } };
console.log(person.greet());
```

**Asynchronous Call**

```js
setTimeout(() => console.log("After 1s"), 1000);
```

---

### ⚖️ Synchronous vs Asynchronous

* **Synchronous:** Code waits for the function to finish.
* **Asynchronous:** Code runs later (via callback or async/await).

---

### 🧩 Scratch Equivalent

When you **run a custom block** in Scratch, it behaves like a **synchronous** call — the script waits until that block finishes.

For **asynchronous behavior**, Scratch uses **broadcast messages**:
One script broadcasts `"startCooking"`, others respond when they’re ready — similar to JavaScript callbacks or events.

---

### 🧭 Mini Challenge

Write a `waitThenLog()` function that prints “Done” after 2 seconds using both `setTimeout()` and `async/await`.

---

### 📝 Fill-in-the-Gap Review

1. Calling a function means executing its __________.
2. `sum(1,2)` is a __________ call.
3. When a function belongs to an object, it’s a __________.
4. The keyword `this` refers to the object that __________ the method.
5. `call()` and `apply()` can change a function’s __________.
6. Code that waits for a function to finish is __________.
7. Code that runs later is __________.
8. In Scratch, a custom block call is __________.
9. Broadcast messages in Scratch act like __________ in JS.
10. Forgetting parentheses means you’re passing a __________, not calling it.

---

# 💬 **Lesson 5 — Functions That Just Do Things (Void Functions)**

Not every function needs to return a value.
Some just **do** things — print, move, change, or trigger actions.

These are called **void functions** or **procedures**.

---

### 💻 JavaScript Examples

```js
function logGreeting(name) {
  console.log(`Hello, ${name}!`);
}
```

```js
const appState = { count: 0 };
function increment() {
  appState.count += 1;
}
```

---

### 🧩 Scratch Equivalent

Most Scratch custom blocks are **procedural** — they don’t report values.
They **perform side-effects**:

* Move sprites
* Play sounds
* Broadcast messages
* Change variables

So, `say [Hello!]` in Scratch acts like `console.log("Hello!")` in JS — a void function.

---

### ⚖️ Best Practices

* Keep side-effects at the program’s edge (UI, I/O).
* Use descriptive names: `updateScore()` not `getScore()`.
* Return a Promise if you need to signal completion.

---

### 🧭 Mini Challenge

Make `toggleLight()` flip a boolean `isOn` and log its new state.

---

### 📝 Fill-in-the-Gap Review

1. A function that performs an action but returns nothing is called __________.
2. Functions that modify UI or print logs have __________.
3. `console.log()` is a classic example of a __________ function.
4. Mutating data is a type of __________ effect.
5. Scratch’s `say []` block corresponds to a JavaScript __________.
6. Broadcasting in Scratch is like sending a __________.
7. Pure functions avoid __________ effects.
8. You can return a Promise to show __________ of a task.
9. Keep side-effects at the __________ of your program.
10. Most Scratch custom blocks are __________, not reporters.

---

# 🧠 **Lesson 6 — Inputs — Pass by Value vs. Pass by Reference**

When passing data into a function, you either pass a **copy** or a **link**.

---

### 💻 JavaScript Examples

**Pass by Value (Primitive)**

```js
function setToHundred(x) { x = 100; }
let a = 50;
setToHundred(a);
console.log(a); // 50
```

**Objects (Reference)**

```js
function addTag(post) {
  post.tags = post.tags || [];
  post.tags.push("new");
}
```

Reassigning doesn’t change the caller, but mutating does.

---

### 🧩 Scratch Equivalent

In Scratch, when you pass **a variable or list** into a custom block:

* If you **change** it inside the block, the change affects the **original** — just like passing by reference.
* Scratch shares the same data reference (not a copy).

So when a block modifies a list, it modifies the same list outside.

---

### ⚖️ Best Practices

* Prefer **immutability** (return new data instead of mutating).
* Use `{ ...obj }` or `Object.assign()` to copy safely.
* Document any intentional mutations.

---

### 🧭 Mini Challenge

Write `addTagImmutable(post, tag)` that returns a new object with the tag added, leaving the original untouched.

---

### 📝 Fill-in-the-Gap Review

1. Primitives in JavaScript are passed by __________.
2. Objects are passed by __________ (technically, by sharing).
3. Changing a primitive inside a function does __________ affect the original.
4. Mutating an object inside a function __________ the caller’s data.
5. Reassigning a parameter affects only the __________ variable.
6. Avoiding mutation is called __________.
7. To make copies of objects, use the __________ operator.
8. Modifying shared data can cause unexpected __________.
9. In Scratch, modifying a list inside a custom block changes the __________ list.
10. Scratch variables behave like JS objects passed by __________.
