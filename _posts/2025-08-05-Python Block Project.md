# 🎮 Python Block Project: Guess the Number Game

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/playful-coding-adventure_simple_compose.jpg" width="100%">

Have you ever wanted to build a game from scratch? Maybe you’re new to Python, or you’re teaching someone who’s just starting out. Either way, we’ve got a great little project that’s perfect for beginners—and it’s a **classic**: the **Guess the Number** game.

In this lesson, we’ll walk through a complete beginner-friendly version of the game. No advanced logic. No fancy libraries. Just pure, clean Python.

Here’s the code we’ll be working with:

```

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/guess-the-number.png" width="100%">

```

> Text Version
```
#Start code here
import random

secret_number = random.randint(1, 10)
print("I'm thinking of a number between 1 and 10.")
guess = int(input("Take a Guess: "))

while guess != secret_number:
  if guess < secret_number:
    print("Too Low!")
  else:
    print("Too High!")
  guess = int(input("Try Again: "))

print("Congratulations! You guessed the number!")
```

---

## 🧠 What’s the Goal of This Game?

* The computer randomly selects a number between 1 and 10.
* The player tries to guess it.
* After each guess, the program tells the player whether their guess was **too high** or **too low**.
* Once the player guesses correctly, the game ends with a congratulatory message.

Simple? Yes. But this tiny game teaches you **several powerful programming concepts** in just a few lines of code.

---

## 🚀 Line-by-Line Breakdown

Let’s explore what each part of the code does and **why** it matters.

### 🔹 `import random`

This line brings in Python’s built-in `random` module. Without this, we wouldn’t be able to generate a random number for the computer to "think" of.

---

### 🔹 `secret_number = random.randint(1, 10)`

Here’s where the magic happens!
This line tells the computer:

> “Pick a number between 1 and 10 (inclusive), and store it in the variable `secret_number`.”

Every time the game starts, this number will change. That’s what keeps it exciting.

---

### 🔹 `print("I'm thinking of a number between 1 and 10.")`

This is just some friendly guidance to the player. Always tell the player the rules of the game clearly.

---

### 🔹 `guess = int(input("Take a Guess: "))`

Let’s break this down:

* `input()` asks the player to type something.
* `int()` converts that input from text to a number.
* The result is stored in the variable `guess`.

This is the player’s **first attempt** to guess the secret number.

---

### 🔹 `while guess != secret_number:`

A `while` loop keeps running **as long as** the condition is true.

In this case, as long as the guess is **not** equal to the secret number, the game continues.

---

### 🔹 Inside the Loop: Feedback Time

```
  if guess < secret_number:
    print("Too Low!")
  else:
    print("Too High!")
```

Here, the game gives the player a **clue**:

* If their guess is less than the secret number → “Too Low!”
* Otherwise → “Too High!”

Then, it prompts the player to **try again**.

```
  guess = int(input("Try Again: "))
```

This gives the player another chance to guess, and the loop continues...

---

### 🔹 Game Over: You Win!

```
print("Congratulations! You guessed the number!")
```

Once the player's guess is **equal** to the secret number, the loop stops and this line runs.

We celebrate their success and end the game 🎉

---

## 🧠 Key Python Concepts You Just Learned

By building this small project, you’ve touched on:

* **Modules** (importing `random`)
* **Variables** (like `secret_number` and `guess`)
* **User Input** (`input()`)
* **Data Types** (`int()`)
* **Conditional Logic** (`if`, `else`)
* **Loops** (`while` loop)

It’s incredible how much ground you can cover with just **10–15 lines** of code!

---

## 📝 Practice Questions (For Learners)

1. What does `random.randint(1, 10)` do in this game?
2. Why is `guess = int(input(...))` repeated inside the loop?
3. What would happen if we forgot to convert the input to an integer?
4. How could we modify the game to allow more than one player to take turns?
5. How can you modify the game to end after a certain number of incorrect guesses?