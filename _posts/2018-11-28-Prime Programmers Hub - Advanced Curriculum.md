# Prime Programmers Hub:  Advanced Curriculum

## RECOMMENDED PREREQUISITES

This advanced curriculum assumes students have completed:
- [JSS 1-3 curriculum (Chapters 1-9)](https://agunechemba.name.ng/2018/11/28/Prime-Programmers-Hub-JSS-1-3-Curriculum.html)
- Basic understanding of JavaScript syntax
- Familiarity with variables, functions, arrays, objects
- Experience with if/else, loops, and basic problem-solving


# ADVANCED CURRICULUM

## FIRST TERM: Modules, Async, and Language Design

### Topic 1: Introduction to Modules

**Objective:** Students will understand the concept of modules and use ES modules.

**Content:**
- What are modules? (Separation of code)
- Modular programs
- ES modules (import/export)
- Exporting and importing bindings
- Default exports
- Importing all bindings

**Code Example:**

```
// Module: dayname.mjs
const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

export function dayName(number) {
    return names[number];
}

export function dayNumber(name) {
    return names.indexOf(name);
}

// Importing: main.mjs
import {dayName} from "./dayname.mjs";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday

// Renaming imports
import {dayName as nomDeJour} from "./dayname.mjs";
console.log(nomDeJour(3));  // Wednesday

// Default exports
export default ["Winter", "Spring", "Summer", "Autumn"];

import seasonNames from "./seasonname.mjs";

// Import all
import * as dayName from "./dayname.mjs";
console.log(dayName.dayName(3));  // Wednesday
```

**Activity:** Create a module that exports math functions (add, subtract, multiply, divide).

---

### Topic 2: Packages and NPM

**Objective:** Students will use NPM to install and manage packages.

**Content:**
- What are packages?
- NPM (Node Package Manager)
- Installing packages
- package.json
- Semantic versioning

**Code Example:**

```
// Using a package
import {parse} from "ini";

// Parse an INI file
console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}

// package.json example
{
    "author": "Prime Programmers Hub",
    "name": "eloquent-javascript-robot",
    "description": "Simulation of a package-delivery robot",
    "version": "1.0.0",
    "main": "run.mjs",
    "dependencies": {
        "dijkstrajs": "^1.0.1"
    },
    "license": "ISC"
}

// Installing packages
// $ npm install ini
// $ npm install dijkstrajs
```

**Activity:** Create a package.json file for a project and install a dependency.

---

### Topic 3: CommonJS Modules

**Objective:** Students will understand and use CommonJS modules.

**Content:**
- CommonJS vs ES modules
- The require function
- The exports object
- Module caching
- require implementation

**Code Example:**

```
// CommonJS module: format-date.js
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};

// Using the module
const {formatDate} = require("./format-date.js");
console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));
// → Friday the 13th

// Simple require implementation
function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let exports = require.cache[name] = {};
        let wrapper = Function("require, exports", code);
        wrapper(require, exports);
    }
    return require.cache[name];
}
require.cache = Object.create(null);
```

**Activity:** Convert an ES module to CommonJS format.

---

### Topic 4: Asynchronous Programming - Callbacks

**Objective:** Students will understand asynchronous programming and callbacks.

**Content:**
- Synchronous vs asynchronous
- The event loop
- Callback functions
- setTimeout
- Reading files with callbacks

**Code Example:**

```
// setTimeout (asynchronous)
setTimeout(() => console.log("Tick"), 500);

// Reading a file with callbacks
function readTextFile(filename, callback) {
    // Simulated file reading
    setTimeout(() => {
        callback("File content");
    }, 1000);
}

readTextFile("shopping_list.txt", content => {
    console.log(`Shopping List:\n${content}`);
});

// Multiple asynchronous actions (callback hell)
function compareFiles(fileA, fileB, callback) {
    readTextFile(fileA, contentA => {
        readTextFile(fileB, contentB => {
            callback(contentA == contentB);
        });
    });
}

// Example with setTimeout
let start = Date.now();
setTimeout(() => {
    console.log("Timeout ran at", Date.now() - start);
}, 20);

while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55
```

**Activity:** Write a program that reads multiple files using callbacks.

---

### Topic 5: Promises and Async Functions

**Objective:** Students will use Promises and async/await for asynchronous programming.

**Content:**
- What are Promises?
- Creating and resolving promises
- Then and catch
- Promise chaining
- Async/await syntax
- Error handling with try/catch

**Code Example:**

```
// Creating a promise
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

// Promise-based file reading
function textFile(filename) {
    return new Promise(resolve => {
        readTextFile(filename, text => resolve(text));
    });
}

// Promise chaining
function randomFile(listFile) {
    return textFile(listFile)
        .then(content => content.trim().split("\n"))
        .then(ls => ls[Math.floor(Math.random() * ls.length)])
        .then(filename => textFile(filename));
}

// Error handling with catch
textFile("nonexistent.txt")
    .then(console.log)
    .catch(error => console.log("Failed:", error));

// Async/await (cleaner)
async function randomFileAsync(listFile) {
    let content = await textFile(listFile);
    let lines = content.trim().split("\n");
    let filename = lines[Math.floor(Math.random() * lines.length)];
    return await textFile(filename);
}

// Using async/await with try/catch
async function getFileContent(filename) {
    try {
        let content = await textFile(filename);
        console.log(content);
    } catch (error) {
        console.log("Failed to read file:", error);
    }
}

// Promise.all (parallel execution)
let files = ["file1.txt", "file2.txt", "file3.txt"];
Promise.all(files.map(f => textFile(f)))
    .then(contents => {
        console.log("All files read:", contents);
    });
```

**Activity:** Write an async function that fetches data from multiple sources.

---

## SECOND TERM: Browser, DOM, and Events

---

### Topic 1: JavaScript and the Browser

**Objective:** Students will understand how JavaScript works in the browser.

**Content:**
- Networks and the Internet
- HTTP protocol basics
- The World Wide Web
- HTML structure
- Script tags
- The sandbox

**Code Example:**

```
<!-- HTML Document Structure -->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>My home page</title>
</head>
<body>
    <h1>My home page</h1>
    <p>Hello, I am a student at Prime Programmers Hub.</p>
    <p>I'm learning JavaScript!</p>
    
    <!-- Including JavaScript -->
    <script>
        console.log("Hello from JavaScript!");
    </script>
    
    <!-- External script -->
    <script src="code/hello.js"></script>
    
    <!-- Inline event handler -->
    <button onclick="alert('Boom!');">DO NOT PRESS</button>
</body>
</html>
```

**Activity:** Create an HTML page with embedded JavaScript that displays a message.

---

### Topic 2: The Document Object Model (DOM)

**Objective:** Students will navigate and manipulate the DOM tree.

**Content:**
- Document structure (tree)
- The DOM tree
- Nodes and elements
- Navigating the DOM
- Finding elements

**Code Example:**

```
<!DOCTYPE html>
<html>
<head>
    <title>My home page</title>
</head>
<body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>I also wrote a book! Read it
        <a href="http://eloquentjavascript.net">here</a>.</p>
    
    <script>
        // Accessing the document
        console.log(document.documentElement);  // <html>
        console.log(document.body);             // <body>
        console.log(document.head);             // <head>
        
        // Finding elements
        let link = document.body.getElementsByTagName("a")[0];
        console.log(link.href);
        
        // Using getElementById
        let ostrich = document.getElementById("gertrude");
        console.log(ostrich.src);
        
        // Recursive traversal
        function talksAbout(node, string) {
            if (node.nodeType == Node.ELEMENT_NODE) {
                for (let child of node.childNodes) {
                    if (talksAbout(child, string)) {
                        return true;
                    }
                }
                return false;
            } else if (node.nodeType == Node.TEXT_NODE) {
                return node.nodeValue.indexOf(string) > -1;
            }
        }
        
        console.log(talksAbout(document.body, "book"));  // true
    </script>
</body>
</html>
```

**Activity:** Use DOM methods to find and display all links on a page.

---

### Topic 3: Changing the Document and Creating Nodes

**Objective:** Students will modify the DOM by creating and manipulating nodes.

**Content:**
- Changing document structure
- Creating nodes (createElement, createTextNode)
- Appending children (appendChild, insertBefore)
- Removing nodes (remove)
- Attributes (getAttribute, setAttribute)

**Code Example:**

```
<script>
// Helper function to create elements
function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
}

// Replace images with alt text
function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}

// Modifying the document
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);

// Creating and adding elements
let quote = document.getElementById("quote");
quote.appendChild(
    elt("footer", "—",
        elt("strong", "Karl Popper"),
        ", preface to the second edition of ",
        elt("em", "The Open Society and Its Enemies"),
        ", 1950")
);

// Attributes
<p data-classified="secret">The launch code is 00000000.</p>
<p data-classified="unclassified">I have two feet.</p>

<script>
    let paras = document.body.getElementsByTagName("p");
    for (let para of Array.from(paras)) {
        if (para.getAttribute("data-classified") == "secret") {
            para.remove();
        }
    }
</script>
</script>
```

**Activity:** Build a function that creates a dynamic list from an array of items.

---

### Topic 4: Layout and Styling

**Objective:** Students will manipulate element styles and understand layout.

**Content:**
- Layout and positioning
- Block vs inline elements
- offsetWidth, offsetHeight
- clientWidth, clientHeight
- getBoundingClientRect
- CSS styling (style property)
- CSS selectors

**Code Example:**

```
<style>
    .subtle {
        color: gray;
        font-size: 80%;
    }
    #header {
        background: blue;
        color: white;
    }
    strong {
        font-style: italic;
        color: gray;
    }
</style>

<script>
// Layout properties
let para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:", para.clientHeight);
console.log("offsetHeight:", para.offsetHeight);

// getBoundingClientRect
let rect = para.getBoundingClientRect();
console.log("Position:", rect.left, rect.top);

// Styling elements
let link = document.querySelector("a");
link.style.color = "green";
link.style.fontWeight = "bold";

// CSS selectors with querySelectorAll
function count(selector) {
    return document.querySelectorAll(selector).length;
}
console.log(count("p"));           // All <p> elements
console.log(count(".animal"));     // Class animal
console.log(count("p .animal"));   // Animal inside <p>
console.log(count("p > .animal")); // Direct child of <p>

// Changing display
let strong = document.querySelector("strong");
strong.style.display = "block";  // Inline to block
strong.style.display = "none";   // Hide element
</script>
```

**Activity:** Write a program that highlights all paragraphs containing a specific word.

---

### Topic 5: Handling Events

**Objective:** Students will respond to user interactions using events.

**Content:**
- Event handlers (addEventListener)
- Event objects
- Event propagation (bubbling)
- Default actions (preventDefault)
- Key events (keydown, keyup)
- Mouse events (click, mousedown, mousemove)
- Touch events
- Scroll events
- Focus events
- Load event
- Timers (setTimeout, setInterval)
- Debouncing

**Code Example:**

```
// Basic event handler
window.addEventListener("click", () => {
    console.log("You knocked?");
});

// Event object
let button = document.querySelector("button");
button.addEventListener("mousedown", event => {
    if (event.button == 0) {
        console.log("Left button");
    } else if (event.button == 1) {
        console.log("Middle button");
    } else if (event.button == 2) {
        console.log("Right button");
    }
});

// Event propagation
button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});

// Default action prevention
let link = document.querySelector("a");
link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
});

// Key events
window.addEventListener("keydown", event => {
    if (event.key == "v") {
        document.body.style.background = "violet";
    }
});

// Mouse position
window.addEventListener("click", event => {
    console.log("Clicked at", event.pageX, event.pageY);
});

// Scroll event
window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    console.log("Scrolled:", (pageYOffset / max) * 100 + "%");
});

// Debouncing
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"), 500);
});
```

**Activity:** Build a simple drawing app using mouse events.

---

## THIRD TERM: Projects - Game, Canvas, HTTP

---

### Topic 1: Project - Platform Game (Part 1)

**Objective:** Students will build a platform game using DOM elements.

**Content:**
- Game design overview
- Level representation
- Reading levels from strings
- Actors (player, coins, lava)
- Drawing with DOM

**Code Example:**

```
// Level representation
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

// Vector class
class Vec {
    constructor(x, y) {
        this.x = x; this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
}

// Level class
class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (typeof type != "string") {
                    let pos = new Vec(x, y);
                    this.startActors.push(type.create(pos, ch));
                    type = "empty";
                }
                return type;
            });
        });
    }
}

// Player class
class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }
    get type() { return "player"; }
    static create(pos) {
        return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
    }
}
Player.prototype.size = new Vec(0.8, 1.5);

// Lava class
class Lava {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }
    get type() { return "lava"; }
    static create(pos, ch) {
        if (ch == "=") {
            return new Lava(pos, new Vec(2, 0));
        } else if (ch == "|") {
            return new Lava(pos, new Vec(0, 2));
        } else if (ch == "v") {
            return new Lava(pos, new Vec(0, 3), pos);
        }
    }
}
Lava.prototype.size = new Vec(1, 1);
```

**Activity:** Create a custom level design for the platform game.

---

### Topic 2: Project - Platform Game (Part 2)

**Objective:** Students will implement game physics, motion, and control.

**Content:**
- Motion and collision detection
- Actor updates
- Gravity and jumping
- Tracking keys
- Game loop (requestAnimationFrame)
- Running the game

**Code Example:**

```
// Collision detection
Level.prototype.touches = function(pos, size, type) {
    let xStart = Math.floor(pos.x);
    let xEnd = Math.ceil(pos.x + size.x);
    let yStart = Math.floor(pos.y);
    let yEnd = Math.ceil(pos.y + size.y);
    
    for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {
            let isOutside = x < 0 || x >= this.width ||
                           y < 0 || y >= this.height;
            let here = isOutside ? "wall" : this.rows[y][x];
            if (here == type) return true;
        }
    }
    return false;
};

// Player update (motion, gravity, jumping)
const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

Player.prototype.update = function(time, state, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft) xSpeed -= playerXSpeed;
    if (keys.ArrowRight) xSpeed += playerXSpeed;
    
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall")) {
        pos = movedX;
    }
    
    let ySpeed = this.speed.y + time * gravity;
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall")) {
        pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
        ySpeed = -jumpSpeed;
    } else {
        ySpeed = 0;
    }
    
    return new Player(pos, new Vec(xSpeed, ySpeed));
};

// Tracking keys
function trackKeys(keys) {
    let down = Object.create(null);
    function track(event) {
        if (keys.includes(event.key)) {
            down[event.key] = event.type == "keydown";
            event.preventDefault();
        }
    }
    window.addEventListener("keydown", track);
    window.addEventListener("keyup", track);
    return down;
}

// Game loop
function runAnimation(frameFunc) {
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            if (frameFunc(timeStep) === false) return;
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
```

**Activity:** Add a new enemy type to the platform game.

---

### Topic 3: Drawing on Canvas

**Objective:** Students will draw graphics using the HTML Canvas API.

**Content:**
- Canvas element and context
- Drawing rectangles
- Paths (lines, curves)
- Filling and stroking
- Text on canvas
- Images

**Code Example:**

```
<canvas width="120" height="60"></canvas>

<script>
// Get canvas context
let canvas = document.querySelector("canvas");
let cx = canvas.getContext("2d");

// Drawing rectangles
cx.fillStyle = "red";
cx.fillRect(10, 10, 100, 50);

// Stroked rectangles
cx.strokeStyle = "blue";
cx.strokeRect(5, 5, 50, 50);
cx.lineWidth = 5;
cx.strokeRect(135, 5, 50, 50);

// Paths - lines
cx.beginPath();
for (let y = 10; y < 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
}
cx.stroke();

// Paths - triangle
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70);
cx.fill();

// Curves
cx.beginPath();
cx.moveTo(10, 90);
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();

// Arc (circle)
cx.beginPath();
cx.arc(50, 50, 40, 0, 7);
cx.stroke();

// Text
cx.font = "28px Georgia";
cx.fillStyle = "fuchsia";
cx.fillText("I can draw text, too!", 10, 50);

// Images
let img = document.createElement("img");
img.src = "img/hat.png";
img.addEventListener("load", () => {
    cx.drawImage(img, 10, 10);
});
</script>
```

**Activity:** Draw a simple house using canvas (rectangle, triangle roof, door).

---

### Topic 4: Transformations and Advanced Canvas

**Objective:** Students will use transformations and advanced canvas features.

**Content:**
- Images on canvas (drawImage)
- Transformations (scale, rotate, translate)
- Saving and restoring state
- Animation with canvas
- Choosing graphics interface

**Code Example:**

```
<script>
// Drawing images
let img = document.createElement("img");
img.src = "img/player.png";
let spriteW = 24, spriteH = 30;

img.addEventListener("load", () => {
    let cycle = 0;
    setInterval(() => {
        cx.clearRect(0, 0, spriteW, spriteH);
        cx.drawImage(img,
            // Source rectangle
            cycle * spriteW, 0, spriteW, spriteH,
            // Destination rectangle
            0, 0, spriteW, spriteH
        );
        cycle = (cycle + 1) % 8;
    }, 120);
});

// Transformations
cx.scale(3, .5);
cx.beginPath();
cx.arc(50, 50, 40, 0, 7);
cx.lineWidth = 3;
cx.stroke();

// Flipping horizontally
function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
}

// Save and restore
function branch(length, angle, scale) {
    cx.fillRect(0, 0, 1, length);
    if (length < 8) return;
    cx.save();
    cx.translate(0, length);
    cx.rotate(-angle);
    branch(length * scale, angle, scale);
    cx.rotate(2 * angle);
    branch(length * scale, angle, scale);
    cx.restore();
}

// Animated cat
let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);
</script>
```

**Activity:** Create an animated bouncing ball using canvas.

---

### Topic 5: HTTP and Forms

**Objective:** Students will understand HTTP and interact with forms.

**Content:**
- HTTP protocol
- Fetch API
- Form fields
- Text fields, checkboxes, radio buttons
- Select fields
- File fields
- localStorage and sessionStorage

**Code Example:**

```
// HTTP request with fetch
fetch("example/data.txt").then(response => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
    return response.text();
}).then(text => {
    console.log(text);
});

// POST request
fetch("example/data.txt", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name: "Chidi", age: 14})
});

// Form fields
let form = document.querySelector("form");

// Text fields
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", () => {
    console.log("Text length:", textarea.value.length);
});

// Checkboxes
let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", () => {
    document.body.style.background = checkbox.checked ? "purple" : "";
});

// Radio buttons
let buttons = document.querySelectorAll("[name=color]");
for (let button of Array.from(buttons)) {
    button.addEventListener("change", () => {
        document.body.style.background = button.value;
    });
}

// Select fields
let select = document.querySelector("select");
select.addEventListener("change", () => {
    console.log("Selected:", select.value);
});

// File fields
let input = document.querySelector("input[type=file]");
input.addEventListener("change", () => {
    let file = input.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        console.log("File content:", reader.result);
    });
    reader.readAsText(file);
});

// localStorage
localStorage.setItem("username", "marijn");
console.log(localStorage.getItem("username"));  // marijn
localStorage.removeItem("username");

// Note-taking app (simplified)
let state = JSON.parse(localStorage.getItem("notes")) || {
    notes: {"shopping list": "Carrots\nRaisins"},
    selected: "shopping list"
};
```

**Activity:** Build a simple contact form that saves data to localStorage.

---

## FOURTH TERM (Optional): Advanced Projects

---

### Topic 1: Project - Pixel Art Editor (Part 1)

**Objective:** Students will build a pixel art editor application.

**Content:**
- Component-based architecture
- State management
- Canvas drawing
- Tool system
- Undo history

**Code Example:**

```
// Picture class
class Picture {
    constructor(width, height, pixels) {
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    
    static empty(width, height, color) {
        let pixels = new Array(width * height).fill(color);
        return new Picture(width, height, pixels);
    }
    
    pixel(x, y) {
        return this.pixels[x + y * this.width];
    }
    
    draw(pixels) {
        let copy = this.pixels.slice();
        for (let {x, y, color} of pixels) {
            copy[x + y * this.width] = color;
        }
        return new Picture(this.width, this.height, copy);
    }
}

// State management
function updateState(state, action) {
    return {...state, ...action};
}

// Drawing on canvas
const scale = 10;

function drawPicture(picture, canvas, scale) {
    canvas.width = picture.width * scale;
    canvas.height = picture.height * scale;
    let cx = canvas.getContext("2d");
    
    for (let y = 0; y < picture.height; y++) {
        for (let x = 0; x < picture.width; x++) {
            cx.fillStyle = picture.pixel(x, y);
            cx.fillRect(x * scale, y * scale, scale, scale);
        }
    }
}

// Drawing tools
function draw(pos, state, dispatch) {
    function drawPixel({x, y}, state) {
        let drawn = {x, y, color: state.color};
        dispatch({picture: state.picture.draw([drawn])});
    }
    drawPixel(pos, state);
    return drawPixel;
}

function rectangle(start, state, dispatch) {
    function drawRectangle(pos) {
        let xStart = Math.min(start.x, pos.x);
        let yStart = Math.min(start.y, pos.y);
        let xEnd = Math.max(start.x, pos.x);
        let yEnd = Math.max(start.y, pos.y);
        let drawn = [];
        for (let y = yStart; y <= yEnd; y++) {
            for (let x = xStart; x <= xEnd; x++) {
                drawn.push({x, y, color: state.color});
            }
        }
        dispatch({picture: state.picture.draw(drawn)});
    }
    drawRectangle(start);
    return drawRectangle;
}
```

**Activity:** Add a circle drawing tool to the pixel art editor.

---

### Topic 2: Project - Pixel Art Editor (Part 2)

**Objective:** Students will complete the pixel art editor with saving/loading.

**Content:**
- Saving images (toDataURL)
- Loading images (FileReader)
- Undo history
- Component integration
- Final application

**Code Example:**

```
// Saving images
class SaveButton {
    constructor(state) {
        this.picture = state.picture;
        this.dom = elt("button", {
            onclick: () => this.save()
        }, "💾 Save");
    }
    save() {
        let canvas = elt("canvas");
        drawPicture(this.picture, canvas, 1);
        let link = elt("a", {
            href: canvas.toDataURL(),
            download: "pixelart.png"
        });
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}

// Loading images
class LoadButton {
    constructor(_, {dispatch}) {
        this.dom = elt("button", {
            onclick: () => startLoad(dispatch)
        }, "📁 Load");
    }
}

function startLoad(dispatch) {
    let input = elt("input", {
        type: "file",
        onchange: () => finishLoad(input.files[0], dispatch)
    });
    document.body.appendChild(input);
    input.click();
    input.remove();
}

function finishLoad(file, dispatch) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        let image = elt("img", {
            onload: () => dispatch({
                picture: pictureFromImage(image)
            }),
            src: reader.result
        });
    });
    reader.readAsDataURL(file);
}

// Undo history
function historyUpdateState(state, action) {
    if (action.undo == true) {
        if (state.done.length == 0) return state;
        return {
            ...state,
            picture: state.done[0],
            done: state.done.slice(1),
            doneAt: 0
        };
    } else if (action.picture && state.doneAt < Date.now() - 1000) {
        return {
            ...state,
            ...action,
            done: [state.picture, ...state.done],
            doneAt: Date.now()
        };
    } else {
        return {...state, ...action};
    }
}

// Main application
const startState = {
    tool: "draw",
    color: "#000000",
    picture: Picture.empty(60, 30, "#f0f0f0"),
    done: [],
    doneAt: 0
};

const baseTools = {draw, fill, rectangle, pick};
const baseControls = [
    ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton
];

function startPixelEditor({state = startState, tools = baseTools,
                           controls = baseControls}) {
    let app = new PixelEditor(state, {
        tools, controls,
        dispatch(action) {
            state = historyUpdateState(state, action);
            app.syncState(state);
        }
    });
    return app.dom;
}
```

**Activity:** Add keyboard shortcuts for undo and tool selection.

---

### Topic 3: Node.js - File System and HTTP

**Objective:** Students will build server-side applications with Node.js.

**Content:**
- Node.js introduction
- The node command
- Filesystem module (fs)
- HTTP module
- Streams
- Building a file server

**Code Example**

```
// Basic Node.js script
let message = "Hello world";
console.log(message);

// Command line arguments
console.log(process.argv);

// Reading files
import {readFile} from "node:fs";
readFile("file.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log("The file contains:", text);
});

// Using promises
import {readFile} from "node:fs/promises";
readFile("file.txt", "utf8")
    .then(text => console.log("The file contains:", text));

// Synchronous reading
import {readFileSync} from "node:fs";
console.log("The file contains:", readFileSync("file.txt", "utf8"));

// HTTP Server
import {createServer} from "node:http";

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello!</h1>
        <p>You asked for <code>${request.url}</code></p>
    `);
    response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

