# How to Mask Credit Cards in PHP Using substr()

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/echo-substrhello-world-6-3-1.png?w=940" alt="" class="wp-image-1642" />

If you’ve ever built an e-commerce checkout, you’ve faced this classic scenario: you need to show users which credit card they have on file, but **security** best practices mean you can’t display the full 16-digit card number.

Real programmers *mask* all but allow the last four digits to be visible (e.g., •••• •••• •••• 5678).

Let’s break down how to use it, step-by-step, and understand exactly what happens under the hood.

### 1. Extracting the Last 4 Digits

```
$cardNumber = "4532889912345678";

// Extract the last 4 digits
$lastFour = substr($cardNumber, -4);

echo $lastFour; // Outputs: "5678"
```

What's happening behind the scenes?

```
$string ($cardNumber): The text you want to slice.

$offset (-4): The starting position for the cut. When we use a negative number, PHP starts counting from right instead of left.

$length (Omitted): We are not using this today!.
```

### 2. How Negative Indexing Works

PHP array and string index works from left to right, starting at position 0. But when you supply a negative offset, PHP counts from right to left, starting at -1.

How PHP sees your card number:
```
Card Number:  " 4  5  3  2  8  8  9  9  1  2  3  4  5  6  7  8 "
```
PHP sees *-4* and jumps straight to the 4th character from the right, which is '5'.

Since no $length limit was specified, it grabs '5' and every character that comes after it ('6', '7', '8'), it returns the clean substring "5678".

### 3. What Happens If You Add a Length?
What if you want to start from the 4th digit from the end, but only take 2 digits? You get the output of *56* because you gave PHP a length of *2* characters.

