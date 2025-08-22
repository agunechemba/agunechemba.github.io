# JavaScript Creational Design Patterns: Don't Repeat Yourself" (DRY) principle

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/javascript-creational-design-patterns.jpg" width="100%">


Creating things from scratch can be tough, especially when you're building a website or app. Luckily, **design patterns** are like blueprints for writing code. They're tried-and-true solutions to common problems, helping you write cleaner, more organized code. In this lesson, we'll dive into **creational design patterns**—the ones that focus on how you create objects. Using these patterns will make your code more readable and easier to maintain. Plus, you won't have to repeat yourself! 🚀

---

## The Factory Function Pattern
Imagine you have a cookie-making machine. Instead of building a whole new machine every time you want a cookie, you just press a button, and the machine makes one for you. A **factory function** works the same way. It's a simple function that returns an object.

Factory functions are great because they don't need the `new` keyword, which can sometimes be confusing. For example, a popular library called jQuery uses factory functions. 

You can also use this pattern to create **private properties and methods**. Think of private stuff as the secret recipe for your cookies—no one outside the factory needs to know the details! You do this by using a **closure**, which is like a secret box that keeps some variables and functions hidden from the outside world.

---

## Composition over Inheritance
Have you ever tried to give a cat a dog's behaviors, like fetching a ball? 🐕 It doesn't quite work, right? This is similar to a problem in programming called **inheritance**, where an object gets all the traits of its parent, even the ones it doesn't need.

A better way is **composition**, where you build objects by giving them only the behaviors they need. Instead of inheriting from one giant "animal" class, you'd create separate "behavior factories" for things like `canTalk` or `canFly`. Then, you "compose" an object by combining these behaviors. This is much more flexible and avoids unnecessary code! 

---

## The Module Pattern
Sometimes, you want to keep parts of your code private while exposing only a public "interface." The **Module Pattern** is perfect for this. It uses a special kind of function called an **Immediately Invoked Function Expression** (IIFE). This function runs as soon as it's defined and creates a private scope.

Imagine it like a clubhouse with a secret password. All the private members and data are inside, and the only way to access them is through the public methods you choose to expose. The **Revealing Module Pattern** is a variation where you list all your private members and then simply return an object that "reveals" which ones are public.

---

## The Prototype Pattern
JavaScript is a bit different from other languages because it uses **prototypal inheritance**. This means objects can inherit directly from other objects without needing a class. The **Prototype Pattern** takes advantage of this.

Think of it like a blueprint. You create an object that serves as the blueprint, and any new objects you create from it will share the same methods. This is super efficient because you're not creating a new copy of the same function for every object. Instead, all your objects share the same single copy.

---

## The Singleton Pattern
The **Singleton Pattern** is all about being unique. It makes sure that only one instance of a specific object can ever exist. For example, if you have a settings panel for your app, you only ever need one of them. 

This pattern uses a clever trick with a closure to store the single instance. The first time you ask for the object, it's created. Every time after that, you get the exact same object back.

---

## The Abstract Factory Pattern
The **Abstract Factory Pattern** is for when you need to create different types of objects without specifying their exact "class."

Imagine a car factory that can build different types of vehicles. You don't need to know the specific details of how to build a car versus a truck. You just call a method like `createVehicle` and tell it what type you want. The factory then takes care of the rest, giving you a car or a truck as needed.

---

### Fill in the Blanks!

1.  A **factory function** is a function that returns an ________.
2.  The "Don't Repeat Yourself" principle is often shortened to the acronym ________.
3.  The **Module Pattern** uses a special function called an ________ to create a private scope.
4.  Instead of **inheritance**, the **composition** pattern prefers to combine different ________ to create an object.
5.  The **Prototype Pattern** works because objects created from a blueprint share the same ________.
6.  A **Singleton** pattern ensures that only ________ object of a certain type can ever be created.
7.  The **Revealing Module Pattern** is a variation where you ________ the public API.
8.  Factory functions don't require the use of the ________ keyword.
9.  The **Abstract Factory Pattern** helps you create different types of objects without knowing their exact ________.
10. Encapsulating private properties in a factory function is done using a ________.