<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Logo" width="120" height="120">

# Agunechemba Ekene

**Your Tech Partner**

## My Services

* **Managing IT Systems**
* **Developing Websites & Web Applications**
* **Optimizing Websites for Visibility — SEO**
* **Selling and Marketing Tech Products & Services**


## Connect

📞 Call: **[+234 906 611 5252](tel:+2349066115252)**

📧 Email: **[agunechemba@yahoo.com](mailto:agunechemba@yahoo.com)**

🔗 LinkedIn: **[agunechembaekene](https://www.linkedin.com/in/agunechembaekene)**

⭐ **[Rate Me On Google!](https://share.google/XVIrFxFsXMjVaxdh1)**

---

<!-- Start Call Back Form -->
<div class="callback-container">
<h3 class="form-title">Request Call Back</h3>
<form id="callbackForm">
    <input type="text" name="name" placeholder="First Name" required class="book-input">
    <input type="email" name="email" placeholder="Email" required class="book-input">
    <input type="text" name="whatsapp" placeholder="Phone" class="book-input">
    <button type="submit" id="submitBtn" class="book-button">Request Call Back</button>
    <p id="responseMsg" class="post_navi-label"></p>
  </form>
</div>

<script>
  // Replace the URL below with your deployed Google Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwCcoMxwPVnxGjIhVWaoT2AtPQkKrN9_CsTGz9UtR4aBx7DXsWW2HQIOXg4ZdXRcyl8/exec';
  const form = document.getElementById('callbackForm');
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('responseMsg');

  form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Sending Request...";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerText = "Thank you. I will reach out to schedule your appointment.";
        form.reset();
        btn.innerText = "Request Sent";
      })
      .catch(error => {
        msg.innerText = "Something went wrong. Please try again.";
        btn.disabled = false;
        btn.innerText = "Request Call Back";
      });
  });
</script>
<!-- End Call Back Form -->
