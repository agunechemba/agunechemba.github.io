# 🧳 Python Nested Functions: A Function Within a Function

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/imagine_a_well_crafted_bird_nest.jpg" width="100%">

Let’s imagine you’re building a robot chef.

You give the robot a **main function** called `cook_dinner()`. Inside that, there are little tasks: chop vegetables, boil water, stir the sauce. You don’t really want these small helper steps to be available for just anyone to call. They’re only useful inside the main cooking process.

So instead of defining them globally, you define them **inside** the main function. That, my friend, is what we call a **nested function**.

---

### 🧪 Example: The Talkative Function

```
def talk(phrase):
    def say(word):
        print(word)

    words = phrase.split(' ')
    for word in words:
        say(word)
```

Here’s what’s going on:

* The outer function is `talk()`. It's our main robot chef.
* Inside it lives a helper function `say()`, whose only job is to print a single word.
* We pass a whole phrase to `talk()`, and it splits it into individual words.
* For each word, it calls the helper `say()` to speak it out loud.

Let’s run this:

```
talk("I love Python")
```

**Output:**

```
I
love
Python
```

Neat, isn’t it?

---

### 🔒 The Magic of Privacy

Here’s something powerful about nested functions: **they are private** to the function in which they are defined.

Try this:

```
say("Hello")  # Outside the function
```

And Python will complain:

```
NameError: name 'say' is not defined
```

Because `say()` was born and raised *inside* `talk()`, it doesn’t exist in the outside world. This makes your code cleaner, safer, and easier to manage.

---

### 🧠 Why Use Nested Functions?

1. **Encapsulation** – You keep related logic together.
2. **Code clarity** – You don’t pollute the global space with tiny helper functions.
3. **Closures** – You can take advantage of inner functions remembering the outer function’s variables. (More on that in Chapter 33!)

---

### 🔄 Example 2: A Counter With Inner Increment

Here’s a practical one:

```
def count():
    count = 0

    def increment():
        nonlocal count
        count = count + 1
        print(count)

    increment()
```

Run `count()`, and it prints `1`. Why? Because the inner `increment()` function accessed and modified the outer `count` variable using the `nonlocal` keyword.

Without `nonlocal`, it would treat `count` as a new local variable, and the outer one would remain unchanged.

---

### 🧠 Summary

* A **nested function** is simply a function defined inside another function.
* It can only be used inside the outer function.
* It helps with organizing code and hiding logic that doesn’t need to be shared.
* You can access outer variables inside nested functions—especially powerful when combined with `nonlocal`.

---

### 📝 Practice & Review Time

1. **In your own words**, why might you want to use a nested function instead of a regular one?

2. What does the following code print?

   ```
   def outer():
       def inner():
           print("Inside inner")
       inner()
   outer()
   ```

3. **True or False**: A nested function can be accessed from anywhere in your program.

4. Rewrite this using a nested helper function:

   ```
   def greet(name):
       print("Hello, " + name + "!")
   ```

5. Add a nested function inside `multiply()` that prints `"Multiplying!"` before returning the result:

   ```
   def multiply(a, b):
       # define nested function here
       return a * b
   ```