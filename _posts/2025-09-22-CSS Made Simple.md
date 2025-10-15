# 🎉 CSS Made Simple: A Beginner’s Guide to Styling the Web With Project

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/floating-profile-cards.jpg" width="100%">

# 🌟 LESSON 1: The CSS Box Model

Think of every element on a webpage as being inside an invisible rectangular box. This box isn’t just about the content you see; it also includes the **padding**, **border**, and **margin** around that content.
This concept is called the **CSS Box Model** — the very foundation of web layout design.

### 🧩 Components of the Box Model

1. **Content:**
   The actual text or image inside the element.

2. **Padding:**
   The space between the content and the border. It creates breathing room *inside* the box.

3. **Border:**
   The line surrounding the padding (if any). Borders can have width, color, and style.

4. **Margin:**
   The space *outside* the box — separating it from other elements.

### 📏 Visual Representation

```
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |      Border         |  |
|  | +-----------------+ |  |
|  | |    Padding      | |  |
|  | | +-------------+ | |  |
|  | | |  Content    | | |  |
|  | | +-------------+ | |  |
|  | +-----------------+ |  |
|  +---------------------+  |
+---------------------------+
```

### 🧪 Example Code

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  margin: 30px;
  background-color: lightyellow;
}
</style>
</head>
<body>

<div class="box">I am inside the box model!</div>

</body>
</html>
```

### 💡 Note:

If you want the total size (width + padding + border) to stay consistent, use:

```css
box-sizing: border-box;
```

This makes layout management easier because padding and borders are included in the total width/height.

---

### 🧠 Review Fill-Gap Questions (Lesson 1)

1. The CSS _______ model describes how the size of an element is calculated.
2. The space between the content and the border is called _______.
3. The space outside the border is known as _______.
4. The _______ surrounds the padding and can have style, width, and color.
5. To include padding and borders in the element’s total width, use _______.
6. In the box model, the innermost part is the _______.
7. _______ adds space between an element and its neighbors.
8. The property `box-sizing` accepts the value _______ to simplify layouts.
9. Borders are placed _______ the padding.
10. The default `box-sizing` in CSS is _______.

---

# 🎯 LESSON 2: CSS Selectors

Selectors are like the “address system” of CSS. They tell the browser *which* element(s) to style.

### 🧭 Basic Selectors

1. **Element Selector:**
   Targets all elements of a given type.

   ```css
   p { color: blue; }
   ```
2. **Class Selector:**
   Targets elements with a specific class name.

   ```css
   .highlight { background: yellow; }
   ```
3. **ID Selector:**
   Targets a single element with a specific ID.

   ```css
   #header { font-size: 24px; }
   ```
4. **Universal Selector:**
   Targets *all* elements.

   ```css
   * { box-sizing: border-box; }
   ```
5. **Group Selector:**
   Style multiple selectors together.

   ```css
   h1, h2, h3 { color: green; }
   ```

### 🎯 Combinators

1. **Descendant Selector:**

   ```css
   div p { color: gray; }
   ```

   (Targets `<p>` inside `<div>`)

2. **Child Selector:**

   ```css
   div > p { color: red; }
   ```

   (Targets only direct children)

3. **Adjacent Sibling:**

   ```css
   h2 + p { margin-top: 0; }
   ```

   (Targets the first `<p>` right after an `<h2>`)

4. **Attribute Selector:**

   ```css
   input[type="text"] { border: 1px solid blue; }
   ```

---

### 🧠 Review Fill-Gap Questions (Lesson 2)

1. The selector that targets all elements is called the _______ selector.
2. A class selector begins with a _______.
3. An ID selector begins with a _______.
4. To style multiple selectors at once, we use a _______ separated list.
5. The descendant selector is written as _______.
6. To style an element that is a direct child, use the _______ symbol.
7. Attribute selectors use _______ brackets.
8. `h2 + p` selects the _______ sibling paragraph after an h2.
9. `div p` styles only paragraphs _______ a div.
10. The ID selector is meant for _______ elements per page.

---

# 🖋️ LESSON 3: Colors & Typography

Color and typography bring your design to life. They define the *mood*, *tone*, and *readability* of your site.

---

### 🎨 Colors in CSS

There are several ways to specify colors:

1. **Named Colors**

   ```css
   color: red;
   background-color: lightblue;
   ```

2. **Hexadecimal**

   ```css
   color: #ff5733;
   ```

3. **RGB / RGBA**

   ```css
   color: rgb(255, 87, 51);
   background-color: rgba(0, 0, 0, 0.2); /* with transparency */
   ```

4. **HSL / HSLA**

   ```css
   color: hsl(200, 70%, 50%);
   ```

---

### ✍️ Typography Properties

1. **font-family**

   ```css
   font-family: 'Arial', sans-serif;
   ```
2. **font-size**

   ```css
   font-size: 18px;
   ```
3. **font-weight**

   ```css
   font-weight: bold;
   ```
4. **line-height**

   ```css
   line-height: 1.6;
   ```
5. **text-align**

   ```css
   text-align: center;
   ```
6. **text-decoration**

   ```css
   text-decoration: underline;
   ```
7. **text-transform**

   ```css
   text-transform: uppercase;
   ```

---

### 🧠 Review Fill-Gap Questions (Lesson 3)

1. The property to set text color is _______.
2. The color format `#ff5733` is called _______ code.
3. `rgba` allows us to include _______ (transparency).
4. The property `font-family` defines the _______ used.
5. To make text bold, we use _______.
6. To align text to the right, use _______.
7. The property that controls spacing between lines is _______.
8. `text-transform: uppercase;` changes all text to _______.
9. HSL stands for Hue, Saturation, and _______.
10. The property to remove underlines from links is _______.

