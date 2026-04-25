<div style="max-width: 200px; width: 100%; margin: 20px 0; text-align: left;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/03/website-dp.png" 
       alt="Agunechemba | Your Tech Partner" 
       style="
         width: 100%; 
         height: auto; 
         aspect-ratio: 1 / 1;
         border-radius: 50%; 
         object-fit: cover; 
         display: block;
         margin-bottom: 8px;
       ">
  <p style="
     margin: 0; 
     font-size: 14px; 
     color: #555; 
     font-style: italic;
     font-family: sans-serif;
  ">
    Your Tech Partner
  </p>
</div>

### What I Offer:

* **Quality Tech Hardware**
* **Premium Software Solutions**

---

### Connect

📞 Call: **[+234 906 611 5252](tel:+2349066115252)**

📧 Email: **[agunechemba@yahoo.com](mailto:agunechemba@yahoo.com)**

🔗 LinkedIn: **[agunechembaekene](https://www.linkedin.com/in/agunechembaekene)**

⭐⭐⭐⭐⭐ **[Rate Me On Google!](https://share.google/XVIrFxFsXMjVaxdh1)**

---

<!-- Start Call Back Form -->
<div class="callback-container">
<h3 class="form-title">Request Call Back</h3>
<form id="callbackForm">
    <input type="text" name="name" placeholder="First Name" required class="book-input">
    <input type="email" name="email" placeholder="Email" required class="book-input">
    <input type="tel" name="whatsapp" placeholder="Whatsapp (include country code)" class="book-input" pattern="[1-9]{1,3}[0-9]{7,12}" title="Please enter your full number including country code (e.g., 234 for Nigeria), without the + sign." />
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
