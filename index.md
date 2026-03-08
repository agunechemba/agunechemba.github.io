<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Logo" width="120" height="120">

*I'm*
# Agunechemba Ekene

**Your Tech Partner:** I handle the *complexities* so *you* can focus on your business.

**High-Performance Web Development** Instead of just "having a website," you get a high-speed digital asset built to capture leads and scale with your customer base.

**Proactive IT Management** Instead of reacting to tech failures, you get a seamless environment where your systems stay out of your way and let you work.

**Strategic Growth Consulting** Instead of guessing your next tech investment, you get a clear roadmap that ensures your infrastructure grows as fast as your revenue.

---

**Ready to simplify your technology?** **Let’s Talk:**

📞 Call: **[+234 906 611 5252](tel:+2349066115252)**

🔗 LinkedIn: **[agunechembaekene](https://www.linkedin.com/in/agunechembaekene)**

---

<!-- Start Call Back Form -->
<div class="callback-container">
<h3 class="form-title">Request Free Consultation</h3>
<form id="callbackForm">
    <input type="text" name="name" placeholder="First Name" required class="book-input">
    <input type="email" name="email" placeholder="Email" required class="book-input">
    <input type="text" name="whatsapp" placeholder="Phone" class="book-input">
    <button type="submit" id="submitBtn" class="book-button">Request Free Consultation</button>
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
        btn.innerText = "Request Free Consultation";
      });
  });
</script>
<!-- End Call Back Form -->
