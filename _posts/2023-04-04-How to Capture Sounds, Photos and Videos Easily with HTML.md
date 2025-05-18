## 🎙📸🎥 Capture Sounds, Photos & Videos with HTML

![media capture with HTML](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/02/pepe-edited.png)

The HTML **`capture`** attribute lets users record new media—photos, videos, or audio—using their device’s camera or mic, instead of selecting an existing file. It's especially useful on **mobile devices**.

---

### ⚙️ How It Works

Use the `capture` attribute with:

```html
<input type="file" capture accept="media-type/*">
```

✅ Combined with the `accept` attribute, it lets users:

* Record new media using their camera or microphone
* Choose between capturing new media or uploading existing files

---

### 📲 Capture Settings

Use these values for the `capture` attribute:

1. **`user`** – Front-facing camera or mic (great for selfies or voice)
2. **`environment`** – Back-facing camera (for surroundings or landscape shots)

---

### 🧪 Examples

#### 🎤 Record Audio

```html
<input type="file" capture="user" accept="audio/*">
```

➡️ Opens mic for voice recording.

---

#### 📷 Take a Photo

```html
<input type="file" capture="user" accept="image/*">
```

➡️ Opens front camera for selfies.

---

#### 🎬 Record Video

```html
<input type="file" capture="environment" accept="video/*">
```

➡️ Opens back camera for videos.

---

### 🛠️ When to Use

Perfect for:

* **Forms** needing image/audio/video input
* **Surveys** with real-time responses
* **Mobile apps** that need media uploads

---

### 📌 Notes

* Best on **phones or tablets**
* On desktops, it may open the **file picker** instead

---

### 🔗 Conclusion

### Try the demo 👉 [Example Code](https://onecompiler.com/html/432zrtaea)

The `capture` attribute adds a smooth, interactive media upload experience to your HTML forms. Give it a go!

