# 🧮 Python Beginner Project: Building a Simple Calculator

In this lesson, we’ll build a **simple calculator** using Python. It will perform **basic arithmetic operations**: addition, subtraction, multiplication, and division.

Let’s walk through the project.

---

## 🛠️ **Goal:** Create a simple calculator that takes two numbers and an operation as input, then displays the result.

---

## 🧱 Step-by-Step Breakdown

### ✅ Step 1: Accept Two Numbers as Input

In Python, we use the `input()` function to collect user data. But input is always taken as a **string**, and we can’t do math with strings!

That’s why we wrap it with `int()` to **convert the input to an integer**:

```
num1 = int(input("Enter first number: "))
```

Then, we collect the **second number** later after asking for the operation:

```
num2 = int(input("Enter Second number: "))
```

Why after? You'll see shortly — it keeps the logic clear when we handle division.

---

### ✅ Step 2: Ask the User Which Operation They Want

The user should be able to choose one of the following:

* `+` for addition
* `-` for subtraction
* `*` for multiplication
* `/` for division

We ask like this:

```
operation = input("Choose operation(+,-,*,/):")
```

This input remains a string (no conversion needed), and we’ll use it to decide **which math** to perform.

---

### ✅ Step 3: Use `if...elif...else` to Perform the Operation

Here comes the core of the logic. Python checks what the user typed and does the correct calculation:

```
if operation == "+":
    print("The sum is:")
    print(num1 + num2)
```

We use `elif` for the other operations:

```
elif operation == "-":
    print("The answer is:")
    print(num1 - num2)
```

Same for multiplication and division:

```
elif operation == "*":
    print("The answer is:")
    print(num1 * num2)
```

---

### ⚠️ Step 4: Handle Division Carefully

Division is tricky because **you can’t divide by zero**. That would crash your program. So we check for that before doing the math:

```
elif operation == "/":
    if num2 != 0:
        print("The answer is:")
        print(num1 / num2)
    else:
        print("Error: Cannot divide by zero!")
```

🧠 This is your first **nested if statement** — an if inside an elif block. Very useful!

---

### ❌ Step 5: Catch Invalid Inputs

What if the user types `^`, `%`, or something else? We need a fallback:

```
else:
    print("Invalid Operation Selected!")
```

This catches anything not handled above and gives the user feedback — no crashing!

---


## 🧪 The Full Code on Edublocks

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/test.png" width="100%">

---

## 🧾 The Full Code

```
num1 = int(input("Enter first number: "))
operation = input("Choose operation(+,-,*,/):")
num2 = int(input("Enter Second number: "))

if operation == "+":
    print("The sum is:")
    print(num1 + num2)
elif operation == "-":
    print("The answer is:")
    print(num1 - num2)
elif operation == "*":
    print("The answer is:")
    print(num1 * num2)
elif operation == "/":
    if num2 != 0:
        print("The answer is:")
        print(num1 / num2)
    else:
        print("Error: Cannot divide by zero!")
else:
    print("Invalid Operation Selected!")
```

---

## 🧠 Key Concepts Covered

| Concept            | Description                      |
| ------------------ | -------------------------------- |
| `input()`          | Get data from the user           |
| `int()`            | Convert string to number         |
| `if / elif / else` | Control flow to handle choices   |
| `print()`          | Display output                   |
| `Nested if`        | Used to prevent division by zero |

---

## 🧪 Sample Test Run

**Input:**

```
Enter first number: 8  
Choose operation(+,-,*,/): *  
Enter second number: 5
```

**Output:**

```
The answer is:  
40
```

---

## 📝 Review & Practice Questions

1. **Why do we use `int(input(...))` instead of just `input()`?**
2. **What will happen if a user enters `/` and the second number is `0`?**
3. **How does the program decide which operation to perform?**
4. **What’s the purpose of the final `else` block?**
5. **How would you modify this program to allow the user to do multiple calculations without restarting it?**