# 🐍 Python's Variable Scope: A Guide to Global and Local Variables

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/pop_mart_labubu_the_monsters_exciting_macaron.jpg" width="100%">

### What's a Variable?

Imagine a **variable** is like a labeled container 📦 you use to store stuff in your code. You can put numbers, text, or even more complex data inside. The label is the variable's name (e.g., `age`, `name`), and the stuff inside is its **value**.

But where you place this container determines who can access it. This concept is called **variable scope**. It's about a variable's "visibility"—where it can be seen and used in your program. Just like in real life, a notebook you leave on the kitchen table is visible to everyone, but one you keep in your locked drawer is only visible to you.

-----

### Global vs. Local Scope

In Python, there are two primary scopes: **global** and **local**. Let's break them down.

#### 🌍 Global Scope

A variable in the **global scope** is created in the main body of your script, **outside of any function**. Think of it as a public announcement board 📢 for your program. Any part of your code—any function or statement—can read its value.

```
# 'team_name' is created in the global scope
team_name = "The Pythons"

def show_team():
    # This function can access the global variable 'team_name'
    print(f"The team is {team_name}.")

def change_team():
    # To modify a global variable, you must use the 'global' keyword
    global team_name
    team_name = "The Cobras"

show_team()  # Output: The team is The Pythons.
change_team()
show_team()  # Output: The team is The Cobras.
```

In the example above, `team_name` is a global variable. The `show_team()` function can read its value without any special declaration. However, to change its value from within a function, you must use the `global` keyword. This explicitly tells Python, "I'm not creating a new local variable; I want to modify the existing global one."

-----

#### 🚪 Local Scope

A variable in the **local scope** is created **inside a function**. It's like a private notebook 🤫 that only that function can see and use. Once the function finishes its execution, the local variable is destroyed and no longer exists.

```python
def create_score():
    # 'player_score' is created in the local scope of 'create_score'
    player_score = 100
    print(f"Inside the function, the score is {player_score}.")

create_score()  # Output: Inside the function, the score is 100.

# This will cause an error!
# print(player_score)
```

In this case, `player_score` is only visible within the `create_score()` function. Attempting to access it from outside the function will result in a **`NameError`** because the variable doesn't exist in the global scope.

-----

### The Rules of the Road 🗺️

1.  **Read, But Don't Change (By Default):** Functions can read global variables, but if you try to assign a new value to a variable with the same name inside a function, Python assumes you're creating a new **local variable**, not changing the global one. This is a crucial concept to avoid unintended side effects.

2.  **The `global` Keyword:** To explicitly modify a global variable from inside a function, you **must** use the `global` keyword. It's a clear signal to Python to affect the variable in the global scope.

3.  **Local First:** When a function tries to access a variable, Python first checks the local scope. If it doesn't find the variable there, it then looks for a global one. If it can't find it in either scope, it raises a `NameError`.

Understanding variable scope is fundamental to writing clean, bug-free code. It helps you manage data flow and prevents variables from being accidentally changed or accessed where they shouldn't be.

-----

### 📝 Fill in the Blanks\!


1.  A variable created **\_\_\_\_\_\_\_\_** a function has **local** scope.
2.  The `global` keyword is used to modify a variable in the **\_\_\_\_\_\_\_\_** from within a function.
3.  A variable in the **global** scope is defined **\_\_\_\_\_\_\_\_** any function.
4.  If you try to use a local variable outside its **\_\_\_\_\_\_\_\_**, you will get a **`NameError`**.
5.  When a function finishes, its **local** variables are **\_\_\_\_\_\_\_\_**.
6.  The `global` keyword tells Python you want to work with the **\_\_\_\_\_\_\_\_** variable, not create a new one.
7.  A variable created **inside** a function is in the **\_\_\_\_\_\_\_\_**.
8.  To change a variable in the global scope from within a function, you need to use the **\_\_\_\_\_\_\_\_**.
9.  A variable in the **global** scope can be accessed by any **\_\_\_\_\_\_\_\_**.
10. A `NameError` occurs when a variable is used but hasn't been defined in either the **local** or **\_\_\_\_\_\_\_\_** scope.
