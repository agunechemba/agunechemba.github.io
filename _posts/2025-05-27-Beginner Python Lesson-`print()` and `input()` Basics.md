# 🐍 Beginner Python Lesson: `print()` and `input()` Basics

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/the_word_input_and_print_printed_on.jpeg" width="100%">

In this lesson, we’ll explore how to **display information** and **get input from the user** using Python. These are the very first steps in making interactive Python programs.

### 📤 Displaying Information with `print()`

The `print()` function lets your program show messages to the user.

```
name = "Roger"
print(name)
```

When you run this, Python will print:

```
Roger
```

The `print()` function takes whatever you give it and displays it on the screen.

---

### 🧾 Getting User Input with `input()`

To make your program ask the user for some information, use the `input()` function. Here's an example:

```
print('What is your age?')
age = input()
print('Your age is ' + age)
```

When this runs, the program will pause and wait for the user to type something, like:

```
What is your age?
12
Your age is 12
```

This is called **runtime input** because the program waits for the user **while it's running**.

Later, you’ll learn how to collect input **before** the program starts running — that's called input at *invocation time*.

---

## 🧠 Practice Time!

Try answering these on your own or with a friend:

1. Write a Python program that asks for your name and then prints:
   `"Hello, <your name>!"`

2. Write a program that asks:
   `"What's your favorite color?"`
   Then print a sentence like: `"Wow, blue is a nice color!"`

3. Fix this code so it doesn't give an error:

   ```
   print('Your age is ' + age)
   age = input()
   ```

4. Create a program that:

   * Asks for the user’s city
   * Prints: `"You live in <city>."`

5. What do you think will happen if you write:

   ```
   name = input('What is your name? ')
   print(name)
   ```

   Try it and see what’s different!

---

### 🧯 Wrap-Up

* Use `print()` to **show messages**
* Use `input()` to **get user responses**
* Input at runtime pauses the program until the user presses **Enter**