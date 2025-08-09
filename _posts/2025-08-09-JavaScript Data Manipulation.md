# 🍲 JavaScript Data Manipulation: Cooking With JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/cooking-with-code_simple_compose.jpg" width="100%">

Imagine your kitchen is JavaScript’s workspace. Your **ingredients** are your data — numbers, words, lists, and objects.

Just like in cooking, you often don’t serve raw ingredients. You **wash**, **cut**, **mix**, and **season** them before serving. That’s exactly what **data manipulation** is in programming — changing raw data into the form you need.

---

## 🍅 Step 1: Choosing Your Ingredients (Your Data)

Data can be:

* **Numbers** → like `12` or `99.5`
* **Strings** (words) → like `"apple"` or `"Hello"`
* **Arrays** (lists) → like `["milk", "bread", "eggs"]`
* **Objects** (items with labels) → like `{ name: "Ekene", age: 15 }`

---

## 🔪 Step 2: Preparing the Ingredients (Transforming Data)

Just like you cut, slice, or boil food, JavaScript can **change** data.

Example: Slicing a list of fruits

```
let fruits = ["apple", "banana", "cherry", "date"];
let tropical = fruits.slice(1, 3); 
console.log(tropical); // ["banana", "cherry"]
```

This is like saying: “From the fruit basket, just take bananas and cherries.”

---

## 🧂 Step 3: Mixing and Adding Flavors (Combining Data)

Just like you mix ingredients in a salad, you can **merge** arrays or strings.

```
let breakfast = ["eggs", "toast"];
let drinks = ["milk", "juice"];
let menu = breakfast.concat(drinks);

console.log(menu); 
// ["eggs", "toast", "milk", "juice"]
```

---

## 🔄 Step 4: Changing the Recipe (Updating Data)

Sometimes you change ingredients mid-cooking — add salt, remove pepper, or double the sugar.

```
let scores = [10, 20, 30];
scores[1] = 25; // Change second score
console.log(scores); // [10, 25, 30]
```

---

## 🧹 Step 5: Cleaning Up (Filtering Data)

If a vegetable is rotten, you take it out of your cooking.

```
let numbers = [5, 12, 8, 130, 44];
let bigNumbers = numbers.filter(num => num > 10);

console.log(bigNumbers); // [12, 130, 44]
```

---

## 📦 Step 6: Serving (Final Output)

When your dish is ready, you **serve** it — in programming, that means your manipulated data is ready to use in your app or website.

---

## 🧠 Why This Matters

Data manipulation is everywhere:

* Sorting a list of names in an online game leaderboard
* Filtering only movies rated “PG” in a streaming site
* Updating your score in a quiz
* Formatting dates for a birthday reminder app

Just like cooking, the **better you prepare your ingredients (data), the better the final dish (program).**

---

## ✅ Review and Practice Questions

1. **What is data manipulation in JavaScript?**
2. **Give one real-life example of data manipulation.**
3. **What does the `filter()` method do?**
4. **How do you merge two arrays?**
5. **If you have `["rice", "beans", "yam"]` and you only want `"beans"`, how would you do it using `slice()`?**