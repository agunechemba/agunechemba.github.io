# 🧠 Understanding `null` vs `undefined` in JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/null-vs-undefined.png?w=1024" alt="" class="wp-image-1789" />

Both represent "no value"—but they are **not the same**.

---

### 🔹 `null`: Intentionally Empty

You use it when you **want** to say “this has no value.”

```js
let user = null; // No user is logged in
```

**Think:** An empty box you purposely left empty.

---

### 🔸 `undefined`: Value Not Set

JS uses this **automatically** when a variable is declared but not initialized.

```js
let name;
console.log(name); // undefined
```

**Think:** A box you forgot to put something in.

---

### 🔍 When to Use What

| Use `null`                        | Use `undefined`                       |
| --------------------------------- | ------------------------------------- |
| To show **intentional emptiness** | When a variable is **uninitialized**  |
| Example: user = null              | Example: `let score;` (no assignment) |

---

### ✅ Key Takeaway

* Use `null` when **you choose** to say "no value"
* `undefined` is **JavaScript’s default** for “not yet set”

---

### 🧪 Quiz Time

**Q1: What does `undefined` represent?**
A) A variable that has been declared but not assigned a value
B) A deliberate absence of a value
C) A syntax error
D) A type of object

---

**Q2: Which is true about `null` and `undefined`?**
A) `null === undefined` 
B) `typeof null` returns `"undefined"` 
C) `null` is used for intentional absence
D) `undefined` is used when assigning `null` 

