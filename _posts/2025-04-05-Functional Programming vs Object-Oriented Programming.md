# Functional Programming vs Object-Oriented Programming: What’s the Difference?

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/01/functional-programming.png" width="100%">

Hey devs! 👋

Every programmer eventually faces a fascinating fork in the road: **Functional Programming (FP)** or **Object-Oriented Programming (OOP)**. Both paradigms aim to make code more modular, maintainable, and scalable—but they approach the goal from completely different angles.

Let’s break them down using **JavaScript** as our testbed. By the end, you’ll not only understand their conceptual differences but also know when and how to use each one effectively.

---

## 🧠 Functional Programming: The Power of Pure Functions

Functional Programming (FP) is a **declarative programming paradigm**—that means instead of telling the computer *how* to do something step by step, you tell it *what* you want done.

In FP, the focus is on **functions**—but not just any functions. We talk about **pure functions**, **immutability**, and **function composition**.

Let’s define a few key FP terms first:

* **Pure Function:** A function that always returns the same output for the same input and has *no side effects* (it doesn’t change or rely on anything outside itself).
* **Immutability:** Data is never changed once created. Instead, new data structures are returned.
* **Higher-Order Function:** A function that takes other functions as arguments or returns them.
* **Composition:** Combining simple functions to build more complex ones.

Let’s see this in action:

```javascript
function calculateArea(width, height) {
  return width * height; // Pure: always the same result for the same input
}

function calculatePerimeter(width, height) {
  return 2 * (width + height);
}

const width = 10;
const height = 20;
console.log(`Area: ${calculateArea(width, height)}`);
console.log(`Perimeter: ${calculatePerimeter(width, height)}`);
```

In FP, each function does one job and doesn’t depend on or modify external variables. That means no sneaky surprises and fewer bugs!

---

## 🧩 Object-Oriented Programming: Everything is an Object

Object-Oriented Programming (OOP), on the other hand, is an **imperative programming paradigm**—it tells the computer *how* to perform operations.

Here, everything revolves around **objects**—entities that combine **data** (called properties) and **behavior** (called methods).

Let’s define some OOP buzzwords before diving into an example:

* **Class:** A blueprint for creating objects.
* **Object:** An instance of a class.
* **Encapsulation:** Bundling data and methods that work on that data into one unit.
* **Inheritance:** The ability to create new classes from existing ones.
* **Polymorphism:** The ability of different classes to be treated as instances of the same parent class, often by sharing method names with different implementations.

Here’s our rectangle example, OOP-style:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 20);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
```

Here, **data (width and height)** and **behaviors (calculateArea and calculatePerimeter)** are bundled neatly in a single structure — the `Rectangle` object.

That’s encapsulation in action!

---

## ⚔️ Functional vs Object-Oriented: The Key Differences

| Feature              | Functional Programming         | Object-Oriented Programming  |
| -------------------- | ------------------------------ | ---------------------------- |
| **Core Unit**        | Function                       | Object                       |
| **Data Handling**    | Immutable (unchanged)          | Mutable (can be updated)     |
| **Focus**            | What to do (declarative)       | How to do it (imperative)    |
| **Reusability**      | Function composition           | Inheritance and polymorphism |
| **State Management** | Stateless                      | Stateful                     |
| **Common Keywords**  | map, filter, reduce            | class, this, new             |
| **Examples of Use**  | Data transformation, pipelines | Game development, GUI apps   |

---

## 💡 The Hybrid Power of JavaScript

Here’s the fun part — **JavaScript supports both paradigms**!
You can write functional-style code for data manipulation and object-oriented code for structure and interaction.

That’s why JavaScript is so versatile — you can mix and match these paradigms depending on your project’s complexity and goals.

**In short:**

* Use **Functional Programming** when your goal is clean, predictable, and testable transformations.
* Use **Object-Oriented Programming** when you want to model real-world entities that interact with each other.

---

## 🎯 Summary

Functional Programming emphasizes **purity, immutability, and composition**, while Object-Oriented Programming focuses on **encapsulation, inheritance, and polymorphism**.
Both are powerful, both have their place — and mastering both makes you a truly well-rounded developer.

---

## 🧩 Review: Fill-in-the-Gap Questions


1. A function that always returns the same output for the same input and has no side effects is called a __________ function.
2. In Functional Programming, data is never changed but instead is replaced with a __________ version.
3. In OOP, the combination of data and methods inside a single structure is called __________.
4. The term for creating new classes based on existing ones is __________.
5. The ability for different classes to respond differently to the same method name is called __________.
6. Functional Programming is generally __________, while Object-Oriented Programming is __________.
7. In JavaScript, the keyword used to create a new object from a class is __________.
8. Combining smaller functions to make bigger ones is known as function __________.
9. In OOP, the blueprint used to create objects is called a __________.
10. In Functional Programming, the concept of avoiding changing data is referred to as __________.
