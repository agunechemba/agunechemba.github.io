# 🧮 Python Numbers: Let's Learn About Numbers in Python!

![Ekene Agunechemba](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/imagine_a_magical_looking_complex_character_with_a.jpeg)

Hey young coder! 👋
Have you ever counted your toys? Or maybe measured how much juice is in your cup? Well, guess what? You're already using **numbers** — and Python LOVES numbers too! 💻🎉

Let’s dive into the wonderful world of numbers in Python, where we meet **three amazing types of numbers**: 🧍‍♂️The Whole Ones, 🌊The Splashy Floaters, and 🧙‍♂️The Magical Complex Guys.

---

## 🔢 1. **Integer Numbers** – The Whole Number Heroes 💪

These are **complete numbers** with no dots, no decimals, and no magic! Just solid, steady, countable numbers like:

* 1 apple 🍎
* 100 stars ⭐
* 0 homework 😁

In Python, these are called **integers** and we write them like this:

```python
age = 8
```

Or if you want to be fancy:

```python
age = int(8)
```

Want to ask Python, “Hey, is this an integer?”:

```python
type(age) == int  # Python will answer: True!
```

✅ *int* means “integer” — a **whole number**.

---

## 🌊 2. **Floating Point Numbers** – The Splashy Floaters 💦

These are **numbers with a dot**. Like:

* 3.14 (Pi!)
* 0.1 (a small part of something)
* 100.0 (looks big, but still has a dot)

Python calls them **floats**. They like to float between whole numbers!

```python
fraction = 0.1
```

Or use the float function:

```python
fraction = float(0.1)
```

Ask Python what type this is:

```python
type(fraction) == float  # Python says: True!
```

✅ *float* means it has a **decimal point** — like numbers floating in water!

---

## 🧙‍♂️ 3. **Complex Numbers** – The Magical Number Wizards ✨

Now, this part is *super cool*. Complex numbers have **two parts**:

* A **real** part (like the numbers you already know)
* An **imaginary** part (with a magical twist using `j`!)

It's like a number wearing a wizard's hat! 🧙‍♂️

```python
magic_number = 2 + 3j
```

Or even like this:

```python
magic_number = complex(2, 3)
```

Now you can ask Python to tell you the secret parts:

```python
magic_number.real  # Python whispers: 2.0
magic_number.imag  # And then says: 3.0
```

To check if it's really magical:

```python
type(magic_number) == complex  # Python confirms: True!
```

✅ *complex* = Real part + Magical `j` part. 🪄

---

## 🧠✨ Quick Recap Table

Here’s your mini cheat sheet:

| 🧪 Number Type   | 🔍 Example | 🧑‍💻 Python Calls It |
| ---------------- | ---------- | --------------------- |
| Whole Number     | `8`        | `int`                 |
| Decimal or Dotty | `0.5`      | `float`               |
| Magical Wizard   | `2 + 3j`   | `complex`             |

---

## 📝🎯 5 Fun Review Questions!

Let's test your wizard brain, junior Pythonista! 💡👇

1. **What type of number is `42` in Python?**
   a) float
   b) int
   c) complex

2. **Which of these is a float?**
   a) 10
   b) 10.0
   c) 10j

3. **How do you write a complex number with real part 5 and imaginary part 2?**
   a) `5 + 2j`
   b) `5.2`
   c) `complex(5.2)`

4. **What does `type(3.14)` return?**
   a) int
   b) float
   c) complex

5. **What will `complex_number.real` return if you write `complex_number = 7 + 4j`?**
   a) 7
   b) 4
   c) 4j
