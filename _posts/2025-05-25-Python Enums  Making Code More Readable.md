# 🧩 Python Enums: Making Code More Readable

<center>
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_black_board_with_a_shiny_text.jpeg" alt="A blackboard with shiny text">
</center>

<br>

Have you ever written code with mysterious numbers like this?

```
status = 1  # What does 1 mean here?
```

Imagine coming back to that code months later… Will you remember what `1` stood for? Probably not.

That’s where **Enums** come in!
They let you give **names** to your values — names that actually **mean something**.

---

## 🚀 What is an Enum?

An **Enum** (short for "enumeration") is a way to give a **name** to a **constant value**.
So instead of saying `1`, you can say `State.ACTIVE` — which is easier to read and understand.

---

## 🛠️ How to Create an Enum

To use Enums, you first need to import them:

```
from enum import Enum
```

Then, you define a class like this:

```
class State(Enum):
    INACTIVE = 0
    ACTIVE = 1
```

Now you can use `State.INACTIVE` and `State.ACTIVE` in your code — they’re like smart constants!

---

## 🎯 Using the Enum

Let’s see how it behaves:

```
print(State.ACTIVE)   # Output: State.ACTIVE (not 1)
print(State.INACTIVE) # Output: State.INACTIVE
```

Even though `ACTIVE` has the value `1`, printing `State.ACTIVE` gives you the name, not the number.

But don’t worry — you can still get the actual value like this:

```
print(State.ACTIVE.value)  # Output: 1
```

---

## 🔄 Accessing Enums in Different Ways

You can also use the value or the name to get the Enum:

```
print(State(1))          # Output: State.ACTIVE
print(State['ACTIVE'])   # Output: State.ACTIVE
```

Handy, right?

---

## 📋 List All Enums

Want to see all the states?

```
print(list(State))
# Output: [<State.INACTIVE: 0>, <State.ACTIVE: 1>]
```

And to count how many states there are:

```
print(len(State))  # Output: 2
```

---

## 🧠 Why Use Enums?

* **Clearer code**: `State.ACTIVE` is better than `1`
* **Fewer bugs**: You can’t accidentally use the wrong number
* **Easy to read and maintain**

---

## 📝 Practice Time!

Try these to test your understanding:

1. Create an enum called `Color` with values `RED = 1`, `GREEN = 2`, and `BLUE = 3`.
2. Print `Color.GREEN` and `Color.GREEN.value`.
3. Use the value `3` to get the matching enum from `Color`.
4. Use the name `'RED'` to get the matching enum from `Color`.
5. Print a list of all values in the `Color` enum and count how many colors there are.
