# 📘 Python Constants – The Truth You Should Know


<div style="text-align: center;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a_young_black_boy_smiling_and_has.jpeg" alt="Ekene Agunechemba" />
</div>
<br><br>


When you're coding in Python, sometimes you want a variable that never changes — like the size of a window, or the value of Pi.

Well, **bad news first**: Python doesn’t have built-in constant protection. That means anyone (including you!) can reassign a value even if it’s *meant* to be constant.

But don’t worry — there are two common ways to *act like* you're using constants.

---

## 🧠 Method 1: Naming Convention (The Common Way)

This is what most Python developers use:

```
WIDTH = 1024
HEIGHT = 768
```

When other coders see all UPPERCASE names, they know:
⚠️ “Don’t touch this. It’s meant to stay the same.”

But Python won’t stop you from doing this:

```
WIDTH = 500  # 😱 Whoops! It changed!
```

So it’s up to you and your team to **respect the rule**.

---

## 🧠 Method 2: Using `Enum` for Constants

Want to go a little stricter? Use an `Enum`. Like this:

```
from enum import Enum

class Constants(Enum):
    WIDTH = 1024
    HEIGHT = 768
```

Access the values like this:

```
print(Constants.WIDTH.value)  # ➜ 1024
```

✅ Now, if someone tries to reassign `Constants.WIDTH`, Python will complain:

```
Constants.WIDTH = 500  # ❌ Error!
```

So `Enum` gives you *some* protection — not perfect, but better.

---

## ✏️ Practice Time!

Try these 5 questions to lock it in:

1. What’s the difference between a normal variable and a constant (by naming)?
2. Rewrite this code using the constant naming convention:

   ```
   pi = 3.14159
   max_speed = 250
   ```
3. Create a `Constants` class using `Enum` that includes `MAX_USERS = 100` and `API_KEY = 'abc123'`.
4. What happens if you try to do this?

   ```
   Constants.WIDTH = 200
   ```

   (Explain in one sentence.)
5. Why do you think Python doesn’t enforce constants the way other languages do?