// File Server (simplified)
import {createReadStream} from "node:fs";
import {stat, readdir} from "node:fs/promises";

const methods = Object.create(null);
const baseDirectory = process.cwd();

methods.GET = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }
    if (stats.isDirectory()) {
        return {body: (await readdir(path)).join("\n")};
    } else {
        return {body: createReadStream(path)};
    }
};

methods.DELETE = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 204};
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return {status: 204};
};
```

**Activity:** Create a simple web server that serves a static HTML page.

---

### Topic 4: Project - Skill-Sharing Website (Part 1)

**Objective:** Students will build a server for a collaborative website.

**Content:**
- Project design
- HTTP interface
- Router implementation
- Serving files
- Talk management
- Long polling

**Code Example:**

```
// Router
export class Router {
    constructor() {
        this.routes = [];
    }
    add(method, url, handler) {
        this.routes.push({method, url, handler});
    }
    async resolve(request, context) {
        let {pathname} = new URL(request.url, "http://d");
        for (let {method, url, handler} of this.routes) {
            let match = url.exec(pathname);
            if (!match || request.method != method) continue;
            let parts = match.slice(1).map(decodeURIComponent);
            return handler(context, ...parts, request);
        }
    }
}

// Server
import {createServer} from "node:http";
import serveStatic from "serve-static";

