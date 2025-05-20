<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Styles -->
<style>
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



  /* This styles the years of experience counter */
  .counter {
      font-size: 2em;
      font-weight: bold;
    }
  
</style>

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
      <strong>Blog Post:</strong> Introduction to Programming with Python (CS50 Style)
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
    <a href="tel:+2349066115252"><i class="fas fa-phone"></i> +234 90 6611 5252 </a>
    <a href="https://wa.link/qyy63j" target="_blank"><i class="fab fa-whatsapp"></i> +234 90 6611 5252 </a>
    <a href="mailto:agunechemba@yahoo.com"><i class="fas fa-envelope"></i> agunechemba@yahoo.com </a>
  </div>

  <a class="blog-link" href="#my-blog"><i class="fas fa-blog"></i> Visit My Blog</a>
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


<!-- Start of Subscribe form-->

<iframe 
  src="https://agunechemba.surepath.ng/" 
  title="Agunechemba" 
  width="100%" 
  height="600" 
  frameborder="0">
</iframe>

<!-- End of Subscribe form-->


<!-- End Installing Utterances for comment-->

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
 --- End of Subscribe form-->







<a id="my-blog"></a>
