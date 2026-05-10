<div style="max-width: 400px; width: 90%; margin: 0 auto; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">

  <!-- Profile Image & Tagline -->
  <div style="display: inline-block; width: 150px; margin-top: 20px;">
    <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/03/website-dp.png" 
         alt="Agunechemba | Your Tech Partner" 
         style="width: 100%; height: auto; aspect-ratio: 1 / 1; border-radius: 50%; border: 2px solid #f0f0f0; object-fit: cover; display: block; margin-bottom: 10px;">
    <p style="margin: 0; font-size: 15px; color: #666; font-style: italic;">
      Your Tech Partner
    </p>
  </div>

  <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">

  <!-- Main Content -->
  <h3 style="font-size: 20px; margin-bottom: 12px;">What I Do?</h3>
  <div style="font-size: 16px; margin-bottom: 25px;">
    <div style="margin-bottom: 4px;">• I develop and sell premium software solutions.</div>
    <div style="margin-bottom: 4px;">• I train employees and learners on the use of IT infrastructure.</div>
  </div>

  <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">

  <!-- Connect Section -->
  <h3 style="font-size: 20px; margin-bottom: 15px;">Connect:</h3>
  
  <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
    <a href="tel:+2349066115252" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #007bff; font-weight: 600; font-size: 16px;">
      📞 +234 906 611 5252
    </a>
    <a href="mailto:agunechemba@yahoo.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #007bff; font-weight: 600; font-size: 16px;">
      📧 agunechemba@yahoo.com
    </a>
    <a href="https://www.linkedin.com/in/agunechembaekene" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #007bff; font-weight: 600; font-size: 16px;">
      🔗 LinkedIn Profile
    </a>
  </div>
  
  <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 10px;">
    <p style="margin: 0; font-size: 14px; margin-bottom: 5px;">Highly Rated!</p>
    <a href="https://share.google/XVIrFxFsXMjVaxdh1" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #28a745; font-weight: bold; font-size: 16px;">
      ⭐⭐⭐⭐⭐ <br>Rate Me On Google
    </a>
  </div>

</div>

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
