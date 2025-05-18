# 🧠 Debugging Made Simple with `console.table`

![console.table in action](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/11/console.table_-1.png?w=1024)

Debugging JavaScript code doesn’t have to be messy. With `console.table`, you can turn complex arrays of objects into clean, readable tables—right inside your browser’s developer console.

---

### 📌 Example: Display Data with `console.table`

Suppose you have an array of objects like this:

```javascript
let data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 40 },
];
console.table(data);
```

Running this will display:

| (index) | name    | age |
| ------- | ------- | --- |
| 0       | Alice   | 25  |
| 1       | Bob     | 30  |
| 2       | Charlie | 35  |
| 3       | Diana   | 40  |

---

### 💡 Why Use `console.table`?

* **Clean Formatting**: Automatically arranges properties in columns.
* **Quick Analysis**: Makes it easy to spot patterns and mistakes.
* **Time Saver**: No need to write custom formatting code.

---

### ✅ Final Thoughts

Whether you're debugging simple data or a large dataset, `console.table` is your friend. Try it—you'll love how it simplifies your workflow.


## Review questions

1. **What is the main purpose of `console.table` in JavaScript debugging?**
2. **Write a sample array of objects and use `console.table` to display it.**
3. **List two benefits of using `console.table` over `console.log` when debugging.**

