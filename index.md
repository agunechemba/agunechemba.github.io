<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Logo" width="120" height="120">

#### Hi, I'm
# Agunechemba Ekene
#### *Your Tech Partner*

---

#### I bridge the gap between **you** and the technology you need to scale.

**You** don't need to juggle a separate **Website Developer**, **IT Support**, and **IT Consultant**. **You** need one partner who understands it all—and knows exactly how to bring the right solutions together for you.

---

### How I Help You
I handle the complexity so **you** can focus on your vision.

* **High-Performance Web Development**
Instead of just "hiring a dev," you get a digital presence built to convert and scale with your users.

* **Proactive IT Support**
Instead of chasing bugs, you get seamless system management and zero downtime so your tech stays out of your way.

* **Strategic IT Consulting**
Instead of guessing your next move, you get a clear roadmap to ensure your business grows as fast as you do.

---

**Ready to simplify your stack?**
**Let’s Talk:**

* Call: **[+234 906 611 5252](tel:+2349066115252)**
* LinkedIn: **[agunechembaekene](https://www.linkedin.com/in/agunechembaekene)**

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
