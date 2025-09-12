# 🌊 JavaScript Tilde `~` (Bitwise NOT Operator): The Switch Flipper

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/mischievous-wizard-in-classroom.jpg" width="100%">

Once upon a time, in the digital kingdom, there was a mischievous wizard named **Tilde**.
Tilde loved going into rooms full of glowing switches—some ON (1), some OFF (0). But he had only one rule:
👉 **He flipped every single switch he saw.**

* If a switch was ON (1), he turned it OFF (0).
* If a switch was OFF (0), he turned it ON (1).

This magical flipping is exactly what the **tilde operator (`~`)** does in JavaScript.

---

### **What Does `~` Do?**

The tilde is a **bitwise NOT** operator.

* It looks at every **bit** (1s and 0s) of a number.
* Then it flips them: 1 → 0, 0 → 1.

Example:

```
let x = 5;      // 00000101 in binary
console.log(~x); // 11111010 in binary → -6
```

Whoa! How did 5 become -6?
That’s because in computers, negative numbers are stored in a special binary format called **two’s complement**. When you flip all the bits of 5, you actually get -6.

---

### **So What’s the Use of `~`?**

Even though it seems strange, the tilde has some clever uses:

1. **Quickly turn positives into negatives (and vice versa)**.

   * `~x` is basically the same as `-(x + 1)`.

2. **Check if a number is NOT found in a list**.

   * For example, in old-school coding, `indexOf` returns `-1` if something isn’t found.
   * Using `~index` was a clever shortcut to check this.

Example:

```
let fruits = ["apple", "banana", "mango"];
console.log(~fruits.indexOf("banana")); // Not -1 → true
console.log(~fruits.indexOf("grape"));  // -1 → 0 → false
```

---

### **Real-Life Analogy**

Think of Tilde as a prankster who sneaks into a classroom with light switches.

* If the light is ON, he turns it OFF.
* If the light is OFF, he turns it ON.
  The room looks completely opposite after he’s done—just like numbers after applying `~`.

---

### **In Short**

* `~` = Bitwise NOT operator.
* Flips all bits: 1 → 0, 0 → 1.
* `~x` equals `-(x + 1)`.
* Useful in quick tricks like checking `indexOf`.

---

### **Review Questions**

1. The tilde (`~`) operator is also called the \_\_\_\_\_\_\_\_\_\_ NOT operator.
2. The tilde flips every \_\_\_\_\_\_\_\_\_\_ of a number.
3. If a bit is 1, tilde turns it into \_\_\_\_\_\_\_\_\_\_.
4. If a bit is 0, tilde turns it into \_\_\_\_\_\_\_\_\_\_.
5. In binary, `5 (00000101)` becomes \_\_\_\_\_\_\_\_\_\_ after applying `~`.
6. `~x` is the same as \_\_\_\_\_\_\_\_\_\_ in math form.
7. `indexOf()` returns \_\_\_\_\_\_\_\_\_\_ when an item is not found in an array.
8. Using `~index` is a coding shortcut for checking if something is \_\_\_\_\_\_\_\_\_\_.
9. A real-life analogy for tilde is a prankster flipping all the \_\_\_\_\_\_\_\_\_\_ in a classroom.
10. The tilde operator is written as the symbol \_\_\_\_\_\_\_\_\_\_.