# 👨🏽‍🏫✨ How I Explained the JSON Replacer Function to My 8-Year-Old Student

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/an_igbo_boy_learning_programming.jpeg" width="100%">

Let me tell you a quick story...

Last week during our coding class, one of my youngest students — let’s call him Chidi — asked me a great question. We were working on a small web project that saved user data like name, points, and level. But then he looked at the code and said, “Mr. Ekene, can we hide something before it gets saved?”

Ohhh yes, Chidi! 🎯 That’s the perfect time to introduce a magic little helper called the **replacer function**.

---

## 🎒 First, what is JSON again?

I told Chidi, “Imagine you want to send a note to your friend about your favorite video game. You want to tell them your username, level, and score — but you write it in a super neat way, kind of like a robot would understand. That format is called **JSON** (JavaScript Object Notation). It’s just a way to organize data using curly braces `{}` and colons `:`.”

He nodded. “So it’s like writing your game card in a digital way?”

Exactly! 🙌🏽

---

## 💭 But what if you want to HIDE something?

Here’s the twist: sometimes, when saving data, you want to hide things. Maybe you want to:

* Hide your **real name**
* Round off your **points**
* Or just share some specific info, not everything!

This is where the **replacer** becomes your best friend!

---

## 🎩✨ What’s a Replacer Function?

So I told Chidi, “Think of the **replacer** like a magic filter. It looks at all your data before saving it and says:

* 'You? You can go in. ✅'
* 'You? Sorry, you’re not allowed. ❌'
* 'You? Hmm, I’ll clean you up first, then let you in. 🧽'”

It helps you **filter out** and **change** data before it becomes a JSON string.

---

## 🧪 Real Example Time!

I gave him this object:

```
const user = {
  name: "Joe",
  points: 14.9,
  level: 31.5
};
```

Then I showed him how to **remove the name** and **round the numbers** down:

```
const cleanedUser = JSON.stringify(user, (key, value) =>
  key === 'name'
    ? undefined  // hide the name
    : (typeof value === 'number' ? Math.floor(value) : value)
);
```

He typed it in, hit Run, and smiled when he saw:

```
{"points":14,"level":31}
```

“Mr. Ekene! It worked!”
Of course, it did, lil’ champ! 😎

---

## 🎮 We Took It Up a Notch!

Next, I gave him a real-world challenge.

We had this:

```
const paymentDetails = {
  creditCardNumber: "4111 1111 1111 1234",
  transactionAmount: 89.95
};
```

I asked, “What if we want to:

* 🚫 Hide the credit card?
* 🔽 Round down the amount?”

Here’s how we did it:

```
const safeJSON = JSON.stringify(paymentDetails, (key, value) => {
  if (key === "creditCardNumber") return undefined;
  if (typeof value === "number") return Math.floor(value);
  return value;
});
```

💥 Output:

```
{"transactionAmount":89}
```

We kept it safe. We kept it clean. We kept it cool. 😎

---

## 🧺 Wait! Replacer Can Also Be an Array?

Then I shared a bonus tip. Sometimes, you don’t want to write a full function. You can just say:

> “Hey JSON, just keep these 3 keys and ignore the rest.”

Let’s say we had:

```
const spaceship = {
  name: "Falcon X",
  fuel: "Hydrogen",
  speed: "23,000 km/h",
  secretCode: "Z9X-K33"
};
```

And we only want the name and speed. We write:

```
const filtered = JSON.stringify(spaceship, ["name", "speed"]);
```

And the result?

```
{"name":"Falcon X","speed":"23,000 km/h"}
```

Only the VIPs got into the JSON party! 🎉

---

## 📚 What My Student Learned (And You Can Too!)

By the end of that lesson, Chidi could:

* Use a replacer **function** to *hide* and *change* values
* Use a replacer **array** to pick *just the keys* he wanted
* Think about data like a real developer: **“What do I show, and what do I protect?”**

---

## 💡 Review Time! (Let’s See What You Got 😏)

1. What do you return in a replacer function to **remove** a property?
2. How can you use `Math.floor()` with a replacer to tidy up numbers?
3. What’s the difference between a replacer **function** and a replacer **array**?
4. Try this: Use a replacer to remove `"password"` from `{username: "lulu", password: "1234"}`.
5. BONUS: Replace the `creditCardNumber` with `"***HIDDEN***"` instead of removing it. Can you do it?

---

## 🧠 Final Words from Me

If you ever need to clean up your data before sending it, **replacer** is your magic broom. Whether you're a young coder or a pro dev, it helps you stay **safe**, **smart**, and **in control** of what your data says to the world.
