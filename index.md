<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
/* ==========================================
   📖 HOME PAGE — Calm Old Book Theme
   (Gentle Light Mode Only)
   ========================================== */

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* ========= 🌞 Color Variables ========= */
:root {
  --bg-color: #F7F3E9; /* Old book parchment */
  --text-color: #2C2C2C; /* Charcoal ink text */
  --accent-color: #B8860B; /* Antique gold */
  --accent-hover: #DAA520; /* Warm golden hover */
  --card-bg: #FAF7EF; /* Slightly brighter for cards */
  --card-shadow: rgba(0, 0, 0, 0.08);
  --button-shadow: rgba(184, 134, 11, 0.3);
  --mark-bg: #FFF8DC; /* Cream highlight */
  --mark-text: #000;
}

/* ========= 🧠 Base Styles ========= */
body {
  margin: 0;
  font-family: "Georgia", "Times New Roman", serif;
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 0.4s ease, color 0.4s ease;
}

/* ========= 🏠 Container ========= */
.container {
  max-width: 650px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

/* ========= 👤 Profile ========= */
.profile-img {
  width: 120px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(184, 134, 11, 0.4);
  margin-bottom: 20px;
}

.title {
  font-size: 26px;
  font-weight: bold;
  color: var(--accent-color);
  margin-bottom: 5px;
}

.subtitle {
  font-size: 16px;
  color: #8B4513;
  margin-bottom: 30px;
  font-style: italic;
}

/* ========= 🎛️ Toggle Buttons ========= */
.toggle-button {
  display: block;
  width: 100%;
  margin: 10px auto;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #B8860B, #DAA520);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 0 10px var(--button-shadow);
  text-align: left;
  position: relative;
}

.toggle-button i {
  margin-right: 10px;
}

.toggle-button::after {
  content: "\f0d7";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  position: absolute;
  right: 20px;
  transition: transform 0.3s ease;
}

.toggle-button.active::after {
  transform: rotate(180deg);
}

.toggle-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--button-shadow);
}

/* ========= 📜 Toggle Content ========= */
.toggle-content {
  display: none;
  padding: 15px;
  margin-bottom: 10px;
  text-align: left;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 0 10px var(--card-shadow);
  transition: background 0.4s ease, color 0.4s ease;
  font-size: 15px;
  line-height: 1.7;
}

.toggle-content ul {
  padding-left: 20px;
  list-style: square;
}

/* ========= 🔗 Buttons & Links ========= */
.contact-links a,
.blog-link {
  display: inline-block;
  margin: 10px 8px;
  padding: 12px 20px;
  border-radius: 30px;
  background: linear-gradient(45deg, #B8860B, #DAA520);
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;
}

.contact-links a:hover,
.blog-link:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px var(--button-shadow);
}

.blog-link {
  color: #fff !important;
}

/* ========= 🔍 Search Bar ========= */
.search-bar {
  max-width: 500px;
  margin: 0 auto 30px;
  text-align: center;
}

.search-bar input {
  padding: 10px 15px;
  width: 60%;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  background: var(--card-bg);
  color: var(--text-color);
  transition: background 0.3s ease, color 0.3s ease;
}

.search-bar button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #B8860B, #DAA520);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.search-bar button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 8px var(--button-shadow);
}

/* ========= ✨ Marked Text ========= */
mark {
  background: var(--mark-bg);
  color: var(--mark-text);
  padding: 2px 4px;
  border-radius: 4px;
}

/* ========= 📱 Input Fields ========= */
input {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
}

/* ========= 🌿 Responsive ========= */
@media (max-width: 600px) {
  .toggle-button {
    font-size: 15px;
  }

  .search-bar input {
    width: 70%;
  }
}
</style>



















<!--Start-This is the body-->
<div class="container">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" class="profile-img" alt="Agunechemba Ekene">
  <div class="title"><i class="fas fa-code"></i> <br> Agunechemba Ekene</div>
  <div class="subtitle">The Celebrated Tech Trainer</div>

  <!-- Toggle Buttons & Sections -->
  <button class="toggle-button"><i class="fas fa-rocket"></i> <span id="year-counter" style="font-size: 2em; font-weight: bold;">0</span> Years Experience </button>
  <div class="toggle-content">
