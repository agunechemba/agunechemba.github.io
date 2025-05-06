<!-- Add Font Awesome CDN for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Background Animation -->
<style>
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(120deg, #1e1e1e, #2c3e50, #1e1e1e);
    background-size: 600% 600%;
    animation: backgroundShift 20s ease infinite;
    font-family: Segoe UI, sans-serif;
  }

  @keyframes backgroundShift {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }

  .profile-container {
    background-color: rgba(30, 30, 30, 0.95);
    color: #e0e0e0;
    padding: 40px;
    border-radius: 12px;
    max-width: 800px;
    margin: 60px auto;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  }

  .profile-container a {
    color: #00bfff;
    text-decoration: none;
  }

  .profile-container a:hover {
    text-decoration: underline;
  }

  hr {
    border: none;
    border-top: 1px solid #444;
    margin: 20px 0;
  }

  h1, h2, h3 {
    text-align: center;
  }

  /* Animated Icons */
  .icon-spin {
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  /* Music Player Styling */
  #music-controls {
    text-align: center;
    margin-bottom: 20px;
  }

  #music-controls button {
    background-color: #00bfff;
    color: #000;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }
</style>

<!-- Profile Content -->
<div class="profile-container">
  <p align="center">
    <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" alt="Agunechemba Ekene Display Picture" width="120" style="border-radius:50%;">
  </p>

  <h1 style="color:#00bfff;">
    <i class="fas fa-laptop-code icon-spin"></i> About Me
  </h1>
  <h3 style="color:#ffa500;">🙌 The Celebrated Tech Trainer</h3>

  <!-- Music Player -->
  <div id="music-controls">
    <audio id="bg-music" autoplay loop>
      <source src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" type="audio/mp3">
      Your browser does not support the audio tag.
    </audio>
    <button onclick="toggleMusic()">🎵 Toggle Music</button>
  </div>

  <hr>

  <p>
    For <strong>15+ years</strong>, I've loved igniting coding passion in young minds worldwide — teaching online to students across <strong>Nigeria, the UK, and the US</strong>, and running exciting competitions in Lagos.
  </p>

  <p>
    I also handle <strong>web administration</strong> and have hosted sites like <em>surepath.ng, clasamenergy.com, clasamschools.com</em>, while managing <strong>business email hosting</strong> for various clients.
  </p>

  <p>
    I love sharing tech tips and tricks in my <a href="#my-blog">blog</a>.
  </p>

  <p>
    Right now, I'm having a ton of fun <a href="#my-blog">blogging</a>, training, and teaching computer programming at 
    <a href="https://clasamschools.com/" target="_blank">Clasam Schools</a>.
  </p>

  <p style="font-style:italic;">I am basically building the future, one line of code at a time!</p>

  <hr>

  <h2 style="color:#ff6347;"><i class="fas fa-code icon-spin"></i> My Expertise</h2>
  <ul>
    <li><strong>Web development:</strong> HTML, CSS, JavaScript</li>
    <li><strong>Programming:</strong> Python, JavaScript</li>
    <li><strong>Robotics:</strong> Arduino, C++, Python</li>
  </ul>

  <hr>

  <h2 style="color:#00ff99;"><i class="fas fa-handshake icon-spin"></i> Let's Connect</h2>
  <ul>
    <li>📞 Call Me: <a href="tel:+2349066115252">+234-90-6611-5252</a></li>
    <li>💬 WhatsApp: <a href="https://wa.link/qyy63j">+234-90-6611-5252</a></li>
    <li>📧 Email: <a href="mailto:agunechemba@yahoo.com">agunechemba@yahoo.com</a></li>
  </ul>
</div>

<!-- Music Toggle Script -->
<script>
  function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
</script>



---



<a id="my-blog"></a>
## Recent Blogs &#x1F447; &#x1F447; &#x1F447; &#x1F447;
