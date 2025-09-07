# ⚡ JavaScript Async Functions (async/await): Never Freeze And Wait!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/javascript-async-functions.jpg" width="100%">

### **Imagine Waiting for Pizza Delivery 🍕**

You order pizza online. While you’re waiting, do you just sit by the door doing nothing? Nope—you play video games, chat with friends, or scroll TikTok.
When the pizza finally arrives, you pause what you’re doing and grab it.

That’s exactly how **async/await** works in JavaScript—it lets your code **do other things while waiting** for a slow task (like downloading data, reading a file, or fetching from the internet).

---

### **The Problem with Normal Code**

Normally, JavaScript runs line by line. But some things take time:

* Downloading a file
* Talking to a server
* Waiting for user input

If we didn’t have async functions, the whole program would just **freeze and wait**, like staring at the oven until your pizza is ready. 🍕

---

### **Promises to the Rescue**

Before `async/await`, developers used **Promises**.
A Promise is like the pizza delivery receipt:

* *“Pizza is on the way!”* (pending)
* *“Pizza has arrived!”* (resolved)
* *“Sorry, we’re out of cheese…”* (rejected)

But writing `.then()` and `.catch()` everywhere got messy.

---

### **Enter async/await**

`async/await` makes working with Promises feel like normal, step-by-step code.

* `async` → marks a function that does something asynchronous.
* `await` → tells JavaScript: *“pause here until the Promise is done, then continue.”*

---

### **Example**

```
async function getData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}

getData();
```

What happens:

1. The function is marked `async`.
2. The `await fetch(...)` pauses until the server responds.
3. Meanwhile, the rest of your program keeps running (non-blocking).
4. When the data arrives, the code continues.

---

### **Why is async/await awesome?**

* It looks like normal code (easy to read).
* No messy `.then()` chains.
* Errors can be handled with simple `try...catch`.

Example:

```
async function getUser() {
    try {
        let response = await fetch("/user");
        let user = await response.json();
        console.log(user);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}
```

---

### **Real-Life Analogy**

Async/await is like having a **pager** that beeps when your pizza arrives. You don’t stand by the door the whole time—you do other stuff until the pager says “It’s here!”

---

### **In Short**

* `async` = function does async work.
* `await` = pause until Promise finishes.
* Makes async code look like normal code.

---


### **Review Questions**

1. Async/await is used in JavaScript to handle \_\_\_\_\_\_\_\_\_\_ tasks.
2. An `async` function always returns a \_\_\_\_\_\_\_\_\_\_.
3. The `await` keyword makes JavaScript \_\_\_\_\_\_\_\_\_\_ until a Promise is finished.
4. Promises can be pending, resolved, or \_\_\_\_\_\_\_\_\_\_.
5. Async/await makes code look more like \_\_\_\_\_\_\_\_\_\_ code.
6. To handle errors in async functions, we often use \_\_\_\_\_\_\_\_\_\_.
7. Without async/await, developers had to chain \_\_\_\_\_\_\_\_\_\_ and `.catch()`.
8. A real-life analogy for async/await is waiting for a \_\_\_\_\_\_\_\_\_\_ delivery while doing other things.
9. The `await` keyword can only be used inside an \_\_\_\_\_\_\_\_\_\_ function.
10. Async/await prevents programs from \_\_\_\_\_\_\_\_\_\_ while waiting for slow tasks.