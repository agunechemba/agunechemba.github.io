# 🧮 Project: Explore Numbers in Python-Integers, Floats, and Complex Numbers!

![Agunechemba Ekene](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/magical_looking_complex_character_with_a.jpeg)


Hey awesome coder! 👋
Today, we’re going on a fun journey to learn how Python understands different kinds of numbers — whole numbers, decimal numbers, and special magical numbers called complex numbers.

---

## 🔢 Types of Numbers in Python

### 1. Integer (int)

These are simple whole numbers like 1, 5, or 100.

```python
age = 8
```

### 2. Floating Point (float)

These are numbers with decimals like 0.1 or 3.14.

```python
fraction = 0.1
```

### 3. Complex Numbers (complex)

These are special numbers made of two parts:

* A real part (normal number)
* An imaginary part (the magic part!)

Example:

```python
complexNumber = 2 + 3j
```

---

## 🧙 Why the Letter **J**?

You might wonder, **why do complex numbers use the letter `j` and not `i` or any other letter?**

Great question! In Python (and many programming languages), **`j` is used to show the imaginary part** because:

* In math, `i` is often used for imaginary numbers, but in electrical engineering, `j` is used instead (to avoid confusion with current).
* Python follows this tradition and only understands `j` as the imaginary unit.

So, **4 + 8l** is **not** a complex number because Python doesn’t know what `l` means! But **4 + 8j** is perfect!

---

## 🎮 Try the “Number Explorer” Project!

Here’s a simple Python program that lets you type any number, and it tells you what type it is!

```
# Number Explorer - Understand your numbers!

user_input = input("Enter a number (try int, float, or complex like 2+3j): ")

try:
    number = int(user_input)
    number_type = "Integer (int)"
except ValueError:
    try:
        number = float(user_input)
        number_type = "Floating point (float)"
    except ValueError:
        try:
            number = complex(user_input)
            number_type = "Complex number (complex)"
        except ValueError:
            print("Oops! That's not a valid number.")
            exit()

print(f"\nYou entered a {number_type}: {number}")

if number_type == "Complex number (complex)":
    print(f"Real part: {number.real}")
    print(f"Imaginary part: {number.imag}")

print("\nThanks for exploring numbers with me!")
```

**How it works:**

* You type a number (like `5`, `3.14`, or `2+3j`).
* The program figures out the type (int, float, or complex).
* If complex, it shows the real and imaginary parts.

---

## ✍️ Practice Questions

1. What are the three types of numbers we learned today?
2. Write an example of a floating-point number.
3. Why does Python use the letter **j** for imaginary numbers instead of **i**?
4. Is `4 + 8l` a complex number? Why or why not?
5. What will this code print?

```python
type(7.5)
```

6. If you type `3+4j` into the Number Explorer, what will it show as the imaginary part?

---

That’s it for today! Try running the program, play with numbers, and become a Python number wizard! 🧙‍♂️✨
