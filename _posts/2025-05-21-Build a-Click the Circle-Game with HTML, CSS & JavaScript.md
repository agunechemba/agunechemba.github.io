# 🎯 Build a "Click the Circle" Game with HTML, CSS and JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/african_child_learner_building_click_the_circle.jpeg" width="100%">

Want to make a fun little web game? In this tutorial, we’ll build a simple **"Click the Circle"** game using just **HTML, CSS, and JavaScript**.
The goal? Click as many circles as you can before time runs out!

---

## 🧱 1. Basic HTML Structure

Start with your HTML. This lays out the game's structure.

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt;
  &lt;title&gt;Click the Circle Game&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;🎯 Click the Circle Game&lt;/h1&gt;
  &lt;p&gt;
    Score: &lt;span id="score"&gt;0&lt;/span&gt; |
    High Score: &lt;span id="high-score"&gt;0&lt;/span&gt; |
    Time Left: &lt;span id="timer"&gt;30&lt;/span&gt;s
  &lt;/p&gt;

  &lt;!-- Countdown before game starts --&gt;
  &lt;div id="countdown-start"&gt;
    &lt;h2 id="countdown-number"&gt;3&lt;/h2&gt;
  &lt;/div&gt;

  &lt;!-- Game area --&gt;
  &lt;div id="game-area"&gt;
    &lt;div id="circle"&gt;&lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Game over screen --&gt;
  &lt;div id="game-over"&gt;
    &lt;h2&gt;Game Over! 🎮&lt;/h2&gt;
    &lt;p&gt;Your Final Score: &lt;span id="final-score"&gt;0&lt;/span&gt;&lt;/p&gt;
    &lt;button onclick="restartGame()"&gt;Play Again&lt;/button&gt;
  &lt;/div&gt;

  &lt;!-- Click sound --&gt;
  &lt;audio id="click-sound" src="https://www.soundjay.com/button/sounds/button-16.mp3" preload="auto"&gt;&lt;/audio&gt;

  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

---

## 🎨 2. Add Some Style with CSS

Save this in a file called **`style.css`**.
This makes the game look neat and centered.

<pre>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #fefae0;
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 20px;
  color: #333;
}

#game-area {
  width: 100vw;
  height: 70vh;
  position: relative;
  overflow: hidden;
  border: 2px solid #ccc;
  margin-top: 20px;
  background-color: #fff;
}

#circle {
  width: 50px;
  height: 50px;
  background-color: #ff595e;
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: 100px;
  cursor: pointer;
  transition: top 0.2s, left 0.2s;
}

#game-over {
  display: none;
  margin-top: 30px;
}

#game-over h2 {
  font-size: 2rem;
  color: #e63946;
}

#game-over button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#countdown-start {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

#high-score {
  color: #ff6f00;
  font-weight: bold;
}
</pre>

---

## ⚙️ 3. Game Logic with JavaScript

Now for the magic!
This JavaScript file (**`script.js`**) controls the countdown, scoring, movement, and game-over logic.

<pre>
const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameOverScreen = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const clickSound = document.getElementById('click-sound');
const countdownStart = document.getElementById('countdown-start');
const countdownNumber = document.getElementById('countdown-number');
const highScoreDisplay = document.getElementById('high-score');

let score = 0;
let timeLeft = 30;
let moveInterval;
let countdown;
let highScore = localStorage.getItem('highScore') || 0;

highScoreDisplay.textContent = highScore;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  gameOverScreen.style.display = 'none';

  moveInterval = setInterval(() => {
    const gameArea = document.getElementById('game-area');
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
  }, 1000);

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

circle.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  clickSound.play();
});

function endGame() {
  clearInterval(moveInterval);
  clearInterval(countdown);
  circle.style.display = 'none';
  finalScore.textContent = score;
  gameOverScreen.style.display = 'block';

  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = highScore;
  }
}

function startCountdown() {
  let count = 3;
  countdownNumber.textContent = count;
  countdownStart.style.display = 'flex';

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownNumber.textContent = count;
    } else {
      countdownNumber.textContent = "Go!";
      setTimeout(() => {
        countdownStart.style.display = 'none';
        circle.style.display = 'block';
        startGame();
      }, 1000);
      clearInterval(interval);
    }
  }, 1000);
}

function restartGame() {
  circle.style.display = 'none';
  startCountdown();
}

circle.style.display = 'none';
startCountdown();
</pre>

---

## 💡 How It Works

* **Circle Movement**: Every second, the circle jumps to a random spot.
* **Scoring**: Click the circle to earn points and play a click sound.
* **Timer**: You have 30 seconds to rack up your score.
* **High Score**: Stored in your browser with `localStorage`.
* **Game Over Screen**: Shows your final score and a replay button.

---

## ✅ Final Touch

* Save the HTML as **index.html**
* Save the CSS as **style.css**
* Save the JS as **script.js**
* Open `index.html` in your browser and start clicking! 🎯

---

## 🚀 Challenge

Try improving your game!

* Change the circle size randomly.
* Make the game harder over time.
* Add a “miss” counter for missed clicks.

---

<iframe height="300" style="width: 100%;" scrolling="no" title="Click the Circle Game" src="https://codepen.io/agunechemba/embed/yyymaRP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/agunechemba/pen/yyymaRP">
  Click the Circle Game</a> by Agunechemba Ekene (<a href="https://codepen.io/agunechemba">@agunechemba</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

### 🧩 Review Questions (Fill-in-the-Gap)

1. The main game circle is created using a `<______>` element with the ID `circle`.
2. The CSS `border-radius: 50%` makes the element look like a ______.
3. The game’s total playtime is controlled by the variable `__________` in JavaScript.
4. The game stores the best score in the browser using `__________`.
5. When you click the circle, the variable `__________` increases by 1.
6. The countdown before the game starts begins at the number ______.
7. The circle moves to random positions every ______ seconds.
8. The function that restarts the game is named `__________`.
9. The game area is defined by the element with ID `__________`.
10. The button that lets you play again appears only when the game is ______.
