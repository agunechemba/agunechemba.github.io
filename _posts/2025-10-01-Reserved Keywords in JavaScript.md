# 📚 Reserved Keywords in JavaScript: The Untouchable Words of JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/02/js-reserved.png" width="100%">

Imagine you’re playing football on a school field. There are some areas you just can’t enter — like the teachers’ stand or the referee’s zone. No matter how much you want to, those spaces are **off-limits**.

That’s exactly how **reserved keywords** work in JavaScript. They are special words that the language itself uses, so programmers cannot use them as names for variables, functions, or identifiers.

If you try, JavaScript will blow the whistle 🚨 and throw an error.

---

## 🏷️ What Are Reserved Keywords?

Reserved keywords are **predefined words** that have a fixed meaning in the JavaScript language.

For example:

```javascript
let let = 5;   // ❌ Error: "let" is reserved
```

Here, `let` is already used by JavaScript to declare variables. Trying to use it as a variable name confuses the engine.

---

## 🔑 Categories of Reserved Keywords

Reserved words in JavaScript can be grouped into categories depending on how they are used.

---

### 1. **Current JavaScript Keywords**

These are words we use every day in modern JavaScript. They control logic, structure, and behavior.

Examples:

* **Declarations**: `var`, `let`, `const`, `function`, `class`
* **Control flow**: `if`, `else`, `switch`, `case`, `default`, `do`, `while`, `for`, `break`, `continue`
* **Error handling**: `try`, `catch`, `finally`, `throw`
* **Specials**: `return`, `new`, `delete`, `typeof`, `instanceof`, `this`, `super`

---

### 2. **Future Reserved Words**

ECMAScript (the standard for JavaScript) keeps aside certain words for possible future use. You shouldn’t use them either, even if they don’t do anything yet.

Examples:
`enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`, `static`, `yield`

---

### 3. **Strict Mode Reserved Words**

When you use **strict mode** (`"use strict";`), JavaScript becomes extra strict and protects certain words.

Reserved in strict mode:
`let`, `static`, `implements`, `interface`, `package`, `private`, `protected`, `public`

---

### 4. **Null, Boolean, and Literals**

You also cannot use certain literal values as names:

* `null`
* `true`, `false`

---

## 🛑 Why Should You Care?

1. **Avoid Errors**
   If you mistakenly use reserved words as identifiers, your program will crash.

```javascript
const class = "JSS3"; // ❌ SyntaxError
```

2. **Future-Proofing**
   Even if some reserved words aren’t active now, future JavaScript versions may use them. So avoid them entirely.

3. **Clarity**
   Reserved keywords have strong meanings in the language. Using them wrongly makes your code confusing to read.

---

## ✅ Best Practices

* Always choose descriptive names: e.g., use `studentName` instead of `class`.
* Use code editors or linters (like ESLint) — they’ll highlight reserved words when misused.
* Stay updated with ECMAScript changes, as some new reserved words might be added in future.

---

## 📝 Review – Fill in the Gaps

1. Reserved keywords are special words that cannot be used as ______ names in JavaScript.
2. The word `let` is used to declare a ______ in JavaScript.
3. Using `class` as a variable name will cause a ______ error.
4. Words like `enum`, `package`, and `public` are ______ reserved for future use.
5. When `"use strict";` is enabled, JavaScript blocks even more ______ words.
6. The values `true`, `false`, and `null` are examples of ______ that cannot be used as identifiers.
7. Reserved words like `if`, `else`, and `switch` are used in controlling program ______.
8. JavaScript protects keywords to avoid ______ in the engine.
9. A linter like ______ can highlight misused reserved keywords.
10. Instead of using `class` as a variable, a better choice would be ______.
