# 🔍 Mastering JavaScript Object Properties: Dot Notation vs. Bracket Notation (With Emojis, Digits and More!)

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/02/a_glass_box_with_the_text_js-edited.jpeg" alt="" class="wp-image-1997" />

---

### 🧱 JavaScript Objects = Key-Value Pairs

You’ve probably used this:

```js
myObject.name = "Ken";
```

That’s **dot notation** — the simplest way to access object properties. But here’s the thing:

> ❌ It only works for *valid identifiers* (letters, numbers, `_`, `$`).
> ❌ It **can’t handle** spaces, emojis, or special characters.

---

### 🤯 What Happens with Weird Property Names?

Say you try this:

```js
myObject.special property ☺ = 'Oops!';
```

You’ll get a **syntax error**. Why? That property name has a **space** and an **emoji**.

---

### ✅ Use Bracket Notation Instead

Here’s the fix:

```js
myObject['special property ☺'] = 'It works!';
console.log(myObject['special property ☺']); // Output: 'It works!'
```

Bracket notation accepts **any string**, making it perfect for:

* User-generated property names
* Property names with emojis, spaces, punctuation, etc.

---

### 🔢 What About Numbers as Keys?

You can do:

```js
myObject[123] = 'hi!';
```

JavaScript converts the number `123` to the string `'123'`, so this works:

```js
console.log(myObject['123']); // hi!
console.log(myObject[123]);   // hi!
```

You can even use expressions:

```js
myObject['12' + '3'];   // hi!
myObject[120 + 3];      // hi!
myObject[123.0];        // hi!
```

> ⚠️ **Avoid leading zeros** in number keys:

```js
myObject[0123]; // Might behave strangely (octal!)
```

---

### 🧠 Key Takeaways

1. **Dot Notation** → For normal names like `name`, `age`, `user_1`.
2. **Bracket Notation** → For:

   * Special characters (`['hello world!']`)
   * Emojis (`['💻']`)
   * All-digit names (`[123]`)
   * Dynamic expressions (`['key' + 1]`)

---

### ✨ Final Tip

Use dot notation for **clean, predictable** keys.
Use bracket notation when things get **fancy, weird, or dynamic**.

---

Here are **3 review questions** you can add at the end of your post:

---

## 📝 Review Questions

1. **Why can't you use dot notation to access a property like `myObject["user name"]`?**
   *(Hint: Think about valid identifiers.)*

2. **What will the following code output?**

   ```
   const obj = {};
   obj[456] = 'Hello!';
   console.log(obj['456']);
   ```

   *(Explain why.)*

3. **When should you choose bracket notation over dot notation in JavaScript?**
   *(List at least two cases.)*
