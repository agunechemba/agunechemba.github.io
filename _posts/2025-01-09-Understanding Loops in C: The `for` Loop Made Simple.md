# 🔁 Understanding Loops in C: The `for` Loop Made Simple

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/for.png?w=1024" alt="" class="wp-image-1736" />

Loops let your code repeat itself—perfect for doing something over and over again. In C, the `for` loop is one of the clearest ways to do this.

---

### 🧠 How the `for` Loop Works:

```c
for (start; check; change) {
  // Things to repeat
}
```

Here’s what each part does:

1. **Start:**
   Runs once at the beginning.
   Example: `int i = 1;` starts your counter.

2. **Check:**
   A condition that controls how long the loop runs.
   Example: `i <= 10;` keeps looping until `i` goes past 10.

3. **Change:**
   Happens after each loop.
   Example: `i++` increases `i` by 1 each time.

---

### 🧪 Example: Print Numbers 1 to 5

```c
for (int i = 1; i <= 5; i++) {
  printf("The number is: %d\n", i);
}
```

**Output:**

```
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

---

### 💡 Why It’s Useful

The `for` loop is great when you know **how many times** you want to repeat something — like printing numbers or doing calculations.

---

### 🔄 Other Loops in C

* `while` loop: Use when you're not sure how many times to repeat.
* `do-while` loop: Always runs at least once, then checks if it should repeat.

---

## 📝 Quick Quiz

**Q1:** What are the 3 parts of a `for` loop, and what does each one do?

**Q2:** Write a `for` loop that prints even numbers from 2 to 20. Explain how it works.
