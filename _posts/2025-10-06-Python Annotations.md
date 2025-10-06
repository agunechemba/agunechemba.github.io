## 🧭 Python Annotations: Making Python Code Self-descriptive And Type-friendly)*

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-annotations-explained.jpg" width="100%">

Imagine writing a recipe that not only lists ingredients but also tells exactly what *type* each ingredient should be — sugar (grams), water (ml), flour (cups).

In programming, **annotations** are like that.
They are **metadata** added to your Python functions (and sometimes variables) that describe the *expected data types* of parameters and return values — without actually enforcing them.

Annotations don’t affect how your program runs; they just make your code **self-explanatory**, **type-safe**, and **tool-friendly**.

---

### 🧩 Function Annotations

Function annotations are placed after each parameter and after the return arrow (`->`) in a function definition.

**Syntax:**

```python
def function_name(param: type) -> return_type:
    ...
```

**Example:**

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

Here:

* `name: str` — indicates that `name` should be a string.
* `-> str` — means the function returns a string.

But remember, Python **does not enforce** these types.
If you call `greet(123)`, Python won’t throw an error — but tools like linters, IDEs, or static checkers (like **mypy**) will warn you.

---

### 🧠 Why Use Annotations?

Annotations are **not rules**; they’re **hints**.
Their real power shines when:

* You’re working in large codebases.
* You share code with other developers.
* You want editors or static checkers to spot type mismatches early.

They make your code communicate intent clearly, which is great for readability, documentation, and error prevention.

---

### 🧱 A Practical Example

```python
def add_numbers(a: int, b: int) -> int:
    """Add two integers and return the sum."""
    return a + b
```

Now anyone reading the function instantly understands that:

* Both `a` and `b` are integers.
* The return value will also be an integer.

If you use `help(add_numbers)` or inspect its annotations directly, you’ll see:

```python
print(add_numbers.__annotations__)
```

Output:

```
{'a': <class 'int'>, 'b': <class 'int'>, 'return': <class 'int'>}
```

---

### 🧭 Variable Annotations

Python 3.6 introduced **variable annotations** using the same concept.
They help document what kind of data a variable is supposed to hold.

**Example:**

```python
name: str = "Agunechemba"
age: int = 30
scores: list = [95, 88, 76]
```

These hints can later be read by tools, IDEs, or your own program using `__annotations__`.

---

### ⚙️ Accessing Annotations

Annotations are stored in a dictionary inside the function or module’s `__annotations__` attribute.

**Example:**

```python
def multiply(x: float, y: float) -> float:
    return x * y

print(multiply.__annotations__)
```

Output:

```
{'x': <class 'float'>, 'y': <class 'float'>, 'return': <class 'float'>}
```

You can also access variable-level annotations:

```python
user: str = "Ada"
print(__annotations__)
```

Output:

```
{'user': <class 'str'>}
```

---

### 🧩 Custom and Complex Annotations

Annotations aren’t limited to basic types like `int`, `str`, or `float`.
You can use any object — including lists, tuples, custom classes, or even string type hints.

**Example:**

```python
from typing import List, Dict

def show_students(students: List[str], marks: Dict[str, int]) -> None:
    for name, mark in marks.items():
        print(f"{name}: {mark}")
```

This declares:

* `students` is a list of strings.
* `marks` is a dictionary mapping strings to integers.
* `None` means the function returns nothing.

---

### 💪 The `typing` Module

Python’s `typing` module provides many specialized type hints:

* `List[int]` — list of integers
* `Dict[str, float]` — dictionary with string keys and float values
* `Tuple[int, str, bool]` — a tuple of specific types
* `Optional[str]` — either a string or `None`
* `Union[int, float]` — either an int or float

**Example:**

```python
from typing import List, Optional

def find_item(items: List[str], keyword: str) -> Optional[str]:
    for item in items:
        if keyword in item:
            return item
    return None
```

Here `Optional[str]` tells us that the function may return a string — or `None` if nothing is found.

---

### 🧩 Forward References

Sometimes you might annotate a class or function that hasn’t been defined yet.
In that case, use quotes around the type name (called **forward references**).

**Example:**

```python
def get_parent(child: "Person") -> "Person":
    return child.parent
```

This is common in object relationships or recursive type definitions.

---

### 🧮 Annotations Do Not Enforce Type Checking

Python doesn’t stop you from misusing types.
This will still run without error:

```python
def subtract(a: int, b: int) -> int:
    return a - b

print(subtract("10", "5"))  # Works, but logically wrong!
```

That’s why **annotations are for humans and tools**, not for Python’s interpreter.
To make them enforceable, you’d need external tools like **mypy**, **pyright**, or **pylance**.

---

### 🧰 Combining with `inspect` and `__annotations__`

We can combine introspection with annotations to analyze a function programmatically.

```python
import inspect

def greet(name: str) -> str:
    """Return a greeting."""
    return f"Hello, {name}"

print(inspect.signature(greet))
print(greet.__annotations__)
```

Output:

```
(name: str) -> str
{'name': <class 'str'>, 'return': <class 'str'>}
```

---

### ✨ Benefits of Using Annotations

1. **Improved readability** — anyone can instantly understand the purpose of parameters.
2. **Better IDE support** — autocompletion and inline hints.
3. **Error detection** — tools can catch type mismatches early.
4. **Documentation generation** — helps auto-document codebases.
5. **Easier collaboration** — consistent typing across projects.

---

### 🔔 Key Reminders

* Annotations are **optional** and **non-enforcing**.
* They can be accessed at runtime via `__annotations__`.
* For enforcement, use tools like `mypy`.
* Use `typing` module for rich type hinting.
* Keep them consistent for clarity.

---

### ✅ **Summary**

| Concept             | Description                                       | Example                                           |
| ------------------- | ------------------------------------------------- | ------------------------------------------------- |
| Function Annotation | Attach type hints to parameters and return values | `def add(a: int, b: int) -> int:`                 |
| Variable Annotation | Document variable types                           | `age: int = 25`                                   |
| Access Annotations  | Use `__annotations__` or `inspect`                | `print(func.__annotations__)`                     |
| Advanced Hints      | Use `typing` module                               | `List[str]`, `Optional[int]`, `Union[float, str]` |
| Purpose             | Readability, maintainability, tooling             |                                                   |

---

### ✍ **Review Fill-in-the-Gap Questions**

1. An annotation in Python is metadata that describes the ______ of function parameters and return values.
2. Function annotations are written after each parameter using a ______ and after the return type using an arrow ______.
3. Python does not enforce annotations; they only serve as ______ for developers and tools.
4. All function annotations are stored in a dictionary called ______.
5. Variable annotations were introduced in Python version ______.
6. The `typing` module provides advanced type hints such as `List`, `Dict`, and ______.
7. When annotating an object not yet defined, we use ______ references enclosed in quotes.
8. To check annotations programmatically, we can use the `inspect` module’s ______ function.
9. The keyword used to specify that a function doesn’t return anything is ______.
10. For strict type-checking enforcement, developers can use external tools like ______ or Pyright.