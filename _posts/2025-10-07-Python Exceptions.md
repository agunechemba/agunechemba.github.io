# ⚡ Python Exceptions: How Python Handles Errors Gracefully And Keeps Your Programs Running

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-hero-saves-code.jpg" width="100%">

### 💭 Opening Thought: "Errors are Inevitable"

When writing code, mistakes happen.
A file might not exist. A user might type the wrong input. A server might go offline.

If Python didn’t have a way to **handle such unexpected events**, your entire program would crash the moment something went wrong.

That’s where **exceptions** come in.
They are Python’s way of saying:

> “Hey, something went wrong — but I’m giving you a chance to fix it before I quit.”

---

### 🧩 What Is an Exception?

An **exception** is an event that occurs during program execution that **interrupts the normal flow** of instructions.
When Python encounters an error, it raises an *exception object*.

If you don’t handle it, Python will stop the program and print an error message called a **traceback**.

Example:

```python
print("Before error")
x = 10 / 0
print("After error")
```

Output:

```
Before error
ZeroDivisionError: division by zero
```

The line after the error never executes — because the program crashed.

---

### 🧱 Exception vs Error

* **Error** – a problem in the code logic or syntax (like missing a colon).
* **Exception** – an event that occurs during *execution* (like dividing by zero, accessing a missing file, or using a wrong type).

Errors stop the program *before* it runs.
Exceptions occur *while* it’s running.

---

### 🧠 Common Python Exceptions

| Exception           | Meaning                                     |
| ------------------- | ------------------------------------------- |
| `ZeroDivisionError` | Division or modulo by zero                  |
| `ValueError`        | Wrong type of value used                    |
| `TypeError`         | Operation applied to an incompatible type   |
| `IndexError`        | List or tuple index out of range            |
| `KeyError`          | Dictionary key doesn’t exist                |
| `FileNotFoundError` | Tried to open a non-existing file           |
| `ImportError`       | Could not import a module                   |
| `AttributeError`    | Object doesn’t have the requested attribute |
| `NameError`         | Variable not defined                        |

---

### 🧩 Handling Exceptions Gracefully

To handle exceptions, we use the **try-except** block.

```python
try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print("Result:", result)
except ZeroDivisionError:
    print("You cannot divide by zero!")
```

**Output Example:**

```
Enter a number: 0
You cannot divide by zero!
```

💬 Instead of crashing, the program reacts intelligently.

---

### 🧱 Basic Structure of `try`...`except`

```python
try:
    # Code that might cause an error
except SomeError:
    # Code to run if that error happens
```

---

### 🧰 Multiple `except` Blocks

You can handle **different errors differently**.

```python
try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Please enter a valid number!")
```

This makes programs resilient to different kinds of user mistakes.

---

### 🧠 Catching All Exceptions

You can catch all exceptions using a bare `except:` clause — though it’s not always recommended.

```python
try:
    risky_operation()
except:
    print("Something went wrong!")
```

For safer practice, catch the **base class** `Exception`:

```python
try:
    risky_operation()
except Exception as e:
    print("Error occurred:", e)
```

This way, you can inspect the exception object `e`.

---

### 🔁 The `else` and `finally` Clauses

Python allows extra control in your `try` block.

#### 🟦 `else` block

Runs **only if no exception** occurred.

```python
try:
    print("Dividing 10 by 2")
    result = 10 / 2
except ZeroDivisionError:
    print("Oops, division by zero!")
else:
    print("Division successful! Result =", result)
```

Output:

```
Dividing 10 by 2
Division successful! Result = 5.0
```

#### 🟨 `finally` block

Runs **no matter what happens** — success or failure.
Useful for cleanup tasks (like closing files or releasing resources).

```python
try:
    file = open("data.txt")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Closing file...")
    file.close()
```

---

### 🪶 Raising Your Own Exceptions

Sometimes you may want to **trigger** an exception intentionally when something is wrong in your logic.

Use the `raise` keyword.

```python
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("Insufficient funds")
    return balance - amount
```

If this condition is met, Python raises the `ValueError` exception manually.

---

### 🧩 Creating Custom Exceptions

You can define your **own exception classes** for specific use cases.

```python
class InvalidAgeError(Exception):
    """Raised when the age is below the acceptable limit."""
    pass

def register(age):
    if age < 18:
        raise InvalidAgeError("You must be 18 or older to register.")
    print("Registration successful!")

try:
    register(15)
except InvalidAgeError as e:
    print("Error:", e)
```

Output:

```
Error: You must be 18 or older to register.
```

This approach keeps your program’s logic readable and meaningful.

---

### 🧮 Nesting and Re-Raising Exceptions

You can catch an exception, do something with it, and then re-raise it to propagate further.

```python
try:
    try:
        result = 10 / 0
    except ZeroDivisionError as e:
        print("Caught inside inner block")
        raise  # re-raise to outer block
except Exception as e:
    print("Caught again in outer block:", e)
```

---

### ⚙️ Best Practices for Handling Exceptions

✅ Catch only what you expect.

✅ Always close files and network connections (use `finally` or `with`).

✅ Never silently ignore exceptions.

✅ Use specific exception types — not `except:` by itself.

✅ Document your exceptions using **docstrings**.

---

### 🧭 Summary

| Keyword     | Purpose                                 |
| ----------- | --------------------------------------- |
| `try`       | Block of code to test for errors        |
| `except`    | Handles the error                       |
| `else`      | Runs if no exception occurs             |
| `finally`   | Runs whether or not an exception occurs |
| `raise`     | Manually throw an exception             |
| `Exception` | Base class for all built-in exceptions  |

---

### ✍ **Review Fill-in-the-Gap Questions**

1. An ______ is an event that interrupts the normal flow of a program.
2. When an exception occurs, Python creates an ______ object.
3. The `try` block is used to write code that might ______ an exception.
4. The `except` block handles the exception if it ______.
5. The `else` block executes only when no ______ occurs.
6. The `finally` block executes ______ of whether an exception happened or not.
7. To manually trigger an exception, we use the keyword ______.
8. A custom exception is created by defining a new class that inherits from the ______ class.
9. The object representing the error can be accessed using the keyword ______ after `except Exception`.
10. It is a good practice to handle only ______ exceptions instead of catching all errors blindly.
