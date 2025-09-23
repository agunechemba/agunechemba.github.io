# ⚡ JavaScript Error Handling: Good Error Handling Means Your App is Strong, Stable, and User-friendly

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/jollof-cooking-debug_simple.jpg" width="100%">

Imagine you’re cooking jollof rice 🍚. You have a recipe and you’re following it carefully. Suddenly, you realize the salt container is empty — uh oh, something went wrong!

Do you panic and stop cooking? Or do you handle the situation (maybe call a sibling to buy salt, or continue without it)?

That’s exactly what **error handling** is in programming. Errors are bound to happen — missing files, invalid input, or unexpected behavior. What matters is **how gracefully your program reacts**.

JavaScript gives us tools to handle these “mistakes” so our apps don’t just crash, but recover or at least inform us properly.

---

## 🛠️ **Error Objects and Types**

JavaScript represents runtime mistakes with **Error objects**. Throwing errors as `Error` objects (instead of just strings) is better because they carry debugging details like the **stack trace**.

```
try {
   throw new Error("Something broke!");
} catch (error) {
   console.log("Caught error:", error.message);
}
```

👉 Output:

```
Caught error: Something broke!
```

### 🔑 Built-in Error Types

JavaScript comes with several error constructors:

* **Error** → The base error type.
* **EvalError** → Problems with `eval()`.
* **InternalError** → Rare; internal JS engine error (like too much recursion, mostly Firefox).
* **RangeError** → A number is outside the allowed range (e.g., `new Array(-1)`).
* **ReferenceError** → Accessing something undefined (`console.log(myVar)` when `myVar` isn’t declared).
* **SyntaxError** → Mistake in code structure (usually caught before execution).
* **TypeError** → Operation on the wrong type (`"abc".push(5)`).
* **URIError** → Wrong use of `encodeURI()` or `decodeURI()`.

You can detect error types with `instanceof`:

```
try {
  throw new TypeError("Wrong type!");
} catch (e) {
  if (e instanceof Error) console.log("General error");
  if (e instanceof TypeError) console.log("Specifically a TypeError");
}
```

👉 Output:

```
General error
Specifically a TypeError
```

---

## 🔄 **Control Flow: try...catch...finally**

JavaScript provides structured error handling with three blocks:

1. **try** → Code that might fail.
2. **catch** → Runs if an error is thrown.
3. **finally** → Runs no matter what, useful for cleanup.

Example:

```
try {
  undefinedFunction("oops!");
} catch (error) {
  console.log("Caught the error:", error.message);
} finally {
  console.log("Always runs, error or not");
}
console.log("Program continues...");
```

👉 Output:

```
Caught the error: undefinedFunction is not defined
Always runs, error or not
Program continues...
```

So the program doesn’t crash completely.

---

## ⏳ **Error Handling in Asynchronous Code**

Errors behave slightly differently when promises or async/await are involved.

### ✅ Promises

If an error occurs inside `.then()`, the promise automatically rejects and you can catch it with `.catch()`.

```
Promise.resolve("Hello")
  .then(msg => {
    throw new Error("Something went wrong!");
  })
  .catch(err => {
    console.log("Caught in .catch:", err.message);
  });
```

👉 Output:

```
Caught in .catch: Something went wrong!
```

---

### ✅ Async/Await

With `async/await`, rejected promises throw exceptions you can handle in a normal `try...catch`.

```
async function run() {
  try {
    await Promise.reject(new Error("Invalid operation"));
  } catch (err) {
    console.log("Caught with async/await:", err.message);
  }
}
run();
```

👉 Output:

```
Caught with async/await: Invalid operation
```

This makes asynchronous error handling look **cleaner and easier**.

---

## 🎯 Why Error Handling Matters

* Prevents your app from **crashing**.
* Gives **useful feedback** to developers and users.
* Allows safe recovery from mistakes (like retrying a failed network request).
* Makes code **more professional and robust**.

---

# ✅ Summary

* JavaScript has a base **Error object** and specialized error types (TypeError, SyntaxError, etc.).
* Use **try...catch...finally** to gracefully handle problems.
* Asynchronous code uses **.catch()** with promises or `try...catch` with **async/await**.
* Always throw and catch **Error objects**, not raw strings.
* Good error handling means your app is **strong, stable, and user-friendly**.

---

# 📝 Review – Fill in the Gaps

1. JavaScript uses the \_\_\_\_\_\_ object to represent runtime errors.
2. Throwing an \_\_\_\_\_\_ object preserves the stack trace for debugging.
3. A \_\_\_\_\_\_Error occurs when you try to use something that hasn’t been declared.
4. A \_\_\_\_\_\_Error happens when you use the wrong data type in an operation.
5. The three blocks in structured error handling are try, catch, and \_\_\_\_\_\_.
6. Errors in promises are handled with the \_\_\_\_\_\_ method.
7. With async/await, rejected promises can be caught using a \_\_\_\_\_\_ block.
8. A \_\_\_\_\_\_Error occurs when code cannot be parsed correctly, often before execution.
9. The `instanceof` operator can check if an error is of a specific \_\_\_\_\_\_.
10. Proper error handling ensures apps don’t crash but instead fail \_\_\_\_\_\_.