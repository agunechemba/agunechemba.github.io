# 🎯 Python Ternary Operator: Choose Your Adventure!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/tenery-operator.webp" width="100%">

## 🚀 Story Time: "The Python Shortcut Button"

Imagine you're a superhero, and you’ve got this **magic decision button** on your wrist.

When something happens—like a dragon shows up or your cookie falls—it helps you **quickly decide** what to do. No time for long speeches. Just press and BOOM—decision made!

Well, guess what? Python has its own version of this button! It's called the **Ternary Operator**. And it lets your computer **decide between two choices on just one line**.

---

## 🎮 Meet The Hero: Ternary Operator!

Let’s say you're playing a game. If your health is more than 0, you're alive. If not, you're out of the game.

You *could* write:

```python
if health > 0:
    status = "Alive"
else:
    status = "Game Over"
```

But Python gives you a cool shortcut!

🪄 With the **ternary operator**, you can write:

```python
status = "Alive" if health > 0 else "Game Over"
```

Boom 💥! One line. Super fast. Just like tapping that magic button.

---

## 🧠 How the Ternary Operator Works

Here's the pattern:

```python
value_if_true if condition else value_if_false
```

So you always:

1. Say what happens **if it's TRUE** ✅
2. Write the **`if`** part with your **condition**
3. Then write what happens **if it's FALSE** ❌ using **`else`**

---

## 🍪 Let’s Try It With Cookies!

Imagine you have a cookie jar, and you want to know if there are any cookies left.

```python
cookies = 5
message = "Yay! Cookies!" if cookies > 0 else "No cookies left 😢"
print(message)
```

If `cookies` is more than 0, you'll see:
**"Yay! Cookies!"**
Otherwise, you'll see:
**"No cookies left 😢"**

---

## 🎓 Another Example: Voting Age Check

You want to check if someone is old enough to vote. Let's say voting age is 18.

```python
age = 16
can_vote = "Yes" if age >= 18 else "No"
print("Can vote?", can_vote)
```

Since age is 16 (not enough), Python says:
**"Can vote? No"**

But if age was 21...

```python
age = 21
can_vote = "Yes" if age >= 18 else "No"
```

Then the answer would be:
**"Can vote? Yes"**

---

## 🎮 One More Game Move!

You’re controlling a game character. If the power is ON, your sword lights up. If not, it stays off.

```python
power_on = True
sword_status = "Glowing" if power_on else "Dark"
print("Sword is", sword_status)
```

🗡️ Your sword changes with just one line!

---

## 🧪 Ready to Practice?

Here are 5 fun questions to test your ternary power:

1. **What's the output?**

   ```python
   water = 0  
   message = "Water bottle is full" if water > 0 else "It's empty"  
   print(message)
   ```

2. Fill in the blanks to make this work:

   ```python
   age = 10  
   status = ______ if age >= 13 else ______  
   # You want status to be "Teen" if age is 13 or more, else "Kid"
   ```

3. Write a one-liner (ternary) to check if a number is even or odd.
   Hint: Use `number % 2 == 0`

4. Your friend scored `75` on a test. Write a ternary to print `"Passed"` if score is `50` or more, else `"Failed"`.

5. You have `5` coins. Use a ternary to print `"Buy ice cream"` if you have at least `3` coins, else `"Not enough coins"`.
