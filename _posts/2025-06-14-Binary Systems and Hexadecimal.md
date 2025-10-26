# Binary Systems and Hexadecimal: Converting Denary to Binary

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/futuristic-tech-classroom.jpg" width="100%">

Binary is the fundamental language of computers. Every operation a computer performs—whether it’s arithmetic, graphics, or communication—is executed using **binary digits (bits)**: 0 and 1.
To understand how data is represented and processed, it’s essential to learn how to **convert a denary (base-10)** number into its **binary (base-2)** equivalent.

There are two major methods used for this conversion:

1. **Subtraction of Powers of 2 (Trial and Error Method)**
2. **Successive Division by 2 Method**

---

### **Method 1: Subtraction of Powers of 2 (Trial and Error Method)**

In this method, we represent a denary number as a sum of selected powers of 2.
The available powers of 2 are:
**1, 2, 4, 8, 16, 32, 64, 128, 256, ...**

To convert **107** into binary:

1. Identify the largest power of 2 that is less than or equal to 107 → **64**
   107 − 64 = 43
2. The next power of 2 that fits into 43 is **32**
   43 − 32 = 11
3. **16** does not fit → mark **0**
4. **8** fits → 11 − 8 = 3
5. **4** does not fit → mark **0**
6. **2** fits → 3 − 2 = 1
7. **1** fits → 1 − 1 = 0

Now assign **1** for used powers and **0** for unused powers:

| Power of 2 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---------- | --- | -- | -- | -- | - | - | - | - |
| Binary Bit | 0   | 1  | 1  | 0  | 1 | 0 | 1 | 1 |

Hence, **107 = 1101011** in binary.

This method helps visualize how binary numbers are built directly from powers of 2.

---

### **Method 2: Successive Division by 2**

This approach involves dividing the number repeatedly by 2 and recording the remainder each time. The remainders form the binary digits when read **from bottom to top**.

**Example: Convert 107 to binary**

```
107 ÷ 2 = 53 remainder 1  
53 ÷ 2 = 26 remainder 1  
26 ÷ 2 = 13 remainder 0  
13 ÷ 2 = 6  remainder 1  
6 ÷ 2  = 3  remainder 0  
3 ÷ 2  = 1  remainder 1  
1 ÷ 2  = 0  remainder 1  
```

Now, read the remainders upward: **1 1 0 1 0 1 1**

Therefore, **107 in binary = 1101011**.

---

### **Comparison of Both Methods**

Both methods lead to the same result because they rely on the same principle — representing numbers using **powers of 2**.
The **Subtraction of Powers of 2** method is more intuitive for smaller numbers, while the **Successive Division by 2** method is more systematic and easier for larger values.

---

### **Summary**

* Binary uses **0s and 1s** to represent data.
* Denary numbers can be converted into binary using two main techniques.
* The **Trial and Error** method uses powers of 2 subtraction.
* The **Successive Division** method uses repeated division and remainder tracking.
* Both methods produce the same binary result.
* Example: **107 = 1101011** in binary.

---

## **Review Questions — Fill in the Gaps**

1. The binary number system is based on powers of ____________.
2. In the trial-and-error method, we subtract powers of ____________ from the denary number.
3. Each power of 2 corresponds to a binary ____________.
4. In the division method, the remainders are read from ____________ to ____________.
5. When converting 107 to binary, the result is ____________.
6. The largest power of 2 less than 107 is ____________.
7. In the subtraction method, each used power of 2 is marked with a ____________.
8. Binary representation is built from combinations of ____________ and ____________.
9. The division method is especially suitable for ____________ numbers.
10. Both conversion methods rely on the principle of representing values using ____________ of 2.
