# 🧩 JavaScript Custom Elements: Your Own HTML Superpowers With Project.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/js-custom.jpg" width="100%">

## 🎯 The Big Idea

Imagine you walk into a LEGO store. You can grab standard bricks, wheels, and windows. But today, the shopkeeper says:

> “Hey, want to make your **own unique LEGO piece** that only you can design?”

That’s exactly what **Custom Elements** in JavaScript let you do—**make your own HTML tags** that work exactly how you want.

---

## 🌟 What Are Custom Elements?

HTML normally gives you things like:

```
<p>Some text here</p>
<button>Click me</button>
<img src="cat.png">
```

But with **Custom Elements**, you can invent your own, like:

```
<funny-button></funny-button>
<cool-profile></cool-profile>
<hello-box></hello-box>
```

These tags don’t exist in normal HTML. **You create them.**
And you decide:

* How they look 🖼
* What they do ⚡
* How they behave when people interact with them 🕹

---

## 🔑 How to Create a Custom Element

Think of it as a **3-step recipe**.

---

### 1️⃣ Step 1: Create a Class

A **class** is like a blueprint for your custom element.
It decides what happens when the element is added to the page.

```
class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<button>Click me!</button>";
  }
}
```

📌 `connectedCallback()` runs automatically when your element appears in the page.

---

### 2️⃣ Step 2: Register Your Element

We tell the browser:

> “Hey, whenever you see `<my-button>`, build it using this blueprint.”

```
customElements.define("my-button", MyButton);
```

⚠ **Important rule:** The name must contain a dash (`-`).
You can’t call it `<button>` — it has to be something like `<my-button>`.

---

### 3️⃣ Step 3: Use It in HTML

Once it’s registered, just type it like any normal HTML tag:

```
<my-button></my-button>
```

---

## 💡 Adding Superpowers

You can make your element **do things** when people click, hover, or type.

```
class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<button>Click me!</button>";
    this.querySelector("button").addEventListener("click", () => {
      alert("You clicked my custom button!");
    });
  }
}

customElements.define("my-button", MyButton);
```

Now `<my-button>` has **built-in magic** — no extra JavaScript needed on the page.

---

## 🚀 Why This is Awesome

* **Reusable** — make it once, use it everywhere
* **Clean HTML** — no messy script tags all over
* **Self-contained** — style + behavior in one place
* **Fun!** — you can build web pages like LEGO worlds

---

# 🛠 Mini Project — **"Hello Card" Custom Element**

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/hello-card.jpg" width="100%">

Let’s build a **custom HTML tag** that shows a friendly welcome message with a button that changes color when clicked.

---

## 📂 Project Files

We’ll need:

* `index.html` — our page
* `hello-card.js` — our custom element code
* `style.css` — optional styling

---

### index.html

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Custom Elements: Hello Card</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>My First Custom Element</h1>

  <!-- Using our custom element -->
  <hello-card></hello-card>

  <script src="hello-card.js"></script>
</body>
</html>
```

---

### hello-card.js

```
class HelloCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <h2>Hello, World! 👋</h2>
        <button>Change Color</button>
      </div>
    `;

    const button = this.querySelector("button");
    const card = this.querySelector(".card");

    button.addEventListener("click", () => {
      card.style.backgroundColor = getRandomColor();
    });
  }
}

function getRandomColor() {
  const colors = ["#FFD700", "#FF6347", "#40E0D0", "#ADFF2F", "#FF69B4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

customElements.define("hello-card", HelloCard);
```

---

### style.css

```
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

.card {
  background: lightblue;
  padding: 20px;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

button {
  padding: 8px 16px;
  border: none;
  background: darkblue;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: navy;
}
```

---

## 🎮 How It Works

1. The browser sees `<hello-card>`.
2. It looks up our **HelloCard** class.
3. `connectedCallback()` runs and builds the HTML inside the tag.
4. The button listens for a **click**.
5. When clicked, the background changes to a random color.

---


## ✅ Review and Practice Questions

1. What is the special method that runs when your custom element is added to the page?
2. Why must every custom element name contain a dash (`-`)?
3. Create a `<magic-box>` element that shows “Abracadabra!” and turns purple when clicked.
4. Can a custom element have its own CSS styles? How?
5. True or False: Custom elements can replace `<p>` tags directly.