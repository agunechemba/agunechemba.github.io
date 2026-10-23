<!--Start Style for find button -->
<style>
  mark.find-hit { background: #ffe066; color: inherit; }
  mark.find-hit.current { background: #ff9f1c; }
</style>
<!-- End Style for find button -->

<div style="max-width: 400px; width: 90%; margin: 0 auto; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333;">

<!-- Profile Image & Tagline -->
<div style="display: inline-block; width: 150px;">
  <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/09/agunechemba-ekene-dp-small.png" 
       alt="Agunechemba"
       style="width: 100%; height: auto; aspect-ratio: 1 / 1.15; border-radius: 0 0 35px 35px; object-fit: cover; object-position: top; display: block; margin-top: -15px; margin-bottom: 10px;">
</div>

  <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;">

  <!-- Main Content -->
<div style="font-size: 16px; margin-bottom: 25px;">
    <div style="margin-bottom: 4px;">Founder:<a href="https://pph.name.ng/" target="_blank" style="color: inherit; text-decoration: none;">
        <b>Prime Programmers Hub</b> &#x2197;
    </a>
</div>
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
</div>

<!-- Start Call Back Form -->
<div class="callback-container">
<h3 class="form-title">Request Call Back</h3>
<form id="callbackForm">
    <input type="text" name="name" placeholder="First Name" required class="book-input">
    <input type="email" name="email" placeholder="Email" required class="book-input">
    <input type="tel" name="whatsapp" placeholder="WhatsApp (phone number)" required class="book-input" minlength="7" />
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






<!-- Start Find-in-page UI -->
<button id="findBtn" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;
  padding: 10px 16px; border: 1px solid #ccc; border-radius: 24px; background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,.15); cursor: pointer; font: 14px system-ui, sans-serif;">
  🔍 Find
</button>

<div id="findBox" style="display: none; position: fixed; bottom: 70px; right: 20px;
  z-index: 9999; background: #fff; padding: 8px; border: 1px solid #ccc; border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,.15); font: 14px system-ui, sans-serif;
  gap: 6px; align-items: center;">
  <input id="findInput" placeholder="Find…" style="padding: 5px 8px; border: 1px solid #ccc; border-radius: 4px; width: 150px;">
  <span id="findCount" style="min-width: 40px; text-align: center; color: #666;">0/0</span>
  <button id="findPrev"  style="padding: 4px 8px; cursor: pointer;">↑</button>
  <button id="findNext"  style="padding: 4px 8px; cursor: pointer;">↓</button>
  <button id="findClose" style="padding: 4px 8px; cursor: pointer;">✕</button>
</div>

<script>
(function () {
  const root    = document.body;
  const btn     = document.getElementById('findBtn');
  const box     = document.getElementById('findBox');
  const input   = document.getElementById('findInput');
  const countEl = document.getElementById('findCount');
  let hits = [], idx = -1;

  function clearHits() {
    root.querySelectorAll('mark.find-hit').forEach(m => m.replaceWith(m.textContent));
    root.normalize();
    hits = []; idx = -1;
  }

  function updateCount() {
    countEl.textContent = hits.length ? (idx + 1) + '/' + hits.length : '0/0';
  }

  function focusHit() {
    hits.forEach(h => h.classList.remove('current'));
    if (idx < 0) return;
    hits[idx].classList.add('current');
    hits[idx].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function highlight(q) {
    clearHits();
    q = q.trim().toLowerCase();
    if (!q) { updateCount(); return; }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(node.parentNode.nodeName))
          return NodeFilter.FILTER_REJECT;
        if (node.parentNode.closest('#findBtn, #findBox'))
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const text = node.nodeValue, lower = text.toLowerCase();
      let from = 0, at, frag;
      while ((at = lower.indexOf(q, from)) !== -1) {
        if (!frag) frag = document.createDocumentFragment();
        if (at > from) frag.appendChild(document.createTextNode(text.slice(from, at)));
        const m = document.createElement('mark');
        m.className = 'find-hit';
        m.textContent = text.slice(at, at + q.length);
        frag.appendChild(m);
        from = at + q.length;
      }
      if (frag) {
        if (from < text.length) frag.appendChild(document.createTextNode(text.slice(from)));
        node.parentNode.replaceChild(frag, node);
      }
    });

    hits = [...root.querySelectorAll('mark.find-hit')];
    idx = hits.length ? 0 : -1;
    updateCount();
    focusHit();
  }

  function step(d) {
    if (!hits.length) return;
    idx = (idx + d + hits.length) % hits.length;
    updateCount();
    focusHit();
  }

  function open() {
    box.style.display = 'flex';
    input.focus(); input.select();
    if (input.value) highlight(input.value);
  }
  function close() {
    box.style.display = 'none';
    clearHits(); updateCount();
  }

  btn.onclick  = () => box.style.display === 'flex' ? close() : open();
  document.getElementById('findPrev').onclick  = () => step(-1);
  document.getElementById('findNext').onclick  = () => step(1);
  document.getElementById('findClose').onclick = close;
  input.oninput = () => highlight(input.value);
  input.onkeydown = e => {
    if (e.key === 'Enter')  { e.preventDefault(); step(e.shiftKey ? -1 : 1); }
    if (e.key === 'Escape') { e.preventDefault(); close(); }
  };

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
      e.preventDefault();
      open();
    }
  });
})();
</script>
