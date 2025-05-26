# 🕒 Build a Digital Clock with JavaScript + Time-Based Greeting

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_digital_wall_clock_on_a_wall.jpeg" style="width: 100%; margin: 0 auto; display: block; text-align: center;" />

---


Let’s create a clean, glowing **digital clock** that not only shows the time but also gives the user a greeting like *“Good Morning”* or *“Good Night”* — all using **HTML, CSS, and JavaScript functions**.

Great for learners who want to build real, visual projects while practicing **function-based logic in JS**.

---

## 🧱 Step 1: Create the HTML

We need two things on the screen: the **clock** and the **greeting**.

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Digital Clock</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="clock-container">
    <div id="clock">00:00:00</div>
    <div id="greeting">Hello!</div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 Step 2: Style the Clock and Greeting with CSS

Let’s make it glow and center everything.

```
/* style.css */
body {
  margin: 0;
  padding: 0;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.clock-container {
  background: #222;
  padding: 40px 60px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 100, 0.5);
  text-align: center;
}

#clock {
  font-size: 4rem;
  color: #0f0;
  letter-spacing: 3px;
  text-shadow: 0 0 10px #0f0;
}

#greeting {
  margin-top: 10px;
  color: #fff;
  font-size: 1.5rem;
}
```

---

## 🧠 Step 3: Use JavaScript Functions for Time & Greeting

Let’s create **reusable functions** to:

* Format the time
* Get a greeting based on the hour
* Update everything every second

```
// script.js

function updateClock() {
  const now = new Date();

  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('greeting').textContent = getGreeting(now.getHours());
}

function formatTime(unit) {
  return unit < 10 ? '0' + unit : unit;
}

function getGreeting(hour) {
  if (hour < 12) return "Good Morning 🌅";
  if (hour < 17) return "Good Afternoon ☀️";
  if (hour < 21) return "Good Evening 🌇";
  return "Good Night 🌙";
}

setInterval(updateClock, 1000);
updateClock();
```

---

## 🔄 What’s Happening?

* `updateClock()` fetches the current time and updates the clock and greeting.
* `formatTime()` ensures we always have two digits (e.g., "08" not "8").
* `getGreeting()` returns a greeting emoji based on the current hour.

---

## 🎯 Result

You get something like this:

```
🕒 14:23:41  
☀️ Good Afternoon
```

And it updates every second, all with reusable JavaScript functions. Clean and smart!

---

## 🧪 Practice Questions

Test what you’ve learned:

1. **What does `setInterval(updateClock, 1000)` do exactly?**
2. **Modify the clock to show time in `12-hour format` with AM/PM.**
3. **Add today’s date below the greeting in this format: `Monday, May 26, 2025`.**
4. **Why do we call `updateClock()` immediately, before the interval starts?**
5. **Change the greeting logic to use a `switch` statement instead of `if...else`.**