<p>I spark a deep passion for coding in learners across <strong>Nigeria</strong>, the <strong>UK</strong>, and the <strong>US</strong> through hands-on training, engaging challenges, and real-world projects.</p>
<p>As the founder of <a href="https://pepe.name.ng/" target="_blank"><strong>Pepe Programming Hub</strong></a> and the mind behind <strong>Firstac Academy</strong>, I also run annual free <strong>summer boot camps</strong> for young minds aged 10–16. From physical classes at Clasam Schools in Lagos to online sessions with global learners, I’ve mentored hundreds of teenagers—helping them build both strong coding skills and an <strong>engineering mindset</strong>.</p>
<p>I organize inter-school <strong>coding competitions</strong> and teach in a way that’s fun, practical, and relatable—because I believe every young person can become a confident, creative tech problem-solver.</p>
  </div>

  <button class="toggle-button"><i class="fas fa-laptop-code"></i>Lesson Series</button>
  <div class="toggle-content">
  <ul>
     <li>
    <a href="https://agunechemba.name.ng/2025/10/14/Python-Bootcamp-Revision.html" target="_blank">
      <strong>Python:</strong> 2025 August Bootcamp
    </a>
  </li>
     <li>
    <a href="https://agunechemba.github.io/2025/07/04/Index-JavaScript-RegEx.html" target="_blank">
      <strong>JavaScript:</strong> Regular Expressions
    </a>
  </li>
  <li>
    <a href="https://agunechemba.github.io/2025/07/04/Index-Introduction-to-Programming-with-Python.html" target="_blank">
      <strong>Python:</strong> Introduction to Programming with Python
    </a>
  </li>
  <li>
    <a href="https://agunechemba.github.io/2025/07/04/Index-Binary-Systems-and-Hexadecimal.html" target="_blank">
      <strong>Number System:</strong> Binary Systems and Hexadecimal
    </a>
  </li>
</ul>
  </div>

  <button class="toggle-button"><i class="fas fa-cogs"></i> My Expertise</button>
<div class="toggle-content">
<ul>
  <li><strong>Tech Training:</strong> Kids & Teens </li>
  <li><strong>Animation:</strong> HTML Canvas</li>
  <li><strong>Web Development:</strong> Front End</li>
  <li><strong>Robotics:</strong> Arduino, Python</li>
</ul>
</div>

<button class="toggle-button"><i class="fas fa-handshake"></i> Let's Connect</button>
<div class="toggle-content contact-links">
  <a href="https://wa.link/qyy63j" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp </a>
  <a href="mailto:agunechemba@yahoo.com"><i class="fas fa-envelope"></i> Email </a>
  <a href="https://t.me/agunechemba_hub" target="_blank"><i class="fab fa-telegram"></i> Telegram </a>
  <a href="https://facebook.com/agunechemba.ekene" target="_blank"><i class="fab fa-facebook"></i> Facebook </a>
  <a href="https://linkedin.com/in/agunechembaekene/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn </a>
  <a href="https://x.com/agunechemba_e" target="_blank"><i class="fab fa-x-twitter"></i> X (Twitter) </a>
</div>

<a class="blog-link" href="#my-blog"><i class="fas fa-blog"></i> <span>Visit My Blog</span></a>
</div>
<!--End-This is the body-->








































