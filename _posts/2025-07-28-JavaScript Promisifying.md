# 🎯 JavaScript Promisifying: Ordering Akara with a Callback vs a Promise

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/imagine_a_wall_written_ai_can_remix.jpg" width="100%">

### 🍽️ The Callback Way: Mama Akara's Corner

Imagine you’re **super hungry** on a Saturday morning, and you decide to go get **Akara**—those delicious fried bean cakes—from **Mama Akara's** roadside spot. You walk up to her and say:

> “Mama, I want ₦200 Akara!”

Mama Akara smiles and replies:

> “No wahala my pikin! Come back in 10 minutes—I go call you when e ready.”

So, you go sit down nearby, maybe watching the okada riders zoom by. But your ears are always alert—waiting for Mama Akara to shout:

> “Akara don ready o! Come collect am!”

That shout is like a **callback**. You left your name with Mama Akara (a function), and **when the Akara was ready**, she **called you back** with the result.

---

### 🧃 The Promise Way: The Fancy Akara App

Now imagine there’s a new joint in town—**AkaraXpress**—and they do things with technology.

You place your order online using their app. Right away, you get a **tracking link** that says:

> “Track your Akara here. You’ll be notified when it’s ready.”

That tracking link is a **Promise**!

* While you wait, you can relax, read comics, or play video games.
* When the Akara is ready, the app pings you—**`.then()`**
* If something goes wrong (they run out of beans or kerosene 😬), you get an error message—**`.catch()`**

You can even **await** the Akara like this:

```
const akara = await orderAkara();
console.log("Yay! My Akara is here:", akara);
```

That’s comfort and code all in one!

---

## 🛠️ So... What Is Promisifying?

Let’s say Mama Akara (the callback shop) wants to upgrade and reach more customers.

She doesn’t stop frying Akara her usual way, but *you* build her a simple app that **wraps her old process** with a modern **Promise-based** tracking feature.

That’s **promisifying**.

You didn’t change how she fries the Akara—you just made it easier for people to **know when it's ready** without hanging around all day.

---

## 💻 In Code: Akara Callback vs Promisified Akara

```
// Callback-style function
function orderAkara(amount, callback) {
  setTimeout(() => {
    if (amount)
      callback(null, `Here is your ₦${amount} Akara 🫘`);
    else
      callback("No amount specified!");
  }, 1000);
}

// Promisified version
function orderAkaraPromise(amount) {
  return new Promise((resolve, reject) => {
    orderAkara(amount, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

// Using the Promise
orderAkaraPromise(200)
  .then(akara => console.log("😋", akara))
  .catch(error => console.error("❌", error));
```

---

## 🧠 In a Nutshell

* **Callbacks** = Waiting for Mama Akara to **call you back**
* **Promises** = Getting a link from AkaraXpress to **track your order**
* **Promisifying** = Helping Mama Akara use a **tracking app** without changing how she fries Akara

It's all about **making old code work with new systems**, just like helping small businesses go digital!

---

## 🎮 Practice

Let’s test your knowledge with these tasty questions:

1. What’s the difference between **Mama Akara’s callback** and **AkaraXpress’s promise**?
2. Can you think of something else in real life that works like a **callback**?
3. What does it mean to “**promisify**” Mama Akara’s business?
4. If you were designing an Akara delivery app, would you use **callbacks** or **promises**? Why?
5. Try converting this sandwich function into a Promise:

   ```
   function makeSandwich(ingredients, callback) {
     if (!ingredients.length)
       callback("No ingredients!");
     else
       callback(null, "Sandwich ready!");
   }
   ```