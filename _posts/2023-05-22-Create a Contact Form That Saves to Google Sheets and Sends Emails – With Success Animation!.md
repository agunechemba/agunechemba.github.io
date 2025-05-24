# ✅ Create a Contact Form That Saves to Google Sheets and Sends Emails – With Success Animation!

![Ekene Agunechemba](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/screenshot-2025-05-22-14.58.28.png)
<br><br>

Want a contact form that:

* saves responses to Google Sheets,
* emails you and the sender,
* and shows a success animation?

Let’s build one using **HTML**, **JavaScript**, **CSS**, and **Google Apps Script**. Ready? Let’s go!

---

## 🧾 Step 1: Build the HTML Form with Animation

Create an HTML file and paste this:

```
<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    form {
      max-width: 400px;
      margin: auto;
    }
    input, textarea, button {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    button {
      background: #007BFF;
      color: white;
      border: none;
      cursor: pointer;
    }
    .sent {
      background-color: #28a745 !important;
    }

    /* Success animation styles */
    .success-animation {
      display: none;
      margin: 20px auto;
      width: 100px;
      height: 100px;
    }

    .success-animation svg {
      width: 100px;
      height: 100px;
    }

    .success-animation.show {
      display: block;
      animation: pop 0.5s ease-in-out;
    }

    @keyframes pop {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); }
    }
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

<div class="success-animation" id="successAnimation">
  <svg viewBox="0 0 52 52">
    <path fill="none" stroke="#28a745" stroke-width="5" d="M14 27l7 7 16-16"/>
    <circle fill="none" stroke="#28a745" stroke-width="5" cx="26" cy="26" r="24"/>
  </svg>
</div>

<script>
  const form = document.getElementById('contactForm');
  const button = document.getElementById('submitBtn');
  const animation = document.getElementById('successAnimation');

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
      animation.classList.add('show');
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

👉 Replace `YOUR_WEB_APP_URL` with your Google Apps Script URL (coming in Step 3).

---

## 📊 Step 2: Set Up Google Sheet and Apps Script

1. Create a new Google Sheet.
2. Click **Extensions > Apps Script**.
3. Replace any starter code with this:

```
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const name = e.parameter.name;
  const email = e.parameter.email;
  const message = e.parameter.message;

  sheet.appendRow([new Date(), name, email, message]);

  const subject = `New message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

  MailApp.sendEmail("YOUR_EMAIL@gmail.com", subject, body);
  MailApp.sendEmail(email, "Thanks for contacting us!", `Hi ${name},\n\nThanks for your message!\n\nWe'll get back to you soon.`);

  return ContentService.createTextOutput("Success");
}
```

✏️ Replace `"YOUR_EMAIL@gmail.com"` with your own email.

---

## 🚀 Step 3: Deploy the Script as Web App

* Click **Deploy > Manage deployments > New deployment**.
* Choose **Web app**.
* Execute as: `Me`.
* Who has access: `Anyone`.
* Click **Deploy** and copy the **Web App URL**.

Now, paste that URL into the HTML file where it says `YOUR_WEB_APP_URL`.

---

## ✅ Final Result

Open your HTML file in a browser:

* Fill and submit the form.
* You’ll see a success checkmark bounce in.
* Data is stored in your Google Sheet.
* Emails are sent to you and the user.

---

## 💬 Wrap-Up

You've created a lightweight contact form using:

* Google Sheets (as database),
* Google Apps Script (as backend),
* and a neat SVG animation (for success feedback).

Perfect for portfolios, feedback pages, or school projects.

## Review Questions
1. How does the CSS animation get triggered after the form is submitted successfully?
2. What SVG element is used to display the checkmark animation on form submission?
3. In the JavaScript, which class is added to show the success animation, and how is it removed or hidden?
4. Explain why disabling the send button during form submission is important.
5. How would you modify the Google Apps Script to include an additional field like "Phone Number"?
