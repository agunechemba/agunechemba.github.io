/* =========================================================
   AGUNECHEMBA — TECH BLOG
   app.js
   ========================================================= */

const postsEl   = document.getElementById("posts");
const filtersEl = document.getElementById("filters");
const headerEl  = document.getElementById("header");
const listView  = document.getElementById("list-view");
const postView  = document.getElementById("post-view");

const BASE_TITLE = "Agunechemba — Tech Blog";

let POSTS    = [];
let SORTED   = [];
let ALL_TAGS = [];
let activeTag = "all";

/* The slug currently being viewed — used to cancel stale fetches. */
let currentSlug = null;

/* Cache of already-fetched post bodies so back/forward is instant. */
const bodyCache = new Map();

/* =========================================================
   Helpers
   ========================================================= */
const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });

/* Nigeria Standard Time: WAT = UTC+1, no daylight saving. */
const WAT_OFFSET_MS = 60 * 60 * 1000;

/* A post goes live at 00:00 WAT on its publication date.
   Computed in UTC so every reader — Lagos, London, Sydney —
   sees it appear at exactly the same real-world instant. */
function isPublished(post, now = new Date()) {
  const [y, m, d] = String(post.date).split("-").map(Number);
  if (!y || !m || !d) return true; // fail open on malformed dates
  const publishAtMs = Date.UTC(y, m - 1, d) - WAT_OFFSET_MS;
  return now.getTime() >= publishAtMs;
}

/* =========================================================
   Data loading
   ========================================================= */
async function loadPosts() {
  const response = await fetch("posts.json");
  if (!response.ok) {
    throw new Error("Failed to load posts.json — HTTP " + response.status);
  }
  const all = await response.json();

  /* Filter out future-dated posts BEFORE deriving SORTED / ALL_TAGS.
     Because every downstream consumer (list, chips, router, prev/next)
     reads from POSTS or SORTED, nothing else needs to know about dates. */
  POSTS = all.filter((p) => isPublished(p));

  SORTED   = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  ALL_TAGS = [...new Set(POSTS.flatMap((p) => p.tags))].sort();
}

/* =========================================================
   Post body fetching
   Each post is a standalone HTML file under posts/<slug>.html.
   We parse it with DOMParser and extract the <article> inside,
   so the site chrome stays separate from the content.
   ========================================================= */
async function fetchPostBody(slug) {
  if (bodyCache.has(slug)) return bodyCache.get(slug);

  const res = await fetch("posts/" + encodeURIComponent(slug) + ".html");
  if (!res.ok) throw new Error("Failed to load post: HTTP " + res.status);

  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const article =
    doc.querySelector("article.article__body") ||
    doc.querySelector("article") ||
    doc.body;

  const inner = article.innerHTML;
  bodyCache.set(slug, inner);
  return inner;
}

/* =========================================================
   List view
   ========================================================= */
function renderFilters() {
  const chips = ["all", ...ALL_TAGS];
  filtersEl.innerHTML = chips
    .map(
      (tag) => `
      <button class="chip${tag === activeTag ? " is-active" : ""}"
              type="button"
              data-tag="${esc(tag)}"
              aria-pressed="${tag === activeTag}">
        ${tag === "all" ? "All posts" : esc(tag)}
      </button>`
    )
    .join("");
}

function renderPosts() {
  const list = SORTED.filter(
    (p) => activeTag === "all" || p.tags.includes(activeTag)
  );

  if (list.length === 0) {
    postsEl.innerHTML = `<p class="empty">No posts filed under “${esc(activeTag)}” yet.</p>`;
    return;
  }

  postsEl.innerHTML = list
    .map((p, i) => {
      const featured = activeTag === "all" && i === 0;
      const badge = featured ? `<span class="badge">Latest</span>` : "";
      const href = "#/post/" + encodeURIComponent(p.slug);

      return `
        <article class="card${featured ? " card--featured" : ""}"
                 style="animation-delay:${Math.min(i * 60, 420)}ms">
          <div class="card__meta">
            <time datetime="${esc(p.date)}">${formatDate(p.date)}</time>
            <span class="sep">•</span>
            <span>${p.readTime} min read</span>
            ${badge}
          </div>

          <h2 class="card__title">
            <a class="card__link" href="${href}">${esc(p.title)}</a>
          </h2>

          <p class="card__excerpt">${esc(p.excerpt)}</p>

          <ul class="card__tags">
            ${p.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}
          </ul>
        </article>`;
    })
    .join("");
}

