## Functional Programming vs Object-Oriented Programming: What’s the Diff?

![Functional VS OOP Meme](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/01/functional-programming.png)

Hey devs! When it comes to coding, there are two major players in the programming paradigm game: functional programming and object-oriented programming. In this post, we’ll break down the key differences between these two approaches using JavaScript as our go-to language.

## Functional Programming: Keep it Pure
Functional programming is all about creating pure functions that take input, do their thing, and spit out output without messing with the rest of the program. It’s like a tidy little box that doesn’t affect anything outside of it.

Here’s a simple example:

```
function calculateArea(width, height) {
  return width * height;
}
 
function calculatePerimeter(width, height) {
  return 2 * (width + height);
}
 
const width = 10;
const height = 20;
console.log(`Area: ${calculateArea(width, height)}`);
console.log(`Perimeter: ${calculatePerimeter(width, height)}`);
```

## Object-Oriented Programming: Objects are Everything

Object-oriented programming, on the other hand, is all about creating objects that package up data and behavior. It’s like a little box that contains everything it needs to do its job.

Here’s the same example, but with objects:

```
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
 
  calculateArea() {
    return this.width * this.height;
  }
 
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
 
const rectangle = new Rectangle(10, 20);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
```

## So, What’s the Difference?
So, what sets these two paradigms apart?

- Functional Programming: Pure functions, immutability, and composition are key.
- Object-Oriented Programming: Encapsulation, inheritance, and polymorphism are the big players.
- JavaScript supports both paradigms, so you can choose the best approach for your project. Happy coding!
