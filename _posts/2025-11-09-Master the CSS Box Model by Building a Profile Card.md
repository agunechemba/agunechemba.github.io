# 🎨 Master the CSS Box Model by Building a Profile Card

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/11/screenshot-2025-11-09-20.54.00.png" width="100%">

If you’re diving into web design, the **CSS Box Model** is one of the most important concepts to grasp. Every element on a web page—text, images, buttons—is a box. Each box has four layers:

1. **Content** – where your text or image sits
2. **Padding** – space between content and the border
3. **Border** – the visible line surrounding the box
4. **Margin** – space outside the box, separating it from other elements

By building a **Profile Card**, you’ll get hands-on experience seeing how padding, border, and margin affect layout.

---

## 🌟 Full HTML + CSS Example

Create a file named `index.html` and paste this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Card Project</title>
  <style>
    /* CENTER THE CARD */
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background-color: #f3f6f9;
    }

    /* PROFILE CARD STYLING */
    .profile-card {
      width: 280px;
      padding: 25px;
      background-color: #fff;
      border: 2px solid #dcdcdc;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      box-sizing: border-box;
    }

    /* PROFILE IMAGE */
    .profile-card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #007bff;
      margin-bottom: 15px;
    }

    /* NAME */
    .profile-card h2 {
      margin: 10px 0;
      font-size: 1.4em;
      color: #333;
    }

    /* BIO / DESCRIPTION */
    .profile-card p {
      margin-bottom: 20px;
      font-size: 0.95em;
      color: #555;
      line-height: 1.4;
    }

    /* BUTTON */
    .profile-card button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .profile-card button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <div class="profile-card">
    <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Profile Picture">
    <h2>Agu' Ekene</h2>
    <p>Web Developer || Tech Trainer</p>
    <button>Follow Me</button>
  </div>

</body>
</html>
```

---

## 🔍 What’s Happening Here?

* **Centering the card:** Using Flexbox on `body` centers it both horizontally and vertically.
* **Profile card box:** `padding` adds inner space, `border` defines edges, and `box-shadow` gives depth. `box-sizing: border-box` ensures padding and border don’t increase the card’s width.
* **Image:** Rounded with `border-radius: 50%`. `margin-bottom` separates it from the name.
* **Text:** Each element has margins that space them naturally.
* **Button:** Padding keeps the text readable, and the hover effect adds interactivity.

---

## 🧠 Hands-On Experiments

Try changing these values and watch the effects:

1. Adjust `padding` on `.profile-card` to `10px`. Notice the content shift.
2. Add `margin: 40px` to `.profile-card`. Observe how it moves relative to the page.
3. Change `border: 2px solid #dcdcdc` to `5px dashed green`. How does the outline change?
4. Remove `box-sizing: border-box`. Check the card’s width behavior.
5. Update the button padding to `5px 10px`. Does the text feel cramped?

Each tweak strengthens your understanding of the box model.

---

## 🌿 Bonus: Team Members Layout

Once you’re comfortable, create a **row of profile cards** using Flexbox:

```html
<div class="team">
  <div class="profile-card">...</div>
  <div class="profile-card">...</div>
  <div class="profile-card">...</div>
</div>
```

```css
.team {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

This creates a neat lineup of cards with consistent spacing.