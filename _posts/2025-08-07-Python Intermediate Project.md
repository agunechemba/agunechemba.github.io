# 🎮 Python Intermediate Project: Build a Number Guessing Game in Python!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-coding-bootcamp.jpg" width="100%">

You're sitting in a room with your friend. They say,
*"I'm thinking of a number between 1 and 10. You have 3 chances to guess it!"*

Sound familiar? Yep, that’s a classic guessing game—and today, we're going to **turn it into Python code** you can actually run and play with your friends or students!

By the end of this blog lesson, you’ll understand:

* How to use Python's `random` module
* How to collect and validate user input
* How to use `if`, `elif`, and `else` to make decisions
* How to use loops to repeat actions
* How to organize code into **functions**

---

## 🧪 Step-by-Step Breakdown: What's Happening in the Code?

Here's the complete game we’ll break down, then we’ll walk through each part.

```
import random

def play_game():
    """This function contains the entire game logic."""
    # The computer chooses a random number between 1 and 10.
    secret_number = random.randint(1, 10)

    # The game tells the player what to do.
    print("I'm thinking of a number between 1 and 10.")
    print("Can you guess what it is?")

    # This variable will keep track of the number of guesses.
    guesses_taken = 0
    guess = None

    # This is the main part of the game. It will keep running
    # until the player guesses the correct number or runs out of tries.
    while guesses_taken < 3: # Let's give them 3 tries.
        try:
            guess = int(input("Take a guess: "))
            guesses_taken = guesses_taken + 1

            if guess < secret_number:
                print("Your guess is too low.")
            elif guess > secret_number:
                print("Your guess is too high.")
            else:
                # If the guess is correct, we break out of the loop.
                break
        except ValueError:
            print("That's not a number! Please try again.")

    # After the loop is over, we check to see if the player won.
    if guess == secret_number:
        print(f"Good job! You guessed my number in {guesses_taken} tries!")
    else:
        print(f"Oops! The number I was thinking of was {secret_number}.")

# This is the main loop that asks the player to play again.
while True:
    play_game()
    
    # Ask the player if they want to play again.
    play_again = input("Do you want to play again? (yes/no): ")
    if play_again.lower() != 'yes':
        print("Thanks for playing! Goodbye!")
        break
```

---

## 🔍 Let's Decode the Game Logic

### 🧊 Step 1: The Game Picks a Secret Number

```
secret_number = random.randint(1, 10)
```

We use the `random` module to pick a number between 1 and 10. This makes sure it’s a surprise each time!

---

### 🎯 Step 2: User Tries to Guess (Up to 3 Tries)

```
while guesses_taken < 3:
```

We use a **while loop** to allow the player to guess **up to 3 times**.

Inside the loop, we collect input with:

```
guess = int(input("Take a guess: "))
```

We also use `try` and `except` to make sure the user enters a number. If they type something like `"apple"`, the game says:

> “That's not a number! Please try again.”

This prevents the game from crashing.

---

### 🧠 Step 3: Comparing the Guess

```
if guess < secret_number:
    print("Your guess is too low.")
elif guess > secret_number:
    print("Your guess is too high.")
else:
    break
```

Using conditional statements, we give the player feedback.
If they get it right, we break out of the loop with `break`.

---

### 🏆 Step 4: Game Over – Win or Lose?

After the guessing loop ends, we check:

```
if guess == secret_number:
    print(f"Good job! You guessed my number in {guesses_taken} tries!")
else:
    print(f"Oops! The number I was thinking of was {secret_number}.")
```

They either guessed correctly or used all 3 tries.

---

### 🔁 Step 5: Ask to Play Again

After one round ends, we ask:

```
play_again = input("Do you want to play again? (Yes/No): ")
```

If the player says anything other than `"yes"` or `"y"`, the game ends with:

```
print("Thanks for playing! Goodbye!")
```

---

## 🧪 Practice Time! Review Questions

1. **What Python module is used to generate random numbers?**
2. **Why do we use `try` and `except` around the `input()` call?**
3. **What happens if the user guesses the correct number?**
4. **How does the game limit the user to only 3 guesses?**
5. **What condition ends the game’s replay loop?**
