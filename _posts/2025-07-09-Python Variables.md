# 🏡 Python Variables: A Fun Story About Global and Local Variables

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/pop_mart_labubu_the_monsters_exciting_macaron.jpg" width="100%">

## 👋 Welcome Back to Mr. Ken’s Code School!

Hello, young coder! 🧒👧
Today, let’s go on a magical journey into a house — not just any house, but a **Python House** 🐍 where your computer programs live!

This house is full of **rooms** 🛏️, **people** 👨‍👩‍👧, and — you guessed it — **toys**! But not all toys are the same. Some toys are for *everyone in the house*, while others are *only for certain rooms*.

Let’s step inside and see how this works…

---

## 🎁 Meet the Toys — a.k.a Variables

In the world of Python programming, a **variable** is like a toy — it holds something special. Maybe it's a number, a word, or even a game score.

But just like in a real house, **where you put the toy matters** a lot!

---

## 🛋️ Living Room Toys – **Global Variables**

> **Living Room Rule:** Toys in the living room are for *everyone* in the house!

Let’s say you have a toy called `age`, and you leave it in the living room. Anyone — whether it's Mom in the kitchen, Dad in the study, or you in your room — can come to the living room and play with `age`.

In Python, this is what we call a **global variable**. It’s a variable you create **outside any function**, right there in the main part of your program.

Here’s how it looks:

```python
age = 8  # This is a global variable

def say_age():
    print(age)  # This function can see the global variable!

say_age()
```

**What happens here?**
When `say_age()` runs, it goes to the living room and finds the toy called `age`. Perfect! Everyone can access it.

---

## 🛏️ Bedroom Toys – **Local Variables**

> **Bedroom Rule:** Toys in your bedroom are only for *you*.

Now imagine you got a secret toy robot and you keep it under your pillow in your bedroom. It’s your little secret! No one else in the house knows it’s there — unless they sneak into your room (which isn't allowed in Python world!).

In Python, when you create a variable **inside a function**, it becomes a **local variable**. It can only be used inside that function — like a toy kept in your room.

```python
def my_room():
    secret_toy = "robot"
    print(secret_toy)  # Works fine here

my_room()

print(secret_toy)  # ❌ Error! Can't find the toy outside the room!
```

**Oops!**
The computer says: “I don’t know what `secret_toy` is!”
Why? Because `secret_toy` is locked inside the function `my_room()` — just like your toy robot hidden in your bedroom.

---

## 🧪 But Wait… What if We Try to Change a Living Room Toy from the Bedroom?

Let’s say you have a toy called `age` in the living room. But then, inside your bedroom, you say:

```python
age = 10
```

Now what happens? 🤔

In Python, if you assign a new value to a variable **inside** a function, Python assumes you're creating a **new local toy**, not using the one from the living room.

So unless you tell Python **"Hey, I want to use the global toy!"**, it won’t touch the one outside.

Here’s an example:

```python
age = 8  # Global toy

def change_age():
    age = 10  # This creates a NEW toy in the bedroom!
    print("Inside room:", age)

change_age()
print("In the living room:", age)
```

**Output:**

```
Inside room: 10
In the living room: 8
```

See? The living room toy is untouched! If you *really* want to change the global one, you must declare:

```python
def change_age():
    global age
    age = 10
```

---

## 🏁 Summary Time!

Here's a quick wrap-up of our journey through the Python House:

| Room                          | Variable Type | Who Can Use It?                             |
| ----------------------------- | ------------- | ------------------------------------------- |
| 🛋️ Living Room               | **Global**    | Everyone (outside and inside functions)     |
| 🛏️ Bedroom (inside function) | **Local**     | Only the function/room where it was created |

---

## 🧠 Let’s Review!

**1. What is a global variable in Python?**
**2. What is a local variable in Python?**
**3. What happens if you try to use a local variable outside its function?**
**4. Can a function change a global variable without using the `global` keyword?**
**5. Why is it important to know where your "toys" (variables) are in your program?**