class SkillShareServer {
    constructor(talks) {
        this.talks = talks;
        this.version = 0;
        this.waiting = [];
        
        let fileServer = serveStatic("./public");
        this.server = createServer((request, response) => {
            serveFromRouter(this, request, response, () => {
                fileServer(request, response,
                    () => notFound(request, response));
            });
        });
    }
    
    start(port) {
        this.server.listen(port);
    }
    
    stop() {
        this.server.close();
    }
}

// Talk management
const talkPath = /^\/talks\/([^\/]+)$/;

router.add("GET", talkPath, async (server, title) => {
    if (Object.hasOwn(server.talks, title)) {
        return {
            body: JSON.stringify(server.talks[title]),
            headers: {"Content-Type": "application/json"}
        };
    } else {
        return {status: 404, body: `No talk '${title}' found`};
    }
});

router.add("DELETE", talkPath, async (server, title) => {
    if (Object.hasOwn(server.talks, title)) {
        delete server.talks[title];
        server.updated();
    }
    return {status: 204};
});

// Long polling
SkillShareServer.prototype.waitForChanges = function(time) {
    return new Promise(resolve => {
        this.waiting.push(resolve);
        setTimeout(() => {
            if (!this.waiting.includes(resolve)) return;
            this.waiting = this.waiting.filter(r => r != resolve);
            resolve({status: 304});
        }, time * 1000);
    });
};

