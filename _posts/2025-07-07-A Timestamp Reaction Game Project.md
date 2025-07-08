# 🕐 A Timestamp Reaction Game Project: How Fast Are You?

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/a_cartoon_runner_on_very_high_speed.jpeg" width="100%">

---


Hey young coder! 👋

Imagine you and your friend are playing a game.

Your teacher shouts, "Go!" and you both try to slap the table as fast as you can. But guess what? There’s a super-duper stopwatch in the air 🕰️ that can **measure exactly** how many milliseconds it took you to react!

That magical stopwatch is just like a **timestamp** in JavaScript!

In this game, we’ll make a **circle appear randomly**. Your job? Click it as **fast as you can**!

JavaScript will secretly record two timestamps:

1. When the circle appears 👀
2. When you click it 🖱️

Then it subtracts them to find your **reaction time!**

Let’s build it together!

---

## 🧱 HTML + CSS + JavaScript Code

Here’s the complete beginner-friendly code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>How Fast Are You?</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f0f8ff;
      padding: 50px;
    }
    #circle {
      width: 100px;
      height: 100px;
      background-color: crimson;
      border-radius: 50%;
      position: absolute;
      display: none;
      cursor: pointer;
    }
    #startBtn {
      font-size: 20px;
      padding: 10px 20px;
      margin-bottom: 30px;
    }
    #message {
      font-size: 24px;
      margin-top: 50px;
    }
  </style>
</head>
<body>

  <h1>🕐 How Fast Are You?</h1>
  <button id="startBtn">Start Game</button>
  <div id="circle"></div>
  <p id="message">Click the button to start!</p>

  <script>
    const circle = document.getElementById("circle");
    const startBtn = document.getElementById("startBtn");
    const message = document.getElementById("message");

    let appearTime; // Timestamp when the circle appears

    function showCircle() {
      const top = Math.random() * 300 + 100;
      const left = Math.random() * 500 + 50;
      circle.style.top = top + "px";
      circle.style.left = left + "px";
      circle.style.display = "block";

      // Record the time the circle appears
      appearTime = Date.now();
    }

    function startGame() {
      message.textContent = "Wait for it... 👀";
      circle.style.display = "none";

      // Random time delay between 1 - 3 seconds
      const delay = Math.random() * 2000 + 1000;

      setTimeout(showCircle, delay);
    }

    circle.addEventListener("click", () => {
      const clickTime = Date.now();
      const reactionTime = (clickTime - appearTime) / 1000;
      message.textContent = `🎉 Your reaction time was ${reactionTime.toFixed(3)} seconds!`;
      circle.style.display = "none";
    });

    startBtn.addEventListener("click", startGame);
  </script>

</body>
</html>
```

---

## 🧠 What Learners Will Understand

* **Timestamps are numbers** representing time (milliseconds since Jan 1, 1970).
* `Date.now()` gives the **current timestamp**.
* You can subtract timestamps to find how much **time has passed**.
* JavaScript can make games **interactive and timed!**

---

## 📝 Practice Questions

1. What does `Date.now()` do in JavaScript?
2. What kind of number does a timestamp return — is it seconds, minutes, or milliseconds?
3. Why do we subtract one timestamp from another in the game?
4. What happens if you click the circle immediately vs after waiting?
5. Can you add a "Best Score" feature to show the fastest reaction?
