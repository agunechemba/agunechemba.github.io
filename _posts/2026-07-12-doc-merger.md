# Doc Merger: Streamline Your Workflow; Merge Google Sheets Data into a Single Google Doc

<img src="" width="100%">

We’ve all been there: you have a Google Sheet packed with data—invoices, student reports, event attendees, or inventory logs—and you need to transform that data into cleanly formatted documents.

Tools like AutoCrat are fantastic for this, but they usually leave you with one massive headache: **hundreds of individual files cluttering your Google Drive.**

If you've been looking for a way to compile *all* your rows into a **single, organized master document** with clean page breaks, you’re in the right place. In this guide, we'll walk you through exactly how to use our free, open-source **Document Merger** web app to automate your paperwork in seconds.

---

## Why Use This App?

* **One Master File:** Say goodbye to digging through folders. All your data entries are compiled sequentially into a single document.
* **Preserves Layouts:** Your tables, custom fonts, bold headers, and text formatting from your template stay perfectly intact.
* **100% Free & Private:** The app runs entirely within the static security framework of GitHub Pages and your own Google account. No third-party servers see your data.

---

## Step 1: Prepare Your Google Sheet Data

First, let's make sure your data source is ready.

1. Open your Google Sheet.
2. Make sure the **very first row** contains your clear column headers (e.g., `First Name`, `Job Title`, `Enrollment Date`).
3. Fill out your data rows beneath the headers.
4. **Crucial Step:** Click the **Share** button in the top right, change the General Access setting to **"Anyone with the link can view"**, and copy the Sheet's URL.

---

## Step 2: Design Your Google Doc Template

Next, you need to create the visual layout that your data will fill.

1. Open a new Google Doc and design it exactly how you want a single entry to look. You can add tables, headers, bullet points, and logos.
2. Wherever you want your spreadsheet data to dynamically appear, use **double angle brackets** enclosing the exact column header name.
> *Example:* "Hello `<<First Name>>`, welcome to your onboarding portal assigned on `<<Enrollment Date>>`."


3. **Crucial Step:** Click **Share**, change the General Access setting to **"Anyone with the link can view"**, and copy the Template's URL.

---

## Step 3: Run the Merge!

Now for the magic part.

1. Head over to our [Document Merger Hub](https://agunechemba.name.ng/docx-generator/).
2. Paste your copied **Google Sheet Data URL** into the first field.
3. Paste your copied **Google Doc Template URL** into the second field.
4. Click the blue **Execute Compilation** button.

---

## What Happens Behind the Scenes?

Once you hit execute, our automation engine takes over:

1. It reads your sheet headers and loops through every data row.
2. It generates a master document in your Drive (right next to your template file).
3. It maps each row to your template layout, strips out the `<<tags>>`, swaps in your real data, and smoothly drops a **page break** before starting the next row.

When the loading wheel stops spinning, a green success box will pop up with a button labeled **"Open Master Document File."** Click it, and enjoy your perfectly organized, completely compiled report!

---

### 🛠️ Troubleshooting Checklist

If you encounter a generic network error message, don't panic! It almost always comes down to a quick permission tweak:

* **Did you forget to share the files?** Double-check that *both* your Sheet and your Doc template are set to "Anyone with the link can view."
* **Are your tags an exact match?** Remember that `<<First Name>>` is case-sensitive. If your sheet says `First name` with a lowercase "n", the app won't recognize the tag!

---

### Have questions or want to see new features added to the merger hub? Email: *mr.agunechemba@gmail.com*

---
