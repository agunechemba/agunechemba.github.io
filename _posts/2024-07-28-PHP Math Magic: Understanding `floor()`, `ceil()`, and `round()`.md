# 📐 PHP Math Magic: Understanding `floor()`, `ceil()`, and `round()`

![PHP rounding functions](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/round-vs-ceil-vs-floor.png?w=1024)

When working with numbers in PHP, rounding becomes essential—whether you're paginating results or packing boxes. PHP gives us three handy functions for rounding:

---

### 1️⃣ `floor()` – Rounding **Down**

* **What it does:** Always rounds a number **down** to the nearest whole number.
* **Example:**

  ```php
  $number = 3.7;
  $floored = floor($number); // 3
  ```
* **When to use it:** When you must not exceed a value—e.g., full pages in a document.

---

### 2️⃣ `ceil()` – Rounding **Up**

* **What it does:** Always rounds a number **up** to the nearest whole number.
* **Example:**

  ```php
  $number = 3.2;
  $ceiled = ceil($number); // 4
  ```
* **When to use it:** When you must not fall short—e.g., counting how many boxes you need to pack items.

---

### 3️⃣ `round()` – Nearest Value Rounding

* **What it does:** Rounds to the **nearest** integer (or decimal precision).
* **How it works:**

  * If decimal ≥ 0.5 → rounds **up**
  * If decimal < 0.5 → rounds **down**
* **Examples:**

  ```php
  round(3.7); // 4
  round(3.2); // 3
  round(3.14159, 2); // 3.14
  ```
* **When to use it:** For general-purpose rounding.

---

### 🔎 Summary

* ✅ Use `floor()` to **always round down**
* ✅ Use `ceil()` to **always round up**
* ✅ Use `round()` to **round to the nearest** value

---

### 🧠 QUIZ

**Question 1:**
You need to calculate how many boxes are required to pack items, ensuring you don’t run short.
👉 *Which PHP function is best and why?*

**Question 2:**
What is the output of the following PHP code?

```php
$number = 4.3;
$result = round($number, 0);
echo $result;
```

💬 *Comment your answers below!*

