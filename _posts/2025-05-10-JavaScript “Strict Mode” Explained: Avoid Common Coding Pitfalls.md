## JavaScript “Strict Mode” Explained: Avoid Common Coding Pitfalls

![JavaScript “Strict Mode” Explained: Avoid Common Coding Pitfalls](https://miro.medium.com/v2/resize:fit:720/format:webp/0*xDNNHZHK6zqx_uwy)

JavaScript is a versatile and powerful programming language, but its flexibility can sometimes lead to unintended behavior. One way to write safer and more predictable code is by using strict mode. In this blog post, we’ll explore what strict mode is, how it affects your code, and why it’s a good practice to use it.

---

**What is Strict Mode?**

Strict mode is a feature in JavaScript that enforces stricter parsing and error handling in your code. It was introduced in ECMAScript 5 (ES5) to help developers avoid common pitfalls and write more robust code. When you enable strict mode, the JavaScript engine will throw errors for actions that are otherwise silently ignored in non-strict mode.

To enable strict mode, simply add the following line at the top of your script or function:
```
"use strict";
```
Once strict mode is enabled, the JavaScript engine will enforce stricter rules, making it easier to catch mistakes and write cleaner code.

**Example 1:** Basic Variable Assignment (Non-Strict Mode)
Let’s start with a simple example in non-strict mode:
```
a = 6;

b = 4;

c = a + b;

console.log(c); // Output: 10
```
In this example, we create variables a, b, and c without declaring them using var, let, or const. This works in non-strict mode because JavaScript automatically creates global variables for undeclared assignments. However, this is considered bad practice because it can lead to bugs and unintended behavior. For example, if you accidentally misspell a variable name, JavaScript will create a new global variable instead of throwing an error.

**Example 2:** Enabling Strict Mode
Now, let’s enable strict mode and see how it changes the behavior of the same code:
```
"use strict";

a = 6; // Error: Uncaught ReferenceError: a is not defined

b = 4;

c = a + b;

console.log(c);
```
When strict mode is enabled, assigning a value to an undeclared variable (a = 6) throws a ReferenceError. This is because strict mode prevents the accidental creation of global variables. By catching these errors early, strict mode helps you write more reliable and maintainable code.

**Example 3:** Declaring Variables Properly in Strict Mode
To fix the error in the previous example, we need to declare the variables properly using let, const, or var:
```
"use strict";

let a = 6;

let b = 4;

let c = a + b;

console.log(c); // Output: 10
```
In this example, we declare the variables a, b, and c using let. This works perfectly fine in strict mode because the variables are properly declared before being used. Strict mode encourages better coding practices by forcing you to declare variables explicitly.

---

**Key Takeaways**

**Non-Strict Mode:** Allows undeclared variables, which can lead to bugs and unintended global variable creation.

**Strict Mode:** Prevents undeclared variables and enforces better coding practices. It throws errors for common mistakes like assigning to undeclared variables.

**Always Declare Variables:** Use let, const, or var to declare variables explicitly, even in non-strict mode.

---

**Why Use Strict Mode?**
Strict mode offers several benefits:

**Catches Common Mistakes:** Strict mode throws errors for actions that are otherwise silently ignored, such as assigning to undeclared variables or using duplicate parameter names in functions.

**Prevents Accidental Globals:** By requiring explicit variable declarations, strict mode prevents the accidental creation of global variables.

**Enhances Security:** Strict mode makes it easier to write secure code by disallowing certain unsafe actions, such as deleting variables or functions.

**Prepares for Future JavaScript Versions:** Strict mode ensures that your code is compatible with future versions of JavaScript by disallowing deprecated or problematic syntax.

---


## Review Questions

1.  **What is the main purpose of "strict mode" in JavaScript?**
    a) To make your code run faster.
    b) To help you write safer code by catching common mistakes.
    c) To add new features to JavaScript.
    d) To automatically write code for you.

2.  **How do you turn on "strict mode" for your entire JavaScript file?**
    a) By writing `// enable strict` at the bottom of the file.
    b) By typing `"use strict";` at the very beginning of the file.
    c) By clicking a button in your web browser.
    d) It's always on by default.

3.  **In "non-strict mode," if you use a variable without declaring it first (e.g., `x = 10;`), what happens?**
    a) Your code will stop and show an error.
    b) JavaScript might create a global variable, which can sometimes cause problems.
    c) The variable will only work inside functions.
    d) Nothing, it's the best way to write code.

4.  **What happens if you try to use a variable without declaring it in "strict mode" (e.g., `"use strict"; y = 5;`)?**
    a) It works the same as non-strict mode.
    b) JavaScript will show an error message (like `ReferenceError`).
    c) JavaScript will ask you if you want to create the variable.
    d) The variable will be created locally.

5.  **Which of these is a benefit of using "strict mode"?**
    a) It makes your code look more complicated.
    b) It stops you from accidentally creating global variables.
    c) It lets you use old JavaScript features that are no longer recommended.
    d) It automatically fixes all bugs in your code.

---

**Conclusion:** Strict mode is a powerful tool that helps you write safer and more reliable JavaScript code. By enabling strict mode and following best practices like declaring variables explicitly, you can avoid common pitfalls and improve the quality of your code. Whether you’re a beginner or an experienced developer, using strict mode is a habit that will pay off in the long run.

So, the next time you write JavaScript, don’t forget to add “use strict”; at the top of your script or function. Your future self (and your teammates) will thank you!

Happy coding! 😊
