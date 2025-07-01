# 🧠 Python Numbers: Built-in Math Functions and Utility Modules

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_house_built_in_a_bottle.jpeg" width="100%">

In this lesson, we’re diving into **Python’s built-in math helpers** and some important **math-related modules**. You’ll learn how to handle numbers the Pythonic way!

---

## 🔹 1. Built-in Functions for Numbers

### 👉 `abs()`: Absolute Value

The `abs()` function returns the **absolute value** of a number — basically, how far it is from zero, without caring if it's positive or negative.

```
print(abs(5))     # 5
print(abs(-5))    # 5
print(abs(-3.8))  # 3.8
```

> 💡 *Absolute value just removes the minus sign if it exists.*

---

### 👉 `round()`: Rounding Numbers

The `round()` function takes a number and **rounds it to the nearest whole number** (by default).

```
print(round(0.12))   # 0
print(round(4.5))    # 4 or 5, depending on the Python version
print(round(7.9))    # 8
```

You can also specify a **second argument** to tell Python **how many decimal places** you want:

```
print(round(0.12, 1))   # 0.1
print(round(4.567, 2))  # 4.57
```

---

## 🔹 2. Useful Math Modules in Python

Python also gives you powerful tools in the form of **math-related modules**. You need to import them before using.

---

### 🧮 `math` module

This is the most commonly used module for general math stuff.

```
import math

print(math.sqrt(16))      # 4.0
print(math.pi)            # 3.141592653589793
print(math.sin(math.pi))  # 0.0 (close enough!)
```

Use it when working with:

* square roots
* trigonometry
* logarithms
* constants like `pi` and `e`

---

### 🔢 `cmath` module

The `cmath` module is for **complex numbers**. If your math needs imaginary numbers like `1 + 2j`, this is your friend.

```
import cmath

print(cmath.sqrt(-1))   # 1j
```

---

### 💰 `decimal` module

The `decimal` module helps you work with **precise decimal numbers** — great for money and finance!

```
from decimal import Decimal

print(Decimal('0.1') + Decimal('0.2'))   # 0.3 (not 0.30000000000000004)
```

---

### 🧮 `fractions` module

The `fractions` module is great when you want to work with **fractions/rational numbers** instead of floats.

```
from fractions import Fraction

print(Fraction(1, 3))             # 1/3
print(Fraction(1, 3) + Fraction(1, 6))   # 1/2
```

---

## ✅ Practice Questions

Try solving these to test your understanding:

1. What will `abs(-10.5)` return?
2. Use `round()` to round `3.14159` to **2 decimal places**.
3. Use `math.sqrt()` to find the square root of 64.
4. Add `Decimal('0.1')` and `Decimal('0.2')`. Why is this better than using normal floats?
5. What is the result of adding `Fraction(2, 5)` and `Fraction(3, 10)`?
