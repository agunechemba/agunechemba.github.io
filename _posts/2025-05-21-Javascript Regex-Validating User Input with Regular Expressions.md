# Javascript Regex: Validating User Input with Regular Expressions (RegEx) — A Nigerian Scenario 🇳🇬

![Ekene Agunechemba](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/an_illustration_of_a_nigerian_web_developer.jpeg)

**RegEx (Regular Expression)** is a special pattern of characters used to **search, match, and validate text**—like checking if an email, phone number, or password follows the correct format.

Think of it as a smart filter that tells you: “Does this text follow the rule?” ✅ or ❌.


This is super useful when building sign-up forms for websites or apps, especially if you want to ensure users enter the correct information.

---

## 📝 **Scenario: You're the Developer**

You're building a registration form for an online platform in Nigeria. The form asks users for:

1. **Email Address**
2. **Phone Number** (Nigerian format)
3. **Password**

Your job is to make sure users don’t enter incomplete, wrong, or unsafe data.

Let’s use RegEx to validate these inputs.

---

## 1. 📧 **Validating Email Addresses**

Emails must follow a format like `someone@example.com`.

### ✅ RegEx Pattern:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### ✅ What This Checks:

* Characters before the `@` (letters, numbers, dots, etc.)
* A domain name after the `@`
* A top-level domain like `.com`, `.org`, or `.ng`

### 🧪 Examples:

| Input          | Valid?             |
| -------------- | ------------------ |
| `myemail`      | ❌ No `@` or domain |
| `me@gmail.com` | ✅ Yes              |
| `user@site.ng` | ✅ Yes              |

---

## 2. ☎️ **Validating Nigerian Phone Numbers**

Nigerian numbers start with prefixes like `070`, `080`, `081`, `090`, or `091`, and they must be exactly 11 digits long.

### ✅ RegEx Pattern:

```regex
^(070|080|081|090|091)\d{8}$
```

### ✅ What This Checks:

* Starts with allowed prefixes
* Followed by exactly 8 digits (making 11 digits in total)

### 🧪 Examples:

| Input         | Valid?           |
| ------------- | ---------------- |
| `08012345678` | ✅ Yes            |
| `0811234567`  | ❌ Only 10 digits |
| `09187654321` | ✅ Yes            |
| `0145678901`  | ❌ Starts with 01 |

---

## 3. 🔐 **Validating Password Strength**

You want users to create **strong passwords**. Your rules:

* Minimum of 8 characters
* At least 1 uppercase letter
* At least 1 lowercase letter
* At least 1 number
* At least 1 special character

### ✅ RegEx Pattern:

```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```

### ✅ What This Checks:

* `(?=.*[a-z])` → has lowercase
* `(?=.*[A-Z])` → has uppercase
* `(?=.*\d)` → has a digit
* `(?=.*[@$!%*?&])` → has a special character
* `{8,}` → at least 8 characters total

### 🧪 Examples:

| Input       | Valid?                                     |
| ----------- | ------------------------------------------ |
| `password`  | ❌ Weak (no caps, digits, or special chars) |
| `Pass123`   | ❌ Less than 8 characters                   |
| `Pa$$w0rd!` | ✅ Strong                                   |

---

## 🧠 **Why Use RegEx Instead of `if` Statements?**

Without RegEx, you'd write multiple lines like:

```js
if (!email.includes("@")) { ... }
if (phone.length !== 11) { ... }
```

That gets messy fast. RegEx handles all those rules in **just one line** — clean, fast, and powerful!

---

## 🧪 **Challenge Task (Try It!)**

Write RegEx patterns for:

* A name field that only allows letters (no numbers or symbols)
* A ZIP code that must be 6 digits long (e.g. Nigerian postal codes)

Drop your answers in the comments or test them out online!

---

## ✍️ Summary

| Field        | RegEx Purpose                                       |
| ------------ | --------------------------------------------------- |
| Email        | Ensures format like `user@domain.com`               |
| Phone Number | Confirms 11-digit Nigerian number with valid prefix |
| Password     | Enforces strong password rules                      |

---

Happy coding! 🎉
Whether you're validating Nigerian numbers or building global platforms, RegEx will save you time and boost your form’s reliability.


## ✅ **Review Questions**

1. **Which RegEx pattern correctly validates a Nigerian phone number that starts with `081` and is 11 digits long?**
   A) `^081\d{8}$`
   B) `^081\d{7}$`
   C) `^08\d{9}$`
   D) `^\d{11}$`

2. **What will the following RegEx match?**

   ```regex
   ^[a-zA-Z]+$
   ```

   A) Only numbers
   B) Only lowercase letters
   C) Only alphabetic characters (uppercase and lowercase)
   D) Any characters including special ones

3. **Which of these passwords will pass the RegEx validation for strength?**

   ```regex
   ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$
   ```

   A) `password123`
   B) `Pass1234`
   C) `Pa$$w0rd`
   D) `admin@123`

4. **True or False:**
   A RegEx pattern like `^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$` will correctly match the email `user@mail.com.ng`.

5. **Write a RegEx to validate a Nigerian postal code (6-digit number).**
   *(Hint: Start with `^` and end with `$`)*

