# 🧮Python Numbers: Let's Learn About Numbers in Python!

![Ekene Agunechemba](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/imagine_a_magical_looking_complex_character_with_a.jpeg)

Hi young coder! 👋
Today, we're going to learn how Python (a computer language) understands **numbers**. Yes, Python is smart, and it knows how to work with different kinds of numbers!

Let’s go! 🚀

---

## 🔢 1. **Integer Numbers** – Whole Numbers

These are numbers like **1, 5, 100, or even 0**. No dots, no fractions!

### 🧠 In Python:

```python
age = 8
```

or

```python
age = int(8)
```

Want to check if `age` is an integer?

```python
type(age) == int  # This will say True!
```

✅ *int* means “integer.”

---

## 🌊 2. **Floating Point Numbers** – Numbers with a Dot

These are numbers like **0.1, 3.14, or 100.0**. They’re also called **floats** in Python.

### 🧠 In Python:

```python
fraction = 0.1
```

or

```python
fraction = float(0.1)
```

To check if it's a float:

```python
type(fraction) == float  # True!
```

✅ *float* means it has a **decimal point**.

---

## 🧙‍♂️ 3. **Complex Numbers** – Real + Magical

These are **special numbers** with two parts:

* A real part (normal)
* An imaginary part (with a little magic `j`!)

### 🧠 In Python:

```python
complexNumber = 2 + 3j
```

or

```python
complexNumber = complex(2, 3)
```

You can even ask Python to tell you the parts:

```python
complexNumber.real  # This gives 2.0 (real part)
complexNumber.imag  # This gives 3.0 (imaginary part)
```

To check if it's complex:

```python
type(complexNumber) == complex  # True!
```

✅ *complex* means it's made of **two parts** — real and imaginary!

---

## 🎯 Quick Recap!

| Type             | Example  | Type Name in Python |
| ---------------- | -------- | ------------------- |
| Whole Number     | `8`      | `int`               |
| Fraction         | `0.5`    | `float`             |
| Real + Imaginary | `2 + 3j` | `complex`           |

---

## 🎮 Try This Challenge!

Type these in your Python editor and see what happens:

```python
print(type(5))
print(type(3.14))
print(type(2 + 4j))
```

Can you guess what Python will say? 😄

---

That’s it for today, little coder!
Next time, we’ll use these numbers to make cool programs! 💻🧠


