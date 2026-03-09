# JavaScript Bitwise Operators: A Simple Guide to Binary Logic

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/robot-handshake-code-dance_simple_compose.jpg" width="100%">

Bitwise operations are the most granular way to interact with data. While most programming languages allow us to work with high-level abstractions like integers or strings, the computer's processor sees only a stream of binary digits (bits). Bitwise operators allow us to manipulate these **1s** and **0s** directly, providing a level of efficiency and speed that is essential for systems programming, graphics, and cryptography.

---

## 1. Bitwise AND (`&`)

The **AND** operator compares two numbers bit by bit. For each position, the resulting bit is **1** only if the corresponding bits in both operands are **1**. If either bit is **0**, the result for that position is **0**.

* **Logic:** $1 \text{ AND } 1 = 1$; all other combinations result in $0$.
* **Practical Use:** Often used for "masking" to check if a specific bit is set or to clear certain bits.

| Decimal | Binary |
| --- | --- |
| 5 | `0101` |
| 3 | `0011` |
| **Result (5 & 3)** | **`0001` (Decimal 1)** |

---

## 2. Bitwise OR (`|`)

The **OR** operator compares two numbers and returns a **1** if at least one of the corresponding bits is **1**. The only way to get a **0** is if both bits being compared are **0**.

* **Logic:** $0 \text{ OR } 0 = 0$; all other combinations result in $1$.
* **Practical Use:** Commonly used to set specific bits to **1** without changing the other bits.

| Decimal | Binary |
| --- | --- |
| 5 | `0101` |
| 3 | `0011` |
| **Result (5 | 3)** |

---

## 3. Bitwise XOR (`^`)

The **XOR** (Exclusive OR) operator returns a **1** only if the bits being compared are different. If both bits are the same (both **0** or both **1**), the result is **0**.

* **Logic:** $1 \text{ XOR } 0 = 1$; $1 \text{ XOR } 1 = 0$; $0 \text{ XOR } 0 = 0$.
* **Practical Use:** Used in error-checking algorithms and for toggling bits (switching them from 1 to 0 or vice versa).

| Decimal | Binary |
| --- | --- |
| 5 | `0101` |
| 3 | `0011` |
| **Result (5 ^ 3)** | **`0110` (Decimal 6)** |

---

## 4. Bitwise NOT (`~`)

The **NOT** operator is a unary operator, meaning it works on a single input. It "flips" every bit in the number: **1** becomes **0**, and **0** becomes **1**.

* **Logic:** Inverts the state of every bit.
* **The Two's Complement Note:** In most systems, the result of `~x` is calculated as $-(x + 1)$ because of how computers store signed integers.

> **Example:** If we apply NOT to **5** (`00000101`), the result is `11111010`. In decimal notation, this is interpreted as **-6**.

---

## 5. Bitwise Left Shift (`<<`)

The **Left Shift** operator moves all bits in a number to the left by a specified number of positions. As the bits move left, empty slots on the right are filled with **0s**.

* **Mathematical Effect:** Shifting left by one position is equivalent to multiplying the number by $2^n$ (where $n$ is the number of shifts).
* **Example:** `5 << 1`
* Binary `0101` becomes `1010`.
* Decimal **5** becomes **10**.



---

## 6. Bitwise Right Shift (`>>`)

The **Right Shift** operator moves bits to the right. The bits at the end of the sequence are discarded, and new bits are added to the left (usually **0s** for unsigned numbers).

* **Mathematical Effect:** Shifting right by one position is equivalent to floor-dividing the number by $2^n$.
* **Example:** `5 >> 1`
* Binary `0101` becomes `0010`.
* Decimal **5** becomes **2** (the remainder is lost).
