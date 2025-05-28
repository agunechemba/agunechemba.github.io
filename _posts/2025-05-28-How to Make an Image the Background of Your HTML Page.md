# 🌄 How to Make an Image the Background of Your HTML Page

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/an_art_background_with_different_colors.jpeg" alt="Art background with different colors" style="width: 100%;" />


Want to give your website a cool look with a background image? Here’s how to do it in **two simple ways** using HTML and CSS.

---

## ✅ What You'll Learn

* How to set a background image using inline CSS.
* How to do the same with a `<style>` block.

---

## 🧪 1. Using Inline CSS in the `<body>` Tag

Here’s the quickest way:

```html
<body style="
  background-image: url('images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;">
</body>
```

### 🔍 Explanation:

* **`background-image`**: sets your image.
* **`background-size: cover`**: makes the image cover the whole page.
* **`background-position: center`**: keeps the image centered.
* **`background-repeat: no-repeat`**: prevents the image from repeating.
* **`height: 100vh`**: full screen height.
* **`margin: 0`**: removes default space.

---

## 🧱 2. Using a `<style>` Block (Cleaner Method)

This method is neater, especially for larger projects:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Background Image</title>
  <style>
    body {
      background-image: url('images/bg.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      margin: 0;
    }
  </style>
</head>
<body>
</body>
</html>
```

---

## 🖼️ Tip: Where to Put Your Image

* Create a folder called `images`.
* Put your image inside it.
* Update the path in `url('images/bg.jpg')` to match your file.

---

## 🎯 Final Thoughts

Both methods work. Use **inline CSS** for quick demos. For real projects, go with the **style block** or even better, an **external CSS file**.

Want to try it? Create an HTML file and copy-paste the code above.