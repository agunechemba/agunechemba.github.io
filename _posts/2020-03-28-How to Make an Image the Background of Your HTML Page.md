# 🌄 How to Set an Image as the Background of an HTML Page (Step-by-Step)

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/an_art_background_with_different_colors.jpeg" alt="Art background with different colors" style="width: 100%;" />


Adding a background image makes your page visually appealing. Let's walk through two simple ways to do it.

---

## 🧰 What You Need

* A computer with any code editor (e.g., Sublime Text, Notepad++)
* An image file (e.g., `bg.jpg`)
* A browser (e.g., Chrome)

---

## 📁 Step 1: Create Your Project Folder

Create a folder for your project. Example:

```
background-tutorial/
├── index.html
└── images/
    └── bg.jpg
```

> 💡 Put your background image (`bg.jpg`) inside the `images` folder.

---

# ✅ Method 1: Using Inline CSS

### 🔧 Step-by-Step

### 1. Create the HTML File

Create `index.html` and open it in your editor.

### 2. Add This Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Inline Background</title>
</head>
<body style="
  background-image: url('images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;">
</body>
</html>
```

### 3. Save the File

Press `Ctrl + S` to save.

### 4. Open in Browser

Double-click `index.html` or open it in your browser. You should see your image covering the entire background!

---

# ✅ Method 2: Using a `<style>` Block

This method is neater and better for real projects.

### 🔧 Step-by-Step

### 1. Create the Same HTML File

Open `index.html` again or make a new one.

### 2. Use This Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Style Block Background</title>
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

### 3. Save and View

Again, save and open the file in your browser. You’ll see the same full-page background image.

---

# 🔍 Explanation of the CSS Properties

| Property                       | What It Does                         |
| ------------------------------ | ------------------------------------ |
| `background-image`             | Loads the image                      |
| `background-size: cover`       | Makes the image cover the whole page |
| `background-position: center`  | Centers the image                    |
| `background-repeat: no-repeat` | Stops the image from repeating       |
| `height: 100vh`                | Makes body full screen height        |
| `margin: 0`                    | Removes default spacing              |

---

# 🧪 Practice Questions

1. Change the background image to `sunset.jpg`.
2. Update the file path to `assets/pics/bg.jpg`. Fix the `url()`.
3. What happens if you set `background-repeat: repeat;`?
4. Add a `<h1>` inside `<body>` and check how it looks on top of the background.
