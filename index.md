<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Styles -->
<style>

  html {
  scroll-behavior: smooth;
}

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #eef3f8;
    color: #333;
  }

  .container {
    max-width: 650px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
  }

  .profile-img {
    width: 120px;
    border-radius: 50%;
    box-shadow: 0 0 15px #00bfff;
    margin-bottom: 20px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #00bfff;
  }

  .subtitle {
    font-size: 16px;
    color: #0078d7;
    margin-bottom: 30px;
    font-style: italic;
  }

  .toggle-button {
    display: block;
    width: 100%;
    margin: 10px auto;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 114, 255, 0.4);
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

  .toggle-content {
    display: none;
    padding: 15px;
    margin-bottom: 10px;
    text-align: left;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
  }

  .toggle-content ul {
    padding-left: 20px;
    list-style: square;
  }

  .contact-links a, .blog-link {
    display: inline-block;
    margin: 10px 8px;
    padding: 12px 20px;
    border-radius: 30px;
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .contact-links a:hover, .blog-link:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 114, 255, 0.4);
  }


  .blog-link {
  color: #fff !important;
}














  


/*This styles the search bar*/
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
}

.search-bar button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.search-bar button:hover {
  transform: scale(1.05);
}

mark {
  background: yellow;
  color: black;
  padding: 2px 4px;
  border-radius: 4px;
}
















  

  /* This styles the years of experience counter */
  .counter {
      font-size: 2em;
      font-weight: bold;
    }

















  /* This style is for the form*/
* {
      box-sizing: border-box;
      }
   body {
       font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
   }

     
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






<!--This is the body-->
<div class="container">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" class="profile-img" alt="Agunechemba Ekene">
  <div class="title"><i class="fas fa-code"></i> <br> Agunechemba Ekene</div>
  <div class="subtitle">The Celebrated Tech Trainer</div>

  <!-- Toggle Buttons & Sections -->
  <button class="toggle-button"><i class="fas fa-rocket"></i> <span class="counter" id="year-counter">0</span> Years Experience </button>
  <div class="toggle-content">
<p>I spark a deep passion for coding in learners across <strong>Nigeria</strong>, the <strong>UK</strong>, and the <strong>US</strong> through hands-on training, engaging challenges, and real-world projects.</p>
<p>As the founder of <strong>Pepe Programming Hub</strong> and the mind behind <strong>Firstac Academy</strong>, I also run annual free <strong>summer boot camps</strong> for young minds aged 10–16. From physical classes at Clasam Schools in Lagos to online sessions with global learners, I’ve mentored hundreds of teenagers—helping them build both strong coding skills and an <strong>engineering mindset</strong>.</p>
<p>I organize inter-school <strong>coding competitions</strong> and teach in a way that’s fun, practical, and relatable—because I believe every young person can become a confident, creative tech problem-solver.</p>
  </div>

  <button class="toggle-button"><i class="fas fa-laptop-code"></i>My Current Projects</button>
  <div class="toggle-content">
  <ul>
  <li>
    <a href="https://github.com/agunechemba/login-page-with-credentials/tree/main" target="_blank">
      <strong>GitHub:</strong> Login Page with Credentials
    </a>
  </li>
  <li>
    <a href="https://github.com/agunechemba/students-attendance-management-system" target="_blank">
      <strong>GitHub:</strong> Students Attendance Management System
    </a>
  </li>
  <li>
    <a href="https://scratch.mit.edu/projects/1042315093/editor" target="_blank">
      <strong>Scratch Project:</strong> Animation/Interactive Design
    </a>
  </li>
  <li>
    <a href="https://agunechemba.github.io/2025/04/12/01-Introduction-to-Programming-With-Python-Introduction-CS50-Agunechemba-Ekene.html" target="_blank">
      <strong>Course Curation:</strong> Introduction to Programming with Python (CS50)
    </a>
  </li>
</ul>
  </div>


<!--
  <button class="toggle-button"><i class="fas fa-school"></i> Current Role</button>
  <div class="toggle-content">
<p>Currently, I teach programming at <a href="https://clasamschools.com/" target="_blank">Clasam Schools</a>. I also write <a href="#my-blog">blog posts</a>, build youth coding bootcamps and organize competitions.</p> 
<p>Additionally, I train workers in organizations that use IT packages and give professional and career talks at schools.</p>
  </div>
  -->

  <button class="toggle-button"><i class="fas fa-cogs"></i> My Expertise</button>
<div class="toggle-content">
<ul>
  <li><strong>Tech Training:</strong> Kids & Teens </li>
  <li><strong>Animation:</strong> HTML Canvas</li>
  <li><strong>Web Development:</strong> JavaScript</li>
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















<!-- JavaScript for Toggle -->
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















<!-- Javascript for years of experience -->
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

















<!--Javascript for Search Function-->
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















<!-- Start of Subscribe form-->
<br><br>
<div style="text-align: center;">
<h1><strong>Contact</strong></h1>
<h4><em>Send me a DM or request a tutorial</em></h4>
  <iframe 
    src="https://agunechemba.surepath.ng/" 
    title="Agunechemba" 
    width="100%" 
    height="600" 
    frameborder="0">
  </iframe>
</div>







<!--Another form-->
<body>

<!--<h2>Contact Us</h2>-->

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

    fetch('https://script.google.com/macros/s/AKfycby9V4kcg4XEIqry_wq6V6sbLnVCPxx1XZLK-1BUJ2jlEOsOHIH94b7BefdqbCMfRBYi/exec', {
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


<!-- End of Subscribe form-->

















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




