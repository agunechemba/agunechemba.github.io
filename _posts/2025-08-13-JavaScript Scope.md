# JavaScript Scope: The House, the Rooms, and the Rules.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/hoisting.jpg" width="100%">

Imagine you own a fancy little JavaScript house. Each room represents a scope—places where your variables and functions live, sleep, and mind their business.

Some rooms are private, with the door locked (block scope). Some are open to the hallway (function scope). And a few things you leave lying around in the yard for *everyone* to see (global scope). Let’s take a guided tour.

---

### **1. Closures: Functions With Backpacks**

Closures are like houseguests who pack souvenirs before leaving.

When you define a function inside another function, that inner function quietly packs a backpack with all the variables it saw in the outer function. Even after the outer function leaves (finishes running), the inner function still has those variables.

```
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Here, `counter` keeps `count` in its “backpack,” even though `createCounter()` is long gone. This makes closures great for private variables and avoiding accidental global leaks.

---

### **2. Hoisting: The Code Cleanup Crew**

JavaScript doesn’t just run your code—it rearranges some of it before running, like a magical housekeeper.

* **Variable and function declarations** are “moved” (hoisted) to the top of their scope.
* Only **declarations** are hoisted, not assignments.

```
console.log(name); // undefined
var name = "Agunechemba";
```

The declaration `var name;` moved to the top, but the assignment `"Agunechemba"` stayed in place.

Functions declared the classic way (`function sayHi() {}`) are fully hoisted—you can use them before they appear. But if you assign a function to a variable, only the variable name is hoisted, not the function itself.

---

### **3. var vs let vs const: Different Kinds of Tenants**

`var` tenants can roam the whole function or even the whole house if declared outside. `let` and `const` tenants are stricter—they stay inside their room (block scope).

```
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10
console.log(y); // ReferenceError
```

* **var** → Function/global scoped. Can be redeclared.
* **let** and **const** → Block scoped. Cannot be redeclared in the same scope.
* **TDZ (Temporal Dead Zone)** → Even though `let` and `const` are hoisted, you can’t use them before their declaration line.

---

### **4. `this`: Who Owns the Room?**

`this` is like the “owner” of the current space—but who that owner is depends on how the function is called.

* **Method call**: `this` is the object before the dot.
* **Function call**: In non-strict mode, `this` is the global object; in strict mode, it’s `undefined`.
* **Arrow functions**: They don’t have their own `this`; they “borrow” it from the surrounding scope.
* **bind, call, apply**: Let you explicitly set `this`.
* **new keyword**: Makes `this` point to a brand-new object.

---

### **5. `let` in Loops: The Key to Remembering**

When you use `var` in loops, all iterations share the same variable, which can cause strange bugs.

```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// 3, 3, 3
```

With `let`, each iteration gets its own separate `i`, like having separate lockers for each loop turn.

```
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// 0, 1, 2
```

---

### Quick Takeaways:

* **Closures**: Functions that remember the scope they were born in.
* **Hoisting**: Declarations move to the top, assignments stay put.
* **var / let / const**: Different scoping rules and redeclaration behaviors.
* **`this`**: Context changes depending on how you call the function.
* **`let` in loops**: Each loop iteration gets a fresh variable.

---

## **Review Fill-Gap Questions**

1. A closure is like a function carrying a \_\_\_\_\_\_\_\_\_\_ of variables from its original scope.
2. In hoisting, only \_\_\_\_\_\_\_\_\_\_ are moved to the top of their scope, not assignments.
3. `var` is \_\_\_\_\_\_\_\_\_\_-scoped, while `let` and `const` are block-scoped.
4. Using `let` in loops creates a \_\_\_\_\_\_\_\_\_\_ copy of the loop variable for each iteration.
5. The special hoisting storage location for `let` and `const` before initialization is called the \_\_\_\_\_\_\_\_\_\_.
6. In a method call, the value of `this` is the \_\_\_\_\_\_\_\_\_\_ before the dot.
7. Arrow functions use the `this` value from their \_\_\_\_\_\_\_\_\_\_ scope.
8. The `bind` method creates a new function with a fixed \_\_\_\_\_\_\_\_\_\_ value.
9. When using `var` inside a block like an `if` statement, the variable is still visible \_\_\_\_\_\_\_\_\_\_ the block.
10. Using `new` with a function makes `this` point to a \_\_\_\_\_\_\_\_\_\_ object.