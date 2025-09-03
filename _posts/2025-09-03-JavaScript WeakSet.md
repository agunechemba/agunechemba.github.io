# JavaScript WeakSet: Your Secret Guest List

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/weakset.jpg" width="100%">

Think of a **party guest list** where only special guests can enter. But here’s the twist:

* The names on the list are not written in ink, they are written in **disappearing ink**.
* If a guest leaves the party and no one remembers them anymore, their name **vanishes automatically** from the list.

That’s what a **WeakSet** is in JavaScript.

---

### **What is a WeakSet?**

A **WeakSet** is like a normal Set, but with some special rules:

1. It only stores **objects** (not numbers, strings, or other primitive values).
2. If an object is no longer referenced anywhere in the program, it will be **garbage collected** and automatically removed from the WeakSet.
3. It doesn’t keep a permanent record—you can’t list out all its values.

---

### **How is it different from Set?**

* **Set** can store anything (numbers, strings, objects) and you can loop through it.
* **WeakSet** only stores **objects**, and you **cannot loop** through its contents.

---

### **Example**

```
let weakGuests = new WeakSet();

let guest1 = { name: "Alice" };
let guest2 = { name: "Bob" };

weakGuests.add(guest1);
weakGuests.add(guest2);

console.log(weakGuests.has(guest1)); // true

guest1 = null; // Alice leaves the party
// Automatically removed from WeakSet!
```

Here:

* `guest1` and `guest2` are objects added to the WeakSet.
* When `guest1` is set to `null`, WeakSet forgets about Alice automatically.

---

### **Methods of WeakSet**

* `.add(object)` → adds an object
* `.has(object)` → checks if object is in the set
* `.delete(object)` → removes an object

---

### **Real-Life Analogy**

WeakSet is like a **VIP invisible guest list**:

* Only people (objects) can enter.
* If someone leaves and no one remembers them, their name disappears.
* You can check if someone is on the list, but you can’t see the full list.

---

### **In Short**

* WeakSet = **special set for objects only**.
* Objects disappear when no longer needed.
* Good for memory-friendly tracking of objects.

---

#### **Review Questions**

1. A WeakSet is similar to a Set, but it only stores \_\_\_\_\_\_\_\_\_\_.
2. If an object in a WeakSet is no longer referenced, it is automatically \_\_\_\_\_\_\_\_\_\_ collected.
3. Unlike a normal Set, WeakSet cannot store \_\_\_\_\_\_\_\_\_\_ values.
4. The method used to add an object to a WeakSet is \_\_\_\_\_\_\_\_\_\_.
5. The method used to check if an object exists in a WeakSet is \_\_\_\_\_\_\_\_\_\_.
6. The method used to remove an object from a WeakSet is \_\_\_\_\_\_\_\_\_\_.
7. You cannot \_\_\_\_\_\_\_\_\_\_ through the contents of a WeakSet.
8. WeakSet helps prevent \_\_\_\_\_\_\_\_\_\_ leaks by automatically removing unreferenced objects.
9. A real-life analogy for WeakSet is a \_\_\_\_\_\_\_\_\_\_ list with disappearing ink.
10. Normal Set can store numbers, strings, and objects, but WeakSet can only store \_\_\_\_\_\_\_\_\_\_.