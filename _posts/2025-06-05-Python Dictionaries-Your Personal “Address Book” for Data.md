# 🐍 Python Dictionaries: Your Personal “Address Book” for Data

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a_small_man_carrying_a_huge_address.jpeg" width="100%">

Imagine you carry a little notebook where, on each page, you jot a *label* (“Mum’s phone”) and the *thing* it points to (“080-123-4567”).
That notebook is a perfect metaphor for a **dictionary** in Python:

```
dog = {'name': 'Roger'}
```

One glance at the label (`'name'`) instantly tells Python exactly where to retrieve its companion value (`'Roger'`). Unlike lists, where you hunt by *position* (index 0, index 1…), dictionaries let you jump straight to the item you care about—no counting required.

---

## 1. Building a Dictionary 🔨

A dictionary is wrapped in curly braces, with each **key → value** pair set off by a colon:

```
dog = {
    'name': 'Roger',
    'age': 8
}
```

* **Keys** must be *immutable* (strings, numbers, tuples).
* **Values** can be *anything* (strings, lists, even other dictionaries).

---

## 2. Reading & Updating Entries 📖✍️

### Read

```
dog['name']      # ➡ 'Roger'
dog.get('age')   # ➡ 8
dog.get('color', 'unknown')  # ➡ 'unknown' (safe default)
```

### Update

```
dog['name'] = 'Syd'      # modifies the existing entry
dog['favorite food'] = 'Meat'   # adds a brand-new pair
```

---

## 3. Cleaning Out the Kennel 🧹

* **Remove by key & return it**

  ```
  dog.pop('name')   # returns 'Syd' and deletes the key
  ```
* **Remove the most recently added pair**

  ```
  dog.popitem()     # last-in, first-out
  ```
* **Delete silently**

  ```
  del dog['favorite food']
  ```

---

## 4. Peeking Inside 🔍

Think of these like special X-ray glasses for dictionaries:

| Action           | Tool       | Example              | Result         |
| ---------------- | ---------- | -------------------- | -------------- |
| Check membership | `in`       | `'age' in dog`       | `True / False` |
| List keys        | `keys()`   | `list(dog.keys())`   | `['age']`      |
| List values      | `values()` | `list(dog.values())` | `[8]`          |
| List pairs       | `items()`  | `list(dog.items())`  | `[('age', 8)]` |
| Count pairs      | `len()`    | `len(dog)`           | `1`            |

Need a fresh copy you can experiment on?

```
spare_dog = dog.copy()
```

---

## 5. Why Dictionaries Matter 🚀

* **Speed:** Direct key look-ups are lightning fast—ideal for large data sets.
* **Clarity:** Keys act like self-documenting labels, making code easier to read.
* **Flexibility:** Values can hold *anything*—numbers, lists, even other dictionaries—unlocking powerful nested structures.

---

## 6. Practice Time 📝

1. **Simple Lookup**
   Create a dictionary `car` with keys `'brand'`, `'model'`, and `'year'`. Retrieve and print the model.

2. **Default Safety Net**
   Using the `get()` method, attempt to access the key `'color'` in the `car` dictionary from Question 1, but return `'unknown'` if it’s missing.

3. **Delete & Count**
   Given `inventory = {'apples': 30, 'bananas': 12, 'oranges': 10}`, remove `'bananas'` and print how many items remain.

4. **Last-In, First-Out**
   Start with an empty dictionary. Add three key/value pairs of your choosing. Call `popitem()` once. What remains, and why?

5. **Nested Challenge**
   Build a `student` dictionary where each key is a student’s name and each value is **another** dictionary holding `"math"` and `"english"` scores. Write code to print the average score for each student.
