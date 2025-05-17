## 💥 JavaScript Basics: Understanding Exceptions with `try...catch`

![Agunechemba Ekene](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_goal_keeper_catching_a_ball_in.jpeg)

When coding in JavaScript, sometimes errors happen—maybe a user inputs wrong data, or a file doesn’t load. Instead of letting your whole program crash, JavaScript gives you a way to handle errors smoothly using **`try...catch`**.

### What Are `try` and `catch`?

* **`try`**: This block contains the code you want JavaScript to *try* running. If everything goes well, it runs normally.

* **`catch`**: This block runs *only if* an error occurs in the `try` block. It “catches” the error so you can handle it (like showing a message or fixing the issue) instead of the program crashing.

---

### Example Code

```
try {
  let number = 10;
  if (number > 5) {
    throw "Number is too big!";
  }
  console.log("This won't run.");
} catch (error) {
  console.log("Caught an error: " + error);
}
```

### What’s Happening Here?

1. The code inside the **`try`** block runs first.

2. We check if `number` is greater than 5. Since 10 is greater than 5, the code **throws** an error with the message `"Number is too big!"`.

3. When the error is thrown, the program *stops* running the rest of the `try` block. So, `console.log("This won't run.")` is skipped.

4. The error is passed to the **`catch`** block, which catches it and prints:

   ```
   Caught an error: Number is too big!
   ```

---

### Why Use `try...catch`?

Because it helps keep your program running even when unexpected things happen. Instead of crashing, you get a chance to handle the error gracefully.

---

### Quick Recap:

* Use **`try`** to run risky code.
* Use **`catch`** to handle errors when they happen.
* Use **`throw`** if you want to create a custom error inside `try`.

## Review Questions
---

**1. What does the `try` block do in JavaScript?**
A) Handles errors after they occur
B) Contains code that JavaScript attempts to run
C) Stops the program if an error happens
D) Creates custom error messages


---

**2. When does the `catch` block run?**
A) Always after the `try` block finishes
B) Only if an error occurs inside the `try` block
C) Before the `try` block runs
D) When the program finishes successfully

---

**3. What happens when a `throw` statement is executed inside a `try` block?**
A) The program continues as normal
B) The error is ignored
C) The rest of the `try` block is skipped, and control moves to `catch`
D) The `try` block runs again

---

**4. Why is `try...catch` useful in JavaScript programming?**
A) To create infinite loops
B) To keep the program running even when errors occur
C) To slow down the code execution
D) To prevent any code from running

---

**5. Which statement is true about `catch`?**
A) It only runs if no errors occur
B) It is used to define a variable
C) It catches and handles errors thrown in the `try` block
D) It throws errors


![Agunechemba Ekene](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/chatgpt-image-may-17-2025-06_20_21-pm-1.png)
