# Unlocking the Mystery of the do-while Loop

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/for-3.png?w=1024" alt="" class="wp-image-1748" />

## 🔓 Understanding the `do-while` Loop

You already know about `for` and `while` loops. But what about the **`do-while`** loop? It’s a cool one—and a bit different.

---

### 🧠 Think of It Like This:

**"Do this thing first, then keep doing it while the condition is true."**

---

### 🧩 How It Works:

1. **`do`** — Do something **once**, no matter what.
2. **`while (condition)`** — Check the condition **after** doing it.

   * If it's **true**, repeat.
   * If it's **false**, stop.

---

### 🎮 Example: Number Guessing Game

Imagine a friend is guessing a number between 1 and 10. They must guess **at least once**, right?

```c
int guess;

do {
    printf("Guess a number between 1 and 10: ");
    scanf("%d", &guess);
} while (guess != secretNumber);

printf("You got it!\n");
```

💡 Even if the first guess is correct, the loop still runs **once** before checking.

---

### ⚡ Why Use `do-while`?

Use it when you want the code to run **at least once**, even if the condition is false right away. That’s the key difference from `while` and `for`.

---

## 📝 Quick Quiz

**Q1:**
What makes the `do-while` loop different from the `while` loop?

(a) It always runs the code block at least once
(b) `while` loops always run once
(c) `do-while` is only for counting
(d) `while` is only for conditions

---

**Q2:**
Which loop would you use if you want a user to enter a character until they type `'q'`?

(a) `for` — best for fixed repeats
(b) `while` — only checks first
(c) `do-while` — ensures at least one prompt
(d) None of the above
