# 🎯 How to Set a Facebook Preview Image for Your Website

![Agunechemba Ekene](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/a-man-sharing-a-facebook-post-on-a-wide-screen-.jpeg)

Want to make your website look clean and clickable when shared on Facebook? Here’s how to set that *preview image* (you know, the image + title + description that pops up in the link preview). Best part? It’s super simple if you're working with plain ol' HTML.

## 🧠 Step-by-step Guide

1. **Open your HTML file** (usually `index.html`).
2. In the `<head>...</head>` section, drop in these Open Graph meta tags:

```
<!-- Facebook / Open Graph -->
<meta property="og:title" content="Your Website Title" />
<meta property="og:description" content="A short description of your page." />
<meta property="og:image" content="https://yourdomain.com/path-to-image.jpg" />
<meta property="og:url" content="https://yourdomain.com/this-page" />
<meta property="og:type" content="website" />
```

## ✅ Real-Life Example

```
<head>
  <meta charset="UTF-8" />
  <title>Agunechemba – Celebrated Tech Trainer</title>

  <!-- Facebook Open Graph -->
  <meta property="og:title" content="Agunechemba – Celebrated Tech Trainer" />
  <meta property="og:description" content="Meet the genius behind Firstac Academy and Pepe Programming Hub." />
  <meta property="og:image" content="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/transparent-logo-150x150-1.png" />
  <meta property="og:url" content="https://agunechemba.github.io/" />
  <meta property="og:type" content="website" />
</head>
```

## 🎁 Bonus (Optional)

If you’re using Facebook login or Insights, toss in your App ID too:

```html
<meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
```

## 🧪 Final Step: Test It

Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to see what Facebook pulls. Hit “Scrape Again” if it doesn’t show your updates right away.

---

**Boom!** Your website’s Facebook preview is now custom, clean, and clickable.


