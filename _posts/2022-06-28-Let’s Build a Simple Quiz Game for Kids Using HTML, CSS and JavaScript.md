# 🎉 Let’s Build a Simple Quiz Game for Kids Using HTML, CSS and JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/kids_playing_a_quiz_game_as_a.jpeg" width="100%">

Have you ever wanted to create your own fun quiz game? A game that shows one question at a time, gives three options, and celebrates when the answer is correct?

Well, today we’re going to build exactly that — step by step.

This is perfect for young learners or parents/teachers who want a beginner-friendly game for kids.

---

## 🧰 What You’ll Need

To follow this lesson, all you need is:

✅ A computer
✅ A browser (like Chrome or Firefox)
✅ A code editor (like Sublime Text or Notepad++)
✅ A smile and some curiosity! 😊

We’ll build this in three easy steps:

1. **Create the structure with HTML**
2. **Style it with CSS**
3. **Add interactivity with JavaScript**

At the end, we’ll add **5 simple practice questions** kids will love!

---

## 🧱 STEP 1: Create the HTML (The Skeleton of the Game)

Let’s start by creating the structure of the quiz game.

📝 Create a new file and name it: `index.html`
Then, add the following code:

<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Kids Quiz Game&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;div class="quiz-container"&gt;
    &lt;h1&gt;🎉 Fun Quiz Time!&lt;/h1&gt;
    &lt;div id="question"&gt;Question will appear here&lt;/div&gt;

    &lt;div id="answer-buttons" class="btn-grid"&gt;
      &lt;button class="btn"&gt;Answer 1&lt;/button&gt;
      &lt;button class="btn"&gt;Answer 2&lt;/button&gt;
      &lt;button class="btn"&gt;Answer 3&lt;/button&gt;
    &lt;/div&gt;

    &lt;div id="feedback"&gt;&lt;/div&gt;
    &lt;button id="next-btn" class="next-btn"&gt;Next Question&lt;/button&gt;
  &lt;/div&gt;

  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

### ✅ What’s happening here?

* We created a container for the quiz.
* We added a heading (`&lt;h1&gt;`) and a place to show questions.
* There’s a section for **3 answer buttons**.
* There’s a **"Next Question"** button to move to the next quiz item.
* We linked a **CSS file** (for colors and layout) and a **JavaScript file** (for the brain logic).

---

## 🎨 STEP 2: Add Some Colors with CSS

Now, let’s style our game to make it fun and friendly for children.

📝 Create a new file called: `style.css`
Then, add the following code:

<pre>
body {
  background-color: #fffbe6;
  font-family: Comic Sans MS, cursive, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.quiz-container {
  background: #f0f8ff;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
}

h1 {
  color: #ff6600;
}

#question {
  font-size: 20px;
  margin-bottom: 20px;
}

.btn-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  font-size: 18px;
  padding: 10px;
  background-color: #add8e6;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #87ceeb;
}

.next-btn {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  background-color: #90ee90;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: none;
}

#feedback {
  margin-top: 10px;
  font-size: 18px;
}
</pre>

### ✅ What’s happening here?

* The game background is light and happy.
* The buttons are colorful, soft-edged, and kid-friendly.
* We made sure everything is **centered** and **easy to click**.

Now the quiz looks like a real kids’ game!

---

## 🧠 STEP 3: Add the Brainpower with JavaScript

This is where the magic happens!
We will tell the game:

* What questions to ask
* Which answers are correct
* What happens when a child clicks an answer

📝 Create a new file called: `script.js`
Then, add this code:

<pre>
const questions = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Green", "Red"],
    correct: "Blue"
  },
  {
    question: "Which animal says 'Meow'?",
    answers: ["Dog", "Cat", "Cow"],
    correct: "Cat"
  },
  {
    question: "What number comes after 2?",
    answers: ["4", "3", "1"],
    correct: "3"
  },
  {
    question: "Which fruit is yellow?",
    answers: ["Banana", "Apple", "Grapes"],
    correct: "Banana"
  },
  {
    question: "How many legs does a spider have?",
    answers: ["8", "4", "2"],
    correct: "8"
  }
];

let currentQuestion = 0;
let score = 0; // ✅ new score variable

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  resetState();
  let q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, q.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  feedback.textContent = "";
  nextBtn.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++; // ✅ increase score
  } else {
    feedback.textContent = "❌ Oops! Try again next time.";
    feedback.style.color = "red";
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionEl.textContent = "🎉 Great job! You finished the quiz.";
  answerButtons.innerHTML = "";
  feedback.innerHTML = `🌟 Your Score: &lt;strong&gt;${score}&lt;/strong&gt; out of &lt;strong&gt;${questions.length}&lt;/strong&gt;`;
  feedback.style.color = "blue";
  nextBtn.style.display = "none";
}

showQuestion();
</pre>

### ✅ What’s happening here?

* We created an array of **5 kid-friendly questions**.
* The game shows one question at a time.
* When an answer is clicked, it checks if it’s correct.
* It gives instant feedback (Correct ✅ or Oops ❌).
* After each question, kids can click **"Next Question"**.
* At the end, the game shows a **“Great job!”** message and the score.

---

## 🎁 Final Touch: Save & Test!

1. Save all three files:

   * `index.html`
   * `style.css`
   * `script.js`
2. Open `index.html` in your browser.

If everything works, you just built a working **Quiz Game for Kids!**

---

## 💡 Challenge

1. Change the colour of the option buttons in the quiz project.
2. Add as many questions as you can to the quiz project.

---

## 🧩 Review — Fill in the Gaps

1. The main HTML file of this project is called `__________.html`.
2. The quiz game shows one question at a time using __________.
3. In CSS, we used the `background-color` property to set the page’s __________.
4. The “Next Question” button is hidden at first using `display: __________`.
5. The list of all quiz items is stored in a JavaScript __________.
6. In JavaScript, the function that checks if an answer is correct is called `__________`.
7. The user’s total score is stored in a variable called `__________`.
8. The feedback for correct and wrong answers is displayed in the element with id `__________`.
9. To make buttons respond when clicked, we use the method `add__________Listener`.
10. At the end of the quiz, the function that displays the final message is `__________()`.
