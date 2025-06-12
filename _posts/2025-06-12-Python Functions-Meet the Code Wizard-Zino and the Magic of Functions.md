# 🌟 Python Functions: Meet the Code Wizard; Zino and the Magic of Functions.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/zino_a_magician_holding_a_spell_box.jpeg" width="100%">

Once upon a time in Codeville, there lived a young wizard-in-training named **Zino**. Zino was curious, sharp, and had just discovered the secret scrolls of Python.

One day, Zino met a mentor — a wise, old programmer named **Mr. Byte**. Mr. Byte said, “Zino, if you truly want to master Python, you must learn the art of **functions**.”

---

### 🧠 “So what’s a function?” Zino asked.

Mr. Byte smiled and said, “Imagine you had to say ‘Hello!’ to your dragon friend every time you saw him. Instead of typing the same message over and over again, you could create a spell… I mean, a **function**!”

So, he scribbled this into his spellbook:

```python
def hello():
    print('Hello!')
```

> “This is your first function,” said Mr. Byte. “You gave it a name, `hello`, and a body — the instructions inside.”

To cast this spell (run the function), Zino just needed to call its name:

```python
hello()
```

Boom! Just like magic, it printed:

```
Hello!
```

---

### 🎯 Functions That Listen

Soon, Zino wanted to greet specific people. Not just "Hello!" but "Hello Zino!" or "Hello Nia!" So Mr. Byte taught him how to make his function **accept a parameter** — like a listener that responds to a name:

```python
def hello(name):
    print('Hello ' + name + '!')
```

So when Zino typed:

```python
hello('Roger')
```

It said:

```
Hello Roger!
```

> Mr. Byte whispered, “What you pass in when calling the function is called an **argument**, but inside the function, it's known as a **parameter**.”

Kinda confusing at first, but Zino got the hang of it.

---

### 😎 Default Values: For When You’re Lazy

What if Zino didn’t want to always type a name? Mr. Byte taught him how to set a **default value**.

```python
def hello(name='my friend'):
    print('Hello ' + name + '!')
```

Now, Zino could just do:

```python
hello()
```

And it would say:

```
Hello my friend!
```

But if he *did* type a name:

```python
hello('Syd')
```

It would say:

```
Hello Syd!
```

---

### 📦 Functions with Multiple Gifts (Parameters)

Let’s say Zino wanted to greet someone and mention their age — easy peasy:

```python
def hello(name, age):
    print('Hello ' + name + ', you are ' + str(age) + ' years old!')
```

So:

```python
hello('Roger', 8)
```

Would give:

```
Hello Roger, you are 8 years old!
```

---

### 🎲 Changing Values Inside Functions?

Now Zino was curious: “What if I change a number inside a function — will it change outside too?”

```python
def change(value):
    value = 2

val = 1
change(val)
print(val)  # ?
```

The answer?

```
1
```

Mr. Byte explained: “Numbers are **immutable**. Changing them inside the function doesn’t change them outside.”

But if Zino had passed something **mutable**, like a list, it’d be a different story.

---

### 🎁 Returning Treasures with Return

Zino asked, “Can a function **give something back**?”

“Absolutely,” said Mr. Byte.

```python
def hello(name):
    print('Hello ' + name + '!')
    return name
```

So if Zino did:

```python
returned_name = hello('Zino')
print(returned_name)
```

He’d see:

```
Hello Zino!
Zino
```

Cool, right?

He could also return nothing:

```python
def hello(name):
    print('Hello ' + name + '!')
    return
```

Or return **only if** something is true:

```python
def hello(name):
    if not name:
        return
    print('Hello ' + name + '!')
```

So if he called `hello('')`, the function would just quietly do nothing.

---

### 🎉 Returning Multiple Things

Zino got extra fancy and returned **multiple values**:

```python
def hello(name):
    print('Hello ' + name + '!')
    return name, 'Roger', 8
```

So:

```python
print(hello('Syd'))
```

Would give:

```
Hello Syd!
('Syd', 'Roger', 8)
```

It's a **tuple** — a package of goodies 🎁.

---

And with that, Zino became a master of Python functions — creating, calling, customizing, and returning values like a real coding wizard 🧙🏽‍♂️✨.

---

## 🔁 Quick Recap Practice Time!

Okay superstar, let’s see what you remember. Try these out!👇

1. What’s the difference between a **parameter** and an **argument**?
2. What will this code print?

   ```python
   def greet(name='Gen Z Coder'):
       print('Hi ' + name + '!')

   greet()
   ```
3. True or False: If you pass a list to a function and change it, the change affects the original list.
4. Write a function `add_numbers(a, b)` that returns the sum of `a` and `b`.
5. What is returned by this function?

   ```python
   def info():
       return 'Python', 3, True

   print(info())
   ```