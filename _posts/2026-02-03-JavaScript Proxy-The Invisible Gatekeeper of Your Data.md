## 🛡️ JavaScript Proxy — The Invisible Gatekeeper of Your Data

<img src="https://i.ibb.co/p6ykMy6s/Screenshot-2026-02-03-16-41-28-removebg-preview.png" width="100%">

Imagine you just finished building a beautiful digital city. Inside this city, there are many houses, and each house stores important information like names, ages, locations, and even secret scores. Now, you probably wouldn’t want random people walking into any house and touching things without permission. You would place a smart guard at every door to watch who goes in and what they do.

In JavaScript, that smart guard is called a **Proxy**.

A **Proxy** is a special JavaScript object that stands between you and another object. In simple terms, a proxy watches and controls how another object is used. Instead of users talking directly to your data, they must go through the proxy first. The proxy can allow the action, change the action, block the action, or even record what happened.

You can imagine it like this: the user talks to the proxy, and the proxy talks to the real object that holds the data. This creates a safe chain of control where nothing touches your data without permission.

To create a proxy in JavaScript, you use a simple structure:

```javascript
const proxy = new Proxy(target, handler);
```

Here is what each part means. The word **const** is a reserved JavaScript keyword used to create a variable that cannot be reassigned. The keyword **new** tells JavaScript to create a fresh object from a class. **Proxy** is the built-in JavaScript class that allows us to create proxies. The **target** is the real object we want to protect, and the **handler** is an object that contains rules that control what happens when someone tries to use the target.

Inside the handler, we write special functions called **traps**. A trap is a function that runs automatically when someone tries to do something to the object, like reading a property, writing to it, deleting it, or checking if it exists.

For example, let’s imagine we have a student record.

```javascript
const student = {
  name: "Ada",
  score: 85
};
```

Here, **const** creates a fixed variable called student. The curly braces create an object. Inside the object, **name** and **score** are properties that hold data.

Next, we create rules for our proxy using a handler.

```javascript
const handler = {
  get(obj, prop) {
    console.log(`Someone is reading ${prop}`);
    return obj[prop];
  },

  set(obj, prop, value) {
    if (prop === "score" && value > 100) {
      console.log("Error: Score cannot exceed 100");
      return false;
    }
    obj[prop] = value;
    return true;
  }
};
```

The **get** trap runs when someone tries to read data. The function **console.log()** prints a message to the console. The keyword **return** sends a value back to wherever the function was called from.

The **set** trap runs when someone tries to change data. The **if** statement checks a condition. The symbol **===** checks if two values are exactly the same. The symbol **&&** means “and”, meaning both conditions must be true. If someone tries to set the score above 100, the proxy blocks it.

Now we connect everything by creating the proxy.

```javascript
const proxyStudent = new Proxy(student, handler);
```

From this moment, every action must pass through the proxy before reaching the student object.

When someone reads data like this:

```javascript
console.log(proxyStudent.name);
```

The proxy logs the action and then returns the real value.

If someone updates the score to a valid number:

```javascript
proxyStudent.score = 95;
```

The proxy allows it.

But if someone tries to set an invalid score:

```javascript
proxyStudent.score = 150;
```

The proxy blocks it and shows an error.

Proxies are very powerful because they can stop bad data before it reaches your objects. They can protect sensitive information like passwords. They can record who accessed data and when. Some modern JavaScript frameworks even use proxies to automatically update the screen when data changes.

Proxies can even create behavior that does not exist in the original object. For example:

```javascript
const user = { name: "Ken" };

const proxyUser = new Proxy(user, {
  get(obj, prop) {
    if (prop === "greet") {
      return () => `Hello ${obj.name}`;
    }
    return obj[prop];
  }
});

console.log(proxyUser.name);
console.log(proxyUser.greet());
```

Here, the proxy creates a greeting function even though it does not exist on the original object. The arrow function `() =>` is a shorter way of writing functions in JavaScript.

Even though proxies are powerful, they should not be used everywhere. They can sometimes slow down performance, make debugging harder, and confuse beginners if used too much. They are best used when you need strong control over how your data is accessed or changed.

In the end, a JavaScript Proxy is like a security guard, a rule checker, and a watchful observer all in one. It stands between users and your data, making sure everything stays safe and controlled. When used properly, proxies help you build smarter, safer, and more predictable applications.