# 02-Binary Systems and Hexadecimal: The Secret Language of Computers – Welcome to Binary Land!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/imagine_2_friends_in_a_computer_mother.jpeg" width="100%">

### 🎮 Storytime: How Bit and Bot Discovered Binary

Once upon a techy time in a land not so far away, two curious bots, **Bit** and **Bot**, lived inside a giant computer. Every day, they worked hard flipping millions of tiny switches—some ON, some OFF. But here’s the twist: these weren’t ordinary switches. They were **magical binary switches** that powered everything in the digital world—from cat videos to video games!

One day, Bit asked Bot, “Why do we only use **0s and 1s**? Why not 2s or 9s or even emojis?”

Bot grinned and replied, “Because we live in a **binary world**! In Binary Land, everything is either **ON (1)** or **OFF (0)**—just like our switches. That’s what computers understand best. It’s simple, fast, and perfect for our electronic brains!”

Bit nodded. “So, you're saying that every photo, every song, every YouTube video is made up of just 0s and 1s?”

“Exactly!” said Bot. “That’s the magic of the **binary number system**!”

---

## 🔍 Let’s Break It Down: What is the Binary System?

Alright, fam, real talk: while we humans are out here counting with **10 fingers** (hello, base-10/denary system ✋✋), computers only count using **2 fingers: 0 and 1**.

This is because inside every computer, there are millions of teeny-tiny switches (called transistors). These switches are either:

* **ON (represented as 1)**
* **OFF (represented as 0)**

So, instead of counting like this:

```
Denary: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...
```

Computers count like this:

```
Binary: 0, 1, 10, 11, 100, 101, 110, 111, 1000...
```

Each digit (or **bit**) in a binary number stands for a **power of 2**. So when you see a binary number like:

```
1 1 1 0 1 1 1 0
```

You’re actually looking at a coded message using the powers of 2! Here's what it really means:

| Binary Digit | 1   | 1  | 1  | 0  | 1 | 1 | 1 | 0 |
| ------------ | --- | -- | -- | -- | - | - | - | - |
| Power of 2   | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Now just **add up** the values where there’s a **1**:

128 + 64 + 32 + 8 + 4 + 2 = **238**

Boom! Binary number `11101110` = **238 in denary**.

---

## 🔁 Converting Backwards: From Denary to Binary

So, say you’ve got a number like **107**, and you want to send it to Bit and Bot in their language (binary). How do you do it? You’ve got **2 main cheat codes**:

---

### 💡 **Method 1: Trial and Error (a.k.a. “Guess with Brains”)**

You find the largest power of 2 **less than or equal to** the number, subtract, and keep going.

Example: Convert **107**
Biggest power of 2 less than 107 is **64**
→ 107 – 64 = 43
Next biggest is **32**
→ 43 – 32 = 11
Next is **8**
→ 11 – 8 = 3
Next is **2**
→ 3 – 2 = 1
Next is **1**
→ 1 – 1 = 0 (Done!)

Now fill in the powers of 2 with **1s** for the numbers you used, and **0s** for the ones you skipped.

```
128  64  32 16  8  4  2  1
  0   1   1  0  1  0  1  1  → 01101011
```

---

### 🧠 **Method 2: Successive Division by 2**

This one’s smoother if you like patterns. You divide by 2 and write down the **remainders**, then read them **from bottom to top**.

Let’s do 107:

```
107 ÷ 2 = 53 R1  
 53 ÷ 2 = 26 R1  
 26 ÷ 2 = 13 R0  
 13 ÷ 2 = 6  R1  
  6 ÷ 2 = 3  R0  
  3 ÷ 2 = 1  R1  
  1 ÷ 2 = 0  R1  
```

Now read remainders from bottom → top: **1101011**

So, 107 = `1101011` in binary.

---

### 🧪 Practice Time with Bit and Bot!

Now that you're a binary wizard 🧙‍♂️, let's test those skills.

#### ✍️ **Review Questions:**

1. What does the binary number `10101010` equal in denary?
2. Convert the denary number **156** to binary using the trial and error method.
3. Why do computers prefer binary over denary?
4. Convert this binary number to denary: `00010010`
5. Using the division method, convert **45** to binary.

