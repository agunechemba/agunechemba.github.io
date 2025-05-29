# 🧠 Making Decisions in Python: The Power of Control Statements

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_little_girl_holding_a_map_and.jpeg" width="100%">

Imagine you're walking through a forest. At a fork in the road, you must choose: left or right. You don’t just pick randomly—you check your map. If the map says the treasure is left, you go left. That’s exactly how **control statements** work in Python: they help your code **decide what to do next**.

Let’s dive into how we use **booleans** and **if statements** to make our programs smart.

---

### ✅ **Booleans Help Us Decide**

In Python, a **boolean** is either `True` or `False`. These values are super useful because we can **use them in conditions** to decide what parts of code to run.

Here’s a basic example:

```python
condition = True
if condition == True:
    print("The condition")
    print("was true")
```

If `condition` is `True`, Python runs the indented code block. This block of code (with the 4 spaces in front) is what we call a **code block**. Once the indentation ends, Python knows the block is done.

```python
condition = True
if condition == True:
    print("The condition")
    print("was true")
print("Outside of the if")
```

Only the first two lines are part of the `if`. The last line runs no matter what.

---

### ❗️ **Using `else` for the Other Road**

What if the condition is not true? That’s where `else` comes in.

```python
condition = False
if condition == True:
    print("The condition")
    print("was True")
else:
    print("The condition")
    print("was False")
```

Now if the condition is `False`, the `else` block runs instead.

---

### 🔁 **Handling Multiple Options with `elif`**

What if you have more than two roads to choose from?

Python gives us `elif`, which stands for “else if”. You can chain many `elif` conditions between your `if` and `else`.

```python
condition = False
name = "Roger"

if condition == True:
    print("The condition")
    print("was True")
elif name == "Roger":
    print("Hello Roger")
elif name == "Syd":
    print("Hello Syd")
elif name == "Flavio":
    print("Hello Flavio")
else:
    print("The condition")
    print("was False")
```

In this example:

* Python checks `condition == True`. If it's false, it checks `name == "Roger"`.
* It continues down the line until it finds a match.
* If nothing matches, it runs the `else` block.

---

### 🏃 **One-Line Decisions (Ternary Operator)**

Sometimes, you want to choose between two values quickly. Python has a neat inline way to do that:

```python
a = 2
result = 2 if a == 0 else 3
print(result)  # 3
```

This means:
**If `a` equals 0**, `result` will be 2, **otherwise**, it’ll be 3.

---

## 📝 Practice Time!

Try these exercises:

1. Write a program that checks if a number is positive, negative, or zero.
2. Ask a user for their age. If they’re below 18, print "Minor", else print "Adult".
3. Write an `if...elif...else` block that greets someone by name if their name is Alice, Bob, or Charlie, and says “Who are you?” otherwise.
4. Use a one-line `if...else` to assign `"even"` or `"odd"` based on a number.
5. Write a program that checks if a password is correct. If yes, print "Access granted", else print "Access denied".

---

### 🚀 Final Tip:

Control statements make your programs interactive and smart. They're the brain behind every decision in your code.

Keep practicing—your Python will thank you later. 🐍💻