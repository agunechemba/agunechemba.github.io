# 🔧 Create a Contact Form That Saves to Google Sheets and Sends Emails (With HTML, JS and Apps Script)

![Ekene Agunechemba](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-22-14.52.53.png)

Need a simple contact form that:

* collects user inputs,
* stores them in Google Sheets,
* and sends confirmation emails?

In this tutorial, you’ll learn to do just that using **HTML**, **JavaScript**, **CSS**, and **Google Apps Script**. Let’s roll!

---

## 🧾 Step 1: Build the HTML Form

Create a file called `form.html` and paste the code below:

```
<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    form { max-width: 400px; margin: auto; }
    input, textarea, button {
      display: block;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      font-size: 16px;
    }
    button { background: #007BFF; color: white; border: none; }
    button.sent { background: green; }
  </style>
</head>
<body>

<h2>Contact Us</h2>
<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit" id="submitBtn">Send</button>
</form>

<script>
  const form = document.getElementById('contactForm');
  const button = document.getElementById('submitBtn');

  form.addEventListener('submit', e => {
    e.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending...';

    const data = new FormData(form);

    fetch('YOUR_WEB_APP_URL', {
      method: 'POST',
      body: data
    })
    .then(res => res.text())
    .then(response => {
      button.textContent = 'Sent';
      button.classList.add('sent');
      form.reset();
    })
    .catch(error => {
      alert('Error: ' + error.message);
      button.disabled = false;
      button.textContent = 'Send';
    });
  });
</script>

</body>
</html>
```

👉 **Note:** We’ll replace `YOUR_WEB_APP_URL` in Step 3.

---

## 📊 Step 2: Set Up Your Google Sheet & Apps Script

1. Open [Google Sheets](https://sheets.google.com/) and create a new sheet.
2. Go to `Extensions > Apps Script`.

### Paste this script:

```
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const name = e.parameter.name;
  const email = e.parameter.email;
  const message = e.parameter.message;

  // Save to Sheet
  sheet.appendRow([new Date(), name, email, message]);

  // Send emails
  const subject = `New message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

  // Email to yourself
  MailApp.sendEmail("YOUR_EMAIL@gmail.com", subject, body);

  // Confirmation to user
  MailApp.sendEmail(email, "Thanks for contacting us!", `Hi ${name},\n\nThanks for your message!\n\nWe'll get back to you soon.`);

  return ContentService.createTextOutput("Success");
}
```

✏️ Replace `YOUR_EMAIL@gmail.com` with your email address.

---

## 🚀 Step 3: Deploy as a Web App

* Click `Deploy > Manage deployments > New deployment`.
* Select **Web app**.
* Set access to **Anyone**.
* Click **Deploy**.
* Copy the **Web App URL**.

Now, go back to your HTML file and replace:

```js
fetch('YOUR_WEB_APP_URL', {
```

with your actual Web App URL.

---

## ✅ Test It Out!

Open your HTML file in the browser:

* Fill out the form.
* Click **Send**.
* You should see the button change to “Sent”.
* Check your Google Sheet — your data should be there.
* Check your email inbox (yours and the user's) — messages delivered!

---

## 💡 Wrap-Up

You just created a no-backend form system with:

* Google Sheets as a lightweight database,
* Google Apps Script as the backend handler,
* HTML/CSS/JS for the front end.

Perfect for feedback forms, contact pages, or project demos.

## Review Questions
1. What Google Apps Script function handles the form submission from your HTML form?
2. How do you connect your HTML form’s fetch request to the Google Apps Script web app URL?
3. In the Apps Script, how do you save form inputs into the Google Sheet?
4. What method is used to send emails to both you and the form submitter?
5. How does the JavaScript change the send button text to “Sent” after a successful submission?
