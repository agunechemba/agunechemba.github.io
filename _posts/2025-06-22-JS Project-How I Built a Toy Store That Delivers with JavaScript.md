# JS Project: How I Built a Toy Store That Delivers with JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a_toy_collection.jpeg" width="100%">

I had a magical idea:

> *“What if I could build a toy store that sends me a catalog — without stepping outside?”*

No capes. No traffic. Just code. 🧙🏽‍♂️✨
And that’s how I created a simple webpage that uses **JavaScript’s superpowers** to fetch toys from a pretend catalog file — all by clicking a button.

Let me tell you how I did it, and how **you can do it too**! 🚀

---

## 🛍️ The Idea

I imagined a toy store that has a **list of toys stored in a file** called `toys.txt`. The user clicks a button, and **JavaScript goes to fetch that file**, then shows the toys on the screen. It’s like:

* Sending a **messenger bird** (using `XMLHttpRequest`)
* Or a **delivery drone** (using `fetch()`)

Either way, the toys arrive like magic on the page.

---

## 📁 Project Setup

I created a folder called `toy-store` and placed these two files inside:

```
toy-store/
├── index.html     ← the web page
└── toys.txt       ← the toy catalog
```

### 🧸 `toys.txt`

Here’s what I put inside the `toys.txt` file:

```
🧸 Teddy Bear
🚗 Race Car
🧩 Puzzle Set
🎮 Game Console
🪁 Flying Kite
```

---

## 🌐 Creating the Web Page: `index.html`

Now for the fun part — the web page!

Here’s the full code I wrote in `index.html`:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Toy Store Catalog</title>
  <style>
    body {
      font-family: 'Comic Sans MS', cursive;
      background-color: #f9faff;
      text-align: center;
      padding: 2rem;
    }

    button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      background-color: #0099cc;
      color: white;
      border: none;
      border-radius: 8px;
      margin: 1rem;
      cursor: pointer;
    }

    #output {
      margin-top: 2rem;
      padding: 1rem;
      border: 2px dashed #0099cc;
      background-color: #e8f9ff;
      white-space: pre-line;
    }
  </style>
</head>
<body>

  <h1>🧸 Welcome to the JavaScript Toy Store</h1>

  <button onclick="useMessengerBird()">Use Messenger Bird 🕊️</button>
  <button onclick="useSpeedyDrone()">Use Speedy Drone 🚁</button>

  <div id="output">📦 Waiting for the toy catalog...</div>

  <script>
    // Method 1: The Old-School Messenger Bird (XMLHttpRequest)
    function useMessengerBird() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        if (this.status === 200) {
          document.getElementById('output').innerText = this.responseText;
        } else {
          document.getElementById('output').innerText = "❌ Toy catalog not found!";
        }
      };
      xhttp.open("GET", "toys.txt", true);
      xhttp.send();
    }

    // Method 2: The Modern Speedy Drone (fetch API)
    function useSpeedyDrone() {
      fetch("toys.txt")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network issue: " + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById("output").innerText = data;
        })
        .catch(error => {
          document.getElementById("output").innerText = "❌ Error: " + error.message;
        });
    }
  </script>

</body>
</html>
```

---

## 🧠 How It Works

When you click a button:

* **Messenger Bird (`XMLHttpRequest`)** flies to get the toy catalog file and brings it back.
* **Speedy Drone (`fetch`)** does the same thing but using promises, which makes the code cleaner and modern.

The toy list is then displayed in the `#output` box like a gift opened on your birthday. 🎁

---

## 🧪 Try It Yourself

To run this project smoothly:

1. Open the folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **“Open with Live Server”**.
4. Click the buttons and watch the toys appear!

> **Note:** If you open the file without a server, the browser might block file fetching for security reasons.

---

## 🧩 What I Learned

* `XMLHttpRequest` is like a hardworking messenger from the past.
* `fetch()` is the new trend — it uses promises to simplify things.
* Both can **send GET requests** to grab files and display them on a webpage.

---

## 📚 Review Questions

1. What file format did we use to store the toy catalog?
2. What’s the difference between `XMLHttpRequest` and `fetch()`?
3. Why do we need a **local server** to run this project properly?
4. What happens when the request fails (e.g., file not found)?
5. How would you make this toy store more interactive?

