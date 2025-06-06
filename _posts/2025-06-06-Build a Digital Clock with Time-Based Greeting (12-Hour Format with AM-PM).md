# 🕒 Build a Digital Clock with Time-Based Greeting (12-Hour Format with AM/PM)

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a_little_boy_looking_at_a_digital.jpeg" width="100%">

One of the best ways to start learning JavaScript is by building something visual — something that *does* something right before your eyes. In this tutorial, we’ll build a **digital clock** that:

✅ Shows the **current time** in 12-hour format
✅ Includes **AM/PM** to make it familiar
✅ Updates **every second**
✅ Greets you based on the time of day

By the end, you’ll have created something dynamic, stylish, and real. Let’s dive in!

---

## 🔧 Step 1: Set Up the HTML Structure

We begin with a simple HTML file. This will be the skeleton of our clock — holding the clock and greeting elements in place.

### ✅ `index.html`

```
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

### What’s going on here?

* The `<div id="clock">` is where the live time will be displayed.
* The `<div id="greeting">` will show messages like *Good Morning 🌅* or *Good Night 🌙*.
* We link to a `style.css` file for styling and a `script.js` file for JavaScript functionality.

---

## 🎨 Step 2: Style the Clock with CSS

A plain digital clock isn't much fun to look at. Let's use CSS to center the content and give it a glowing green effect — like an old-school digital display.

### ✅ `style.css`

```
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

### Why this design?

* We use a **dark background** to make the green clock digits pop.
* The clock container is **centered** and has a slight glow effect using `box-shadow` and `text-shadow`.
* It’s easy on the eyes and gives a *techy* feel.

---

## 🧠 Step 3: Add JavaScript Logic

Now to the exciting part: **bringing the clock to life**. This is where we:

* Get the current time from the system.
* Convert it from 24-hour to 12-hour format.
* Add AM or PM.
* Display a greeting based on the hour.

### ✅ `script.js`

```
function updateClock() {
  const now = new Date();
  let hours = now.getHours(); // 0 to 23
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  // Decide AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const displayHours = formatTime(hours);

  // Update the clock
  document.getElementById('clock').textContent = `${displayHours}:${minutes}:${seconds} ${ampm}`;

  // Update greeting
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

// Run once immediately
updateClock();
// Then run every second
setInterval(updateClock, 1000);
```

### Let’s break this down:

1. **Getting the Time**:
   `new Date()` fetches the current time.

2. **Formatting**:
   We ensure that all time units (hours, minutes, seconds) have leading zeroes. For example, "09" instead of "9".

3. **12-Hour Conversion**:
   We convert from 24-hour format:

   * 0 becomes 12 AM
   * 12 stays 12 PM
   * 13 becomes 1 PM

4. **Greeting Logic**:

   * Morning: before 12 PM
   * Afternoon: 12 PM – 4:59 PM
   * Evening: 5 PM – 8:59 PM
   * Night: 9 PM and later

---

## 🚀 Test Your Clock!

Open your `index.html` in a browser. You should see:

✅ A glowing green digital clock
✅ The current time in **12-hour format**
✅ A changing **AM/PM** indicator
✅ A dynamic greeting that shifts as the day passes


---

## 📝 **Practice Questions: Digital Clock Project**

---

### **1. JavaScript Formatting Challenge**

**Q:**
In the `updateClock()` function, we used this line to format time units with a leading zero:

```
return unit < 10 ? '0' + unit : unit;
```

🔍 **Explain what this line of code does and why it’s necessary for displaying the time.**
💡 *Hint: Try removing this line and observe what changes in the display.*

---

### **2. HTML Structure Comprehension**

**Q:**
In the `index.html` file, what is the purpose of the `id` attributes `clock` and `greeting`?
✍️ **Bonus:** How does JavaScript use these IDs?

---

### **3. CSS Styling Analysis**

**Q:**
The following rule creates a glowing effect on the time display:

```
text-shadow: 0 0 10px #0f0;
```

🟩 **What do each of the values in this rule mean, and how do they create the "glow" effect?**
💬 *Also, how could you make the glow more intense?*

---

### **4. 12-Hour Format Logic**

**Q:**
Consider this part of the code:

```
hours = hours % 12;
hours = hours === 0 ? 12 : hours;
```

🧠 **What problem does this logic solve? What would happen if you removed the second line?**

---

### **5. Extend the Project**

**Q:**
Imagine you want the greeting to include the user’s name. For example:

```
Good Morning 🌅, Ekene!
```

🔧 **How would you modify the HTML and JavaScript to achieve this feature?**
🗂 *Bonus: How could you make the name customizable using a prompt?*


