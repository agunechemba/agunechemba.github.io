# 🍪 Learn How Websites Remember You: JavaScript Cookies Explained


<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_rat_eating_up_cookies_in_a-1.jpeg" width="100%">

Hey there! 👋

Have you ever visited a website and noticed it remembers your name, your favorite language, or even the color theme you picked last time? That’s not magic—it’s **cookies** at work.

Not the kind you eat 🍪—but little pieces of information websites save in your browser. Today, we’ll learn how to “bake” one using JavaScript.

---

## 🧁 So, What’s a Cookie Really?

Imagine you’re packing a lunchbox.
You label it with your name (so it’s yours), and you put a sandwich inside (the content). You could also decide:

* **How long** you want to keep it fresh (maybe until lunchtime).
* **Where** it can be used (like only at school, not at home).

A browser cookie is just like that!
It has:

* A **name** – like “snackBox”
* A **value** – like “chocolate\_chip”
* A few extras – like how long it should last and where it should be used on your website.

---

## 🍯 Let’s Bake Our First Cookie (with Code!)

Here's how we tell the browser to save a cookie using JavaScript:

```
const COOKIE_NAME = "ExampleCookie";
const COOKIE_VALUE = "Hello, world!";
const COOKIE_PATH = "/my-section";

// Set the cookie to last 1 minute from now
const COOKIE_EXPIRES = new Date(Date.now() + 60000).toUTCString();

// Save the cookie
document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}; expires=${COOKIE_EXPIRES}; path=${COOKIE_PATH}`;
```

### Let’s Break It Down Like a Recipe:

* 🍽 **COOKIE\_NAME**: What you’re calling the cookie (like “snackBox”).
* 🍬 **COOKIE\_VALUE**: What’s inside (like “chocolate\_chip”).
* ⏰ **COOKIE\_EXPIRES**: How long until it’s “eaten” or gone. We made it last 1 minute.
* 🗂 **COOKIE\_PATH**: Where on your website this cookie should work.

---

## 🧭 Why the `path` Matters

Let’s say your website has different rooms, like a house.
If you leave a cookie in the **kitchen**, you won’t find it in the **bedroom** unless you tell it to be available **everywhere**.

The `path` lets you choose where your cookie works.

```
path=/
```

This means your cookie is available **everywhere** on your site.
But if you write:

```
path=/games
```

Then the cookie will only show up on pages that start with `/games`.

---

## 🧠 Why Do We Use Cookies?

Good question! Websites use cookies to:

* 🧞 Remember your name or settings
* 🔒 Keep you logged in
* 🎮 Remember what level you’re on in a game
* 📊 Help track who visits the site

Basically, cookies help a website remember things even after you leave.

---

## 🧪 Time to Practice!

Answer these questions like a cookie master 🍪:

1. What does a cookie store in your browser?
2. What does the `path` do when setting a cookie?
3. Why would you set an expiration time for a cookie?
4. What happens if you don’t set a `path`—will the cookie work on every page?
5. Can you write code to set a cookie named `theme` with the value `dark` that lasts 5 minutes and works everywhere on the site?

Need help with that last one? Try it like this:

```
const expires = new Date(Date.now() + 5 * 60000).toUTCString();
document.cookie = `theme=dark; expires=${expires}; path=/`;
```

---

Cookies may not be sweet, but they sure are powerful!
Keep practicing, and soon you’ll be the cookie boss of the web. 🍪💻