/* =========================================================
   Single post view
   ========================================================= */
function neighbors(post) {
  const i = SORTED.findIndex((p) => p.slug === post.slug);
  return {
    newer: SORTED[i - 1] || null,
    older: SORTED[i + 1] || null
  };
}

function postNavLink(post, kind) {
  if (!post) return `<span></span>`;
  const label = kind === "newer" ? "← Newer post" : "Older post →";
  const href = "#/post/" + encodeURIComponent(post.slug);
  return `
    <a class="postnav__link postnav__link--${kind}" href="${href}">
      <span class="postnav__label">${label}</span>
      <span class="postnav__title">${esc(post.title)}</span>
    </a>`;
}

async function showPost(post) {
  currentSlug = post.slug;
  const { newer, older } = neighbors(post);

  /* Render the chrome immediately with a loading placeholder,
     then swap in the body once the file is fetched. */
  postView.innerHTML = `
    <a class="article__back" href="#/">← All posts</a>

    <div class="card__meta">
      <time datetime="${esc(post.date)}">${formatDate(post.date)}</time>
      <span class="sep">•</span>
      <span>${post.readTime} min read</span>
    </div>

    <h1 class="article__title">${esc(post.title)}</h1>

    <ul class="article__tags">
      ${post.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}
    </ul>

    <div class="article__body"><p class="post-loading">Loading…</p></div>

    <nav class="postnav" aria-label="More posts">
      ${postNavLink(newer, "newer")}
      ${postNavLink(older, "older")}
    </nav>
  `;

  listView.hidden = true;
  postView.hidden = false;
  document.title = post.title + " — Agunechemba";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  try {
    const body = await fetchPostBody(post.slug);
    /* If the user navigated away while we were fetching, drop it. */
    if (currentSlug !== post.slug) return;
    const el = postView.querySelector(".article__body");
    if (el) el.innerHTML = body;
  } catch (err) {
    if (currentSlug !== post.slug) return;
    console.error(err);
    const el = postView.querySelector(".article__body");
    if (el) {
      el.innerHTML = `<p class="empty">Could not load this post. Make sure
        <code>posts/${esc(post.slug)}.html</code> exists.</p>`;
    }
  }
}

function showList() {
  currentSlug = null;
  postView.hidden = true;
  postView.innerHTML = "";
  listView.hidden = false;
  document.title = BASE_TITLE;
}

/* =========================================================
   Router
   ========================================================= */
function router() {
  if (POSTS.length === 0) return;

  const hash = location.hash || "#/";
  const match = hash.match(/^#\/post\/([^/?#]+)/);

  if (match) {
    const slug = decodeURIComponent(match[1]);
    const post = POSTS.find((p) => p.slug === slug);
    if (post) {
      showPost(post);
      return;
    }
  }

  showList();
}

/* =========================================================
   Events
   ========================================================= */
filtersEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeTag = chip.dataset.tag;
  renderFilters();
  renderPosts();
});

window.addEventListener("hashchange", router);

const onScroll = () =>
  headerEl.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });

/* =========================================================
   Boot
   ========================================================= */
async function init() {
  document.getElementById("year").textContent = new Date().getFullYear();

  try {
    await loadPosts();
    renderFilters();
    renderPosts();
    router();
  } catch (error) {
    console.error(error);
    postsEl.innerHTML = `
      <p class="empty">
        Could not load posts. Make sure <code>posts.json</code> and the
        <code>posts/</code> folder are served from the same origin
        (use a local server, not <code>file://</code>).
      </p>`;
  }

  onScroll();
}

init();
