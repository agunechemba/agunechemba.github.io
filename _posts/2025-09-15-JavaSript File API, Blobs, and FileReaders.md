# JavaSript File API, Blobs, and FileReaders: A Comprehensive Explanation

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/javascript-file-handling-infographic_simple_compose.jpg" width="100%">

Imagine you’re building a modern web app—maybe something like Google Drive, or even just a profile picture uploader for a social media site. For this, your app needs to **interact with files**: read them, process them, and sometimes store them. Traditionally, JavaScript inside the browser couldn’t directly touch your file system. But with the introduction of the **File API**, things changed.

This chapter focuses on three core building blocks:

1. **File API** – for accessing user-selected files.
2. **Blobs** – for representing raw binary data.
3. **FileReader** – for reading the contents of files or blobs.

---

### 1. **The File API**

The **File API** allows JavaScript to interact with files, typically those provided by the user through an `<input type="file">` element or drag-and-drop operations.

Key points:

* The browser doesn’t let you roam the user’s computer for files (for security reasons). Instead, the user must **select** files.
* When a file is selected, JavaScript gets a `File` object. This object contains:

  * `name` → the filename.
  * `size` → size in bytes.
  * `type` → MIME type (e.g., `"image/png"` or `"text/plain"`).
  * `lastModified` → timestamp of last modification.

Example:

```
<input type="file" id="fileInput">
<script>
  document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    console.log("Name:", file.name);
    console.log("Size:", file.size);
    console.log("Type:", file.type);
  });
</script>
```

Here, once you pick a file, its details are logged without actually uploading it.

---

### 2. **Blobs**

A **Blob** (Binary Large Object) is essentially a “chunk” of raw data. Think of it as a file-like object that holds immutable raw data.

* You can create a blob directly in JavaScript:

```
const blob = new Blob(["Hello World"], { type: "text/plain" });
```

* Blobs can be used for:

  * Storing text.
  * Storing images or binary data.
  * Sending data with AJAX or `fetch()`.
  * Creating downloadable links dynamically.

Example of downloading a blob:

```
const text = "This is a test file.";
const blob = new Blob([text], { type: "text/plain" });

const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "example.txt";
link.click();
```

👉 This creates a fake file on the fly and lets the user download it.

---

### 3. **FileReader**

Once you have a file (from input) or a blob, you often want to **read its contents**. This is where the `FileReader` object comes in.

`FileReader` has several methods:

* `readAsText(file)` → Reads file as plain text.
* `readAsDataURL(file)` → Reads file and encodes it as a Base64 Data URL (useful for images).
* `readAsArrayBuffer(file)` → Reads raw binary data.

Example – Reading text file:

```
const input = document.querySelector("#fileInput");
input.addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    console.log("File content:", e.target.result);
  };

  reader.readAsText(file);
});
```

Example – Displaying an image before upload:

```
<input type="file" id="imageInput">
<img id="preview" />

<script>
  document.getElementById("imageInput").addEventListener("change", function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      document.getElementById("preview").src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
</script>
```

👉 This lets users preview images before sending them to a server.

---

### 4. **Practical Applications**

* **Preview images** before uploading (profile picture apps).
* **Read CSV or text files** locally for processing.
* **Create and download files dynamically**.
* **Work with binary data** (e.g., audio, video processing).

---

## **In Summary**

* The **File API** gives us `File` objects from user input.
* **Blobs** represent chunks of raw data that can be created or downloaded.
* **FileReader** helps us read file/blob content in various formats (text, data URLs, binary).

With these three, web apps can handle local files smoothly without relying on server uploads.

---

## ✅ Review – Fill in the Gaps

1. The **File API** allows JavaScript to interact with files chosen by the \_\_\_\_\_\_\_.
2. A `File` object contains details such as name, size, type, and \_\_\_\_\_\_\_.
3. A \_\_\_\_\_\_\_ is a file-like object of immutable raw data.
4. The `Blob` constructor accepts an array of data and an optional \_\_\_\_\_\_\_ type.
5. To create a downloadable file from JavaScript, we use `URL.createObjectURL()` with a \_\_\_\_\_\_\_.
6. The `FileReader` method used to read text files is \_\_\_\_\_\_\_.
7. The `FileReader` method used to preview images is \_\_\_\_\_\_\_.
8. `readAsArrayBuffer()` is useful for working with \_\_\_\_\_\_\_ data.
9. The browser prevents direct file access for security reasons; the user must first \_\_\_\_\_\_\_ a file.
10. To preview an image before uploading, we can read it as a \_\_\_\_\_\_\_ URL.