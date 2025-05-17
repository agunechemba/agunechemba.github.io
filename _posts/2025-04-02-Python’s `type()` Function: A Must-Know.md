# 🧠 Python’s `type()` Function: A Must-Know

![Python Type Function](https://agunechembaekene.wordpress.com/wp-content/uploads/2024/09/green-teal-navy-geometric-modern-computer-programmer-code-editor-quotes-for-instagram-post.png?w=1024)

---

## 🧐 Why It Matters

Every value in Python has a type — integer, string, list, etc.
The `type()` function helps you **check what type** a value is.
It’s simple but powerful — a real Python supertool 🛠️.

---

## ✍️ Syntax

```python
type(object)
```

It returns something like:

```python
<class 'int'>
<class 'str'>
```

---

## 🔍 Example

```python
x = 10
print(type(x))  # Output: <class 'int'>
```

No guesswork — you instantly know what you’re dealing with.

---

## 🔢 Common Data Types

* **`int`** – Whole numbers (`5`, `-3`)
* **`float`** – Decimals (`3.14`, `-0.5`)
* **`str`** – Text (`"Hello"`)
* **`list`** – Items in brackets (`[1, 2, 3]`)
* **`tuple`** – Like lists but unchangeable (`(1, 2)`)
* **`dict`** – Key-value pairs (`{"name": "Ken"}`)
* **`bool`** – `True` or `False`

---

## ⚠️ Why You Should Care

Knowing types avoids errors like:

```python
"5" + 5  # ❌ TypeError!
```

Instead:

```python
int("5") + 5  # ✅ 10
```

The `type()` function helps you debug, build smarter logic, and write cleaner code.

---

## 🧪 Quiz Time!

**1. What does `type()` do in Python?**

A. Creates new data types
B. Converts data types
C. Determines the data type of an object
D. Prints the value of an object

---

**2. What will be the output of this code?**

```python
print(type(3.14))
```

A. `<class 'int'>`
B. `<class 'float'>`
C. `<class 'double'>`
D. `<class 'decimal'>`

---

**3. Which of the following is a list?**

A. `("apple", "banana")`
B. `{"apple", "banana"}`
C. `["apple", "banana"]`
D. `"apple", "banana"`

---

**4. What is the result of this code?**

```python
x = [1, 2, 3]
print(type(x))
```

A. `<class 'dict'>`
B. `<class 'list'>`
C. `<class 'tuple'>`
D. `<class 'set'>`

---

**5. Which code will return `<class 'str'>`?**

A. `type(100)`
B. `type(True)`
C. `type("Hello")`
D. `type(3.5)`

