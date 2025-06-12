# 03-Binary Systems and Hexadecimal: Once upon a Time in Binary-Land...

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a_group_of_people_with_binary_speech.jpeg" width="100%">

There lived a crew of numbers who only spoke in **0s and 1s**. Yep, that’s right—just two digits. They were super disciplined. No drama. No extra numbers. Just chillin’ with either a **0** or a **1**.

Now, their neighboring kingdom—**Denary-Land** (you know, where we count from 0 to 9, like normal humans)—was like, “Hey, how do we understand these binary peeps?”

That’s where the magic of **conversion** came in! ✨

---

### 🎯 **So, What’s the Big Idea?**

Binary is based on powers of **2**, while denary (aka base 10) is based on powers of **10**. So instead of thinking:

* Ones place = 1
* Tens place = 10
* Hundreds = 100
  and so on...

Binary thinks:

* First spot = 2⁰ (that’s 1)
* Next = 2¹ (that’s 2)
* Next = 2² (that’s 4)
* Then 8, 16, 32, 64, 128...

It’s like a row of **power-ups** in a game. And the ‘1’ means you *pick up* the power, the ‘0’ means you *skip* it.

---

### 🎮 **The Example: Binary Code 11101110**

Let’s pretend this is a secret code from a robot:
`1 1 1 0 1 1 1 0`

Let’s give them their superpower positions:

| Binary | 1   | 1  | 1  | 0  | 1 | 1 | 1 | 0 |
| ------ | --- | -- | -- | -- | - | - | - | - |
| Power  | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Now follow this rule: **If it’s a 1, you add the value. If it’s 0, ignore it.**

So, we add up:

* 128 ✅
* 64 ✅
* 32 ✅
* 16 ❌ (skipped because it’s 0)
* 8 ✅
* 4 ✅
* 2 ✅
* 1 ❌ (skip again)

Now let’s add it like we’re at a checkout counter:

**128 + 64 + 32 + 8 + 4 + 2 = 238**

Boom! 💣 You just cracked the binary code like a real tech ninja.

---

### 🧠 Let’s Wrap It Up in One Line:

> “Each ‘1’ in binary is like turning ON a power switch, and every switch gives you a different number. Add the ones that are ON, and you get the denary version.”

---

### ✍🏽 **Your Turn! Practice Time**

Okay boss, let’s see what you got. Try these and flex those brain muscles:

1. Convert this binary number to denary: `1 0 1 0 1 0 1 0`
2. Convert this to denary: `0 1 1 1 0 0 1 1`
3. What would be the 5th power of 2 in the binary headings?
4. If a binary number has all 1s (like `11111111`), what’s its denary value?
5. True or False: In binary, 2⁴ is the same as the 5th column from the right.