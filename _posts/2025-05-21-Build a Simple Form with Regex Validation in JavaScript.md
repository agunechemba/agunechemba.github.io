# Build a Simple Form with Regex Validation in JavaScript

![Ekene Agu](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/imagine_a_colorful_playful_web_developer_s_desk.jpeg)


Hey folks! Today, I’ll show you how to create a basic HTML form and validate user input using **regular expressions (regex)** with JavaScript. We’ll cover validating name, email, and age fields with instant feedback if inputs are wrong.

Let’s jump in!

---

## Step 1: Set up the HTML Form

Start with a simple form in your HTML:

```
<form id="myForm">
  <label>
    Name:
    <input type="text" id="name" placeholder="Enter name (letters only)" />
    <div class="error" id="nameError"></div>
  </label>

  <label>
    Email:
    <input type="text" id="email" placeholder="Enter email" />
    <div class="error" id="emailError"></div>
  </label>

  <label>
    Age:
    <input type="text" id="age" placeholder="Enter age (numbers only)" />
    <div class="error" id="ageError"></div>
  </label>

  <button type="submit">Submit</button>
</form>
```

* Each field has an input and a div to show error messages.
* The form has an id (`myForm`) for easy JavaScript targeting.

---

## Step 2: Add Some Styling

Make it look clean with CSS:

```
body {
  font-family: sans-serif;
  padding: 2rem;
  background: #f1f1f1;
}

label {
  display: block;
  margin-top: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.3rem;
}

.error {
  color: red;
  font-size: 0.9rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
```

* Simple spacing and red color for errors make the form user-friendly.

---

## Step 3: Write the JavaScript for Validation

Here’s the main part — validating the input using regex:

```
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  // Regex patterns
  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const agePattern = /^\d+$/;

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const ageError = document.getElementById("ageError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  ageError.textContent = "";

  let valid = true;

  // Validate name: letters only
  if (!namePattern.test(name)) {
    nameError.textContent = "Name must contain only letters.";
    valid = false;
  }

  // Validate email format
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  // Validate age: numbers only
  if (!agePattern.test(age)) {
    ageError.textContent = "Age must be numbers only.";
    valid = false;
  }

  if (valid) {
    alert("✅ Form is valid!");
  }
});
```

### How this works:

* On submit, it prevents the default page reload.
* It grabs trimmed values from inputs.
* Tests values with regex:

  * `namePattern` — letters only (`A-Z` and `a-z`).
  * `emailPattern` — basic email format check.
  * `agePattern` — digits only.
* Shows error messages if invalid.
* Alerts success if all valid.

---

## Step 4: Test It Out!

Open your HTML file in a browser and try:

* Typing invalid characters in Name (e.g., numbers or symbols).
* Using wrong email formats (missing `@` or `.com`).
* Putting letters in the Age field.

You’ll see error messages instantly when you submit invalid data.

---

## 5 Practice Activities to Level Up

1. **Add a Phone Number Field**
   Validate it to accept only digits and exactly 10 characters.

2. **Make Name Accept Spaces and Hyphens**
   Allow names like "Mary-Jane Smith".

3. **Add Password Field with Complexity Check**
   At least 8 characters, including uppercase, lowercase, number, and symbol.

4. **Show Success Message Below Form Instead of Alert**
   Display a green “Form submitted successfully!” text on validation success.

5. **Validate Age Between 18 and 99**
   Not just numbers, but also check the number range with JavaScript.

---

### Final Thoughts

Regex validation in forms is essential for better user experience and cleaner data. This simple example is a great way to start understanding regex and JavaScript form handling.

Try customizing and expanding it — trust me, you’ll learn tons fast.


---

<iframe height="300" style="width: 100%;" scrolling="no" title="regex form project" src="https://codepen.io/agunechemba/embed/jEEgbMo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/agunechemba/pen/jEEgbMo">
  regex form project</a> by Agunechemba Ekene (<a href="https://codepen.io/agunechemba">@agunechemba</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