SkillShareServer.prototype.updated = function() {
    this.version++;
    let response = this.talkResponse();
    this.waiting.forEach(resolve => resolve(response));
    this.waiting = [];
};
```

**Activity:** Add a feature to edit existing talks.

---

### Topic 5: Project - Skill-Sharing Website (Part 2)

**Objective:** Students will complete the client-side application.

**Content:**
- Client-side rendering
- Action dispatch
- Polling for updates
- User interface
- Complete application

**Code Example:**

```
// State management
function handleAction(state, action) {
    if (action.type == "setUser") {
        localStorage.setItem("userName", action.user);
        return {...state, user: action.user};
    } else if (action.type == "setTalks") {
        return {...state, talks: action.talks};
    } else if (action.type == "newTalk") {
        fetchOK(talkURL(action.title), {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                presenter: state.user,
                summary: action.summary
            })
        }).catch(reportError);
    } else if (action.type == "deleteTalk") {
        fetchOK(talkURL(action.talk), {method: "DELETE"})
            .catch(reportError);
    } else if (action.type == "newComment") {
        fetchOK(talkURL(action.talk) + "/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                author: state.user,
                message: action.message
            })
        }).catch(reportError);
    }
    return state;
}

// Rendering components
function renderUserField(name, dispatch) {
    return elt("label", {},
        "Your name: ",
        elt("input", {
            type: "text",
            value: name,
            onchange(event) {
                dispatch({type: "setUser", user: event.target.value});
            }
        })
    );
}

