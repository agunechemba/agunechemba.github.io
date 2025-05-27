# 🎉 Build an Animated Greeting Bot with Python (`GreetBot`)

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_bot_with_a_smiling_face.jpeg" width="100%" />

In this lesson, we’ll build a fun and interactive Python script called **GreetBot**—a friendly program that asks for your name and "magically types it out" on the screen to impress beginners!

Perfect for beginners learning how to use `input()`, `for` loops, and the `time` module.

---

## 🛠 What You’ll Learn

* How to get user input with `input()`
* How to loop through characters in a string
* How to create typing animations using `time.sleep()`
* How to use `print()` smartly with `end` and `flush`

---

## 💻 Step-by-Step Guide

### 1. Import the `time` module

We’ll need this to pause the program for short moments to create that animation effect.

```
import time
```

---

### 2. Greet the user

Let’s print a welcome message:

```
print("👋 Hello! I'm GreetBot.")
```

This line prints a friendly wave emoji and introduces your bot.

---

### 3. Ask for the user’s name

We use `input()` to collect the user’s name.

```
name = input("What's your name? ")
```

When the user types their name and presses enter, Python saves it in the `name` variable.

---

### 4. Print part of the message

We’ll now say “Nice to meet you,” but **without jumping to a new line**.

```
print("Nice to meet you, ", end='', flush=True)
```

Here’s what’s happening:

* `end=''` keeps the cursor on the same line.
* `flush=True` forces the text to appear instantly—this helps our animation later.

---

### 5. Animate the name typing

This is the fun part. We loop through the name, printing one character at a time.

```
for letter in name:
    print(letter, end='', flush=True)
    time.sleep(0.2)
```

* `for letter in name`: loops through each letter.
* `print(letter, end='', flush=True)`: prints each letter without a new line.
* `time.sleep(0.2)`: pauses for 0.2 seconds between letters.

---

### 6. Add the final celebration 🎉

Once the animation is done, we end with a party emoji:

```
print("! 🎉")
```

---

## ✅ Final Code

```
import time

print("👋 Hello! I'm GreetBot.")

name = input("What's your name? ")

print("Nice to meet you, ", end='', flush=True)

for letter in name:
    print(letter, end='', flush=True)
    time.sleep(0.2)

print("! 🎉")
```

---

## 🧪 Practice Questions

### 1. **What does the `input()` function do in the `GreetBot` program?**

A) Loops through characters
B) Prints a message
C) Pauses the program
D) Collects user input

---

### 2. **What will happen if you remove `time.sleep(0.2)` from the loop?**

A) The name will print in reverse
B) The name will appear instantly without animation
C) The program will crash
D) Each letter will appear twice

---

### 3. **What’s the purpose of `end=''` in a `print()` statement?**

A) It adds a space
B) It clears the screen
C) It prevents the print from moving to the next line
D) It pauses the output

---

### 4. **True or False:** The `flush=True` part is used to delay the output.

---

### 5. **Challenge:**

Modify the GreetBot so it says:

```
“Hey [name], welcome to Python world!”
```

Then animate the whole sentence, not just the name.
💡 *(Hint: Store the sentence in a variable and animate each character.)*