<!-- Start: Simplified Contact Form (Name, Email, Phone) -->
<div style="font-family: Arial, sans-serif; padding: 40px; text-align: center; box-sizing: border-box;">
<h2 style="text-align: center;">💻 <strong>Join PPH</strong></h2>
<h5 style="text-align: center;">🚀 <em>2 Free Bootcamps Every Year</em></h5>

  <form id="contactForm" style="max-width: 400px; margin: auto;">
    <!-- Name -->
    <input type="text" name="name" placeholder="Your Name" required 
      style="width: 100%; padding: 12px; margin-bottom: 15px; font-size: 16px; box-sizing: border-box;" />

    <!-- Email -->
    <input type="email" name="email" placeholder="Your Email" required 
      style="width: 100%; padding: 12px; margin-bottom: 15px; font-size: 16px; box-sizing: border-box;" />

    <!-- Phone -->
    <input type="tel" name="phone" placeholder="Your Phone Number" required 
      pattern="[0-9+ ]+" title="Enter a valid phone number"
      style="width: 100%; padding: 12px; margin-bottom: 15px; font-size: 16px; box-sizing: border-box;" />

    <button type="submit" id="submitBtn" 
      style="width: 100%; padding: 12px; font-size: 16px; background: #007BFF; color: white; border: none; cursor: pointer; box-sizing: border-box;">
      Request
    </button>
  </form>

  <!-- Success Animation -->
  <div id="successAnimation" style="display: none; margin: 20px auto; width: 100px; height: 100px;">
    <svg viewBox="0 0 52 52" style="width: 100px; height: 100px;">
      <path fill="none" stroke="#28a745" stroke-width="5" d="M14 27l7 7 16-16"/>
      <circle fill="none" stroke="#28a745" stroke-width="5" cx="26" cy="26" r="24"/>
    </svg>
  </div>
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

    fetch('https://script.google.com/macros/s/AKfycbz13cOdGj_BV1zCUj422TT9jQ_2wgw6BlQMSh8skvjA10EiXizQDYzZBV1GI84xeEQ1/exec', {
      method: 'POST',
      body: data
    })
    .then(res => res.text())
    .then(response => {
      button.textContent = 'Sent';
      button.style.backgroundColor = '#28a745';
      form.reset();
      animation.style.display = 'block';
      animation.style.animation = 'pop 0.5s ease-in-out';
    })
    .catch(error => {
      alert('Error: ' + error.message);
      button.disabled = false;
      button.textContent = 'Send';
    });
  });

  // Animate success
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes pop {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(styleSheet);
</script>
<!-- End: Simplified Contact Form (Name, Email, Phone) -->
















<!-- Start of Subscribe form-- This is from mailchimp, and has been commented out---
<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://github.us13.list-manage.com/subscribe/post?u=dd2b3218fc9ed6ffb2bb5cad0&amp;id=058cc63af0&amp;f_id=00361eedf0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>👉 Subscribe for Weekly Updates</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_dd2b3218fc9ed6ffb2bb5cad0_058cc63af0" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/jbMNbw" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='COMPANY';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
 --- End of Subscribe form-- This is from mailchimp, and has been commented out-->









<!--this anchors down to the post secction-->
<a id="my-blog"></a>











<!--Search input-->
<div class="search-bar">
  <input type="text" id="search-box" placeholder="Search blog..." />
  <button onclick="searchPage()">Search</button>
  <!--<button onclick="clearHighlights()">Clear</button>--removed the clear button-->
</div>



















<!--Start-JavaScript for Toggle -->
<script>
  const buttons = document.querySelectorAll('.toggle-button');
  const contents = document.querySelectorAll('.toggle-content');

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      buttons.forEach((otherBtn, j) => {
        if (i !== j) {
          contents[j].style.display = 'none';
          otherBtn.classList.remove('active');
        }
      });

      const content = contents[i];
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      btn.classList.toggle('active', !isOpen);
    });
  });
</script>
<!--End-JavaScript for Toggle -->














<!--Start-Javascript for years of experience -->
<script>
  const startYear = 2010; // change this to your actual start year
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;

  const counter = document.getElementById('year-counter');
  let count = 0;

  const updateCount = () => {
    const speed = 200; // lower = faster animation
    const increment = years / speed;

    if (count < years) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = years;
    }
  };

  updateCount();
</script>
<!--End-Javascript for years of experience -->
















<!--Start-Javascript for Search Function-->
<script>
function searchPage() {
  clearHighlights(); // Remove old highlights

  const query = document.getElementById("search-box").value.trim().toLowerCase();
  if (!query) return;

  const elements = document.querySelectorAll("body *:not(script):not(style):not(iframe)");

  elements.forEach(el => {
    if (el.children.length === 0 && el.textContent.toLowerCase().includes(query)) {
      const regex = new RegExp(`(${query})`, "gi");
      el.innerHTML = el.textContent.replace(regex, '<mark>$1</mark>');
    }
  });
}

function clearHighlights() {
  const marks = document.querySelectorAll("mark");
  marks.forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

document.getElementById("search-box").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchPage();
  }
});
</script>

<!--End-Javascript for Search Function-->

