# JavaScript Proxy: Secret Agent Between You and the Object

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/proxy.jpg" width="100%">

Picture this: you want to talk to your best friend, but instead of talking directly, you go through a **secret agent**. This agent can **listen to what you say, change your message, or even stop it** before it reaches your friend.
That’s what a **Proxy** in JavaScript does—it’s like a **middleman between you and an object**.

---

### **What is a Proxy in JavaScript?**

A **Proxy** is an object that **wraps around another object** and controls how we interact with it.
You can **intercept actions** like:

* Getting a property (`obj.name`)
* Setting a property (`obj.age = 20`)
* Even deleting a property (`delete obj.name`)

It’s like saying: “Before anyone touches my object, **check with me first!**”

---

### **Why Use a Proxy?**

* **Validation:** You can check if the value being set is valid.
* **Logging:** Keep track of what’s being accessed or changed.
* **Security:** Block access to sensitive properties.
* **Default Values:** Return a default value if a property doesn’t exist.

---

### **How Does It Work?**

We create a Proxy with:

```
let target = { name: "Alice" };

let handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : "Property not found!";
    }
};

let proxy = new Proxy(target, handler);

console.log(proxy.name); // Alice
console.log(proxy.age);  // Property not found!
```

Here’s what’s happening:

* **target** → the original object (`{ name: "Alice" }`)
* **handler** → the “rules” for the proxy
* **get trap** → runs whenever you **read** a property

---

### **Common Traps in Proxy**

* `get` → when reading a property
* `set` → when writing a property
* `deleteProperty` → when deleting a property

Example with `set`:

```
let handler = {
    set: function(obj, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new Error("Age must be a number");
        }
        obj[prop] = value;
        return true;
    }
};
```

---

### **Real-Life Analogy**

Think of a Proxy as a **security guard at a VIP party**.
If you want to enter (get a property) or bring a friend (set a property), the guard checks the rules:

* “Do you have an invitation?” (Validation)
* “Log your name in the book” (Logging)
* “Sorry, you can’t enter this room” (Restrict access)

---

### **In Short**

A Proxy lets you **control and customize how objects behave** without changing the original object.
It’s like having **superpowers over your objects**—you can spy, block, or transform their behavior.


---

#### **Review Questions**

1. A Proxy in JavaScript acts like a \_\_\_\_\_\_\_\_\_\_ between you and an object.
2. A Proxy can intercept actions like getting, setting, and \_\_\_\_\_\_\_\_\_\_ a property.
3. The original object that a Proxy wraps is called the \_\_\_\_\_\_\_\_\_\_.
4. The second argument when creating a Proxy is the \_\_\_\_\_\_\_\_\_\_, which contains the traps.
5. The trap used to intercept reading a property is called \_\_\_\_\_\_\_\_\_\_.
6. The trap used to intercept writing a property is called \_\_\_\_\_\_\_\_\_\_.
7. A Proxy can be used for security, validation, and \_\_\_\_\_\_\_\_\_\_.
8. In the example, if a property doesn’t exist, the `get` trap returns \_\_\_\_\_\_\_\_\_\_.
9. To prevent invalid data (e.g., age as text), we can use the \_\_\_\_\_\_\_\_\_\_ trap.
10. A real-life analogy for Proxy is a \_\_\_\_\_\_\_\_\_\_ at a VIP party.