function renderTalk(talk, dispatch) {
    return elt("section", {className: "talk"},
        elt("h2", null,
            talk.title,
            " ",
            elt("button", {
                type: "button",
                onclick() {
                    dispatch({type: "deleteTalk", talk: talk.title});
                }
            }, "Delete")
        ),
        elt("div", null, "by ", elt("strong", null, talk.presenter)),
        elt("p", null, talk.summary),
        ...talk.comments.map(renderComment),
        elt("form", {
            onsubmit(event) {
                event.preventDefault();
                let form = event.target;
                dispatch({
                    type: "newComment",
                    talk: talk.title,
                    message: form.elements.comment.value
                });
                form.reset();
            }
        },
            elt("input", {type: "text", name: "comment"}),
            " ",
            elt("button", {type: "submit"}, "Add comment")
        )
    );
}

// Polling for updates
async function pollTalks(update) {
    let tag = undefined;
    for (;;) {
        let response;
        try {
            response = await fetchOK("/talks", {
                headers: tag && {
                    "If-None-Match": tag,
                    "Prefer": "wait=90"
                }
            });
        } catch (e) {
            console.log("Request failed: " + e);
            await new Promise(resolve => setTimeout(resolve, 500));
            continue;
        }
        if (response.status == 304) continue;
        tag = response.headers.get("ETag");
        update(await response.json());
    }
}

