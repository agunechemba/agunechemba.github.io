# 💡 Python Object: Welcome to the Magical Land of Python; Where Everything Is an Object! 🐍✨


<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/random_objects_on_an_empty_street.jpeg" width="100%">

---

Hey young coder! 👋 So, guess what? I recently visited the **Kingdom of Python**, and lemme tell you—it was **mind-blowingly magical**! 🌟 I met a bunch of creatures like Integers, Strings, Lists, and even weirdos like Tuples and Dictionaries. But here's the coolest thing I discovered...

🎉 **EVERYTHING in Python is an Object!** Yep! Even numbers, words, and those curly-bracket thingies. Wanna go on a quick adventure? Pack your curiosity—let’s dive in!

---

## 🏰 Scene 1: The Birthday Party of Little "age"

Meet **age**, a young integer who just turned 8.

```
age = 8
```

Now, you might think age is just a plain number. But noooo—he’s actually an object with *superpowers*, aka **attributes** and **methods**.

Let's peek into his magical toolkit:

```
print(age.real)   # 8 (his real-world form)
print(age.imag)   # 0 (he has no imaginary twin)
print(age.bit_length())  # 4
```

🧙‍♂️ **bit\_length()** tells us how many bits you’d need to represent the number in binary. (Just imagine it saying, "I need 4 bits to look cool in binary fashion 👓").

---

## 🪄 Scene 2: The List That Loved to Grow

Then I met a list named **items**. She was super friendly and loved collecting things!

```
items = [1, 2]
items.append(3)
print(items)  # [1, 2, 3]
```

When she wanted to toss away something, she used her **pop()** power:

```
items.pop()
print(items)  # [1, 2]
```

Every object in Python has its own kind of magical tools (aka methods), depending on what kind of object it is. So, integers have mathy powers, and lists have collecting powers! Cool, right?

---

## 🕵️‍♀️ Scene 3: Tracking the Memory Footprints

Now, Python has this secret tracker spell called `id()`. It tells you **where** your object lives in your computer's memory.

Let’s go back to age:

```
age = 8
print(id(age))  # 👀 Some memory address like 140535918671808

age = 9
print(id(age))  # 🚨 New address like 140535918671840
```

Whoa! The address changed! 🏃‍♂️ It’s like age moved to a new house just because we gave it a new value!

But now let’s spy on our friend **items** again:

```
items = [1, 2]
print(id(items))  # Let's say 140093713593920

items.append(3)
print(id(items))  # Still 140093713593920
```

🧠💥 Even though we added stuff to her, **she stayed in the same house**. That’s because...

---

## 🔐 Scene 4: Mutable vs Immutable—The Royal Families

Here’s how the Kingdom of Python is divided:

| **Family Name** | **Type**  | **Can Change?** | **Examples**                   |
| --------------- | --------- | --------------- | ------------------------------ |
| Immutableians   | Immutable | ❌ Nope!         | `int`, `float`, `str`, `tuple` |
| Mutablos        | Mutable   | ✅ Yes!          | `list`, `dict`, `set`          |

So, when you do this:

```
age = 8
age += 1
print(id(age))
```

You're actually creating a **whole new `age`**, not changing the old one. That’s classic **Immutableian behavior**!

But our girl **items the list**? She’s a **Mutablo**. She can totally change **without** switching homes!

---

## 🎁 Moral of the Story: Know Thy Object!

Whenever you're working in Python, remember this:

* Every value you use is an object. Yup—even simple stuff like `5` or `"hello"`.
* Objects come with cool powers called **methods**.
* Some objects can **mutate** (change themselves), while others just pack their bags and move (get reassigned).
* Use `id()` like a memory detective tool to see if you're still talking to the same object.

---

## 🧪 Practice Time! Let's Flex Our Magic 🧙🏽‍♀️

1. **What will this print?**

   ```
   x = 3
   print(x.bit_length())
   ```

2. **Is this list mutable or immutable? Why?**

   ```
   items = [4, 5, 6]
   ```

3. **Try this out! What happens to the `id` when you do this?**

   ```
   name = "Code"
   print(id(name))
   name += "Master"
   print(id(name))
   ```

4. **How can you prove that integers are immutable using `id()`?**

5. **Fill in the blank:**

   > If I use the `.append()` method on a list, the object’s memory address will \_\_\_\_\_\_\_\_\_\_.

