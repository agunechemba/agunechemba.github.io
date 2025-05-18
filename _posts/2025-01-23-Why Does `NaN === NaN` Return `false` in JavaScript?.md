# 🤔 Why Does `NaN === NaN` Return `false` in JavaScript?

![JavaScript illustration](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/mr-badejos-design.png?w=1024)

In JavaScript, this expression might surprise you:

```js
console.log(NaN === NaN); // false
```

Let’s break down **why**.

---

### 🔍 What is `NaN`?

`NaN` means **"Not-a-Number"**. It's a special value used to represent the result of an **invalid or undefined** mathematical operation.

Examples:

```js
console.log(0 / 0);         // NaN
console.log(Math.sqrt(-1)); // NaN
```

---

### ❗ Why is `NaN !== NaN`?

This behavior follows the **IEEE 754 floating-point standard**. According to this standard:

> **NaN is not equal to anything, not even itself.**

This is intentional — it signals that the value is invalid and shouldn't be trusted in comparisons.

So:

```js
NaN === NaN; // false
```

Because both are “not-a-number,” JavaScript won’t consider them equal.

---

### ✅ How Do You Check for `NaN`?

Since regular equality checks won’t work, use these methods:

1. **`isNaN()`**
   Checks if a value **is NaN or can be coerced into NaN**:

   ```js
   isNaN("abc"); // true
   ```

2. **`Number.isNaN()`**
   A safer way that only returns `true` if the value is **strictly NaN**:

   ```js
   Number.isNaN(NaN); // true
   ```

---

### 🧠 In Summary

* `NaN === NaN` returns `false` by design.
* Use `isNaN()` or `Number.isNaN()` to safely check for `NaN`.
* This behavior helps prevent silent math errors.


---

## Review Questions

---

### 1. **Why does `NaN === NaN` evaluate to `false` in JavaScript?**

A) Because `NaN` is not a number
B) Because JavaScript treats `NaN` as equal to itself
C) Because the IEEE 754 standard specifies that `NaN` is not equal to any value, including itself
D) Because `NaN` is undefined


---

### 2. **Which of the following is the correct way to check if a value is `NaN` in JavaScript?**

A) `value == NaN`
B) `value === NaN`
C) `Number.isNaN(value)`
D) `typeof value === 'NaN'`

---

### 3. **What is the type of `NaN` in JavaScript?**

A) `'NaN'`
B) `'undefined'`
C) `'number'`
D) `'object'`


---

### 4. **Which of the following operations will result in `NaN`?**

A) `Math.sqrt(4)`
B) `0 / 0`
C) `parseInt('123')`
D) `5 + 5`


---

### 5. **Why is it important to use `Number.isNaN()` instead of `isNaN()` when checking for `NaN`?**

A) Because `isNaN()` is not available in all browsers
B) Because `Number.isNaN()` converts the argument to a number before checking
C) Because `isNaN()` can return `true` for non-`NaN` values due to type coercion
D) Because `Number.isNaN()` is faster than `isNaN()`

