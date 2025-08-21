# 🎨 JavaScript requestAnimationFrame: Smooth Animations in JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/javascript-requestanimationframe.jpg" width="100%">

Imagine you’re creating a game where a ball bounces across the screen. You could move it using a timer like `setInterval()`, but here’s the problem:

* Different computers have different speeds.
* Browsers need to sync animations with the screen refresh rate (usually 60 frames per second).
* If your animation isn’t synced, it looks **jumpy** or **laggy**.

Enter **`requestAnimationFrame`** – the superhero of smooth animations!

---

## **What is `requestAnimationFrame`?**

It’s a built-in JavaScript method that tells the browser:

> “Hey browser, I want to do some animation. Please call my function right before you repaint the screen.”

This means:

* Animations become **smooth** and match the screen refresh rate.
* If the user switches to another tab, the animation **pauses automatically** (saves battery & performance).

---

## 🏀 **Mini Project: Bouncing Ball Animation**

This project will show how `requestAnimationFrame` keeps animations smooth and efficient.

---

### ✅ **Step 1: Create the HTML Structure**

```
<!DOCTYPE html>
<html>
<head>
  <title>Bouncing Ball Animation</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: #f0f0f0;
    }
    #ball {
      width: 50px;
      height: 50px;
      background: crimson;
      border-radius: 50%;
      position: absolute;
      top: 50px;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="ball"></div>
  <script src="script.js"></script>
</body>
</html>
```

---

### ✅ **Step 2: Add the JavaScript (script.js)**

```
let ball = document.getElementById("ball");
let positionX = 0;
let positionY = 50;
let speedX = 4;
let speedY = 3;
let maxWidth = window.innerWidth - 50;
let maxHeight = window.innerHeight - 50;

function animate() {
  // Update position
  positionX += speedX;
  positionY += speedY;

  // Bounce horizontally
  if (positionX >= maxWidth || positionX <= 0) {
    speedX *= -1; // reverse direction
  }

  // Bounce vertically
  if (positionY >= maxHeight || positionY <= 0) {
    speedY *= -1; // reverse direction
  }

  // Apply new position
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  // Continue animation
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);

// Adjust when window resizes
window.addEventListener("resize", () => {
  maxWidth = window.innerWidth - 50;
  maxHeight = window.innerHeight - 50;
});
```

---

### ✅ **How It Works**

* `requestAnimationFrame(animate)` calls `animate()` before every screen repaint.
* Each call updates the ball’s position by adding `speedX` and `speedY`.
* If the ball hits the edges of the screen, it **bounces** by reversing direction.
* The animation is smooth and synced with the monitor’s refresh rate (usually 60fps).

---

### ✅ **Why This Project is Perfect**

* Demonstrates **continuous animation without freezing**.
* Shows **dynamic updates** when the window resizes.
* Uses **real physics-like behavior** (bouncing effect).

---

## Review Questions

1. `requestAnimationFrame` tells the browser to call a function right before it **___________** the screen.
2. Using `requestAnimationFrame` helps animations match the screen **___________** rate, making them look smooth.
3. If a user switches to another tab, an animation using `requestAnimationFrame` will **___________** automatically.
4. In the provided JavaScript code, `ball.style.left` and `ball.style.top` are used to apply the ball's new **___________**.
5. The ball's direction is reversed by multiplying its speed (`speedX` or `speedY`) by **___________**.
6. `window.addEventListener("resize", ...)` is used to adjust the **___________** and `maxHeight` variables when the window size changes.
7. The `animate()` function recursively calls **___________** to continue the animation loop.
8. The `setInterval()` method can cause animations to look **___________** or laggy on different computers.
9. In the project, the ball's width and height are 50px, which is why 50 is subtracted from `window.innerWidth` and `window.innerHeight` to calculate **___________** and `maxHeight`.
10. The `requestAnimationFrame` method is a built-in **___________** method for creating smooth animations.