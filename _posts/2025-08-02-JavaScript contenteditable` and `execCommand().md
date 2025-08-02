# 📝 JavaScript contenteditable` and `execCommand(): How to Build a Mini Text Editor.

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/typist-cat.jpg" width="100%">

Imagine building your own basic **text editor** right inside a web page—where users can type, highlight, and style text using buttons like **bold**, **italic**, or even **insert a link**.

To achieve this, HTML gives us `contenteditable`, and JavaScript gives us `document.execCommand()`.

Let’s look at both.

---

## ✨ `contenteditable`: Making Elements Editable

`contenteditable` is a super cool HTML attribute that turns **any HTML element into a mini editor**.

```
<div contenteditable="true">You can edit this text directly!</div>
```

That’s all it takes! Now that `<div>` becomes a rich text box. The user can click, type, and edit just like in Word or Google Docs.

---

## 🧙‍♂️ `execCommand()`: Applying Formatting Commands

Now you might be thinking, “But how do I make text bold or change alignment?”

Enter `document.execCommand()`.

Here’s how it works:

```
document.execCommand("bold");
```

This will **bold** the currently selected text inside a `contenteditable` element. You can also do:

```
document.execCommand("italic");
document.execCommand("underline");
document.execCommand("insertText", false, "Hello, Ekene!");
```

---

### 🛠 Sample Mini Text Editor

Let’s build a simple demo.

```
<div contenteditable="true" id="editor">
  Type something here...
</div>

<button onclick="document.execCommand('bold')">Bold</button>
<button onclick="document.execCommand('italic')">Italic</button>
<button onclick="document.execCommand('underline')">Underline</button>
```

Each button applies a formatting style to the selected text. **Simple and intuitive!**

---

## 🧪 Common Commands You Can Use

| Command         | What it does                |
| --------------- | --------------------------- |
| `bold`          | Toggles bold formatting     |
| `italic`        | Toggles italic formatting   |
| `underline`     | Toggles underline           |
| `insertText`    | Inserts text at the cursor  |
| `createLink`    | Turns text into a hyperlink |
| `justifyCenter` | Centers the paragraph       |
| `foreColor`     | Changes the text color      |
| `hiliteColor`   | Changes background color    |

Here’s how you create a link:

```
document.execCommand('createLink', false, 'https://firstac.com');
```

Just make sure the user has selected some text before running this command.

---

## ⚠️ Heads Up: `execCommand()` is Deprecated!

As cool as this API is, it’s **deprecated in most browsers**—which means it may be removed in future versions. It still works, but if you're building production-level editors, consider using libraries like:

* [Quill.js](https://quilljs.com)
* [TinyMCE](https://www.tiny.cloud)
* [CKEditor](https://ckeditor.com)

---

## ✅ Review and Practice Questions

1. **What does `contenteditable="true"` do in an HTML element?**
2. **How would you make the selected text italic using JavaScript?**
3. **Create a `contenteditable` paragraph and two buttons: one to bold text and another to underline it.**
4. **Why is `execCommand()` considered deprecated, and what are some modern alternatives?**
5. **What happens if you call `execCommand("createLink")` without selecting any text?**
