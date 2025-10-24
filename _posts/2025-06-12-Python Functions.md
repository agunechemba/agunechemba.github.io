# 🌟 Python Functions: The Fundamental Building Block Of Any Program

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-coding-bootcamp.jpg" width="100%">

In Python, **functions** are a fundamental building block of any program. They allow you to organize your code into logical, reusable units that perform specific tasks. Instead of repeating the same code several times, you can define it once inside a function and call it whenever needed.

---

## 🔹 What is a Function?

A **function** is a block of organized, reusable code designed to perform one specific job.

Functions help you:

* **Avoid repetition** in your code.
* **Make your program modular**, readable, and easier to maintain.

A function must be **defined** before it can be used.

---

## 🔹 Defining a Function

In Python, you define a function using the `def` keyword.
Here’s the basic syntax:

```python
def function_name():
    # function body
    statements
```

Example:

```python
def hello():
    print('Hello!')
```

Explanation:

* `def` — tells Python you are defining a function.
* `hello` — the name of the function.
* `()` — parentheses that may contain parameters.
* `:` — marks the beginning of the function body.
* The indented lines beneath are the **function body** (the actions to perform).

To execute a function, **call it** using its name followed by parentheses:

```python
hello()
```

Output:

```
Hello!
```

---

## 🔹 Using Parameters

Functions often need input values to work with. These inputs are called **parameters**.

Example:

```python
def hello(name):
    print('Hello ' + name + '!')
```

When you call the function:

```python
hello('Roger')
```

Output:

```
Hello Roger!
```

### Key Terms:

* **Parameter:** A variable inside the parentheses of the function definition.
* **Argument:** The actual value supplied when calling the function.

Example:

```python
def greet(name):     # 'name' is a parameter
    print(name)

greet('Zino')        # 'Zino' is an argument
```

---

## 🔹 Default Parameter Values

Sometimes, you want a function to work even if no argument is passed.
You can assign a **default value** to a parameter.

```python
def hello(name='my friend'):
    print('Hello ' + name + '!')
```

Examples:

```python
hello()
# Output: Hello my friend!

hello('Syd')
# Output: Hello Syd!
```

If no argument is provided, Python uses the default value.

---

## 🔹 Multiple Parameters

You can define functions that accept more than one parameter.

```python
def hello(name, age):
    print('Hello ' + name + ', you are ' + str(age) + ' years old!')
```

Example call:

```python
hello('Roger', 8)
```

Output:

```
Hello Roger, you are 8 years old!
```

---

## 🔹 Mutable vs Immutable Values in Functions

When you pass a value into a function, what happens inside the function can depend on whether the value is **mutable** or **immutable**.

Example with an **immutable** type (integer):

```python
def change(value):
    value = 2

val = 1
change(val)
print(val)
```

Output:

```
1
```

Explanation:
Integers (and other immutable types such as strings and tuples) cannot be changed in place. The variable `val` remains `1` even after the function runs.

Example with a **mutable** type (list):

```python
def modify(data):
    data.append(99)

numbers = [1, 2, 3]
modify(numbers)
print(numbers)
```

Output:

```
[1, 2, 3, 99]
```

Explanation:
Lists are **mutable**, meaning changes inside the function affect the original list.

---

## 🔹 Returning Values

A function can send a result back to the part of the program that called it using the **`return`** statement.

Example:

```python
def hello(name):
    print('Hello ' + name + '!')
    return name
```

When you call the function:

```python
returned_name = hello('Zino')
print(returned_name)
```

Output:

```
Hello Zino!
Zino
```

If a function has no `return` statement, Python automatically returns `None`.

Conditional return example:

```python
def greet(name):
    if not name:
        return
    print('Hello ' + name + '!')
```

---

## 🔹 Returning Multiple Values

A Python function can return **more than one value**.
When this happens, Python packs the values into a **tuple**.

Example:

```python
def hello(name):
    print('Hello ' + name + '!')
    return name, 'Roger', 8
```

Calling:

```python
print(hello('Syd'))
```

Output:

```
Hello Syd!
('Syd', 'Roger', 8)
```

The result `('Syd', 'Roger', 8)` is a tuple containing multiple values.

---

## 🔹 Summary Table

| Concept             | Description                          | Example                     |
| ------------------- | ------------------------------------ | --------------------------- |
| Function definition | Creating a function using `def`      | `def greet():`              |
| Function call       | Executing the function               | `greet()`                   |
| Parameter           | Variable in function definition      | `def greet(name):`          |
| Argument            | Actual value passed in               | `greet('Zino')`             |
| Default parameter   | Value used when no argument is given | `def greet(name='Friend'):` |
| Return statement    | Sends data back to caller            | `return x + y`              |
| Mutable object      | Can be changed (list, dict)          | `[1,2,3]`                   |
| Immutable object    | Cannot be changed (int, str, tuple)  | `5`, `'hi'`                 |
| Multiple returns    | Function returns several values      | `return a, b, c`            |

---

# 🧩 Quick Review: Fill-in-the-Gap Challenge!

Complete each sentence by filling in the correct keyword or term.

1. The keyword used to define a function in Python is `_________`.
2. The values passed into a function when it’s called are called `_________`.
3. A variable inside a function definition that receives data is called a `_________`.
4. A function that doesn’t include a `return` statement automatically returns `_________`.
5. `def greet(name='friend'):` — here `'friend'` is a `_________ value`.
6. Functions help programmers avoid code `_________`.
7. `return x, y, z` returns a single `_________` containing multiple values.
8. Lists and dictionaries are `_________`, meaning they can be changed in place.
9. To execute a function, you must `_________` it using its name and parentheses.
10. Numbers and strings are `_________`, meaning they cannot be changed in place.
