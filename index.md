<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Logo" width="120" height="120">

# Agunechemba Ekene

#### *I build brands and deliver web solutions.*

---

### My Services
  
- E-commerce Website  
- Bill Payment Systems
- Learners Management Systems
- Personalized Web Solutions

<div class="callback-container">
<h3 class="form-title">Request a Call Back</h3>
<form id="callbackForm">
    <input type="text" name="name" placeholder="Full Name" required class="book-input">
    <input type="email" name="email" placeholder="Email Address" required class="book-input">
    <input type="text" name="whatsapp" placeholder="WhatsApp Number" required class="book-input">
    <button type="submit" id="submitBtn" class="book-button">Request a Call Back</button>
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
        msg.innerText = "Thank you. We will reach out to schedule your appointment.";
        form.reset();
        btn.innerText = "Request Sent";
      })
      .catch(error => {
        msg.innerText = "Something went wrong. Please try again.";
        btn.disabled = false;
        btn.innerText = "Request a Call Back";
      });
  });
</script>
