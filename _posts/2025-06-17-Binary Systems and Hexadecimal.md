# Binary Systems and Hexadecimal: Understanding the Hexadecimal System

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/futuristic-tech-classroom.jpg" width="100%">

In the world of computer systems, not all number systems are created equal. While humans use **Denary (Base 10)** and computers rely on **Binary (Base 2)**, programmers and hardware designers often use another powerful system — the **Hexadecimal System (Base 16)**.

---

## 🧮 What is the Hexadecimal System?

The **Hexadecimal** number system uses **16 unique symbols** to represent values. These are:

```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

While digits 0–9 have their usual meanings, the letters A–F represent values from 10 to 15.

| Symbol | Decimal Equivalent |
| ------ | ------------------ |
| A      | 10                 |
| B      | 11                 |
| C      | 12                 |
| D      | 13                 |
| E      | 14                 |
| F      | 15                 |

Thus, Hexadecimal numbers can count much higher than decimal using fewer digits.

---

## 🔗 Relationship Between Binary and Hexadecimal

Hexadecimal and Binary are closely related because **16 = 2⁴**.
This means **each hexadecimal digit corresponds exactly to four binary digits** (bits).

| Hex | Binary | Hex | Binary |
| --- | ------ | --- | ------ |
| 0   | 0000   | 8   | 1000   |
| 1   | 0001   | 9   | 1001   |
| 2   | 0010   | A   | 1010   |
| 3   | 0011   | B   | 1011   |
| 4   | 0100   | C   | 1100   |
| 5   | 0101   | D   | 1101   |
| 6   | 0110   | E   | 1110   |
| 7   | 0111   | F   | 1111   |

Because of this neat alignment, converting between **binary** and **hexadecimal** is much easier than between binary and decimal.

For example:

```
Binary: 101111100001  
Group into fours → 1011 1110 0001  
Hexadecimal: BE1
```

---

## 🔁 Conversion Methods

### 1. Binary → Hexadecimal

Steps:

1. Split the binary number into groups of 4 bits (starting from the right).
2. Add extra zeros to the left if needed.
3. Replace each group with its Hex equivalent using the table above.

Example:

```
Binary: 101111100001  
Groups: 1011 1110 0001  
Hex:    B    E    1  
Result: BE1
```

---

### 2. Hexadecimal → Binary

Reverse the process by converting each Hex digit into its 4-bit binary form.

Example:

```
Hex: 45A  
Binary: 0100 0101 1010
```

---

### 3. Hexadecimal → Denary

Each digit in a Hex number represents a power of 16.

Formula:

```
Denary = (Digit × 16ⁿ) + (Next × 16ⁿ⁻¹) + ...
```

Example:

```
Hex: 45A  
= (4 × 16²) + (5 × 16¹) + (A × 16⁰)  
= (4 × 256) + (5 × 16) + (10 × 1)  
= 1024 + 80 + 10 = 1114
```

---

### 4. Denary → Hexadecimal

You can use the **successive division** method:

1. Divide the number by 16 repeatedly.
2. Record the remainders.
3. Read remainders from **bottom to top**.

Example:

```
2004 ÷ 16 = 125 R4  
125 ÷ 16 = 7 R13 (D)  
7 ÷ 16 = 0 R7  
Result → 7D4
```

---

## 💡 Applications of Hexadecimal

1. **Memory Representation:**
   Computer memory addresses and dumps are written in Hex for readability.
   Example: `0x4F2A` instead of long binary sequences.

2. **HTML Colors:**
   Web colors use Hex codes like:

   * Red → `#FF0000`
   * Green → `#00FF00`
   * Blue → `#0000FF`

3. **MAC Addresses:**
   Device network identifiers use Hex pairs:
   `00:1C:B3:4F:2D:E2`

4. **Assembly and Machine Code:**
   Programmers use Hex to simplify binary instructions.
   Instead of `1010010111100100`, it’s written as `A5E4`.

---

## 🧩 Review – Fill in the Gaps

1. The Hexadecimal system is also known as the **Base-___** number system.
2. Hexadecimal uses ___ unique symbols to represent numbers.
3. The letter **C** in Hex represents the denary value ___.
4. Each Hex digit is equal to ___ binary bits.
5. The Hex number `BE1` represents the binary sequence __________.
6. The Hex number `45A` is equal to the denary value _______.
7. When converting from denary to Hex, the process involves repeated division by ___.
8. The color code `#FF0000` represents the color _______.
9. In computer memory representation, Hex is often prefixed with `__`.
10. The relationship between Binary and Hex works perfectly because 16 = ___⁴.
