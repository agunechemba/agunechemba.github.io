## Python Annotations: Making Python Code Self-descriptive And Type-friendly

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/10/python-annotations-explained.jpg" width="100%">

In Python, annotations are best understood as descriptive notes attached to your code — not rules that Python enforces, but guidance that helps humans and development tools understand what your code is supposed to do.

Think of them as documentation that lives directly inside your function or variable definition. Instead of explaining types in comments or external docs, you embed that information right where it matters. When someone reads your function signature, they immediately see what kind of data should go in and what should come out.

At the simplest level, annotations are written directly next to parameters and after a return arrow in a function definition. For example:

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

Here, the annotation `name: str` signals that the function expects `name` to be a string, and the `-> str` indicates that the function returns a string. Python itself won’t enforce this — you can still pass an integer and the program will run — but tools like static type checkers or IDEs will flag it as a potential mistake. This is where annotations become powerful: they help catch problems early, especially in large projects.

Annotations become even more useful when you want your code to communicate intent clearly. Consider a function that adds numbers:

```python
def add_numbers(a: int, b: int) -> int:
    return a + b
```

Without reading the function body, you already know what inputs are expected and what output will be produced. That clarity makes collaboration easier and reduces misunderstandings.

Behind the scenes, Python stores annotations in a dictionary attached to the function. You can access them at runtime:

```python
print(add_numbers.__annotations__)
```

This would produce something like:

```python
{'a': int, 'b': int, 'return': int}
```

This means annotations aren’t just documentation — they are data your program can inspect if needed.

Python extended this idea to variables starting in Python 3.6. You can annotate variables to describe what type of value they are meant to hold:

```python
name: str = "Agunechemba"
age: int = 30
scores: list = [95, 88, 76]
```

Again, Python will not enforce these types, but editors and analysis tools can use them to detect issues or improve autocomplete suggestions.

As programs grow, basic types like `int` and `str` are often not enough. That is where the `typing` module becomes important. It allows you to describe more complex structures, such as lists of specific types or dictionaries with defined key/value types.

For example:

```python
from typing import List, Dict

def show_students(students: List[str], marks: Dict[str, int]) -> None:
    for name, mark in marks.items():
        print(f"{name}: {mark}")
```

This tells readers and tools that `students` should be a list of strings and `marks` should be a dictionary mapping strings to integers. The return type `None` indicates the function doesn’t return a value.

Sometimes, functions may return a value or nothing at all. The `Optional` type expresses this clearly:

```python
from typing import List, Optional

def find_item(items: List[str], keyword: str) -> Optional[str]:
    for item in items:
        if keyword in item:
            return item
    return None
```

This tells you that the function might return a string, or it might return `None`.

In more advanced cases, you might need to reference a type that hasn’t been defined yet. Python allows this using forward references, which are simply type names written as strings:

```python
def get_parent(child: "Person") -> "Person":
    return child.parent
```

This is especially common in class relationships or recursive structures.

It is important to remember that annotations do not change how Python executes your program. For example, this code will still run:

```python
def subtract(a: int, b: int) -> int:
    return a - b

print(subtract("10", "5"))
```

Python will not stop you, but type-checking tools would warn you that strings are being used where integers are expected.

You can also combine annotations with Python’s introspection tools to analyze functions programmatically. For example:

```python
import inspect

def greet(name: str) -> str:
    return f"Hello, {name}"

print(inspect.signature(greet))
print(greet.__annotations__)
```

This allows frameworks, documentation generators, and libraries to automatically understand how your function is meant to be used.

Ultimately, annotations improve readability, help development tools provide better support, enable earlier error detection, and make collaboration smoother. They are optional, but in modern Python development — especially in professional or large-scale projects — they are increasingly considered best practice.