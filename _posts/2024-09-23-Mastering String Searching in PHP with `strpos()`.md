# 🔍 Mastering String Searching in PHP with `strpos()`

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/php-2.png?w=1024" alt="" class="wp-image-1707" />


PHP’s `strpos()` is a handy function used to **find the position** of a substring (the “needle”) inside another string (the “haystack”). It’s super useful for input validation, text processing, and more.

---

### 🧠 Syntax

```php
strpos(string $haystack, string $needle, int $offset = 0)
```

* `$haystack`: The full string you're searching in.
* `$needle`: The part you're looking for.
* `$offset` (optional): Where to start the search from.

---

### 🔁 What It Returns

* If found → returns the **position** (starting at 0).
* If not → returns **false**.

✅ Always use `!== false` for checks. Why? Because a return value of `0` means the match is at the very start — and `0 == false` would be misleading.

---

### 📌 Example

```php
$text = "Hello, world!";
$search = "world";
$pos = strpos($text, $search);

if ($pos !== false) {
  echo "Found at position: $pos";
} else {
  echo "Not found.";
}
```

**Output:**
`Found at position: 7`

---

### ⚠️ Things to Note

* **Case-sensitive:** `"World"` ≠ `"world"`.
* **Binary-safe.**
* Use strict comparison to avoid false positives.

---

### 💡 Use Cases

* Checking for banned words in user input
* Parsing logs or CSV files
* Extracting data
* Cleaning up messy strings

---

### 🧪 Quick Quiz

**1. What does `strpos()` return if the needle isn’t found?**
a) 0
b) "not found"
c) false
d) error message

**2. What’s the output?**

```php
$text = "This is a sample string.";
$search = "sample";
echo strpos($text, $search);
```

---

### ✅ Wrap-Up

`strpos()` is small but mighty. Mastering it helps you write smarter string-handling code in PHP. Try it out in your next form validation or data parser!
