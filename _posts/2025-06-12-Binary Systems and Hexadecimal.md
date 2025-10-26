# Binary Systems and Hexadecimal: How Computers Count with 0s and 1s

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/futuristic-tech-classroom.jpg" width="100%">

The binary system is the foundation of all computer operations. Every image, sound, video, and command in a digital device is represented using combinations of **0s** and **1s**. This system, known as **binary (base-2)**, uses only two symbols instead of ten, as in our everyday **denary (base-10)** system.

---

### **What is the Binary Number System?**

Humans typically count using ten digits — 0 through 9 — because we have ten fingers. This is known as the **denary or base-10 system**.
Computers, however, rely on millions of tiny electronic switches called **transistors**, each of which can only exist in one of two states:

* **ON**, represented by **1**
* **OFF**, represented by **0**

Because these two states correspond perfectly to electrical signals (current flowing or not), computers use the **binary system (base-2)** to represent all data and instructions.

---

### **How Binary Counting Works**

In binary, each digit (called a **bit**) represents a **power of 2**, starting from the rightmost bit. The value of each position doubles as you move left.

Example of counting:

```
Denary: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9...
Binary: 0, 1, 10, 11, 100, 101, 110, 111, 1000...
```

Each position in binary corresponds to a specific power of 2:

| Binary Digit | 1   | 1  | 1  | 0  | 1 | 1 | 1 | 0 |
| ------------ | --- | -- | -- | -- | - | - | - | - |
| Power of 2   | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Now, add up the values under the digits that contain **1s**:

128 + 64 + 32 + 8 + 4 + 2 = **238**

Therefore, the binary number `11101110` equals **238** in denary.

---

### **Converting from Denary to Binary**

To communicate with computers, we often need to convert denary numbers into binary. There are two main methods for doing this:

---

#### **Method 1: Subtraction of Powers of 2**

1. Identify the largest power of 2 **less than or equal to** your number.
2. Subtract it from the number.
3. Continue subtracting the next largest powers of 2 until the result is zero.
4. Mark each used power with **1** and unused with **0**.

**Example: Convert 107 to binary**

| Power of 2 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---------- | --- | -- | -- | -- | - | - | - | - |
| Used?      | 0   | 1  | 1  | 0  | 1 | 0 | 1 | 1 |

Result → **01101011**
Therefore, 107 in binary is **01101011**.

---

#### **Method 2: Successive Division by 2**

1. Divide the number by 2 repeatedly.
2. Record the remainder (0 or 1) after each division.
3. Continue until the quotient becomes 0.
4. Read the remainders **from bottom to top** to get the binary number.

**Example: Convert 107 to binary**

```
107 ÷ 2 = 53 R1  
53 ÷ 2 = 26 R1  
26 ÷ 2 = 13 R0  
13 ÷ 2 = 6  R1  
6 ÷ 2  = 3  R0  
3 ÷ 2  = 1  R1  
1 ÷ 2  = 0  R1  
```

Reading from bottom to top: **1101011**
Therefore, 107 = **1101011** in binary.

---

### **Why Computers Use Binary**

Binary is the most reliable and efficient system for computers because it aligns with the **physical nature of electronic circuits**.
Transistors are easier to design and control when they only have two possible states (on or off). This simplicity ensures accuracy, stability, and speed in digital processing.

---

## **Review Questions — Fill in the Gaps**

1. The binary system is a ____________ number system.
2. Computers represent data using only two digits: ____________ and ____________.
3. Each binary digit is called a ____________.
4. A transistor can exist in two states: ____________ and ____________.
5. The binary system aligns with the ____________ behavior of electronic switches.
6. In binary, each position represents a ____________ of 2.
7. The binary number `11101110` equals ____________ in denary.
8. In the subtraction method, each used power of 2 is marked with a ____________.
9. In the division-by-2 method, the remainders are read from ____________ to ____________.
10. Binary is used in computers because it is ____________ and ____________ to process electronically.
