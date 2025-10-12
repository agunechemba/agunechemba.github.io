# 🌙 Creating Dark Mode for Your Website: Step-by-Step Guide

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/gemini_generated_image_t05j0rt05j0rt05j.jpg" width="100%">

In today’s digital world, **dark mode** is more than just a design trend—it’s a user-friendly feature that reduces eye strain, saves battery life on mobile devices, and gives websites a sleek, modern look.

In this lesson, we’ll explore how to add **dark mode** to your website using pure CSS. We’ll also study how it was applied to two different real examples:

1. A **Jekyll blog’s post navigation** section.
2. A **personal homepage** with toggle buttons, animations, and forms.

So, sit back and enjoy this hands-on, narrative walkthrough.

---

## 🧱 Understanding the Basics: What is Dark Mode?

Before diving into code, let’s understand what we’re doing.
Dark mode simply means that when a user’s system prefers a dark interface, your website adapts by switching to darker background colors and lighter text.

This is made possible by a CSS media query called:

```css
@media (prefers-color-scheme: dark) {
  /* dark mode styles here */
}
```

Whenever the visitor’s operating system is set to “dark mode,” this block automatically activates.

---

## 🧩 Step 1: Starting with the Light Mode Design

Let’s begin with a normal website style — what users see in light mode.

```css
body {
  background: #eef3f8;
  color: #333;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  max-width: 650px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}
```

Here, the background is bright (`#eef3f8`) and the text color is dark (`#333`). This is the usual “light mode” design.

---

## 🌗 Step 2: Adding Dark Mode Support

Now, let’s introduce a dark mode version using our media query:

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0f0f0f;
    color: #e0e0e0;
  }
}
```

This simple addition ensures that users who prefer dark themes automatically see a darker version of your site.

---

## 💡 Step 3: Styling Elements for Dark Mode

Not just the `body`, but other elements—like headings, borders, code blocks, and buttons—also need adjustment.
Let’s expand our dark mode styling:

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0f0f0f;
    color: #e0e0e0;
  }

  hr {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  a {
    color: #58a6ff;
  }

  a:hover {
    color: #9cd6ff;
  }

  .post_navi {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    background-color: #121212;
  }

  .post_navi-label {
    color: #bbbbbb;
  }

  .post_navi .post_navi-item {
    color: #e5e5e5 !important;
  }
}
```

Each rule ensures visibility and comfort on a dark background.
We darkened background colors, lightened text, and made links glow subtly with soft blue hues.

---

## 💬 Step 4: Making Code Snippets Visible

If your blog includes code examples (using backticks `` `code` `` or fenced blocks ` `), dark mode can make them hard to read unless styled properly.

So, we style them separately:

```css
@media (prefers-color-scheme: dark) {
  pre, code {
    background: #1e1e1e;
    color: #d4d4d4;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  code {
    padding: 2px 6px;
    border-radius: 4px;
  }

  pre code {
    display: block;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
  }
}
```

Now your code blocks stand out beautifully in dark mode—like glowing panels of syntax.

---

## ⚙️ Step 5: Adding Dark Mode to a Personal Page

Let’s apply this to a more complex site—like your **personal homepage** with toggle sections, animations, and forms.

We keep all your original code (light mode), then add a dark mode layer like this:

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #0d1117;
    color: #e6edf3;
  }

  .container {
    background: #161b22;
    box-shadow: 0 0 10px rgba(255,255,255,0.05);
  }

  .toggle-button {
    background: linear-gradient(45deg, #238636, #2ea043);
    box-shadow: 0 0 10px rgba(46,160,67,0.4);
  }

  .toggle-content {
    background: #1a1f27;
    color: #c9d1d9;
  }

  input, textarea {
    background: #1a1f27;
    color: #f0f6fc;
    border: 1px solid #30363d;
  }

  mark {
    background: #f1c40f;
    color: #000;
  }
}
```

Everything from buttons to textareas and highlights now adapts to dark mode while keeping your brand’s professional look.

---

## 🪄 Step 6: Testing the Dark Mode

You don’t need extra JavaScript to make this work.
Simply open your system settings and switch between **Light** and **Dark mode** — your website will respond automatically!

If you want manual control, you can later add a toggle switch using JavaScript that adds a `.dark-mode` class to your `<body>`. But for most blogs and GitHub Pages, using `prefers-color-scheme` is the cleanest method.

---

## 💫 Step 7: Final Touch — Smooth Transitions

Let’s make the color change smooth:

```css
body, .post_navi, .toggle-content, .toggle-button {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

Now your site doesn’t “flash” when changing themes; it fades gracefully.

---

## ✅ Wrap-Up

By the end of this tutorial, you’ve learned:

* How to detect dark mode preferences.
* How to restyle backgrounds, text, and links.
* How to make code snippets readable.
* How to maintain aesthetic consistency across your blog and homepage.

Dark mode gives your website a polished, professional feel—and it’s only a few lines of CSS away.
