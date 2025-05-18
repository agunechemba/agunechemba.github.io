# Giving Your Website a Voice: ARIA-label for Accessibility

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/for-4.png?w=1024" alt="" class="wp-image-1757" />

---

## 🧑‍🦯 Why Accessibility Matters

Ever wondered how someone who can’t see uses a website? That’s where **screen readers** and **ARIA-label** come in.

---

## 🎙️ What is ARIA-label?

Think of `aria-label` as a **“voice tag”**. It tells screen readers what an element is or does—so blind or low-vision users can interact with your site easily.

---

## 🔧 How to Use It

Super simple steps:

```html
<button aria-label="Submit Order">Place Order</button>
```

* 🏷️ `aria-label="Submit Order"` — This is what the screen reader will say.
* ✅ Helps users know **what** they’re clicking.

---

## ✅ Real-Life Examples

* **Buttons:**
  Bad: “Click Here”
  Better: `<button aria-label="Submit Form">Click</button>`

* **Images:**
  `alt="Sunset"`
  Add ARIA for more: `aria-label="Sunset over the Pacific Ocean"`

* **Icons:**
  `<i class="play-icon" aria-label="Play Video"></i>`

---

## 🌍 Why It Matters

Adding `aria-label` = More people can use your site.
It's inclusive, thoughtful, and easy.

---

## 🧠 Quiz Time!

**Q1:**
What’s the main use of `aria-label`?

**(a)** Looks better
**(b)** For image alt text
**(c)** Helps screen reader users
**(d)** For styling

---

**Q2:**
How does `aria-label` help screen reader users?


