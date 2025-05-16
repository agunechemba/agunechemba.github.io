### 🧠 Booleans in Python: Think Light Switch!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/python.png" alt="Python">


Imagine a light switch in your room. It’s either **ON** or **OFF** — no in-between, right?
In Python, we have something similar called **Booleans**. These are just two special values:

* `True` (light switch ON)
* `False` (light switch OFF)

You always write them with a capital **T** or **F** — like this:

```python
done = False  # Light switch is OFF
done = True   # Light switch is ON
```

---

### 🤔 Why does this even matter?

Well, sometimes you want your program to do something *only if* a certain condition is met.
Like: **If my homework is done, then I can play games**.

```python
homework_done = True

if homework_done:
    print("Yay! Time to play games!")
else:
    print("Oops, better finish that first!")
```

So yeah, Booleans help your code *make decisions*.

---

### 💡 What counts as ON or OFF in Python?

Python is kinda smart. Even if something isn’t *exactly* `True` or `False`, it can still act like it is.

Here’s how it decides:

| Value Type | Considered `True` (ON) | Considered `False` (OFF) |
| ---------- | ---------------------- | ------------------------ |
| Numbers    | Any number (like `7`)  | Zero (`0`)               |
| Strings    | Any text (`"hi"`)      | Empty text (`""`)        |
| Lists etc. | If it has stuff        | If it’s empty            |

---

### 🧐 How to check if something is a real Boolean?

Python lets you check like this:

```python
is_it_on = True
print(type(is_it_on) == bool)      # True
print(isinstance(is_it_on, bool))  # True
```

---

### ✅ `any()` – Did *anyone* do it?

Say you’re checking if any of your friends finished chores:

```python
chores = [True, False, False]

print(any(chores))  # Output: True (at least one person is done!)
```

---

### ✅ `all()` – Did *everyone* do it?

Now, what if you want to know if *everyone* is ready?

```python
ready = [True, True, False]

print(all(ready))  # Output: False (one person isn’t ready)
```

---

## Review questions:

---

**1.** You’re writing a program that checks if someone remembered to bring their ID card to school.
If the variable `has_id_card = False`, what should the program do using an `if` statement?

---

**2.** You have a list of items in your backpack: `["notebook", "pen", ""]`.
Use a Boolean check to find out if *all* the items are actually filled in (not empty).

---

**3.** A game only starts if the internet is connected.
If `internet_connected = 0`, will the game start? Why?

---

**4.** You’re checking if any of your classmates submitted their group project.
You have: `submissions = [False, False, True, False]`
What does `any(submissions)` return, and what does it mean?

---

**5.** You’re building an app that checks if a user has filled all required fields: name, age, and email.
How would you use `all()` to confirm everything is provided in this list: `["John", 14, ""]`?
