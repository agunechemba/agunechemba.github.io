# 🧠 Transforming Text with `toUpperCase()` in JavaScript

![JavaScript Uppercase](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/09/6015105009924031171.jpg?w=1024)

### 🔍 Understanding `toUpperCase()`

In JavaScript, the `toUpperCase()` method is used to convert all lowercase letters in a string to uppercase. This is helpful when you want to **standardize text** or make words stand out.

---

### 🧾 Syntax

```javascript
string.toUpperCase();
```

---

### 💡 Example

```javascript
let originalString = "Hello, world!";
let uppercaseString = originalString.toUpperCase();
console.log(uppercaseString); // Output: HELLO, WORLD!
```

---

### 📌 Key Points

* **Case Sensitivity**: Only lowercase characters are affected.
* **Immutable**: It returns a new string; the original stays the same.
* **Non-Letters**: Numbers and symbols are not changed.

---

## 📝 Quick Quiz

### **Quiz 1**

Which code correctly converts `"hello, world!"` to uppercase?

* A. `console.log("hello, world!".toUpperCase());` ✅
* B. `console.log("hello, world!".toLowerCase());`
* C. `console.log("hello, world!".charAt(0).toUpperCase());`
* D. `console.log("hello, world!".replace("hello", "HELLO"));`

---

### **Quiz 2**

Does `toUpperCase()` modify the original string?

* A. Yes, it modifies the original string.
* B. **No, it returns a new string with the converted characters.** ✅
* C. It depends on the browser.
* D. It only modifies strings that are stored in variables.

---

> 💬 *Type your answers in the comment section!*
