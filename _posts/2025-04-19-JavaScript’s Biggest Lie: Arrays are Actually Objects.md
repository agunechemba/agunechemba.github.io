## JavaScript’s Biggest Lie: Arrays are Actually Objects

![Liers Meme](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/02/a09dcd43d9726c2d06b3fbfda51e328d.jpg)

***

In JavaScript, arrays are actually objects. This might seem counterintuitive, but it’s essential to understand how arrays work under the hood.

This concept is crucial when working with the Document Object Model (DOM) and array-like objects returned by various DOM functions.

**Example: Creating an Object that Mimics an Array**
```
var anObject = {
  foo: 'bar',
  length: 'interesting',
  '0': 'zero!',
  '1': 'one!'
};
```
**Example: Creating a Regular Array**
```
var anArray = ['zero.', 'one.'];
```
**Accessing and Inspecting the Object and Array**

```
console.log(anArray[0], anObject[0]); // outputs: zero. zero!
console.log(anArray[1], anObject[1]); // outputs: one. one!
console.log(anArray.length, anObject.length); // outputs: 2 interesting
console.log(anArray.foo, anObject.foo); // outputs: undefined bar
```
As we can see, both anArray and anObject can be accessed using the same bracket notation.

This is because, under the hood, anArray is actually an object.

## Review Questions:
1. What type of data structure are arrays in JavaScript, under the hood?
2. How can you access properties in both objects and arrays in JavaScript?
3. What happens when you try to access a property that doesn't exist in an array, but does exist in an object that mimics an array?
4. What property do both arrays and array-like objects have in common?
5. Why is understanding the underlying nature of arrays important in JavaScript, according to the text?
