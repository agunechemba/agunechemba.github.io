# Beware of JavaScript's `new Number()` Constructor

![JavaScript Number Confusion](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/02/code_20241227_141019_via_10015_io-edited.png)

## ⚠️ Beware of JavaScript's `new Number()` – A Comparison Conundrum

JavaScript lets you create numbers in two ways—but one of them might surprise you!

---

### 🚨 The Problem

```js
const num1 = new Number("0");
const num2 = new Number("0");

console.log(num1 == num2);  // false
console.log(num1 === num2); // false
```

Even though both objects represent `0`, the comparison fails. Why? Because `new Number()` creates **objects**, and objects are compared by **reference**, not by **value**.

---

### ✅ The Solution

#### 1. Use `.valueOf()` to compare the actual values:

```js
const num1 = new Number("0");
const num2 = new Number("0");

console.log(num1.valueOf() === num2.valueOf()); // true
```

#### 2. Better: Use primitive numbers (no `new`):

```js
const num1 = 0;
const num2 = 0;

console.log(num1 === num2); // true
```

---

### 💡 Pro Tip

Avoid using `new Number()` unless you *really* need a Number object. Stick with number literals for simpler, safer comparisons.

---

**Happy coding! 🚀**
