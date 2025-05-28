# JS REGEX 10: Capturing Specific Bits of Text Using Regex and `exec()`

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_young_black_boy_sqeezing_a_big.jpeg" style="width: 100%;" alt="Young Black Boy Squeezing a Big Object">


Have you ever looked through a big chunk of code or text and needed to grab just the important parts? Like in HTML, you might see something like:

```
<a href="http://goalkicker.com">goalkicker</a>
```

Maybe you don’t care about the whole tag—you just want:

* the link address: `http://goalkicker.com`
* the visible text: `goalkicker`

With **regular expressions** (aka **regex**), you can do exactly that. And if you use them with JavaScript's `RegExp.exec()` method, you get not just a match, but a nice little list of **the exact pieces you want**. Let’s break it down.

---

## 🔍 What is a Regular Expression?

A regular expression is a pattern you write to search through text. You can use it to check if something exists, or (like we’ll do here) **grab specific parts** of the text that follow a certain format.

---

## 🎣 Parentheses = Capture Nets

In regex, putting **parentheses `()` around parts of your pattern** means:

> "Hey, save this part for me."

It’s like throwing a net in the water and saying: “Catch this fish, not just anything!”

---

## 🧠 Enter `exec()` – The Smart Searcher

JavaScript’s `regex.exec(string)` searches through your text and returns:

* the **full match** (at index `0`)
* then each **captured piece** (from the `()` in your regex) at index `1`, `2`, and so on.

### Example:

```
const html = '<a href="http://goalkicker.com">goalkicker</a>';
const regex = /<a href="(https?:\/\/[^"]+)">([^<]+)<\/a>/;

const m = regex.exec(html);

console.log(m[0]); // Full match: <a href="http://goalkicker.com">goalkicker</a>
console.log(m[1]); // First capture: http://goalkicker.com
console.log(m[2]); // Second capture: goalkicker
```

**Explanation:**

* `(https?:\/\/[^"]+)` captures the link (starting with http or https, up to the next `"`).
* `([^<]+)` captures the link text (up to the next `<`, which ends the tag).

---

## 🔁 Finding All Matches

If your string has many links, and your regex has the `g` flag (global search), you can loop through them like this:

```
const html = `
  <a href="http://goalkicker.com">goalkicker</a>
  <a href="http://example.com">Example</a>
`;
const regex = /<a href="(https?:\/\/[^"]+)">([^<]+)<\/a>/g;

let match;
while ((match = regex.exec(html)) !== null) {
  console.log("URL:", match[1]);
  console.log("Text:", match[2]);
}
```

Now you're scooping out **all the links**, one by one.

---

## 🧪 Practice Time!

---

### 📝 Practice Questions:

1. **What will be the result of this code?**

   ```
   const str = '<a href="https://site.com">Site</a>';
   const regex = /<a href="(.+?)">(.+?)<\/a>/;
   const m = regex.exec(str);
   console.log(m[1]);
   ```

2. **Write a regex to capture the `src` and `alt` from this image tag:**
   `<img src="logo.png" alt="Company Logo">`

3. **Fix this broken regex so it captures the link and text correctly:**

   ```
   const regex = /<a href=(https?:\/\/[^"]+)>([^<]*)<\/a>/;
   ```

4. **Use a loop with `exec()` and the global flag to extract all email addresses**
   from this string:
   `"Contact us at info@company.com or support@help.org"`

5. **Why does the `exec()` method return `null` sometimes?**
