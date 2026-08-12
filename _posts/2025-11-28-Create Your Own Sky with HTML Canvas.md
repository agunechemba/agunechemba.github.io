# Create Your Own Sky with HTML Canvas: A Beginner’s Guide

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/11/screenshot-2025-11-09-20.41.25.png" width="100%">

Have you ever wanted to bring your imagination to life on a webpage? With HTML Canvas, you can! Today, we’ll create a simple sky scene featuring the sun, clouds, and even stars. By the end of this lesson, you’ll have a small interactive artwork that’s fully yours.

---

## **Step 1: Set Up Your HTML Canvas**

The canvas is like a blank piece of paper for your browser. First, let’s create a simple HTML file with a canvas element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Draw Your Sky</title>
</head>
<body>
    <h2>My Sky Scene</h2>
    <canvas id="skyCanvas" width="500" height="400" style="border:1px solid #000;"></canvas>

    <script>
        const canvas = document.getElementById("skyCanvas");
        const ctx = canvas.getContext("2d");

        // Draw sky background
        ctx.fillStyle = "#87CEEB"; // light blue color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    </script>
</body>
</html>
```

**What we did here:**

* Added a canvas with width and height.
* Used `getContext("2d")` to tell the browser we’ll draw in 2D.
* Filled the canvas with a light blue color for the sky.

---

## **Step 2: Draw the Sun**

Let’s add a bright yellow sun in the sky.

```javascript
// Draw the sun
ctx.beginPath();
ctx.arc(80, 80, 50, 0, Math.PI * 2); // x, y, radius, start angle, end angle
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();
```

**Explanation:**

* `arc()` draws a circle.
* `beginPath()` starts a new shape.
* `fillStyle` sets the color.
* `fill()` colors the circle.

---

## **Step 3: Add Some Clouds**

Clouds are just groups of overlapping white circles. Let’s make a simple cloud function.

```javascript
function drawCloud(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y + 10, 20, 0, Math.PI * 2);
    ctx.arc(x - 25, y + 10, 20, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Draw a few clouds
drawCloud(200, 80);
drawCloud(350, 50);
```

**Tip:** You can move the x and y values to place clouds anywhere on the canvas.

---

## **Step 4: Add Twinkling Stars (Optional)**

Want a night sky? Let’s sprinkle some stars randomly.

```javascript
function drawStars(count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2; // top half of canvas
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
}

// drawStars(50); // Uncomment to see stars
```

**Learning point:** Loops and `Math.random()` are great for creating multiple objects with varying positions.

---

## **Step 5: Make It Your Own**

Now that you have a basic sky, it’s time to get creative! Change colors, move objects, or add new elements. You can draw grass, birds, or even a rainbow.

---

## **Fun Activities to Try**

1. **Draw Grass:** Use `fillRect()` to make a green ground at the bottom.
2. **Flying Birds:** Use small triangles or circles to represent birds in the sky.
3. **Sunset Sky:** Change the sky color to an orange/pink gradient.
4. **Animated Clouds:** Move clouds slowly across the sky using `setInterval()`.
5. **Add a Moon:** Draw a crescent moon using two overlapping circles.
6. **Raindrops or Snow:** Use loops to add small shapes falling from the top.

---

## **Key Takeaways**

By completing this project, you’ve practiced:

* Selecting the canvas and drawing in 2D.
* Drawing shapes like rectangles and circles.
* Setting colors with `fillStyle`.
* Creating reusable code with functions.
* Using loops to generate multiple objects.