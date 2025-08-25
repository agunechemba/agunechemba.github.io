# 🧠🐍 Python Data Types: Helping Python Understand What You're Working With

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/datatypes.webp" width="100%">

-----


Data types are a fundamental concept in programming. They're essentially categories for different kinds of values, helping Python understand what you're working with and what operations are possible. Think of them as the building blocks of any program.

-----

### 🧵 Strings (`str`): The Text Type

A **string** is an ordered sequence of characters, such as letters, numbers, and symbols. In Python, you create a string by enclosing text in single, double, or triple quotes.

```
name = "Junior"
message = 'Hello, world!'
multiline_text = """This is a
multi-line string."""
```

Strings are versatile and come with many built-in functions:

  * **Concatenation:** Joining strings together using the `+` operator. For example, `"Hello" + " world"` results in `"Hello world"`.
  * **Indexing:** Accessing individual characters within a string. `name[0]` would give you the character `"J"`.
  * **Slicing:** Extracting a portion of a string. `name[1:4]` would return `"uni"`.
  * **Length:** Getting the number of characters using the `len()` function. `len(name)` returns `6`.

-----

### 🔢 Numbers: The Numerical Types

Python handles various types of numbers, each with its own specific use.

  * **Integers (`int`):** These are whole numbers, both positive and negative, without a decimal point. Examples include `8`, `100`, and `-5`.
  * **Floats (`float`):** These are numbers that have a decimal point. They are used to represent fractional or real numbers. Examples include `4.5` and `3.14159`.
  * **Complex Numbers (`complex`):** These are numbers with a real and an imaginary part, like `3 + 4j`. You'll encounter these in more advanced mathematical or scientific computing.

-----

### 🔀 Type Casting: Converting Between Data Types

Sometimes you'll need to change a value from one data type to another. This process is called **type casting**. You can use built-in functions like `int()`, `float()`, and `str()` to perform these conversions.

For example, to convert a string that contains a number into an actual integer:

```
age_as_string = "16"
age_as_number = int(age_as_string)
```

However, be careful\! You can't cast a string with letters into a number. The code `int("hello")` would cause a `ValueError`.

-----

### 🎁 Other Key Data Types

  * **Boolean (`bool`):** Represents one of two values: `True` or `False`. Booleans are essential for conditional logic and comparisons.
  * **List (`list`):** An ordered, mutable collection of items. Lists are great for storing multiple values in a single variable. For example, `favorite_foods = ["pizza", "sushi", "tacos"]`.
  * **Tuple (`tuple`):** Similar to a list, but **immutable**, meaning its contents cannot be changed after creation. Tuples are often used for data that shouldn't be modified, like `coordinates = (10, 20)`.
  * **Dictionary (`dict`):** An unordered collection of key-value pairs. Dictionaries are optimized for retrieving values based on their associated key, like a real-world dictionary. For example, `student = {"name": "Alex", "age": 16}`.
  * **Set (`set`):** An unordered collection of unique items. Sets are useful for removing duplicates and performing mathematical set operations. For example, `unique_numbers = {1, 2, 3, 3, 4}` would be stored as `{1, 2, 3, 4}`.

-----

### 📝 Fill in the Gaps: Test Your Knowledge

1.  In Python, text enclosed in quotes is considered a \_\_\_\_\_\_\_\_\_\_.
2.  The `len()` function is used to find the \_\_\_\_\_\_\_\_\_ of a string.
3.  Whole numbers are represented by the `int` data type, while numbers with decimals are represented by the \_\_\_\_\_\_\_\_\_\_ data type.
4.  The process of converting a value from one data type to another is called \_\_\_\_\_\_\_\_\_\_.
5.  The boolean data type has only two possible values: `True` and \_\_\_\_\_\_\_\_\_\_.
6.  A `list` is an ordered collection of items, but a `tuple` is \_\_\_\_\_\_\_\_\_\_, meaning its contents cannot be changed.
7.  To access a value in a dictionary, you use its corresponding \_\_\_\_\_\_\_\_\_\_.
8.  The data type that stores only unique items is a \_\_\_\_\_\_\_\_\_\_.
9.  Attempting to convert `"hello"` to an integer will result in a \_\_\_\_\_\_\_\_\_\_.
10. The `+` operator can be used to join two or more strings together in a process called \_\_\_\_\_\_\_\_\_\_.