---

# 🧱 LESSON 4: Flexbox Layout

Flexbox is a modern CSS layout system that makes it easy to design flexible, responsive layouts.
Instead of relying on floats or positioning hacks, Flexbox distributes space intelligently.

---

### 🧩 Key Concepts

1. **Flex Container:**
   The parent element where `display: flex;` is applied.
2. **Flex Items:**
   The direct children of the flex container.

---

### 🔧 Core Flex Properties

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

#### `justify-content`

Controls alignment *along the main axis*:

* `flex-start`
* `flex-end`
* `center`
* `space-between`
* `space-around`
* `space-evenly`

#### `align-items`

Controls alignment *along the cross axis*:

* `flex-start`
* `flex-end`
* `center`
* `baseline`
* `stretch`

#### `flex-direction`

Defines the direction of flex items:

* `row` (default)
* `column`
* `row-reverse`
* `column-reverse`

#### `flex-wrap`

Allows items to wrap to the next line:

```css
flex-wrap: wrap;
```

#### `align-content`

Adjusts spacing between multiple rows or columns in a wrapped layout.

---

### 🧪 Example Code

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

<style>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  background-color: #eef;
}
.box {
  background: coral;
  padding: 20px;
  color: white;
  font-size: 24px;
}
</style>
```

---

### 🧠 Review Fill-Gap Questions (Lesson 4)

1. The property that makes an element a flex container is _______.
2. Flex items are the _______ of a flex container.
3. To align items horizontally, use _______.
4. To align items vertically, use _______.
5. The default flex direction is _______.
6. To allow items to move to the next line, use _______.
7. The property `align-content` only works when there are _______ lines.
8. `justify-content: space-between;` puts space _______ items.
9. `flex-direction: column;` stacks items _______.
10. Flexbox helps build _______ layouts easily.

---

# 🧩 PRACTICE PROJECT: “Profile Card Layout with Flexbox and Box Model”


### 🎯 Objective

Create a responsive profile card that uses:

* The **Box Model** for spacing and borders
* **Selectors** for styling
* **Colors & Typography** for appeal
* **Flexbox** for alignment

---

### 🧱 HTML

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card">
  <img src="https://via.placeholder.com/150" alt="Profile Picture" class="avatar">
  <h2 class="name">Agunechemba</h2>
  <p class="role">Tech Trainer</p>
  <p class="bio">Loves teaching programming and empowering learners worldwide.</p>
  <button class="btn">Follow</button>
</div>

</body>
</html>
```

---

### 🎨 CSS (style.css)

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #83a4d4, #b6fbff);
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 250px;
}

.avatar {
  border-radius: 50%;
  margin-bottom: 15px;
}

.name {
  color: #333;
  font-size: 22px;
}

.role {
  color: #777;
  font-size: 16px;
}

.bio {
  margin: 15px 0;
  line-height: 1.4;
}

.btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
```

---

✅ **What You’ve Practiced:**

* Box Model (`padding`, `margin`, `border-radius`)
* Selectors (`.class`, `:hover`)
* Typography (`font-family`, `color`)
* Flexbox (`display: flex; justify-content; align-items`)
