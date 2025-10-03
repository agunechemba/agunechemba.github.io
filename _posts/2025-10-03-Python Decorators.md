# 🌟 Python Decorators: A Function That Takes Another Function As Input

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-decorators-diagram.jpg" width="100%">

A **decorator** in Python is simply a way to **modify or enhance functions (or methods, or even classes) without changing their actual code**. Think of them like wrapping a gift: the gift (your function) stays the same inside, but the wrapping (the decorator) changes how it looks, behaves, or what happens when it’s opened.

They are built on two key concepts:

1. **Functions are first-class objects** in Python (they can be passed around as arguments, returned from other functions, stored in variables, etc.).
2. **Nested functions & closures** (a function defined inside another function can "remember" values from the enclosing scope).

---

### 🧩 How Do They Work?

A decorator is **a function that takes another function as input, adds some extra behavior, and returns a new function**.

Let’s see a simple example:

```python
def decorator(func):
    def wrapper():
        print("Something before the function runs...")
        func()
        print("Something after the function runs...")
    return wrapper
```

Here’s how we use it:

```python
@decorator
def say_hello():
    print("Hello!")

say_hello()
```

**Output:**

```
Something before the function runs...
Hello!
Something after the function runs...
```

The `@decorator` is shorthand for:

```python
say_hello = decorator(say_hello)
```

---

### ⚡ Real-Life Analogy

Imagine you run a bakery. You bake bread (your function). But before selling, you might want to:

* Add packaging (logging).
* Add a label (authentication).
* Add a discount coupon (caching).

The bread itself hasn’t changed—it’s the wrapping that gives extra features. That’s what decorators do.

---

### 🛠️ Common Use Cases of Decorators

1. **Logging** – Keeping track of function calls.

   ```python
   def log_decorator(func):
       def wrapper(*args, **kwargs):
           print(f"Calling {func.__name__} with {args} {kwargs}")
           return func(*args, **kwargs)
       return wrapper
   ```

2. **Authentication / Permission checks** – Useful in web frameworks.

   ```python
   def require_admin(func):
       def wrapper(user, *args, **kwargs):
           if not user.is_admin:
               raise PermissionError("Admin access required")
           return func(user, *args, **kwargs)
       return wrapper
   ```

3. **Caching / Memoization** – Avoid repeating expensive computations.

   ```python
   from functools import lru_cache

   @lru_cache(maxsize=1000)
   def fibonacci(n):
       if n < 2:
           return n
       return fibonacci(n-1) + fibonacci(n-2)
   ```

4. **Timing functions** – Measuring performance.

   ```python
   import time

   def timer(func):
       def wrapper(*args, **kwargs):
           start = time.time()
           result = func(*args, **kwargs)
           end = time.time()
           print(f"{func.__name__} took {end - start:.2f} seconds")
           return result
       return wrapper
   ```

---

### 🎯 Key Points to Remember

* **Decorators use `@decorator_name` syntax.**
* They are just **functions returning functions**.
* `functools.wraps` is often used inside decorators to preserve the original function’s metadata (like name, docstring).

  ```python
  from functools import wraps

  def my_decorator(func):
      @wraps(func)
      def wrapper(*args, **kwargs):
          return func(*args, **kwargs)
      return wrapper
  ```

---

### 🔮 Beyond Basics

* Decorators can also **accept arguments** by nesting another function.

  ```python
  def repeat(n):
      def decorator(func):
          def wrapper(*args, **kwargs):
              for _ in range(n):
                  func(*args, **kwargs)
          return wrapper
      return decorator

  @repeat(3)
  def greet():
      print("Hi!")

  greet()
  ```

  Output:

  ```
  Hi!
  Hi!
  Hi!
  ```

* You can also apply **multiple decorators** to the same function, and they stack from top to bottom.

---

✅ In short:
Decorators are **powerful, reusable, elegant tools** for modifying functions without touching their code. They are widely used in frameworks like **Flask, Django, FastAPI**, and in Python libraries for logging, authentication, caching, etc.

---

### ✍ Review Fill-in-the-Gap Questions

1. A decorator in Python is a ______ that takes another function and returns a ______.
2. The `@decorator_name` syntax is just shorthand for ______.
3. Functions in Python are called ______ objects because they can be passed around like data.
4. A decorator often defines an inner function called ______ to wrap extra behavior.
5. To preserve the original function’s name and docstring, we use ______ from the functools module.
6. Decorators can be stacked; they are applied from ______ to ______.
7. One common use of decorators is adding ______, which helps track when functions are called.
8. The `@lru_cache` decorator is useful for ______ expensive function results.
9. A decorator with parameters requires an additional ______ layer of function nesting.
10. In web frameworks, decorators are often used for checking ______ and permissions.