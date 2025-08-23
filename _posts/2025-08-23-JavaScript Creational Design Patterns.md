# JavaScript Creational Design Patterns: blueprints for making objects

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/javascript-creational-design-patterns-1.jpg" width="100%">

Creational design patterns are like **blueprints for making objects** in JavaScript. Instead of creating objects in a messy, repetitive way, these patterns give us structured, reliable methods.

Think of them as **recipes**: you don’t reinvent how to bake bread every time—you follow a proven method.

In this chapter, the book shows six big patterns:

1. Factory Functions
2. Factory with Composition
3. Module & Revealing Module
4. Prototype & Revealing Prototype
5. Singleton
6. Abstract Factory

---

## 1. 🏭 Factory Functions

A **factory function** is simply a function that creates and returns objects.

Example:

```
function cowFactory(name) {
  const formalName = name + " the Cow"; // private
  return {
    talk: function() {
      console.log("Moo! I'm " + formalName);
    }
  };
}

const daisy = cowFactory("Daisy");
daisy.talk(); // Moo! I'm Daisy the Cow
```

Here, `formalName` is private—only accessible inside the factory. That’s the power of using **closures**.

---

## 2. ⚙️ Factory with Composition

Instead of inheritance (like class hierarchies), we can build objects by **combining abilities**.

```
const mover = (state) => ({
  moveSlowly: () => console.log(`${state.name} moves slowly`)
});

const speaker = (state) => ({
  speak: () => console.log(`Hi, I'm ${state.name}`)
});

const person = (name) => {
  let state = { name };
  return Object.assign({}, mover(state), speaker(state));
};

const fred = person("Fred");
fred.speak(); // Hi, I'm Fred
fred.moveSlowly(); // Fred moves slowly
```

This follows the principle: **“prefer composition over inheritance.”**

---

## 3. 🎒 Module & Revealing Module

A **Module** groups related code and hides details.

Using an IIFE (Immediately Invoked Function Expression):

```
var Module = (function () {
  var privateVar = "hidden";

  function privateFn() {
    return privateVar;
  }

  return {
    publicMethod: function () {
      return privateFn();
    }
  };
})();
```

* Outside code can only access `publicMethod()`.
* `privateVar` and `privateFn()` stay safe inside.

**Revealing Module** is just a cleaner way to return your internal methods directly under meaningful names.

---

## 4. 📐 Prototype & Revealing Prototype

JavaScript objects can share methods through **prototypes**—like having one blueprint for many copies.

```
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hi, I'm " + this.name);
};

const alice = new Person("Alice");
alice.sayHello(); // Hi, I'm Alice
```

**Revealing Prototype** improves this by keeping some data private with closures, while still revealing controlled accessors on the prototype.

---

## 5. 👤 Singleton

A **Singleton** ensures only **one instance** of something exists.

```
var Singleton = (function () {
  var instance;

  function createInstance() {
    return { message: "I am the only one!" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

let a = Singleton.getInstance();
let b = Singleton.getInstance();
console.log(a === b); // true
```

Both `a` and `b` are the same object.

---

## 6. 🏭 Abstract Factory

This is a **factory of factories**. It decides **which object to build** based on some input.

```
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function (type) {
  switch (type) {
    case "Car": return { wheels: 4 };
    case "Bike": return { wheels: 2 };
    default: return null;
  }
};

let factory = new VehicleFactory();
let car = factory.createVehicle("Car");
console.log(car.wheels); // 4
```

Instead of writing `new Car()` everywhere, you let the factory decide what to give you.

---

# ✅ Recap

* **Factory Function** → creates objects, hides details.
* **Composition Factory** → combine abilities like LEGO.
* **Module / Revealing Module** → hide private data, expose clean APIs.
* **Prototype** → share methods via blueprints.
* **Singleton** → only one instance allowed.
* **Abstract Factory** → factory that creates different factories/objects.

---

## ✏️ Fill-in-the-Gap Questions

1. A **\_\_\_\_\_\_\_\_\_\_ function** is a simple function that creates and returns new objects.
2. Factory functions often rely on **\_\_\_\_\_\_\_\_\_\_** to keep certain values private.
3. In the principle “prefer \_\_\_\_\_\_\_\_\_\_ over inheritance,” we build objects by combining small abilities.
4. A **\_\_\_\_\_\_\_\_\_\_ pattern** uses an IIFE to keep private data hidden while exposing a public API.
5. The **Revealing Module pattern** simply returns internal functions under clear public \_\_\_\_\_\_\_\_\_\_.
6. A \*\*\_\_\_\_\_\_\_\_\_\_ lets many objects share the same methods without duplicating them.
7. The **Revealing Prototype** variation allows methods to access truly \_\_\_\_\_\_\_\_\_\_ variables via closures.
8. A **\_\_\_\_\_\_\_\_\_\_ pattern** ensures that only one instance of an object exists in the entire application.
9. In the Singleton example, calling `getInstance()` multiple times always returns the \_\_\_\_\_\_\_\_\_\_ object.
10. An **\_\_\_\_\_\_\_\_\_\_ Factory** decides which specific object (like Car, Bike, Truck) to create, depending on input.