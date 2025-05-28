# JS REGEX 08: Mastering Special RegEx Tricks: Captures, Groups and Peeks

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/an_african_hunter_with_a_bright_flashlight.jpeg" alt="An African hunter with a bright flashlight" style="width:100%;">

When you're diving into regular expressions (RegEx), there's a moment when simple pattern matching just isn't enough. You want more control — to grab just the piece you care about, group things smartly, or match based on what comes *next* without including it. That's where **RegEx groups and look-aheads** become your secret weapons.

In this lesson, we’ll break down three powerful tricks:

---

## 🔹 1. Capturing Groups `( )`: "Highlight This Bit for Me!"

Use **capturing groups** when you want to remember (or reuse) a specific part of your match.

### 🧠 How it works:

Parentheses `()` are used to *capture* part of your pattern. That captured part can be reused in code (`match[1]`, `match[2]`, etc.) or in a replacement string like `$1`.

### 🔍 Example:

```regex
(John) (Doe)
```

This matches the full string "John Doe", but:

* `match[0]` is `"John Doe"` (the entire match)
* `match[1]` is `"John"`
* `match[2]` is `"Doe"`

💡 You could use this to switch the names: `"Doe, John"` using `$2, $1` in a replace.

---

## 🔹 2. Non-Capturing Groups `(?: )`: "Group This, But Don’t Save It!"

Sometimes you want to group part of your regex *for logic*, not for capture.

### 🧠 How it works:

Add `?:` inside your parentheses: `(?: )`. This groups the content but doesn’t store it in your match results.

### 🔍 Example:

```regex
(?:red|blue) car
```

This matches "red car" or "blue car", but you don’t capture "red" or "blue" as a separate group.

Why? Maybe you only care about capturing the word "car" later in a bigger expression. Keeping your capture groups clean makes your code easier to manage.

---

## 🔹 3. Look-Aheads `(?= )` and `(?! )`: "Just Peek Ahead"

Look-aheads let you say: “Match this *only if* the next part is (or isn’t) something.”

They **check** the next part of the string without **including** it in the match.

### ✅ Positive Look-Ahead `(?= )`:

Match a pattern only if it’s followed by something specific.

```regex
apple(?= pie)
```

✔️ Matches `"apple"` in `"apple pie"`
✖️ Won’t match `"apple juice"`

### ❌ Negative Look-Ahead `(?! )`:

Match a pattern only if it’s *not* followed by something.

```regex
cat(?! dog)
```

✔️ Matches `"cat"` in `"cat mouse"`
✖️ Doesn’t match `"cat"` in `"cat dog"`

---

## 💡 Recap

| Trick               | Symbol  | Use Case                                  |
| ------------------- | ------- | ----------------------------------------- |
| Capturing Group     | `( )`   | Save and reuse parts of the match         |
| Non-Capturing Group | `(?: )` | Group for logic without capturing         |
| Positive Look-Ahead | `(?= )` | Match only if followed by something       |
| Negative Look-Ahead | `(?! )` | Match only if *not* followed by something |

---

## 🧪 Practice Questions

Try writing RegEx patterns to solve the following challenges.

---

### 1. Capture First and Last Name

Match a full name like `"Sarah James"` and capture both parts separately.

---

### 2. Match “cat” only when not followed by “fish”

In a sentence like `"cat dog"` or `"catfish"`, match only `"cat"` when it's not part of `"catfish"`.

---

### 3. Match “blue” or “green” shirts, but don’t capture the color

You're scanning product names like `"blue shirt"` or `"green shirt"`. Match the phrase, but capture only `"shirt"`.

---

### 4. Rearrange a name from “Alice Smith” to “Smith, Alice” using replace

Use a RegEx pattern that captures both parts and rearranges them.

---

### 5. Match the word “cake” only if followed by “shop”

You want to find the word “cake” in “cake shop” but ignore it in “cake recipe”.
