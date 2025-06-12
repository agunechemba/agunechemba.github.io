# 07-Binary Systems and Hexadecimal: Story Time; Hex’s Sweet 16 Party

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/anime-of-16-friends-at-a-closed-party-1.jpeg" width="100%">

Imagine you're invited to a **super fancy party** thrown by someone called "Hex" (short for Hexadecimal). Now, Hex is not your regular host. They don’t just invite 10 friends like the denary system (0 to 9) or 2 like the binary system (0 and 1). Nah, Hex goes hard and invites **16** friends 😮.

Hex’s guest list looks like this:

```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

But plot twist! The guests A to F are not your everyday names. Each of them has a secret identity:

* A = 10
* B = 11
* C = 12
* D = 13
* E = 14
* F = 15

So Hex throws a Base-16 bash 🎉 while Denary is stuck at Base-10 and Binary is doing a 0-and-1 dance.

---

## 🧠 Binary and Hex: BFFs Forever 👯

Okay, here's a superpower secret: **Hex and Binary are tight besties.** Wanna know why?

Because **16 = 2⁴** — that’s four binary digits per one hex digit. It’s like saying:

> Every time Hex writes one digit, Binary writes four.

Here’s how it rolls:

| Hex | Binary |
| --- | ------ |
| 0   | 0000   |
| 1   | 0001   |
| 2   | 0010   |
| 3   | 0011   |
| 4   | 0100   |
| 5   | 0101   |
| 6   | 0110   |
| 7   | 0111   |
| 8   | 1000   |
| 9   | 1001   |
| A   | 1010   |
| B   | 1011   |
| C   | 1100   |
| D   | 1101   |
| E   | 1110   |
| F   | 1111   |

So, if Binary writes `101111100001`, Hex just casually says, “That’s `BE1`.” 😎

---

## 🔄 Conversions: Changing Forms Like a Transformer 🤖

### 🚀 Binary → Hex

Just:

1. Group into 4 bits from the right.
2. Add zeros to the left if needed.
3. Use the table to match binary groups to Hex.

Example:

```
Binary: 101111100001
Groups: 1011 1110 0001
Hex:    B    E    1
```

---

### 🧩 Hex → Binary

Just reverse the magic:

* Take each hex digit.
* Convert it into a 4-bit binary chunk.

Example:

```
Hex: 45A
Binary: 0100 0101 1010
```

---

### 💥 Hex → Denary

Here’s the plan:

* Multiply each digit by powers of 16.
* Add 'em up!

Example:

```
Hex: 45A
= (4 × 16²) + (5 × 16¹) + (A × 16⁰)
= (4 × 256) + (5 × 16) + (10 × 1)
= 1024 + 80 + 10 = **1114**
```

---

### 🔁 Denary → Hex

Two options:

**Method 1: Trial and Error**
Like solving a puzzle. Break it into 16s, find digits.

**Method 2: Repetitive Division**

1. Keep dividing the number by 16.
2. Write the remainders.
3. Read from **bottom to top**.

Example:
2004 ÷ 16 → remainder 4
125 ÷ 16 → remainder 13 (D)
7 ÷ 16 → remainder 7

So 2004 = `7D4` in Hex.

---

## 🎯 Real-Life Hex Heroes

### 💻 Memory Dumps

When things go boom 💥 in programs, developers look at memory dumps (like a computer’s brain scan) written in Hex. Wayyyy easier than long binary strings!

---

### 🎨 HTML Colors

You know colors on websites? They’re Hex-coded!
Like:

* 🔴 Red → `#FF0000`
* 🟢 Green → `#00FF00`
* 🔵 Blue → `#0000FF`

Mix ‘em up to get wild colors like `#FF00FF` (fuchsia 💅).

---

### 🌐 MAC Addresses

These are like your device’s fingerprint. MAC addresses use Hex too.
Format: `NN:NN:NN:DD:DD:DD`
Example: `00:1C:B3:4F:2D:E2`

---

### 🧙‍♂️ Web Addresses (ASCII in disguise)

Sometimes websites use Hex in their URLs to look cooler or more secure:
`www.hodder.co.uk` → `%77%77%77%2E%68%6F...`

---

### 🧬 Assembly & Machine Code

Programmers use Hex to avoid brain-frying binary when writing low-level code.
Instead of this:

```
10100101111001001111111110100100
```

You write this:

```
A5E4 FFA4
```

Much easier, right?

---

## ✅ Review & Practice Time!

1. **What's the Hex equivalent of the binary number `11010110`?**
2. **Convert the Hex number `2F` to binary.**
3. **Turn the Hex number `1A3` into denary.**
4. **Convert the denary number `350` into Hex.**
5. **Why is Hex easier for programmers than binary?**
