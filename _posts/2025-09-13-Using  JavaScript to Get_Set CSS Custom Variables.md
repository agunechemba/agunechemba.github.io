# 🎨 Using **JavaScript** to Get/Set CSS Custom Variables: The Magical Theme Park

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/dynamic-color-wonderland_simple_compose.jpg" width="100%">

There was a **theme park** where all the rides, shops, and decorations followed a **color theme**.

* On Monday, everything glowed **blue**.
* On Tuesday, it all turned **green**.
* On Friday, the park lit up in **red**.

How did they do this magic?
They used **CSS custom variables** (also called CSS variables) that acted like **magic paint buckets**.
And the park manager (JavaScript) could change the color of the whole park by just switching the bucket’s paint.

---

### **What are CSS Custom Variables?**

In CSS, you can define a variable (a reusable value) with two dashes (`--`).

Example:

<pre>
:root {
  --main-color: blue;
}
</pre>

Now `--main-color` is like a **named paint bucket**.
You can use it everywhere in your CSS:

<pre>
body {
  background-color: var(--main-color);
}
</pre>

---

### **How Does JavaScript Change It?**

JavaScript is like the park manager who says:
*"Hey, let’s change the main paint bucket color today!"*

#### **Set a CSS Variable with JavaScript**

<pre>
document.documentElement.style.setProperty('--main-color', 'green');
</pre>

This changes `--main-color` to green. Instantly, everything using that variable updates!

#### **Get a CSS Variable with JavaScript**

<pre>
let color = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
console.log(color); // outputs current value, e.g., "green"
</pre>

---

### **Why Is This Useful?**

* **Themes** 🌙☀️ → Switch between light mode and dark mode.
* **Customization** 🎨 → Let users pick their favorite colors.
* **Dynamic Styling** ⚡ → Change designs instantly without rewriting all CSS.

---

### **Real-Life Analogy**

Think of CSS variables as **paint buckets** labeled with names.

* The CSS decorators use these buckets to paint walls.
* JavaScript is the park manager who can swap the paint inside a bucket, instantly changing all the walls painted with it.

---

### **In Short**

* CSS variables = reusable values defined with `--`.
* JavaScript can **get** or **set** them.
* This makes styling flexible, dynamic, and super fun.

---

### **Review Questions**

1. CSS custom variables are also called CSS **__________**.
2. CSS variables always start with **__________**.
3. The function `var(--main-color)` is used to **__________** a CSS variable.
4. In JavaScript, we use `.setProperty()` to **__________** a CSS variable.
5. In JavaScript, we use `.getPropertyValue()` to **__________** a CSS variable.
6. CSS variables act like labeled **__________** buckets of paint.
7. A real-life use of CSS variables with JS is switching between light and **__________** mode.
8. Custom variables are usually defined inside the CSS selector called **__________**.
9. When you change a CSS variable in JavaScript, all elements using it update **__________**.
10. CSS variables make styling more **__________** and dynamic.
