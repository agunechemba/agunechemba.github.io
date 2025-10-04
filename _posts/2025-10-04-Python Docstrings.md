# 🧭 Python Docstrings: Comments Used By Advanced Programmers

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-docstrings-comic.jpg" width="100%">

---

Imagine walking into a library full of books with no titles or summaries. You’d have to open every book to guess what it’s about, right?
Well, that’s what programming without **docstrings** feels like.

A **docstring** (documentation string) is a **string literal** written just below the definition of a function, class, or module. It’s enclosed in triple quotes (`""" ... """`) and serves as **the official documentation** for that piece of code.

Docstrings explain **what** the function, class, or module does — not necessarily **how** it does it.

---

### 🧱 The Basic Structure

Here’s what a docstring looks like inside a function:

```python
def greet(name):
    """Return a greeting message for the given name."""
    return f"Hello, {name}!"
```

Now, if you type:

```python
help(greet)
```

Python will print:

```
Help on function greet in module __main__:

greet(name)
    Return a greeting message for the given name.
```

Notice — Python didn’t show your comments, but it **did** show your docstring. That’s because docstrings are part of the code’s **metadata** and can be accessed at runtime.

---

### 🧩 Docstring vs. Comment

| Aspect                      | Docstring                         | Comment                        |
| --------------------------- | --------------------------------- | ------------------------------ |
| Syntax                      | Triple quotes `""" ... """`       | Hash symbol `#`                |
| Purpose                     | Explain purpose and usage of code | Explain implementation details |
| Accessed by `help()`        | ✅ Yes                             | ❌ No                           |
| Used by documentation tools | ✅ Yes                             | ❌ No                           |

So while comments help **developers** reading the source code, docstrings help both **developers and documentation tools**.

---

### 🧠 Docstrings in Functions

Functions usually have short and direct docstrings explaining:

1. **What the function does**
2. **What parameters it expects**
3. **What it returns**

Example:

```python
def add(a, b):
    """
    Add two numbers and return the result.
    
    Parameters:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The sum of the two numbers.
    """
    return a + b
```

This style is clear, standardized, and tool-friendly — perfect for both humans and machines.

---

### 🏗️ Docstrings in Classes

A class docstring explains the **purpose of the class**, and each method inside can have its own docstring too.

```python
class Dog:
    """A class representing a dog."""

    def __init__(self, name, age):
        """
        Initialize the Dog with a name and age.
        
        Parameters:
            name (str): The dog's name.
            age (int): The dog's age.
        """
        self.name = name
        self.age = age

    def bark(self):
        """Make the dog bark."""
        print("WOF!")
```

If you call `help(Dog)`, you’ll see all this documentation nicely formatted by Python.

---

### 📦 Docstrings in Modules

You can even put a docstring at the **top of your Python file**, and that becomes the **module docstring**.

```python
"""
dog_module.py

This module defines a simple Dog class that demonstrates 
basic object-oriented programming in Python.
"""
```

Now anyone importing your module can call:

```python
import dog_module
help(dog_module)
```

and see your full documentation.

---

### 📚 Accessing Docstrings Programmatically

Docstrings are stored in a special attribute: `__doc__`

Example:

```python
print(Dog.__doc__)
print(Dog.bark.__doc__)
```

Outputs:

```
A class representing a dog.
Make the dog bark.
```

So docstrings are not just text — they’re part of your code’s introspection system.

---

### 🧭 Multi-line Docstrings

When your description spans several lines, use triple quotes with line breaks:

```python
def multiply(x, y):
    """
    Multiply two numbers.

    This function takes two numeric values and returns their product.
    It supports both integers and floating-point numbers.
    """
    return x * y
```

---

### 🧾 Docstring Conventions

Python has **PEP 257**, the style guide for docstrings.
It recommends that:

* The first line should be a **short summary** (no period if it’s a phrase).
* If more detail is needed, add a blank line and then elaborate.
* Always use **triple double quotes** (`"""`), not single quotes.

---

### 🧮 Common Docstring Formats

Different teams and projects follow different docstring styles. Here are the three most popular ones:

1. **Google Style**

   ```python
   def divide(a, b):
       """
       Divide a by b.

       Args:
           a (float): The numerator.
           b (float): The denominator.

       Returns:
           float: The result of division.

       Raises:
           ZeroDivisionError: If b is zero.
       """
   ```

2. **NumPy / SciPy Style**

   ```python
   def divide(a, b):
       """
       Divide a by b.

       Parameters
       ----------
       a : float
           The numerator.
       b : float
           The denominator.

       Returns
       -------
       float
           The result of division.
       """
   ```

3. **reStructuredText (Sphinx) Style**

   ```python
   def divide(a, b):
       """
       Divide a by b.

       :param a: The numerator.
       :type a: float
       :param b: The denominator.
       :type b: float
       :returns: The result of division.
       :rtype: float
       """
   ```

These styles are not enforced, but consistency is key. Choose one and stick with it across your codebase.

---

### 💪 Why Use Docstrings?

* **Improves readability** – Future you (or your students) will thank you.
* **Automates documentation** – Tools like Sphinx or pdoc can generate full websites from your docstrings.
* **Enhances IDE assistance** – Many editors show docstrings in tooltips when you hover over a function.
* **Supports `help()`** – The built-in Python help system relies entirely on docstrings.

---

### 🧩 A Golden Rule:

> “Code tells you how; documentation tells you why.”

---

### ✅ Summary

* Docstrings describe what your code does and how to use it.
* Defined with triple quotes immediately after the definition.
* Used for functions, classes, and modules.
* Accessible via `help()` and `__doc__`.
* Follow PEP 257 and a consistent style (Google, NumPy, or reST).

---

### ✍ Review Fill-in-the-Gap Questions

1. A **docstring** is a special type of ______ written just below a function, class, or module definition.
2. Docstrings are enclosed within ______ quotes.
3. Unlike comments, docstrings can be accessed using the ______ function.
4. Docstrings are stored in a special attribute called ______.
5. The official style guide for writing docstrings in Python is called ______.
6. The first line of a multi-line docstring should be a short ______ of the function’s purpose.
7. A function’s docstring usually explains what it does, its ______, and its ______.
8. Tools like Sphinx can automatically generate ______ from your docstrings.
9. PEP 257 recommends always using triple ______ quotes, not single quotes.
10. Docstrings are essential because they tell us ______ the code is doing, not necessarily ______ it’s doing it.