// Main application
class SkillShareApp {
    constructor(state, dispatch) {
        this.dispatch = dispatch;
        this.talkDOM = elt("div", {className: "talks"});
        this.dom = elt("div", null,
            renderUserField(state.user, dispatch),
            this.talkDOM,
            renderTalkForm(dispatch)
        );
        this.syncState(state);
    }
    
    syncState(state) {
        if (state.talks != this.talks) {
            this.talkDOM.textContent = "";
            for (let talk of state.talks) {
                this.talkDOM.appendChild(
                    renderTalk(talk, this.dispatch)
                );
            }
            this.talks = state.talks;
        }
    }
}

// Run the app
function runApp() {
    let user = localStorage.getItem("userName") || "Anon";
    let state, app;
    
    function dispatch(action) {
        state = handleAction(state, action);
        app.syncState(state);
    }
    
    pollTalks(talks => {
        if (!app) {
            state = {user, talks};
            app = new SkillShareApp(state, dispatch);
            document.body.appendChild(app.dom);
        } else {
            dispatch({type: "setTalks", talks});
        }
    }).catch(reportError);
}
```

**Activity:** Add a feature to upvote talks or comments.

---

## OVERVIEW OF COVERAGE

All programming concepts, code examples, and explanations are **directly from "Eloquent JavaScript"** (4th Edition) by Marijn Haverbeke.

| Chapter | Title | Pages |
|---------|-------|-------|
| 10 | Modules | 249-267 |
| 11 | Asynchronous Programming | 268-299 |
| 12 | Project: A Programming Language | 300-320 |
| 13 | JavaScript and the Browser | 321-333 |
| 14 | The Document Object Model | 334-362 |
| 15 | Handling Events | 363-389 |
| 16 | Project: A Platform Game | 390-423 |
| 17 | Drawing on Canvas | 424-460 |
| 18 | HTTP and Forms | 461-494 |
| 19 | Project: A Pixel Art Editor | 495-525 |
| 20 | Node.js | 526-551 |
| 21 | Project: Skill-Sharing Website | 552-580 |

**Credit: [Agunechemba Ekene](https://agunechemba.name.ng/)**
