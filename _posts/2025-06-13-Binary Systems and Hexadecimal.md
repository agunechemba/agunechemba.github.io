# Binary Systems and Hexadecimal: Binary and Denary Conversion

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/futuristic-tech-classroom.jpg" width="100%">

Computers process data using the **binary number system**, which relies only on two digits: **0 and 1**. Humans, however, are used to the **denary (decimal) system**, which uses digits from **0 to 9**.
To communicate effectively between these two systems, we must understand how to **convert** binary numbers into their denary equivalents.

---

### **Understanding the Concept**

The **denary system** (base 10) is built around powers of **10**. For example:

* The first place represents **10⁰ = 1**
* The second place represents **10¹ = 10**
* The third place represents **10² = 100**, and so on.

The **binary system** (base 2), on the other hand, uses powers of **2** instead of 10. Each position in a binary number represents a power of 2:

* First position → **2⁰ = 1**
* Second position → **2¹ = 2**
* Third position → **2² = 4**
* Then **8, 16, 32, 64, 128**, and so forth.

Each **1** in a binary number means that the power of 2 in that position is *included* in the total, while each **0** means it is *excluded*. This is how binary values are translated into denary numbers.

---

### **Worked Example: Converting Binary to Denary**

Let’s convert the binary number `11101110` into denary form.

| Binary Digit | 1   | 1  | 1  | 0  | 1 | 1 | 1 | 0 |
| ------------ | --- | -- | -- | -- | - | - | - | - |
| Power of 2   | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

To find the denary equivalent, add the values of all the **positions marked with 1s**:

**128 + 64 + 32 + 8 + 4 + 2 = 238**

Therefore, the binary number `11101110` equals **238** in denary.

---

### **The Binary Switch Analogy**

Each **binary digit (bit)** acts like a small switch that can be either **ON (1)** or **OFF (0)**. When the switch is ON, its power of 2 contributes to the total. When OFF, it does not.
Thus, converting binary to denary simply means **adding all the “ON” values together**.

---

### **Why Binary Works So Well**

Binary is efficient for computers because it directly corresponds to the **electrical states** of their circuits — ON or OFF. These two states are easy to implement, reliable to detect, and perfect for digital processing.

---

### **Practice Exercises**

Try converting the following binary numbers to denary values:

1. `10101010`
2. `01110011`
3. What is the 5th power of 2 in binary notation?
4. What is the denary value of `11111111`?
5. True or False: The 5th column from the right represents 2⁴ in binary.

---

## **Review Questions — Fill in the Gaps**

1. The binary system is based on powers of ____________.
2. The denary system is based on powers of ____________.
3. In binary, each position value doubles as you move ____________.
4. Each binary digit is referred to as a ____________.
5. A binary digit of **1** means the corresponding power of 2 is ____________.
6. A binary digit of **0** means the corresponding power of 2 is ____________.
7. The binary number `11101110` equals ____________ in denary.
8. Each bit in binary acts like an electrical ____________ that can be on or off.
9. Binary is efficient because it aligns with the ____________ nature of computer circuits.
10. To convert binary to denary, add all the values corresponding to ____________ digits.
