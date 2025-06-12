# 04-Binary Systems and Hexadecimal: From 107 to 1101011; How to Speak Binary Like a Computer Boss

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a_group_of_people_with_binary_speech-1-1.jpeg" width="100%">

Yo, welcome to another coding campfire tale! 🔥
Today, we’re diving into how to convert a *denary number* (that’s a fancy word for normal numbers like 107) into the secret language of computers — **binary** (only 1s and 0s, baby 😎).

And guess what? There are **two chill ways** to get it done:

* The **"Trial and Error"** way — like playing a matching game.
* The **"Successive Division"** way — like flipping a bunch of coins.

So grab your hoodie, crack your knuckles, and let’s turn **107** into binary like a total boss.

---

## 🚀 Method 1: Trial and Error (The Coin Collector Game 🎮)

Imagine you’re at a secret gamer shop that only sells coins in powers of 2:

* 1, 2, 4, 8, 16, 32, 64, 128...

You need to **buy exactly 107** coins using the biggest possible values without going over. Let’s goooo:

* **64** fits into 107 → Remaining = 43 → Put a `1` under 64
* **32** fits into 43 → Remaining = 11 → Put a `1` under 32
* **16** is too big for 11 → Put a `0`
* **8** fits → Remaining = 3 → Put a `1`
* **4** is too big → Put a `0`
* **2** fits → Remaining = 1 → Put a `1`
* **1** fits → Remaining = 0 → Put a `1`

Here’s your binary lineup:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | -- | -- | -- | - | - | - | - |
| 0   | 1  | 1  | 0  | 1 | 0 | 1 | 1 |

So, **107** in binary = **1101011**
✨ Boom, you just built 107 using binary blocks!

---

## 🧮 Method 2: Successive Division by 2 (The Stack & Flip Trick 🔄)

This one’s all about **dividing by 2** and catching the remainders like Pokémon.

Let’s divide 107 down till we hit zero:

1. 107 ÷ 2 = 53 — remainder **1**
2. 53 ÷ 2 = 26 — remainder **1**
3. 26 ÷ 2 = 13 — remainder **0**
4. 13 ÷ 2 = 6 — remainder **1**
5. 6 ÷ 2 = 3 — remainder **0**
6. 3 ÷ 2 = 1 — remainder **1**
7. 1 ÷ 2 = 0 — remainder **1**

Now reverse the remainders (from bottom to top):
**1 1 0 1 0 1 1**

So, 107 in binary = **1101011** again.
🔥 We’re on fire, and we didn’t even need Wi-Fi to do it!

---

## 🧠 Recap

* Computers speak **binary** (just 1s and 0s).
* Denary = regular numbers like 107.
* Use:

  * **Trial and Error**: Build the number using powers of 2.
  * **Successive Division**: Keep dividing by 2, then read remainders bottom to top.
* Either way, 107 = **1101011** in binary.

---

## Test Your Brain Juice

Let’s see if you’re the next binary beast 👾

1. Use **Trial and Error** to convert **85** to binary.
2. Use **Successive Division** to convert **42** to binary.
3. What’s the value of the 5th digit from the right in a binary number?
4. Which method do you prefer and why?
5. Convert **15** to binary using *both* methods. Do you get the same result?
