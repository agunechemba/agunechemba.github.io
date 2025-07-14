# ✂️🪨📄 Python Project: Let's Code Rock, Paper, Scissors!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/animations_playing_rock_paper_scissors_game.jpeg" width="100%">


Zuri, an 11-year-old coding explorer, had just finished learning about **if-else statements** and **functions** in Python. She loved making her code *do stuff*—like asking questions and reacting with smart answers.

One afternoon, Zuri sat with her tablet and wondered,

> “Can I make Python play a game with me?”

Of course she could! But not just any game… a classic: **Rock, Paper, Scissors**!

---

## 🧠 What’s the Game About?

Here’s a quick reminder of the rules:

* **Rock beats Scissors**
* **Scissors beats Paper**
* **Paper beats Rock**

Simple, right? You and the computer each pick one secretly. Then — *Boom!* — you both reveal your hands, and the rules decide the winner.

---

## 👨🏽‍🍳 Cooking Up the Code: Full Python Game


```
import random

def play_game():
    print("🎮 Welcome to Rock, Paper, Scissors!")
    print("Type your choice: rock, paper, or scissors")

    options = ['rock', 'paper', 'scissors']
    computer_choice = random.choice(options)
    user_choice = input("👉 Your choice: ").lower()

    if user_choice not in options:
        print("❌ Invalid choice! Please choose rock, paper, or scissors.")
        return

    print(f"🖥️ Computer chose: {computer_choice}")

    if user_choice == computer_choice:
        print("😐 It's a tie!")
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'scissors' and computer_choice == 'paper') or \
         (user_choice == 'paper' and computer_choice == 'rock'):
        print("🎉 You win!")
    else:
        print("💻 Computer wins!")

# Run the game
play_game()
```

---

## 🧒🏽 Code Explanation

Let’s break it down like we’re baking a delicious cake together! 🎂

### 🥚 Step 1: The Ingredients

We import `random` so the computer can surprise us by picking **rock**, **paper**, or **scissors** secretly.

```python
import random
```

### 🍰 Step 2: The Game Function

We wrap everything in a `play_game()` function. This is like our **recipe** — we follow it step by step.

### 🎲 Step 3: Computer's Secret Choice

```python
computer_choice = random.choice(options)
```

The computer closes its eyes, puts its hand behind its back, and picks something randomly.

### 🙋🏽‍♂️ Step 4: Player's Turn

```python
user_choice = input("👉 Your choice: ").lower()
```

We ask the player what they want to choose. We use `.lower()` so whether they type “Rock” or “rock”, Python understands it the same way.

### 🚫 Step 5: Catching Mistakes

If someone types “fire” or “banana,” we stop them kindly:

```python
if user_choice not in options:
    print("❌ Invalid choice!")
```

### ⚔️ Step 6: Battle Time!

We compare the two choices using **if-elif-else**:

```python
if user_choice == computer_choice:
    print("😐 It's a tie!")
```

If both picked the same, it’s a tie. Otherwise, we check who beats who!


---

## 🧪 Review & Practice Questions

Let’s test our brain-coding muscles:

1. 🧩 **What Python module do we use to let the computer choose randomly?**
2. 💡 **What happens if the user types something weird, like "banana"?**
3. ✏️ **What does `.lower()` do, and why is it helpful here?**
4. 🔁 **Can you modify this game to allow 3 rounds and keep score?**
5. 🧐 **Where in the code do we check for a tie? Can you find the exact line?**
