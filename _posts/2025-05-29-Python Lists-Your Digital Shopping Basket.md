# 🐍 Python Lists: Your Digital Shopping Basket

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_cartoon_of_a_little_boy_holding.jpeg" width="100%">

When you're out shopping, you probably don’t carry each item in your hands — you use a basket. That’s what **lists** are in Python — containers that hold *a bunch of stuff* under one name.

### 🧺 Let's Pack a List

Want to store some dogs' names?

```
dogs = ["Roger", "Syd"]
```

Boom. That’s a list. You can keep mixing things up too:

```
items = ["Roger", 1, "Syd", True]
```

Lists are chill — they don’t care if you mix strings, numbers, or booleans.

---

## 🔍 Searching Inside Your List

Want to check if `"Roger"` is chilling in `items`?

```
print("Roger" in items)  # True
```

Python politely answers: "Yes, boss."

---

## 🔢 Indexing: Numbers Matter

Lists start counting at zero (not one). That means:

```
items[0]  # "Roger"
items[1]  # 1
items[-1] # True (last item)
```

Need to change something?

```
items[0] = "Roggy"
```

Now `"Roger"` is `"Roggy"`.

---

## 🎯 Finding Item Positions

Where is `"Syd"`?

```
items.index("Syd")  # 2
```

Indexes help you grab or target items — like GPS for your list.

---

## ✂️ Slicing: Cut Out What You Need

Slice like a pro:

```
items[0:2]  # ['Roger', 1]
items[2:]   # ['Syd', True]
```

You're not copying — you're slicing.

---

## 📏 How Big Is Your List?

```
len(items)  # 4
```

Size check complete.

---

## ➕ Adding Items

Three ways to add stuff:

```
items.append("Test")
items.extend(["Test"])
items += ["Test"]
```

⚠️ Careful here:

```
items += "Test"  # BAD! You’ll get ['T', 'e', 's', 't']
```

Use square brackets!

---

## ❌ Removing Stuff

Want to kick `"Test"` out?

```
items.remove("Test")
```

Gone. Like it was never there.

---

## 🎯 Insert Anywhere

```
items.insert(1, "Test")  # Adds "Test" at position 1
```

Multiple items?

```
items[1:1] = ["Test1", "Test2"]
```

Nice trick, right?

---

## 🧹 Sorting Things Out

Want things in order?

```
items.sort()
```

But careful — you can’t mix numbers and strings here.

To fix letter cases:

```
items.sort(key=str.lower)
```

Want to **keep the original** and just see a sorted version?

```
sorted_items = sorted(items, key=str.lower)
print(sorted_items)
```

---

## 🧠 Practice Time!

Try these 5 questions below 👇

### 1.

Create a list with the following items: `"Apple"`, `"Banana"`, `3`, and `False`.
Print the length of the list.

### 2.

Check if `"Banana"` exists in the list. If it does, print its index.

### 3.

Change `"Apple"` to `"Mango"` using indexing.

### 4.

Add `"Orange"` and `"Pineapple"` to the end of the list.

### 5.

Sort only the string values in the list. (Hint: Separate strings first or make a new list with only strings.)

---

Lists are a must-know in Python — like your best buddy that holds your stuff while you code away.